#!/usr/bin/env bash
set -euo pipefail

# ──────────────────────────────────────────────────────────────────
#  deploy.sh — One-command production deployment for volt360solar.com
#  Usage:  ./deploy.sh your-email@example.com
# ──────────────────────────────────────────────────────────────────

DOMAIN="volt360solar.com"
EMAIL="${1:-}"

# ── 1. Ensure Docker is installed ──
if ! command -v docker &>/dev/null; then
    echo "Docker not found — installing …"
    curl -fsSL https://get.docker.com | sh
    systemctl enable --now docker
fi

if ! docker compose version &>/dev/null; then
    echo "Docker Compose plugin not found — installing …"
    apt-get update -qq && apt-get install -y -qq docker-compose-plugin
fi

# ── 2. Ensure .env.prod exists with real API keys ──
if [ ! -f .env.prod ]; then
    cp .env.prod.example .env.prod
    echo ""
    echo "⚠️  Created .env.prod from template."
    echo "    Edit it with your real API keys, then re-run:"
    echo "    ./deploy.sh ${EMAIL:-your-email@example.com}"
    exit 1
fi

# ── 3. Obtain SSL certificate (skips if already present) ──
if [ -z "$EMAIL" ]; then
    echo "Please provide your email for SSL registration:"
    echo "  ./deploy.sh your-email@example.com"
    exit 1
fi

./init-letsencrypt.sh "$EMAIL"

# ── 4. Start all services ──
docker compose -f docker-compose.prod.yml up -d

# ── 5. Verify ──
sleep 3
echo ""
echo "── Deployment status ──"
docker compose -f docker-compose.prod.yml ps
echo ""
echo "✅ Done! Your app is live at https://$DOMAIN"
echo "   API health: https://$DOMAIN/api/health"
