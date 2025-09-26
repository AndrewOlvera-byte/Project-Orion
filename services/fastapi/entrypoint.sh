#!/usr/bin/env bash
set -euo pipefail
MODE="${1:-dev}"

if [ "$MODE" = "prod" ]; then
  exec uvicorn app.main:app --host 0.0.0.0 --port 8000
else
  exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
fi

