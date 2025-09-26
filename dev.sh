#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
export COMPOSE_DOCKER_CLI_BUILD=1
export DOCKER_BUILDKIT=1

docker compose -f docker-compose.dev.yml --env-file .env.dev up --build -d

echo "Dev stack started."
echo "Frontend: http://localhost:5173"
echo "Django API: http://localhost:8001/api/health/"
echo "FastAPI Agent: http://localhost:8002/agent/health"

