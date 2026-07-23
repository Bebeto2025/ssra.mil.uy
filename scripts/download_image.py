import sys
import urllib.request
from pathlib import Path

url = sys.argv[1]
dest = Path(sys.argv[2])
dest.parent.mkdir(parents=True, exist_ok=True)
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=45) as resp:
    data = resp.read()
dest.write_bytes(data)
print(f"saved {len(data)} bytes -> {dest}")
