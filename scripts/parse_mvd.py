import html
import re
from pathlib import Path

path = Path(r"C:\Users\rffer\portal-tramites-espaciales\tmp-mvd.html")
text = path.read_text(encoding="utf-8", errors="replace")

for pat in [
    r'class="fecha"[^>]*>([^<]+)',
    r'datetime="([^"]+)"',
    r'itemprop="datePublished"\s+content="([^"]+)"',
]:
    m = re.search(pat, text, re.I)
    if m:
        print("date:", m.group(1))

paras = re.findall(r'<p[^>]*>(.*?)</p>', text, re.S | re.I)
clean = []
for p in paras[:20]:
    t = re.sub(r'<[^>]+>', '', p)
    t = html.unescape(re.sub(r'\s+', ' ', t).strip())
    if len(t) > 80:
        clean.append(t)

for p in clean[:5]:
    print('P:', p[:250])
