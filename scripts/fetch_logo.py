import json
import re
import sys
import urllib.request
from pathlib import Path

url = sys.argv[1]
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=30) as resp:
    html = resp.read().decode("utf-8", errors="replace")

for pat in [
    r'property="og:image"\s+content="([^"]+)"',
    r'content="([^"]+)"\s+property="og:image"',
    r'rel="icon"[^>]+href="([^"]+)"',
    r'href="([^"]+)"[^>]+rel="icon"',
]:
    m = re.search(pat, html, re.I)
    if m:
        print(m.group(1))
        break
else:
    print("N/A")
