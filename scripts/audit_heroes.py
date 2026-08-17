import glob
import os
import re

for path in sorted(glob.glob('../www.modon.com/*.html') + glob.glob('../www.modon.com/about-modon/*.html') + glob.glob('../www.modon.com/real-estate/*.html')):
    if os.path.basename(path) in ['index.html', 'index-2.html', '${l}.html', 'GET.html', 'e.html', 'n-2.html', 'n.html', 'o.html', 't-2.html', 't.html', 't.params.html', 'window.location.html', 'about-usò.z']:
        continue
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    # Extract banner section
    banner_match = re.search(r'<section[^>]*class=["\'][^"\']*(?:banner-section|banner|hero)[^"\']*["\'][^>]*>[\s\S]*?<\/section>', html)
    if banner_match:
        banner = banner_match.group(0)
        imgs = re.findall(r'(src|data-dsrc|data-msrc)=["\']([^"\']+)["\']', banner)
        videos = re.findall(r'<video[^>]*src=["\']([^"\']+)["\']', banner)
        titles = re.findall(r'<h1[^>]*>([\s\S]*?)<\/h1>', banner)
        print(f"=== {os.path.relpath(path, '../www.modon.com')} ===")
        print(f"  Titles: {titles}")
        print(f"  Imgs: {imgs}")
        print(f"  Videos: {videos}")
    else:
        print(f"=== {os.path.relpath(path, '../www.modon.com')} === (NO BANNER SECTION FOUND)")
