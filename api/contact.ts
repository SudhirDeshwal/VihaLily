// api/contact.ts — Vercel Serverless Function (works even with static export)
import type { VercelRequest, VercelResponse } from '@vercel/node';

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*', // change to your domain if needed
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function setCors(res: VercelResponse) {
  for (const [k, v] of Object.entries(corsHeaders)) res.setHeader(k, v);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const APPS_SCRIPT_ENDPOINT = process.env.CONTACT_APPS_SCRIPT_URL;
  if (!APPS_SCRIPT_ENDPOINT) {
    return res.status(500).json({ ok: false, error: 'CONTACT_APPS_SCRIPT_URL not set' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});

    // Anti-bot checks
    const hp = (data?.hp ?? '').toString().trim();
    const t = Number(data?.t ?? 0);
    if (hp) return res.status(400).json({ ok: false, error: 'bot_detected' });
    if (!Number.isFinite(t) || t < 1500) return res.status(400).json({ ok: false, error: 'too_fast' });

    const { hp: _hp, t: _t, ...clean } = data || {};

    const upstream = await fetch(APPS_SCRIPT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clean || {}),
      redirect: 'manual',
    });

    if (upstream.status >= 300 && upstream.status < 400) {
      const loc = upstream.headers.get('location') || '';
      const isLogin = /accounts\.google\.com|ServiceLogin/i.test(loc);
      if (isLogin) {
        return res.status(401).json({
          ok: false,
          error: 'apps_script_auth_redirect',
          message: 'In Apps Script, set Execute as: Me and Who has access: Anyone, then redeploy /exec.',
          location: loc,
        });
      }
      return res.status(200).json({ ok: true, redirected: true, location: loc });
    }

    const text = await upstream.text().catch(() => '');
    if (!upstream.ok) {
      return res.status(502).json({ ok: false, status: upstream.status, body: text });
    }

    let parsed: any = null;
    try { parsed = JSON.parse(text); } catch {}
    const ok = parsed?.result === 'success' || !!text;
    return res.status(200).json({ ok, body: text, parsed });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || 'proxy_error' });
  }
}

