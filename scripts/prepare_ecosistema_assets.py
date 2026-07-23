"""Copia logos FAU y genera escudo SSRA recortado sin fondo blanco."""
from __future__ import annotations

import shutil
from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
FAU = Path(r'C:\Users\rffer\OneDrive\Desktop\FAU')
ECOSISTEMA = ROOT / 'public' / 'ecosistema'
ESCUDOS = ROOT / 'public' / 'escudos'


def copy_institutional_logos() -> None:
    ECOSISTEMA.mkdir(parents=True, exist_ok=True)
    shutil.copy2(FAU / 'dinacia.jpg', ECOSISTEMA / 'dinacia.jpg')
    shutil.copy2(FAU / 'Sinae.png', ECOSISTEMA / 'sinae.png')


def is_background_pixel(r: int, g: int, b: int, tolerance: int = 36) -> bool:
    return r >= 255 - tolerance and g >= 255 - tolerance and b >= 255 - tolerance


def flood_remove_background(img: Image.Image, tolerance: int = 36) -> Image.Image:
    rgba = img.convert('RGBA')
    pixels = rgba.load()
    width, height = rgba.size
    visited = [[False] * width for _ in range(height)]
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        if x < 0 or y < 0 or x >= width or y >= height or visited[y][x]:
            continue
        visited[y][x] = True
        r, g, b, _ = pixels[x, y]
        if not is_background_pixel(r, g, b, tolerance):
            continue
        pixels[x, y] = (r, g, b, 0)
        queue.append((x + 1, y))
        queue.append((x - 1, y))
        queue.append((x, y + 1))
        queue.append((x, y - 1))

    return rgba


def crop_shield_emblem(img: Image.Image) -> Image.Image:
    """Recorta la zona central del parche: águila, escudo y divisa."""
    width, height = img.size
    left = int(width * 0.24)
    top = int(height * 0.18)
    right = int(width * 0.76)
    bottom = int(height * 0.82)
    cropped = img.crop((left, top, right, bottom))
    return flood_remove_background(cropped, tolerance=40)


def crop_to_content(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img


def create_ssra_escudo() -> None:
    source = ESCUDOS / 'ssra-logo.jpeg'
    img = Image.open(source)
    shield = crop_shield_emblem(img)
    shield = crop_to_content(shield)

    pad = max(6, int(min(shield.size) * 0.04))
    padded = Image.new('RGBA', (shield.width + pad * 2, shield.height + pad * 2), (0, 0, 0, 0))
    padded.paste(shield, (pad, pad), shield)

    dest = ESCUDOS / 'ssra-escudo.png'
    padded.save(dest, format='PNG', optimize=True)
    print(f'ssaved {dest.name} {padded.size}')


def main() -> None:
    copy_institutional_logos()
    create_ssra_escudo()


if __name__ == '__main__':
    main()
