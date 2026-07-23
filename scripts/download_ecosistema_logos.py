"""Descarga logos institucionales en la mayor resolución disponible."""
import re
import urllib.request
from pathlib import Path
from urllib.parse import urljoin

OUT = Path(__file__).resolve().parents[1] / 'public' / 'ecosistema'
UA = {'User-Agent': 'Mozilla/5.0 (compatible; SSRA-Portal/1.0)'}

# URL preferida por institución (og:image, logo principal o alternativa HD)
PREFERRED = {
    'iau': [
        'https://iau.gub.uy/wp-content/uploads/2023/05/Logo-iau.png',
        'https://iau.gub.uy/wp-content/uploads/2023/05/Logo-iau-122x122.png',
    ],
    'dinacia': [
        'https://www.dinacia.gub.uy/sites/default/files/logo.svg',
    ],
    'iaa': [
        'https://iaauruguay.edu.uy/images/logo.png',
        'https://iaauruguay.edu.uy/templates/ja_university/images/logo.png',
        'https://iaauruguay.edu.uy/images/favicon.png',
    ],
    'sne': [
        'https://www.gub.uy/sistema-nacional-emergencias/profiles/custom/gub_uy/themes/custom/portal_base/images/logo-sne.svg',
        'https://www.gub.uy/sistema-nacional-emergencias/profiles/custom/gub_uy/modules/custom/portal_base_share_social_media/assets/img/gubuy.png',
    ],
    'utec': [
        'https://utec.edu.uy/themes/custom/utec/logo.svg',
        'https://utec.edu.uy/favicon/android-icon-192x192.png',
    ],
    'picudo-rojo': [
        'https://www.picudorojouruguay.com/wp-content/uploads/2024/01/cropped-cropped-logo-picudo-rojo-1.png',
    ],
    'space-uruguay': [
        'https://www.spaceuruguay.org/wp-content/uploads/2024/03/cropped-Logo-Space-Uruguay-1.png',
    ],
}

PAGE_FALLBACK = {
    'iau': 'https://iau.gub.uy/',
    'dinacia': 'https://www.dinacia.gub.uy/',
    'iaa': 'https://iaauruguay.edu.uy/',
    'sne': 'https://www.gub.uy/sistema-nacional-emergencias/',
    'utec': 'https://utec.edu.uy/es/',
    'picudo-rojo': 'https://www.picudorojouruguay.com/',
    'space-uruguay': 'https://www.spaceuruguay.org/',
}


def ext_from_url(url: str) -> str:
    lower = url.lower().split('?')[0]
    for ext in ('.svg', '.png', '.jpg', '.jpeg', '.webp', '.ico'):
        if lower.endswith(ext):
            return ext if ext != '.jpeg' else '.jpg'
    return '.png'


def fetch_html(url: str) -> str:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode('utf-8', errors='replace')


def find_images(html: str, base: str) -> list[str]:
    found: list[str] = []
    patterns = [
        r'property="og:image"\s+content="([^"]+)"',
        r'content="([^"]+)"\s+property="og:image"',
        r'src="([^"]*logo[^"]*\.(?:png|jpg|svg|webp))"',
        r'href="([^"]*logo[^"]*\.(?:png|svg))"',
    ]
    for pat in patterns:
        for m in re.finditer(pat, html, re.I):
            href = m.group(1).strip()
            if href.startswith('//'):
                href = 'https:' + href
            elif href.startswith('/'):
                href = urljoin(base, href)
            elif not href.startswith('http'):
                href = urljoin(base, href)
            if href not in found:
                found.append(href)
    return found


def download(url: str) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


def try_urls(key: str) -> tuple[str, bytes] | None:
    candidates = list(PREFERRED.get(key, []))
    page = PAGE_FALLBACK.get(key)
    if page:
        try:
            candidates.extend(find_images(fetch_html(page), page))
        except Exception as exc:
            print(f'  html fallback error: {exc}')

    seen: set[str] = set()
    best: tuple[str, bytes] | None = None
    for url in candidates:
        if url in seen:
            continue
        seen.add(url)
        try:
            data = download(url)
            if len(data) < 400:
                continue
            print(f'  ok {url} ({len(data)} bytes)')
            if best is None or len(data) > len(best[1]):
                best = (url, data)
        except Exception as exc:
            print(f'  fail {url}: {exc}')
    return best


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for key in PREFERRED:
        print(key)
        result = try_urls(key)
        if not result:
            print('  NO LOGO')
            continue
        url, data = result
        ext = ext_from_url(url)
        dest = OUT / f'{key}{ext}'
        dest.write_bytes(data)
        print(f'  -> {dest.name} ({len(data)} bytes)')


if __name__ == '__main__':
    main()
