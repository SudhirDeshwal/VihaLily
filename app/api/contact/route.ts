import { NextResponse } from 'next/server';

// Use the public /macros/s/.../exec URL
const APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxQkE22Rhjl_EXRx6siKe8dABEGNO4EtTDSvpfnXE43ueQ772IJGNzjHCY2GR_kHOge/exec';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Send JSON to match doPost(e) JSON.parse(e.postData.contents)
    const upstream = await fetch(APPS_SCRIPT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data || {}),
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
