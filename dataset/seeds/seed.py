#!/usr/bin/env python3
"""Load ChambaQ demo seed data into MongoDB.

Usage:
  MONGODB_URI='mongodb+srv://...' python dataset/seeds/seed.py
"""

from __future__ import annotations

import json
import os
from pathlib import Path


def main() -> None:
    try:
        from pymongo import MongoClient
    except ImportError as exc:
        raise SystemExit("Install pymongo first: python -m pip install pymongo") from exc

    uri = os.environ.get("MONGODB_URI")
    if not uri:
        raise SystemExit("MONGODB_URI is required")

    db_name = os.environ.get("MONGODB_DB", "chambaq_demo")
    data_path = Path(__file__).with_name("seed_data.json")
    data = json.loads(data_path.read_text())

    client = MongoClient(uri)
    db = client[db_name]

    for collection, docs in data.items():
        if not docs:
            continue
        db[collection].delete_many({"_id": {"$in": [doc["_id"] for doc in docs]}})
        db[collection].insert_many(docs)
        print(f"{collection}: inserted {len(docs)} demo documents")

    print(f"Seed complete: {db_name}")


if __name__ == "__main__":
    main()

