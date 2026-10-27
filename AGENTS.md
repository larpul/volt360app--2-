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
- **Secrets**: `GEMINI_API_KEY`, `GOOGLE_MAPS_API_KEY` and `REGRID_API_TOKEN`
  are delivered via `/run/base44/app.env` (env_file). All are optional at boot —
  the app starts and the AI/solar/parcel features report "not configured"
  without them.
- **Regrid parcel layer**: `/api/regrid/parcels` proxies `app.regrid.com`
  server-side (the token never reaches the browser). Regrid rejects a lookup
  whose search area is over 386 sq mi, so both the server (`radius` clamp) and
  the map's `parcelRadius()` cap the radius at 16 km. The endpoint always
  answers `200` with a `message`, because the Angular client shows a generic
  "could not reach" for any non-2xx. When parcels come back the map draws a
  pin per parcel plus a scrollable "Regrid parcels in view" list (address,
  acreage, owner); tapping a row flies to the parcel and opens its record card
  with owner, parcel number, land use, zoning and year built. Coverage depends on the Regrid plan —
  the current token returns records only in Dallas County, TX (Regrid's free
  sandbox token is limited to a few counties), so Cincinnati / Hamilton County,
  OH and every other metro tested come back empty. The lookup is location-correct
  (it queries the map's own center), so Cincinnati parcels need a token whose
  plan covers Ohio — Regrid's Standard/Premium plans include nationwide US
  access.

  **Diagnostic logging** (added to trace exactly this): `regridParcelsNear()`
  prints `[regrid]` lines to the `api` container's stdout — a `lookup` line with
  host, endpoint, lat/lng/radius/limit and the token's presence/length (never the
  token itself), then `result` (parcel count), `empty result` (HTTP status,
  feature counts, response keys, any message/meta and a 300-char body snippet),
  `non-ok answer`, `token rejected`, `request failed` or `cache hit`. Read them
  with `docker compose -f docker-compose.base44.yml logs api | grep regrid`.
  A covered area answers `{"parcels":{"type":"FeatureCollection","features":[]}}`
  with **200** and zero features — that is Regrid saying "no records here", not a
  proxy fault. Measured with the current token: Dallas, Irving, Garland and
  Richardson (Dallas County, TX) return 50 parcels at `radius=400`;
  Cincinnati, Columbus, Cleveland, NYC, Chicago, Houston, Austin, Fort Worth,
  Denton and McKinney return 200 with empty FeatureCollections, and Cincinnati
  stays empty at the 16 km cap.

  On boot the api logs `[regrid] token loaded` with the token's presence, length,
  a SHA-256 fingerprint (first 12 hex chars — the token itself is never logged),
  its JWT expiry and whether it is a **sandbox** token (`cap` contains `sb`).
  Every `lookup` line repeats the same fingerprint, so after replacing
  `REGRID_API_TOKEN` the logs show at once whether the new token is the one in
  use. The token in place during this investigation was a sandbox token
  (`186b5b54ac5f`, expiring 2026-11-25) covering Dallas County, TX only.
  Cincinnati needs a token from a paid Regrid plan (Standard/Premium, nationwide
  US) at https://app.regrid.com/api/plans — no code change can add that coverage
  from a sandbox key. On an empty answer the API now returns a message saying the token may
  not cover the county, and the map shows that instead of a bare "no parcels" line.

## Verify it works

```bash
docker compose -f docker-compose.base44.yml up -d
curl -s http://localhost:3000/                    # → 200, index.html
curl -s http://localhost:3000/api/health          # → {"ok":true}
curl -s http://localhost:3000/api/solar/status    # → solar/ai configured flags
curl -s http://localhost:3000/api/regrid/status    # → {"configured":true} with a token
curl -s "http://localhost:3000/api/regrid/parcels?lat=32.7767&lng=-96.7970&radius=800"
                                                   # → parcel records in Dallas, TX
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
- Browsers heuristically cache `main.js` and `styles.css`, so an edited bundle
  can stay stale. `index.html` loads them with a `?v=N` suffix — bump `N` after
  changing `main.js` or `styles.css`. nginx also sends `Cache-Control: no-cache`
  for `.js`/`.css`/images, so reloading nginx (`exec web nginx -s reload`) after
  editing `nginx.base44.conf` applies the new headers.
- `server/uploads-server.js`: edit, then `docker compose -f
  docker-compose.base44.yml restart api` to pick up changes.
- The default landing route is `/dashboard`: the `''` route in the routing
  module (webpack module 809 in `main.js`) redirects there, and the
  verification page's continue action also lands on it. The sign-in page is
  still reachable at `/sign-in`, it is just no longer the entry point.
- The bottom tab bar lives in the app shell, not in the pages: its markup is
  inside the `ion-app` template string (webpack module 721 in `main.js`, search
  for `app-tab-bar`), its navigation helpers (`tabGo`, `tabActive`,
  `showTabBar`) and the `Router` injection are in the same module's
  `AppComponent`, and its styles are at the end of `styles.css`
  (`.app-tab-bar`). Tabs: Dashboard → `/dashboard`, Follow ups → `/leads`,
  Map → `/home`, Settings → `/settings`. It is hidden on `/`, `/sign-in`,
  `/sign-up` and `/verification`, and from 992px up it is offset past the
  pinned side menu (`left: max(282px, calc(28% + 12px))`, matching
  ion-split-pane's side width plus the bar's own 12px inset). The bar is a
  floating dark pill (`#1e1c25`) inset 12px from the edges; the active tab is a
  white pill showing its icon and label, inactive tabs show icons only.
