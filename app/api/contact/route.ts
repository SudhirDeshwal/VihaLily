import { NextResponse } from 'next/server';

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

type TargetKind = 'sheet' | 'email';
type Target = { kind: TargetKind; url: string };

const sheetEndpoint = (process.env.CONTACT_APPS_SCRIPT_URL || '').trim();
const emailEndpoint = (process.env.CONTACT_EMAIL_APPS_SCRIPT_URL || '').trim();

const targets: Target[] = [];
if (sheetEndpoint) targets.push({ kind: 'sheet', url: sheetEndpoint });
if (emailEndpoint && emailEndpoint !== sheetEndpoint)
  targets.push({ kind: 'email', url: emailEndpoint });

function withCors(response: NextResponse) {
  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  return response;
}

function json(data: any, init?: ResponseInit) {
  return withCors(NextResponse.json(data, init));
}

export function OPTIONS() {
  return withCors(new NextResponse(null, { status: 204 }));
}

async function parseRequestBody(req: Request): Promise<Record<string, any>> {
  const contentType = req.headers.get('content-type')?.toLowerCase() ?? '';

  if (contentType.includes('application/json')) {
    try {
      return await req.json();
    } catch {
      return {};
    }
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const raw = await req.text();
    const params = new URLSearchParams(raw);
    const out: Record<string, string> = {};
    params.forEach((value, key) => {
      out[key] = value;
    });
    return out;
  }

  if (contentType.includes('multipart/form-data')) {
    const formData = await req.formData();
    const out: Record<string, any> = {};
    formData.forEach((value, key) => {
      out[key] = typeof value === 'string' ? value : value.name;
    });
    return out;
  }

  const text = await req.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return {};
  }
}

type ForwardResult = {
  kind: TargetKind;
  url: string;
  ok: boolean;
  status: number;
  body?: string;
  parsed?: any;
  redirected?: boolean;
  location?: string;
  error?: string;
  message?: string;
};

function looksLikeGoogleAuth(html: string) {
  const lower = html.toLowerCase();
  return (
    lower.includes('docs.google.com') ||
    lower.includes('accounts.google.com') ||
    lower.includes('sign in')
  );
}

async function forwardToAppsScript(target: Target, payload: Record<string, any>): Promise<ForwardResult> {
  try {
    const upstream = await fetch(target.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload || {}),
      redirect: 'manual',
    });

    if (upstream.status >= 300 && upstream.status < 400) {
      const location = upstream.headers.get('location') || '';
      const isLogin = /accounts\.google\.com|ServiceLogin/i.test(location);
      if (isLogin) {
        return {
          kind: target.kind,
          url: target.url,
          ok: false,
          status: 401,
          redirected: true,
          location,
          error: 'apps_script_auth_redirect',
          message:
            'Google Apps Script is redirecting to a login screen. Set Execute as "Me" and Who has access "Anyone" and redeploy the /exec URL.',
        };
      }
      return {
        kind: target.kind,
        url: target.url,
        ok: true,
        status: 200,
        redirected: true,
        location,
        message: 'Apps Script redirected the request (treated as success).',
      };
    }

    const text = await upstream.text().catch(() => '');
    if (!upstream.ok) {
      const forbidden =
        upstream.status === 403 && text && looksLikeGoogleAuth(text);
      return {
        kind: target.kind,
        url: target.url,
        ok: false,
        status: upstream.status,
        body: text,
        error: forbidden ? 'apps_script_forbidden' : 'apps_script_http_error',
        message: forbidden
          ? 'Google rejected the request. Confirm the Apps Script deployment is set to Anyone and redeploy to refresh the /exec URL.'
          : `Apps Script responded with status ${upstream.status}.`,
      };
    }

    let parsed: any = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = null;
    }

    const ok =
      parsed?.success === true ||
      parsed?.result === 'success' ||
      parsed?.ok === true ||
      !!text;

    return {
      kind: target.kind,
      url: target.url,
      ok,
      status: 200,
      body: text,
      parsed,
    };
  } catch (error: any) {
    return {
      kind: target.kind,
      url: target.url,
      ok: false,
      status: 500,
      error: 'apps_script_network_error',
      message: error?.message || 'Failed to reach Apps Script endpoint.',
    };
  }
}

export async function POST(req: Request) {
  if (!targets.length) {
    return json(
      {
        ok: false,
        error: 'contact_apps_script_url_not_set',
        message:
          'Set CONTACT_EMAIL_APPS_SCRIPT_URL and/or CONTACT_APPS_SCRIPT_URL in your environment.',
      },
      { status: 500 },
    );
  }

  try {
    const data = await parseRequestBody(req);

    const hp = (data?.hp ?? '').toString().trim();
    const t = Number(data?.t ?? 0);
    if (hp) {
      return json({ ok: false, error: 'bot_detected' }, { status: 400 });
    }
    if (!Number.isFinite(t) || t < 1500) {
      return json({ ok: false, error: 'too_fast' }, { status: 400 });
    }

    const { hp: _hp, t: _t, ...clean } = data || {};

    const results: ForwardResult[] = [];
    for (const target of targets) {
      // Send sequentially so we preserve ordering (sheet tracking first, email second).
      const outcome = await forwardToAppsScript(target, clean);
      results.push(outcome);
    }

    const allOk = results.every((r) => r.ok);
    if (allOk) {
      return json({
        ok: true,
        results,
        body: results.find((r) => r.body)?.body,
        parsed: results.find((r) => r.parsed)?.parsed,
      });
    }

    const firstError = results.find((r) => !r.ok)!;
    return json(
      {
        ok: false,
        results,
        error: firstError.error || 'apps_script_error',
        message:
          firstError.message ||
          `Request to ${firstError.kind} Apps Script endpoint failed.`,
      },
      { status: firstError.status || 502 },
    );
  } catch (error: any) {
    return json(
      {
        ok: false,
        error: 'proxy_error',
        details: error?.message || 'Unexpected error',
      },
      { status: 500 },
    );
  }
}
