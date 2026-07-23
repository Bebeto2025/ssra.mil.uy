import re
import sys
import urllib.request
from pathlib import Path

url = sys.argv[1]
out = Path(sys.argv[2]) if len(sys.argv) > 2 else None
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=45) as resp:
    html = resp.read().decode("utf-8", errors="replace")

if out:
    out.write_text(html, encoding="utf-8")

for name, pat in [
    ("og:image", r'property="og:image"\s+content="([^"]+)"'),
    ("og:image2", r'content="([^"]+)"\s+property="og:image"'),
    ("og:title", r'property="og:title"\s+content="([^"]+)"'),
    ("published", r'property="article:published_time"\s+content="([^"]+)"'),
    ("title", r"<title>([^<]+)</title>"),
]:
    m = re.search(pat, html, re.I)
    print(f"{name}: {m.group(1).strip() if m else 'N/A'}")
