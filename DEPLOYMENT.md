# Deploying Solar360 to a VPS (volt360solar.com)

This guide deploys the app to any Linux VPS (DigitalOcean, Linode, Hetzner, etc.)
using Docker Compose with automatic SSL via Let's Encrypt.

## Prerequisites

1. **A VPS** running Ubuntu 22.04+ (or any modern Linux with Docker support).
2. **Domain DNS** — point these records at your VPS IP:
   | Type | Name  | Value          |
   |------|-------|----------------|
   | A    | @     | `YOUR_VPS_IP`  |
   | A    | www   | `YOUR_VPS_IP`  |
3. **Ports 80 and 443** open in the VPS firewall.

## Steps

### 1. SSH into the VPS and clone the repo

```bash
ssh root@YOUR_VPS_IP
git clone <your-repo-url> /opt/solar360 && cd /opt/solar360
```

### 2. Configure your API keys

```bash
cp .env.prod.example .env.prod
nano .env.prod   # fill in your real keys
```

The keys you already have in Base44 (Gemini, Google Maps, Google Sheets) go here.
All keys are optional — the app boots without them; AI/solar features report
"not configured" until you add them.

### 3. Deploy

```bash
./deploy.sh your-email@example.com
```

This single command:
- Installs Docker if needed
- Obtains an SSL certificate from Let's Encrypt
- Starts nginx (HTTPS) + Node backend + certbot auto-renewal
- Verifies the deployment

### 4. Verify

```bash
curl https://volt360solar.com/             # → HTML (the SPA)
curl https://volt360solar.com/api/health   # → {"ok":true}
```

## Architecture

| Service  | Image           | Role                                          | Port    |
|----------|-----------------|-----------------------------------------------|---------|
| `web`    | nginx:alpine    | Serves static SPA, proxies /api to backend    | 80, 443 |
| `api`    | node:22-slim    | Node.js backend (uploads, AI, roof scan)      | 4000    |
| `certbot`| certbot/certbot | Auto-renews SSL certificates every 12 hours   | —       |

## Useful commands

```bash
# View logs
docker compose -f docker-compose.prod.yml logs -f web
docker compose -f docker-compose.prod.yml logs -f api

# Restart a service
docker compose -f docker-compose.prod.yml restart web

# Update the app (after pushing changes to the repo)
git pull && docker compose -f docker-compose.prod.yml up -d --build

# Stop everything
docker compose -f docker-compose.prod.yml down
```

## Updating static files

The static SPA files (`main.js`, `common.js`, `index.html`, etc.) are
bind-mounted into nginx. After a `git pull`, reload nginx to serve the
new files:

```bash
docker compose -f docker-compose.prod.yml exec web nginx -s reload
```

## SSL certificate renewal

Certbot runs as a background container and renews certificates
automatically every 12 hours. No manual action needed.

To manually renew:

```bash
docker compose -f docker-compose.prod.yml run --rm certbot renew
docker compose -f docker-compose.prod.yml exec web nginx -s reload
```
