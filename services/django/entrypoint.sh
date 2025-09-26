#!/usr/bin/env bash
set -euo pipefail

MODE="${1:-dev}"

echo "[django] Starting in $MODE mode"

python manage.py collectstatic --noinput || true
python manage.py migrate --noinput || true

if [ "$MODE" = "prod" ]; then
  echo "[django] Running gunicorn"
  exec gunicorn config.wsgi:application --bind 0.0.0.0:8000 --workers 3 --timeout 120
else
  echo "[django] Running development server with autoreload"
  exec python manage.py runserver 0.0.0.0:8000
fi

