#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
export COMPOSE_DOCKER_CLI_BUILD=1
export DOCKER_BUILDKIT=1

docker compose -f docker-compose.prod.yml --env-file .env.prod up --build -d

echo "Prod stack started on port 80 via Nginx."

