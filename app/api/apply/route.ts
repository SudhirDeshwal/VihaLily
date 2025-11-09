import { NextResponse } from 'next/server';

const APPS_SCRIPT_ENDPOINT = process.env.APPLY_APPS_SCRIPT_URL;

export async function POST(req: Request) {
  try {
    if (!APPS_SCRIPT_ENDPOINT) {
      return NextResponse.json(
        { ok: false, error: 'APPLY_APPS_SCRIPT_URL not set' },
        { status: 500 }
      );
    }
    const data = await req.json();

    // Basic anti-bot checks (honeypot + time-to-submit)
    const hp = (data?.hp ?? '').toString().trim();
    const t = Number(data?.t ?? 0);
    if (hp) {
      return NextResponse.json({ ok: false, error: 'bot_detected' }, { status: 400 });
    }
    if (!Number.isFinite(t) || t < 1500) {
      return NextResponse.json({ ok: false, error: 'too_fast' }, { status: 400 });
    }

    // Map client fields -> Apps Script expected fields
    const payload = {
      first_name: data.firstName ?? '',
      last_name: data.lastName ?? '',
      email: data.email ?? '',
      phone: data.phone ?? '',
      position: data.role ?? '',
      experience_years: data.experience ?? '',
      availability: data.availability ?? '',
      additional_info: data.message ?? '',
      source: data.source ?? '',
    };

    const upstream = await fetch(APPS_SCRIPT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'manual',
    });
    
    // Detect auth redirect (misconfigured Apps Script access)
    if (upstream.status >= 300 && upstream.status < 400) {
      const loc = upstream.headers.get('location') || '';
      return NextResponse.json(
        {
          ok: false,
          error: 'apps_script_auth_redirect',
          message: 'Apps Script requires authentication. In Apps Script, set Execute as: Me and Who has access: Anyone, then redeploy to get a new /exec URL.',
          location: loc,
        },
        { status: 401 }
      );
    }

    const text = await upstream.text().catch(() => '');
    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, status: upstream.status, body: text },
        { status: 502 }
      );
    }

    let parsed: any = null;
    try { parsed = JSON.parse(text); } catch {}
    const ok = parsed?.ok === true || parsed?.result === 'success';

    return NextResponse.json({ ok, body: text, parsed });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: 'Proxy error', details: (err as Error)?.message },
      { status: 500 }
    );
  }
}
