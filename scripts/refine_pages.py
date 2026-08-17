import os
import re
import glob

# 1. Build an index of all files in public
public_files = {}
for root, dirs, files in os.walk('public'):
    for f in files:
        full_path = os.path.join(root, f)
        rel = '/' + os.path.relpath(full_path, 'public').replace('\\', '/')
        public_files[rel.lower()] = rel
        base_name = f.split('?')[0].lower()
        if base_name not in public_files:
            public_files[base_name] = rel
        name_no_hash = re.sub(r'[a-f0-9]{4,36}(\.[a-zA-Z0-9]+)$', r'\1', base_name)
        if name_no_hash not in public_files:
            public_files[name_no_hash] = rel
        name_norm = base_name.replace('-', '').replace('_', '').replace("'", '').replace('"', '')
        if name_norm not in public_files:
            public_files[name_norm] = rel

# Semantic fallback dictionary for known Sitefinity-scraped aliases
SEMANTIC_MAP = {
    'courtyard-mall-news.jpg': '/images/modoncorporatelibraries/news/news-thetcourtyardtmall-riyadh-city275e.jpg',
    'nature-lovers-news.jpg': '/images/modoncorporatelibraries/news/news-ban-al-mugheirah-ature-lovers148e.jpg',
    'bab-al-nojoom-al-mugheirah-resrort.jpg': '/images/modoncorporatelibraries/news/news-ban-al-mugheirah-ature-lovers148e.jpg',
    'hudayriyat-marsan-beaches-news.jpg': '/images/modoncorporatelibraries/news/news-marsana-beaches3525.jpg',
    'fish-market-news.jpg': '/images/modoncorporatelibraries/news/news-fish-market-mina-zayed02d2.jpg',
    'trail-x-news.jpg': '/images/modoncorporatelibraries/news/news-trail-x3a43.jpg',
    'news-waterfront-destinations-al-dhafra.webp': '/images/modoncorporatelibraries/news/news-waterfront-destinations-al-dhafrab705.jpg',
    'news-bateen-liwa-resort': '/images/modoncorporatelibraries/news/news-bateen-liwa-resort2b0f.jpg',
    'news-hudayriyat-island-masterplan': '/images/modoncorporatelibraries/news/news-hudayriyat-island-masterplan08cc.jpg',
    'kelly-first-wave': '/images/modoncorporatelibraries/news/news_kelly-first-wavef52e.jpg',
    'hudayriyat-island.jpeg': '/images/modoncorporatelibraries/banners/hudayriyat-islandf85b.jpeg',
    'la-zagaleta.jpeg': '/images/modoncorporatelibraries/banners/la-zagaletab2cc.jpeg',
    'ras-el-hekma.jpeg': '/images/modoncorporatelibraries/banners/ras-el-hekmaeba2.jpeg',
    'ras-el-hekma.webp': '/images/modoncorporatelibraries/new-images-home/spotlight/ras-el-hekma884a.webp',
    'nawayef-village.jpeg': '/images/modoncorporatelibraries/banners/nawayef-village8284.jpeg',
    'whistleblowing-banner.jpg': '/images/modoncorporatelibraries/about-us/whistleblowing-bannera392.jpg',
    'broadgate-reit_london': '/images/modoncorporatelibraries/news/broadgate-reit_lodon_v02801f.jpg',
    'la-zagaleta1-2000x1125': '/images/modoncorporatelibraries/about-us/la-zagaleta-cover-2000x1125495f.jpg',
    'nawayef-park-views': '/images/modoncorporatelibraries/about-us/modon-launches-nawayef-park-views-the-first-apartments-release-on-hudayriyat-island798e.jpg',
    'emsteel-pr-banner': '/images/modoncorporatelibraries/about-us/modon-is-the-first-real-estate-developer-to-use-green-steel-in-uae-in-collaboration-with-emsteeld5e4.jpg',
    'four-seasons-banner': '/images/modoncorporatelibraries/about-us/modon-and-four-seasons-host-opening-ceremony-of-four-seasons-hotel-rabat-at-kasr-al-bahrec6b.jpg',
    '16x9-website-3': '/images/modoncorporatelibraries/about-us/updated16x9-website-18e3a.jpg',
    'h-e-jassem-bu-ataba': '/images/modoncorporatelibraries/about-us/h-e-jassem-Mohamed-main-image0e2f.jpg',
    'h-e-jassem-mohamed-bu-ataba': '/images/modoncorporatelibraries/about-us/h-e-jassem-Mohamed-main-image0e2f.jpg',
    'h-e-abdullah-al-sahi': '/images/modoncorporatelibraries/about-us/h-e-sheikh-abdulla-bin-mohammed-bin-butti-al-hamedf18b0d04-051b-480c-8bc3-af51f5641710bf2d.png',
    'h-e-abdulla-al-sahi': '/images/modoncorporatelibraries/about-us/h-e-sheikh-abdulla-bin-mohammed-bin-butti-al-hamedf18b0d04-051b-480c-8bc3-af51f5641710bf2d.png',
    'adq-appoints-modon-holding-as-master-developer': '/images/modoncorporatelibraries/about-us/adq-appoints-modon-holding-as-master-developer9da8b2e1-38cd-4cbd-9407-29cde183a4c76ec5.jpg',
    'modon-achieves-landmark-acquisition': '/images/modoncorporatelibraries/about-us/modon-holding-delivers-outstanding-aed-2-1-billion-h1-2025-net-profit-with-continued-momentum-across-core-segments-supported-by-record-aed-10-billion-rea',
    'surf-news-1-banner': '/images/modoncorporatelibraries/about-us/tara-park-night-hero-bannerba6f.jpg',
    'news-2-banner-1': '/images/modoncorporatelibraries/about-us/tara-park-night-hero-bannerba6f.jpg',
    'modon-egypt-pr-banner': '/images/modoncorporatelibraries/about-us/adq-appoints-modon-holding-as-master-developer9da8b2e1-38cd-4cbd-9407-29cde183a4c76ec5.jpg',
    'modon-holding-engages-with-investors': '/images/modoncorporatelibraries/about-us/adq-appoints-modon-holding-as-master-developer9da8b2e1-38cd-4cbd-9407-29cde183a4c76ec5.jpg',
    'modon-unveils-luxury-residences': '/images/modoncorporatelibraries/about-us/adq-appoints-modon-holding-as-master-developer9da8b2e1-38cd-4cbd-9407-29cde183a4c76ec5.jpg',
    'modon-x-hassan-allam': '/images/modoncorporatelibraries/about-us/modon-holding-and-hassan-allam-holding-to-explore-collaboration-across-large-scale-construction-projects-in-ras-el-hekma51adb851-b4e7-4c6a-a2e1-a8bc0912f',
    'modon_nawayef-village': '/images/modoncorporatelibraries/about-us/modon-sells-out-nawayef-village-the-first-townhouses-on-hudayriyat-island-with-a-total-value-of-aed-2-billion-within-a-few-hoursd950.jpg',
    'hudayriyat-island-at-nawayef-village': '/images/modoncorporatelibraries/about-us/modon-sells-out-nawayef-village-the-first-townhouses-on-hudayriyat-island-with-a-total-value-of-aed-2-billion-within-a-few-hoursd950.jpg',
    'muheira--launch-day': '/images/modoncorporatelibraries/about-us/modon-and-elsewedy-industrial-development-collaborate-to-launch-industrial-zone-for-ras-el-hekma-egyptdb4c.jpg',
    'olympia-resort': '/images/modoncorporatelibraries/news/modon-partners-with-montage-hotels-resorts-to-bring-ultra-luxury-hospitality-brand-to-egypt-s-ras-el-hekma921d.jpg',
    'modon-unveils-muheira': '/images/modoncorporatelibraries/news/modon-unveils-muheira-reem-islandc9e8.jpg',
    'modon-launches-wadeem': '/images/modoncorporatelibraries/news/modon-launches-wadeem-its-first-residential-plots-community-on-hudayriyat-island07423cc2-bdb9-4ab4-86d1-045a05f73885df3d.jpg',
    'modon_hge_16x9': '/images/modoncorporatelibraries/about-us/modon_hge_newprpage16x9_5b604359f20e43ccbbcef407fc2a0c59114a.jpg',
    'maysan': '/images/modoncorporatelibraries/about-us/modon_bashayer_media_centre_web0f069de073ba48b6a29d70c399354fed7c16.webp',
    'lulu-modon': '/images/modoncorporatelibraries/about-us/adq-appoints-modon-holding-as-master-developer9da8b2e1-38cd-4cbd-9407-29cde183a4c76ec5.jpg',
    'image-2': '/images/modoncorporatelibraries/about-us/fact-imageb38a.jpg',
    'image0fedf8d0': '/images/modoncorporatelibraries/about-us/fact-imageb38a.jpg',
    'table.jpg': '/images/modoncorporatelibraries/about-us/fact-imageb38a.jpg',
    't.jpg': '/images/modoncorporatelibraries/about-us/fact-imageb38a.jpg',
    'financial_results': '/images/modoncorporatelibraries/about-us/fact-imageb38a.jpg',
}

