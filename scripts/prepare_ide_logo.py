"""Prepara logo IDE en alta calidad para el ecosistema."""
from __future__ import annotations

import io
import shutil
import urllib.request
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
FAU = Path(r'C:\Users\rffer\OneDrive\Desktop\FAU')
OUT = ROOT / 'public' / 'ecosistema' / 'ide.png'
SOURCE = FAU / 'IDE.jpg'
GUB_UY_IDE = (
    'https://www.gub.uy/infraestructura-datos-espaciales/sites/'
    'infraestructura-datos-espaciales/files/catalogo/IDE.jpg'
)
TARGET_SIZE = 512


def load_best_source() -> Image.Image:
    candidates: list[tuple[str, Image.Image]] = []

    if SOURCE.exists():
        img = Image.open(SOURCE)
        candidates.append(('local IDE.jpg', img))
        print(f'local: {SOURCE} -> {img.size}')

    try:
        req = urllib.request.Request(GUB_UY_IDE, headers={'User-Agent': 'Mozilla/5.0'})
        data = urllib.request.urlopen(req, timeout=30).read()
        img = Image.open(io.BytesIO(data))
        candidates.append(('gub.uy catalogo', img))
        print(f'gub.uy: {img.size} ({len(data)} bytes)')
    except Exception as exc:
        print(f'gub.uy download failed: {exc}')

    if not candidates:
        raise FileNotFoundError('No se encontró logo IDE')

    return max(candidates, key=lambda item: item[1].width * item[1].height)[1]


def enhance_logo(img: Image.Image, target_size: int = TARGET_SIZE) -> Image.Image:
    rgba = img.convert('RGBA')
    max_dim = max(rgba.size)

    if max_dim < target_size:
        scale = target_size / max_dim
        new_size = (round(rgba.width * scale), round(rgba.height * scale))
        rgba = rgba.resize(new_size, Image.Resampling.LANCZOS)

    rgba = rgba.filter(ImageFilter.UnsharpMask(radius=1.2, percent=140, threshold=2))
    rgba = ImageEnhance.Contrast(rgba).enhance(1.06)
    rgba = ImageEnhance.Sharpness(rgba).enhance(1.12)

    side = max(rgba.size)
    if side != target_size:
        canvas = Image.new('RGBA', (target_size, target_size), (0, 0, 0, 0))
        offset = ((target_size - rgba.width) // 2, (target_size - rgba.height) // 2)
        canvas.paste(rgba, offset, rgba)
        rgba = canvas

    return rgba


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    source = load_best_source()
    enhanced = enhance_logo(source)
    enhanced.save(OUT, format='PNG', optimize=True)
    print(f'saved {OUT} ({enhanced.size[0]}x{enhanced.size[1]}, {OUT.stat().st_size} bytes)')


if __name__ == '__main__':
    main()