- The map pin sheet (the "active sheet") is the markup inside the `spots_slider`
  block of the home template (`src/app/home/home.page.html`, module 3853 in
  `src_app_home_home_module_ts.js`), with its styles in the same file's module
  1020 string. Tapping a house pin opens it and shows the status (badge and
  pill), the homeowner (`ownerName`, falling back to `customerName`), the
  address, and the phone/email as `tel:` / `mailto:` links. Contact details live
  on `HOUSE_SAMPLES` in `main.js` (module `./src/app/inquiry-store.ts`) and are
  copied into each note by the home page and `seedSnapshot`.
  The green **Arrived** button is the check-in: `checkIn()` stamps
  `checkInLat`/`checkInLng` (the device's position, or the house pin marked
  `checkInApprox` when geolocation is denied) and starts the visit timer. While
  checked in the sheet shows the 14 status chips (`setInquiryStatus`), a notes
  textarea with **Save note** (`saveVisitNote`) and **Disposition**
  (`disposition()`), which ends the visit through `checkOut()` - timer stops,
  `visitMinutes` accumulates, one entry is pushed to the note's `visits` array
  and a row to `history`, and the visit is written to the persistent VisitLog.
  `visits` and `history` seed the sheet's "Site visits" and "Property history"
  lists (newest first). The sheet scrolls inside a 74vh max height
  (`.install_notes.note_card` keeps `overflow-y: auto` so the history stays
  reachable) and docks above the floating tab bar
  (`bottom: calc(76px + env(safe-area-inset-bottom))` on `.spots_slider.active`)
  - the page lives in its own stacking context, so a higher `z-index` inside it
  can never beat the shell's tab bar; offset the sheet instead.
- The Home map's status legend lives in `src_app_home_home_module_ts.js`
  (search `pin_legend_dock`): a vertical card pinned to the map's left side
  (`top: 148px; left: 12px`, pushed past the side menu from 992px up) instead
  of a bottom footer, and it slides out of view while the spot slider is open.
- `index.html` itself is served with `Cache-Control: no-cache` (the SPA fallback
  location), because a cached shell keeps requesting stale `?v=N` bundles and
  makes the preview look out of date.
- The prospect statuses are one shared list: `STATUS_TILES` in `main.js`
  (webpack module `./src/app/inquiry-store.ts`, exported next to
  `PIPELINE_STAGES`). It holds the 14 canvassing dispositions (Not answered …
  Reschedule) with a `colour` (map pin / filter-tile palette id: `gray`, `red`,
  `yellow`, `violet`, `blue`, `green`) and the matching hex `swatch`. The Home
  map's filter panel and pin legend (`src_app_home_home_module_ts.js`), and the
  Dashboard's Status overview / Install progress cards
  (`src_app_dashboard_dashboard_module_ts.js`) all read it, so adding a status
  means editing that one array plus the tile/pin CSS if a new colour id is
  needed. `HOUSE_SAMPLES` in the same module carries the seeded houses' status
  and colour and must use names from that list. The map legend lists only the
  statuses some pin currently carries.
- The Sales pipeline page (`src_app_leads_leads_module_ts.js`) opens with an
  **Activity overview** card: knocks, average knocks per day and conversion
  rate. Every prospect carries one disposition, so the status summary adds up
  to the knock total (`buildActivity()` counts the snapshot notes by
  `STATUS_TILES` name). `CONVERTED_STATUSES` (`Appt set`, `Sat (sale)`) is what
  the conversion rate counts over, and the daily average divides by `WEEK_DAYS`
  (7).
- The **Knocks counter** sits at the top of the same page (search `knock_card`
  for the markup, `buildKnock()` for the numbers). It is a door-knock session,
  not a disposition roll-up: `KNOCK_OUTCOMES` holds the six outcomes (No answer,
  Not interested, Interested / qualified lead, Follow-up requested, Appointment
  booked, Do not knock again) with `contacted` / `lead` / `appointment` flags,
  and a knock is one logged attempt. The knock counts the attempt, a contact
  counts the conversation, and leads and appointments come from the outcome
  picked - so `contactRate` is contacts over knocks, never knocks over doors.
  **Add knock** opens the `sheet === 'knock'` sheet, `saveKnock()` appends to
  the session, and the session lives in localStorage under `solar360_knocks` as
  `{date, entries}`, reset by `dayKey()` when the date changes (no history is
  kept). The card lists the five newest entries with their time.
- The page's bottom sheets (`.lead_sheet`: qualification, consultation, activity,
  knock) dock above the floating tab bar at
  `bottom: calc(76px + env(safe-area-inset-bottom))` with 12px side insets -
  docked at `bottom: 0` the tab bar covered their Cancel/Save row and nothing
  could be tapped. The floating assistant buttons (`solar360-assist.js`,
  `.assist_dock` in `styles.css`) are hidden while one of these sheets is open
  (`body:has(.sheet_backdrop)`), because the chat bubble sat on top of the Save
  button and swallowed the tap.
