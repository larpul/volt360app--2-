#!/usr/bin/env bash
set -euo pipefail

# ──────────────────────────────────────────────────────────────────
#  init-letsencrypt.sh — Obtain a Let's Encrypt SSL certificate
#  Usage:  ./init-letsencrypt.sh your-email@example.com
# ──────────────────────────────────────────────────────────────────

DOMAIN="volt360solar.com"
EMAIL="${1:?Usage: ./init-letsencrypt.sh your-email@example.com}"
CERT_DIR="./certbot/conf/live/$DOMAIN"

# Skip if a real cert already exists (idempotent re-runs).
if [ -f "./certbot/conf/renewal/$DOMAIN.conf" ]; then
    echo "✅ SSL certificate already exists for $DOMAIN — nothing to do."
    exit 0
fi

echo "Setting up SSL for $DOMAIN and www.$DOMAIN …"

# 1. Create a placeholder self-signed cert so nginx can boot with ssl enabled.
mkdir -p "$CERT_DIR"
openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
    -keyout "$CERT_DIR/privkey.pem" \
    -out "$CERT_DIR/fullchain.pem" \
    -subj "/CN=localhost" 2>/dev/null

# 2. Start nginx + API so the ACME challenge endpoint is reachable.
docker compose -f docker-compose.prod.yml up -d web api
sleep 3

# 3. Remove the placeholder and request the real certificate.
rm -rf ./certbot/conf/live/$DOMAIN ./certbot/conf/archive/$DOMAIN ./certbot/conf/renewal/$DOMAIN.conf

docker compose -f docker-compose.prod.yml run --rm certbot certonly \
    --webroot \
    --webroot-path /var/www/certbot \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    -d "$DOMAIN" \
    -d "www.$DOMAIN"

# 4. Reload nginx so it serves with the real certificate.
docker compose -f docker-compose.prod.yml exec web nginx -s reload

echo "✅ SSL certificate installed for $DOMAIN"