def resolve_asset(url):
    if not url or (url.startswith('http') and not 'modon' in url) or url.startswith('data:') or url.startswith('javascript:'):
        return url
    
    clean = url.replace('"', '').replace("'", '').split('?')[0]
    if clean.startswith('https://www.modon.com/') or clean.startswith('https://modon-aut.sitefinity.cloud/'):
        clean = re.sub(r'https?://[^/]+/', '', clean)
    
    # Remove ../, ./, leading slashes
    while clean.startswith('../') or clean.startswith('./') or clean.startswith('/'):
        clean = clean.lstrip('.').lstrip('/')
    
    lookup = '/' + clean.lower()
    if lookup in public_files:
        return public_files[lookup]
    
    base = os.path.basename(clean).lower()
    for k, v in SEMANTIC_MAP.items():
        if k in base:
            return v
            
    if base in public_files:
        return public_files[base]
    
    base_no_hash = re.sub(r'[a-f0-9]{4,36}(\.[a-zA-Z0-9]+)$', r'\1', base)
    if base_no_hash in public_files:
        return public_files[base_no_hash]
    
    base_norm = base.replace('-', '').replace('_', '')
    if base_norm in public_files:
        return public_files[base_norm]
        
    if 'bill' in base and 'regan' in base:
        return '/images/modoncorporatelibraries/about-us/bill-o-regan97bd.jpg'
    
    return '/' + clean

