# Viha Lily Care Inc. � Website

Simple Next.js site for a healthcare staffing agency, with contact and job application forms that post to Google Apps Script.

## Overview
- Framework: Next.js (app router)
- Styling: CSS (no framework)
- Forms: Proxied to Google Apps Script via Next.js API routes
- Hosting: Vercel (free)

## Quick Start
- Requirements
  - Node.js 18+
  - npm (or yarn/pnpm)
- Install and run
  - `npm install`
  - Create `.env.local` using `.env.example` and fill both URLs (see below)
  - `npm run dev` ? open http://localhost:3000

## Environment Variables
Create `.env.local` in the project root:
```
CONTACT_EMAIL_APPS_SCRIPT_URL=https://script.google.com/.../exec
APPLY_APPS_SCRIPT_URL=https://script.google.com/.../exec
APPLY_EMAIL_APPS_SCRIPT_URL=https://script.google.com/.../exec
# Optional legacy name still supported:
# CONTACT_APPS_SCRIPT_URL=https://script.google.com/.../exec
```
Notes
- Both routes require these values. Missing values cause 500s from the API when you submit a form.
- CONTACT_EMAIL_APPS_SCRIPT_URL is the canonical variable; the old name remains supported for backwards compatibility.
- APPLY_EMAIL_APPS_SCRIPT_URL lets you send job submissions to a second Apps Script (e.g., email notifications) while APPLY_APPS_SCRIPT_URL continues feeding your sheet.
- Use the public `/exec` URLs from �Manage deployments� in Apps Script.
- In Apps Script, set: Execute as �Me�, Who has access �Anyone�.

## Google Apps Script
- Contact: expects JSON with `name, email, phone, subject, message`.
- Apply: expects JSON with `first_name, last_name, email, phone, position, experience_years, availability, additional_info, source`.
- This repo already maps Apply page fields to those names in `app/api/apply/route.ts`.

## Deploy with Vercel
1) Push code to GitHub (repo: `SudhirDeshwal/VihaLily`).
2) In Vercel ? New Project ? Import the repo (framework auto-detected).
3) Add env vars in Vercel Project Settings ? Environment Variables:
   - `CONTACT_EMAIL_APPS_SCRIPT_URL` = your contact `/exec` URL (or `CONTACT_APPS_SCRIPT_URL` for legacy setups)
   - `APPLY_APPS_SCRIPT_URL` = your apply `/exec` URL
   - `APPLY_EMAIL_APPS_SCRIPT_URL` = optional apply-form email `/exec` URL
   - Optional: `NEXT_PUBLIC_SITE_URL` = the public site URL
4) Deploy. Future pushes auto-deploy.

## Logo & Icons
- Your uploaded logo `app/logo/CarE.png` is served at `/logo` via `app/logo/route.ts`.
- Navbar and Open Graph meta use `/logo`.

## Troubleshooting
- 500 on form submit (local)
  - Cause: env vars not set. Fix: create `.env.local` with both URLs (see above), then restart `npm run dev`.
- 404 for `/logo`
  - Ensure `app/logo/CarE.png` exists; the route serves it at `/logo`.
- Apps Script rejects request
  - Confirm deployment is �Execute as: Me� and �Who has access: Anyone�.
  - Make sure your script parses JSON in `doPost`.
