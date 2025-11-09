// Ensure this route is always treated as dynamic and runs on Node.js
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*', // change to your domain if needed
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function withCors(init?: ResponseInit): ResponseInit {
  return {
    ...(init || {}),
    headers: {
      ...(init?.headers || {}),
      ...corsHeaders,
    },
  } as ResponseInit;
}

export async function OPTIONS() {
  return new Response(null, withCors({ status: 204 }));
}

export async function POST(req: Request) {
  const APPS_SCRIPT_ENDPOINT = process.env.CONTACT_APPS_SCRIPT_URL;
  if (!APPS_SCRIPT_ENDPOINT) {
    return Response.json(
      { ok: false, error: 'CONTACT_APPS_SCRIPT_URL not set' },
      withCors({ status: 500 })
    );
  }

  // Parse body as JSON or x-www-form-urlencoded
  const ct = (req.headers.get('content-type') || '').toLowerCase();
  let data: any = {};
  try {
    if (ct.includes('application/json')) {
      data = await req.json().catch(() => ({}));
    } else if (ct.includes('application/x-www-form-urlencoded')) {
      const text = await req.text();
      const params = new URLSearchParams(text);
      data = Object.fromEntries(params.entries());
    } else {
      // Try JSON, then fallback to text/JSON parse
      data = await req.json().catch(async () => {
        const text = await req.text();
        try { return JSON.parse(text); } catch { return {}; }
      });
    }
  } catch {
    data = {};
  }

  // Anti-bot checks
  const hp = (data?.hp ?? '').toString().trim();
  const t = Number(data?.t ?? 0);
  if (hp) return Response.json({ ok: false, error: 'bot_detected' }, withCors({ status: 400 }));
  if (!Number.isFinite(t) || t < 1500) return Response.json({ ok: false, error: 'too_fast' }, withCors({ status: 400 }));

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
      return Response.json(
        {
          ok: false,
          error: 'apps_script_auth_redirect',
          message:
            'In Apps Script, set Execute as: Me and Who has access: Anyone, then redeploy /exec.',
          location: loc,
        },
        withCors({ status: 401 })
      );
    }
    return Response.json({ ok: true, redirected: true, location: loc }, withCors({ status: 200 }));
  }

  const text = await upstream.text().catch(() => '');
  if (!upstream.ok) {
    return Response.json(
      { ok: false, status: upstream.status, body: text },
      withCors({ status: 502 })
    );
  }

  let parsed: any = null;
  try { parsed = JSON.parse(text); } catch {}
  const ok = parsed?.result === 'success' || !!text;
  return Response.json({ ok, body: text, parsed }, withCors({ status: 200 }));
}