def clean_svg_attrs(jsx):
    jsx = re.sub(r'\bxmlns:xlink\b', 'xmlnsXlink', jsx)
    jsx = re.sub(r'\bxml:space\b', 'xmlSpace', jsx)
    jsx = re.sub(r'\bclip-path\b', 'clipPath', jsx)
    jsx = re.sub(r'\bclip-rule\b', 'clipRule', jsx)
    jsx = re.sub(r'\bfill-rule\b', 'fillRule', jsx)
    jsx = re.sub(r'\bstroke-width\b', 'strokeWidth', jsx)
    jsx = re.sub(r'\bstop-color\b', 'stopColor', jsx)
    jsx = re.sub(r'\bstop-opacity\b', 'stopOpacity', jsx)
    jsx = re.sub(r'\bstroke-miterlimit\b', 'strokeMiterlimit', jsx)
    jsx = re.sub(r'\bstroke-dasharray\b', 'strokeDasharray', jsx)
    jsx = re.sub(r'\bstroke-dashoffset\b', 'strokeDashoffset', jsx)
    jsx = re.sub(r'\bstroke-linecap\b', 'strokeLinecap', jsx)
    jsx = re.sub(r'\bstroke-linejoin\b', 'strokeLinejoin', jsx)
    jsx = re.sub(r'\bfill-opacity\b', 'fillOpacity', jsx)
    jsx = re.sub(r'\bcolor-interpolation-filters\b', 'colorInterpolationFilters', jsx)
    return jsx

def css_to_jsx_style(style_str):
    if not style_str or not style_str.strip():
        return "{{}}"
    parts = [p.strip() for p in style_str.split(';') if p.strip()]
    items = []
    for part in parts:
        if ':' not in part:
            continue
        k, v = part.split(':', 1)
        k = k.strip()
        v = v.strip()
        k_parts = k.split('-')
        camel_k = k_parts[0] + ''.join(x.capitalize() for x in k_parts[1:])
        v_clean = v.replace("'", "\\'").replace('"', '\\"')
        items.append(f"{camel_k}: '{v_clean}'")
    return "{{ " + ", ".join(items) + " }}"

