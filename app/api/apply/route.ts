import { NextResponse } from 'next/server';

const APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzNOPpZC3-PBvUWtLDOTJSmfWWn0_FjLC6vU4Y0aTZAhXT0DIx4J4JWbiK18FS7ZYEg/exec';

export async function POST(req: Request) {
  try {
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
      redirect: 'follow',
    });

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
