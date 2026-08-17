import os
import re
import glob

# Check all data-dsrc, data-msrc, and src in HTML and TSX files
all_tsx = glob.glob('src/pages/*.tsx')
missing = []
total = 0

for path in all_tsx:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all src, data-dsrc, data-msrc
    imgs = re.findall(r'(src|data-dsrc|data-msrc)=["\']([^"\']+)["\']', content)
    for attr, url in imgs:
        if url.startswith('http') or url.startswith('data:') or url == '' or url.startswith('javascript:'):
            continue
        total += 1
        # clean query params
        clean_url = url.split('?')[0]
        # remove leading slash
        local_path = os.path.join('public', clean_url.lstrip('/'))
        if not os.path.exists(local_path):
            missing.append((path, attr, url, clean_url))

print(f"Total images checked: {total}")
print(f"Missing images: {len(missing)}")
for p, attr, url, clean in missing[:30]:
    print(f"[{p}] {attr}=\"{url}\" -> not found at public/{clean.lstrip('/')}")
