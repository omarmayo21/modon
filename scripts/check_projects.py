import glob
import re

for path in sorted(glob.glob('../www.modon.com/real-estate/*.html')):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    lat = re.search(r'id=["\']map-latitude["\'][^>]*value=["\']([^"\']+)["\']', content)
    lng = re.search(r'id=["\']map-longitude["\'][^>]*value=["\']([^"\']+)["\']', content)
    title = re.search(r'id=["\']map-title["\'][^>]*value=["\']([^"\']+)["\']', content)
    if lat and lng:
        print(f'{path}: lat={lat.group(1)}, lng={lng.group(1)}, title={title.group(1) if title else ""}')
