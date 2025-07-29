import asyncio
from fastapi import FastAPI, WebSocket
import asyncpg
import os
from dotenv import load_dotenv

load_dotenv()
DATABASE_URL = os.environ['DATABASE_URL']

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    conn = await asyncpg.connect(DATABASE_URL)
    last_id = 0
    while True:
        row = await conn.fetchrow(
            "SELECT id, speed, timestamp FROM speed_data WHERE id > $1 ORDER BY id ASC LIMIT 1", last_id
        )
        if row:
            await websocket.send_json({'speed': row['speed'], 'timestamp': str(row['timestamp'])})
            last_id = row['id']
        await asyncio.sleep(1)
