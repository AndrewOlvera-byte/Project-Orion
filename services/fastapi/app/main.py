import os
from fastapi import FastAPI
import httpx
import redis

app = FastAPI(title="Orion Agent Service")

REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
REDIS_PORT = int(os.getenv("REDIS_PORT", "6379"))
CHROMA_HOST = os.getenv("CHROMA_HOST", "localhost")
CHROMA_PORT = int(os.getenv("CHROMA_PORT", "8000"))

@app.get("/agent/health")
async def health():
    checks = {"redis": False, "chromadb": False}
    try:
        r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT)
        checks["redis"] = r.ping()
    except Exception:
        checks["redis"] = False
    try:
        async with httpx.AsyncClient(timeout=3.0) as client:
            resp = await client.get(f"http://{CHROMA_HOST}:{CHROMA_PORT}/api/v1/heartbeat")
            checks["chromadb"] = resp.status_code == 200
    except Exception:
        checks["chromadb"] = False
    return {"status": "ok", "checks": checks}

@app.get("/agent/ping")
async def ping():
    return {"message": "pong"}