def convert_html_to_jsx(html):
    html = html.replace('bill-o"regan', 'bill-o-regan').replace('bill-o\'regan', 'bill-o-regan')
    html = re.sub(r'<div\b[^>]*class(?:Name)?="[^"]*g-recaptcha[^"]*"[^>]*>.*?<\/div>', '', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<input\b[^>]*name="ReCaptchaResponse"[^>]*\/?>', '', html, flags=re.IGNORECASE)
    jsx = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '{/* script removed */}', html, flags=re.IGNORECASE|re.DOTALL)
    jsx = re.sub(r'<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>', '{/* style removed */}', jsx, flags=re.IGNORECASE|re.DOTALL)
    
    jsx = jsx.replace('class="', 'className="')
    jsx = jsx.replace('for="', 'htmlFor="')
    jsx = jsx.replace('tabindex=', 'tabIndex=')
    jsx = jsx.replace('autocomplete=', 'autoComplete=')
    jsx = jsx.replace('fetchpriority=', 'fetchPriority=')
    jsx = jsx.replace('onclick=', 'onClick=')
    jsx = jsx.replace('allowfullscreen', 'allowFullScreen')
    jsx = jsx.replace('frameborder="0"', 'frameBorder="0"')
    jsx = jsx.replace('maxlength=', 'maxLength=')
    jsx = jsx.replace('minlength=', 'minLength=')
    jsx = jsx.replace('playsinline', 'playsInline')
    jsx = jsx.replace('selected="selected"', 'defaultValue={true}')
    jsx = jsx.replace('disabled="disabled"', 'disabled={true}')
    jsx = jsx.replace('checked="checked"', 'defaultChecked={true}')
    
    jsx = clean_svg_attrs(jsx)
    
    def replace_style(match):
        style_val = match.group(1)
        return f"style={css_to_jsx_style(style_val)}"
    
    jsx = re.sub(r'style="([^"]*)"', replace_style, jsx)
    
    def close_tag(match):
        tag = match.group(0)
        if not tag.endswith('/>') and not tag.endswith('/ >'):
            return tag[:-1] + ' />'
        return tag
    
    jsx = re.sub(r'<(img|input|br|hr|meta|link)\b[^>]*>', close_tag, jsx, flags=re.IGNORECASE)
    
    # Fix and resolve all asset attributes
    def resolve_attr_match(m):
        attr = m.group(1)
        url = m.group(2)
        resolved = resolve_asset(url)
        return f'{attr}="{resolved}"'
    
    jsx = re.sub(r'\b(src|data-dsrc|data-msrc)=["\']([^"\']*)["\']', resolve_attr_match, jsx)
    
    # Synchronize data-dsrc with resolved src if data-dsrc does not exist
    def fix_img_tags(match):
        tag = match.group(0)
        src_m = re.search(r'src="([^"]*)"', tag)
        if src_m:
            src_val = src_m.group(1)
            # If data-dsrc is present, ensure it equals resolved src_val
            tag = re.sub(r'data-dsrc="[^"]*"', f'data-dsrc="{src_val}"', tag)
            # If data-msrc is empty or not in public, fallback to src_val
            msrc_m = re.search(r'data-msrc="([^"]*)"', tag)
            if msrc_m and (not msrc_m.group(1) or not os.path.exists(os.path.join('public', msrc_m.group(1).lstrip('/')))):
                tag = re.sub(r'data-msrc="[^"]*"', f'data-msrc="{src_val}"', tag)
        return tag
    
    jsx = re.sub(r'<img\b[^>]*>', fix_img_tags, jsx)
    
    # Synchronize data-dsrc and data-msrc on video tags
    def fix_video_tags(match):
        tag = match.group(0)
        src_m = re.search(r'src="([^"]*)"', tag)
        if src_m:
            src_val = src_m.group(1)
            tag = re.sub(r'data-dsrc="[^"]*"', f'data-dsrc="{src_val}"', tag)
            msrc_m = re.search(r'data-msrc="([^"]*)"', tag)
            if msrc_m and (not msrc_m.group(1) or not os.path.exists(os.path.join('public', msrc_m.group(1).lstrip('/')))):
                tag = re.sub(r'data-msrc="[^"]*"', f'data-msrc="{src_val}"', tag)
        return tag
    
    jsx = re.sub(r'<video\b[^>]*>', fix_video_tags, jsx)
    
    # Fix doc hrefs
    def resolve_href_match(m):
        url = m.group(1)
        if url.startswith('docs/') or url.startswith('../docs/') or url.startswith('/docs/'):
            resolved = resolve_asset(url)
            return f'href="{resolved}"'
        return m.group(0)
    
    jsx = re.sub(r'\bhref=["\']([^"\']*)["\']', resolve_href_match, jsx)
    
    # Clean React internal routes
    route_replacements = [
        ('href="home.html"', 'href="/"'),
        ('href="/home.html"', 'href="/"'),
        ('href="index-2.html"', 'href="/"'),
        ('href="/index-2.html"', 'href="/"'),
        ('href="index.html"', 'href="/"'),
        ('href="/index.html"', 'href="/"'),
        ('href="real-estate.html"', 'href="/real-estate"'),
        ('href="/real-estate.html"', 'href="/real-estate"'),
        ('href="hospitality.html"', 'href="/hospitality"'),
        ('href="/hospitality.html"', 'href="/hospitality"'),
        ('href="events-tourism.html"', 'href="/events-tourism"'),
        ('href="/events-tourism.html"', 'href="/events-tourism"'),
        ('href="asset-investment-management.html"', 'href="/asset-investment-management"'),
        ('href="/asset-investment-management.html"', 'href="/asset-investment-management"'),
        ('href="destinations.html"', 'href="/destinations"'),
        ('href="/destinations.html"', 'href="/destinations"'),
        ('href="contact-us.html"', 'href="/contact-us"'),
        ('href="/contact-us.html"', 'href="/contact-us"'),
        ('href="terms-and-conditions.html"', 'href="/terms-and-conditions"'),
        ('href="/terms-and-conditions.html"', 'href="/terms-and-conditions"'),
        ('href="privacy-policy.html"', 'href="/privacy-policy"'),
        ('href="/privacy-policy.html"', 'href="/privacy-policy"'),
        ('href="about-modon/about-us.html"', 'href="/about-modon/about-us"'),
        ('href="/about-modon/about-us.html"', 'href="/about-modon/about-us"'),
        ('href="about-modon/careers.html"', 'href="/about-modon/careers"'),
        ('href="/about-modon/careers.html"', 'href="/about-modon/careers"'),
        ('href="about-modon/investor-relations.html"', 'href="/about-modon/investor-relations"'),
        ('href="/about-modon/investor-relations.html"', 'href="/about-modon/investor-relations"'),
        ('href="about-modon/media-centre.html"', 'href="/about-modon/media-centre"'),
        ('href="/about-modon/media-centre.html"', 'href="/about-modon/media-centre"'),
        ('href="about-modon/procurement.html"', 'href="/about-modon/procurement"'),
        ('href="/about-modon/procurement.html"', 'href="/about-modon/procurement"'),
        ('href="about-modon/whistleblowing.html"', 'href="/about-modon/whistleblowing"'),
        ('href="/about-modon/whistleblowing.html"', 'href="/about-modon/whistleblowing"'),
        ('href="real-estate/al-naseem-community.html"', 'href="/real-estate/al-naseem-community"'),
        ('href="/real-estate/al-naseem-community.html"', 'href="/real-estate/al-naseem-community"'),
        ('href="real-estate/bashayer.html"', 'href="/real-estate/bashayer"'),
        ('href="/real-estate/bashayer.html"', 'href="/real-estate/bashayer"'),
        ('href="real-estate/hudayriyat-golf-estates.html"', 'href="/real-estate/hudayriyat-golf-estates"'),
        ('href="/real-estate/hudayriyat-golf-estates.html"', 'href="/real-estate/hudayriyat-golf-estates"'),
        ('href="real-estate/muheira.html"', 'href="/real-estate/muheira"'),
        ('href="/real-estate/muheira.html"', 'href="/real-estate/muheira"'),
        ('href="real-estate/nawayef-east.html"', 'href="/real-estate/nawayef-east"'),
        ('href="/real-estate/nawayef-east.html"', 'href="/real-estate/nawayef-east"'),
        ('href="real-estate/nawayef-parkviews.html"', 'href="/real-estate/nawayef-parkviews"'),
        ('href="/real-estate/nawayef-parkviews.html"', 'href="/real-estate/nawayef-parkviews"'),
        ('href="real-estate/nawayef-village.html"', 'href="/real-estate/nawayef-village"'),
        ('href="/real-estate/nawayef-village.html"', 'href="/real-estate/nawayef-village"'),
        ('href="real-estate/tara-park.html"', 'href="/real-estate/tara-park"'),
        ('href="/real-estate/tara-park.html"', 'href="/real-estate/tara-park"'),
        ('href="real-estate/ras-el-hekma.html"', 'href="/real-estate/ras-el-hekma"'),
        ('href="/real-estate/ras-el-hekma.html"', 'href="/real-estate/ras-el-hekma"'),
        ('href="real-estate/blog.html"', 'href="/real-estate/blog"'),
        ('href="/real-estate/blog.html"', 'href="/real-estate/blog"'),
    ]
    for old_r, new_r in route_replacements:
        jsx = jsx.replace(old_r, new_r)
    
    jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)
    return jsx

def extract_main_content(html):
    header_end = html.find('<!-- header section ends here -->')
    if header_end != -1:
        start_idx = header_end + len('<!-- header section ends here -->')
    else:
        header_tag_end = html.find('</header>')
        if header_tag_end != -1:
            start_idx = header_tag_end + len('</header>')
        else:
            start_idx = 0
            
    footer_start = html.find('<!-- footer starts here -->')
    if footer_start != -1:
        end_idx = footer_start
    else:
        footer_tag_start = html.find('<footer')
        if footer_tag_start != -1:
            end_idx = footer_tag_start
        else:
            end_idx = len(html)
            
    return html[start_idx:end_idx]
