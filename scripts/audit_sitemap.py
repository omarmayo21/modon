import glob
import os
import re

html_files = glob.glob('../www.modon.com/**/*.html', recursive=True)
pages_tracked = [
    'home.html', 'real-estate.html', 'hospitality.html', 'events-tourism.html', 'asset-investment-management.html',
    'destinations.html', 'contact-us.html', 'terms-and-conditions.html', 'privacy-policy.html',
    'about-modon/about-us.html', 'about-modon/careers.html', 'about-modon/investor-relations.html',
    'about-modon/media-centre.html', 'about-modon/procurement.html', 'about-modon/whistleblowing.html',
    'real-estate/al-naseem-community.html', 'real-estate/bashayer.html', 'real-estate/hudayriyat-golf-estates.html',
    'real-estate/muheira.html', 'real-estate/nawayef-east.html', 'real-estate/nawayef-parkviews.html',
    'real-estate/nawayef-village.html', 'real-estate/tara-park.html', 'real-estate/ras-el-hekma.html',
    'real-estate/blog.html'
]

blog_html = [os.path.relpath(p, '../www.modon.com').replace('\\', '/') for p in glob.glob('../www.modon.com/real-estate/blog/*.html')]
media_html = [os.path.relpath(p, '../www.modon.com').replace('\\', '/') for p in glob.glob('../www.modon.com/about-modon/media-centre/details/**/*.html', recursive=True)]

all_covered = set(pages_tracked + blog_html + media_html)

uncovered = []
for h in sorted(html_files):
    rel = os.path.relpath(h, '../www.modon.com').replace('\\', '/')
    base = os.path.basename(rel)
    if base.startswith('index') or base.startswith('WebResource') or '${' in base or base.startswith('GET') or base.startswith('n-') or base.startswith('t-') or base.startswith('t.') or base.startswith('o.') or base.startswith('e.') or base.startswith('window.'):
        continue
    if 'signals' in rel or 'Edge' in rel or 'Trident' in rel or 'schema.org' in rel or 'dist' in rel or 'ar/' in rel or ('investor-relations' in base and base != 'investor-relations.html') or ('blog' in base and base != 'blog.html' and 'real-estate/blog/' not in rel):
        continue
    if rel not in all_covered:
        uncovered.append(rel)

print(f"Total HTML files checked: {len(html_files)}")
print(f"Total uncovered HTML pages: {len(uncovered)}")
for u in uncovered:
    print("  Uncovered:", u)
