import glob
import os
import re
import json
from build_pages import convert_html_to_jsx, extract_main_content

blog_articles = {}
for path in glob.glob('../www.modon.com/real-estate/blog/*.html'):
    filename = os.path.basename(path)
    slug = filename.replace('.html', '')
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    content = extract_main_content(html)
    jsx = convert_html_to_jsx(content)
    blog_articles[slug] = jsx
    print(f"Blog article: {slug}")

media_articles = {}
for path in glob.glob('../www.modon.com/about-modon/media-centre/details/**/*.html', recursive=True):
    rel = os.path.relpath(path, '../www.modon.com/about-modon/media-centre/details')
    # normalize rel path to slug/key
    key = rel.replace('\\', '/').replace('.html', '')
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    content = extract_main_content(html)
    jsx = convert_html_to_jsx(content)
    media_articles[key] = jsx
    print(f"Media article: {key}")

print(f"Total blog articles: {len(blog_articles)}, Total media articles: {len(media_articles)}")
