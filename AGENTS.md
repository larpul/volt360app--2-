# AGENTS.md

## Project Overview

This is a **prebuilt Ionic/Angular static site** — an EV charging station finder app. The repository contains only compiled output (webpack-bundled JS, CSS, and static assets); there is no source code, no `package.json`, and no build step.

## Architecture

- **Frontend only**: No backend, no API server, no database.
- The app makes a few external calls to `dashboard.vtlabs.dev` (subscribe, buy-link, WhatsApp) and `opuslab.works` — these are template/demo features and require no credentials.
- `environment.production` is set to `false` in the compiled `main.js`.

## Running in the Sandbox

- Served via **nginx** (alpine image) on host port 3000.
- A custom `nginx.base44.conf` is mounted to run the nginx worker as `root`, because the repo directory has `700` permissions (nginx's default non-root worker can't read it).
- SPA fallback (`try_files ... /index.html`) is configured so client-side routes work.
- No secrets, no environment variables, no build step required.

## Verification

- `curl http://localhost:3000/` returns 200 with the `index.html` content.
- All key assets (`main.js`, `vendor.js`, `runtime.js`, `polyfills.js`, `styles.css`, i18n JSON) return 200.
- The app is a SPA — the default route redirects to `/sign-in`.
