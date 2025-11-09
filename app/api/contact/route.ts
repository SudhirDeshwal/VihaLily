import { NextResponse } from 'next/server';

// Read endpoint from env (configure in Vercel)
const APPS_SCRIPT_ENDPOINT = process.env.CONTACT_APPS_SCRIPT_URL;

export async function POST(req: Request) {
  try {
    if (!APPS_SCRIPT_ENDPOINT) {
      return NextResponse.json(
        { ok: false, error: 'CONTACT_APPS_SCRIPT_URL not set' },
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

    // Strip meta fields before forwarding
    const { hp: _hp, t: _t, ...clean } = data || {};

    // Send JSON to match doPost(e) JSON.parse(e.postData.contents)
    const upstream = await fetch(APPS_SCRIPT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clean || {}),
      redirect: 'follow',
    });

    const text = await upstream.text().catch(() => '');

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, status: upstream.status, body: text },
        { status: 502 }
      );
    }

    // Try to parse JSON success from Apps Script
    let parsed: any = null;
    try { parsed = JSON.parse(text); } catch {}
    const ok = parsed?.result === 'success' || !!text;

    return NextResponse.json({ ok, body: text, parsed });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: 'Proxy error', details: (err as Error)?.message },
      { status: 500 }
    );
  }
}
