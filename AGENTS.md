# Base44 Setup Notes — Solar360

## What this app is

A prebuilt static Angular/Ionic SPA (Solar360 solar-sales CRM) served as flat
files from the repo root. There is **no source code, no `package.json`, and no
build step** — the repo contains the compiled bundle (`main.js`, `vendor.js`,
`polyfills.js`, `runtime.js`, `styles.css`, lazy-loaded chunk files, `assets/`).

A small dependency-free Node.js backend (`server/uploads-server.js`) provides
the API: AI assistant chat, Google Solar roof scan, utility-bill analysis, and
file uploads. It uses only Node 22 built-ins (`http`, `fs`, `path`, global
`fetch`, `AbortController`) — no `npm install` needed.

## Architecture

| Service | Image | Role | Port |
|---------|-------|------|------|
| `web` | `nginx:alpine` | Serves static files from the repo; proxies `/api/` and `/uploads/` to the `api` service | 3000 → 80 |
| `api` | `node:22-slim` | Runs `server/uploads-server.js` | 4000 (internal) |

nginx is the single public origin. The SPA calls `/api/...` and `/uploads/...`
same-origin, so all traffic goes through port 3000.

## Key setup details

- **nginx runs as root** (`user root;` in `nginx.base44.main.conf`) because the
  sandbox checkout directory is `drwx------` (700). Without this, nginx workers
  (default `nginx` user) get 403 Forbidden. The custom main config is mounted at
  `/etc/nginx/nginx.conf`; the server block is in `nginx.base44.conf` at
  `/etc/nginx/conf.d/default.conf`.
- **SPA routing**: `try_files $uri $uri/ /index.html` in the nginx server block
  handles client-side Angular routes.
- **Uploads volume**: `uploads_data` Docker volume mounted at `/data/uploads`
  in the `api` service for file storage.
- **Secrets**: `GEMINI_API_KEY` and `GOOGLE_MAPS_API_KEY` are delivered via
  `/run/base44/app.env` (env_file). Both are optional at boot — the app starts
  and the AI/solar features report "not configured" without them.

## Verify it works

```bash
docker compose -f docker-compose.base44.yml up -d
curl -s http://localhost:3000/                    # → 200, index.html
curl -s http://localhost:3000/api/health          # → {"ok":true}
curl -s http://localhost:3000/api/solar/status    # → solar/ai configured flags
```

The app redirects to `/sign-in` (auth gate). The sign-in page should render
with the Volt360 sidebar and sign-in form.

## Editing

- Static files (`*.js`, `*.css`, `index.html`): edit directly; changes appear
  on page reload (no build step, no hot reload — call `reload_preview`).
- Replaced images (e.g. `assets/images/profile.png`) keep the same URL, so the
  nginx server block sends `Cache-Control: no-cache` for `.png/.jpg/.svg/.webp/.ico`
  and the avatar references carry a `?v=N` suffix. Bump that suffix when swapping
  an image so browsers pick up the new file immediately.
- `server/uploads-server.js`: edit, then `docker compose -f
  docker-compose.base44.yml restart api` to pick up changes.
