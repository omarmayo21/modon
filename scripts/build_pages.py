import os
import re
import glob

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
    # 1. Remove scripts and styles
    jsx = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '{/* script removed */}', html, flags=re.IGNORECASE|re.DOTALL)
    jsx = re.sub(r'<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>', '{/* style removed */}', jsx, flags=re.IGNORECASE|re.DOTALL)
    
    # 2. Standard attribute renames
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
    
    # 3. Clean SVG attributes
    jsx = clean_svg_attrs(jsx)
    
    # 4. Handle style="..." attributes
    def replace_style(match):
        style_val = match.group(1)
        return f"style={css_to_jsx_style(style_val)}"
    
    jsx = re.sub(r'style="([^"]*)"', replace_style, jsx)
    
    # 5. Fix self-closing tags
    def close_tag(match):
        tag = match.group(0)
        if not tag.endswith('/>') and not tag.endswith('/ >'):
            return tag[:-1] + ' />'
        return tag
    
    jsx = re.sub(r'<(img|input|br|hr|meta|link)\b[^>]*>', close_tag, jsx, flags=re.IGNORECASE)
    
    # 6. Fix asset paths
    jsx = jsx.replace('src="../', 'src="/')
    jsx = jsx.replace('href="../', 'href="/')
    jsx = jsx.replace('src="./', 'src="/')
    jsx = jsx.replace('href="./', 'href="/')
    jsx = jsx.replace('data-dsrc="../', 'data-dsrc="/')
    jsx = jsx.replace('data-msrc="../', 'data-msrc="/')
    jsx = jsx.replace('data-dsrc="./', 'data-dsrc="/')
    jsx = jsx.replace('data-msrc="./', 'data-msrc="/')
    jsx = jsx.replace('data-dsrc="images/', 'data-dsrc="/images/')
    jsx = jsx.replace('data-msrc="images/', 'data-msrc="/images/')
    jsx = jsx.replace('data-dsrc="videos/', 'data-dsrc="/videos/')
    jsx = jsx.replace('data-msrc="videos/', 'data-msrc="/videos/')
    
    # Prefix relative images/videos/ResourcePackages
    jsx = re.sub(r'(src|href)=["\'](images/[^"\']*)["\']', r'\1="/\2"', jsx)
    jsx = re.sub(r'(src|href)=["\'](videos/[^"\']*)["\']', r'\1="/\2"', jsx)
    jsx = re.sub(r'(src|href)=["\'](ResourcePackages/[^"\']*)["\']', r'\1="/\2"', jsx)
    jsx = re.sub(r'(src|href)=["\'](docs/[^"\']*)["\']', r'\1="/\2"', jsx)
    
    # 7. Convert HTML routing links to clean React routes
    jsx = jsx.replace('href="home.html"', 'href="/"')
    jsx = jsx.replace('href="/home.html"', 'href="/"')
    jsx = jsx.replace('href="index-2.html"', 'href="/"')
    jsx = jsx.replace('href="/index-2.html"', 'href="/"')
    jsx = jsx.replace('href="index.html"', 'href="/"')
    jsx = jsx.replace('href="/index.html"', 'href="/"')
    jsx = jsx.replace('href="real-estate.html"', 'href="/real-estate"')
    jsx = jsx.replace('href="/real-estate.html"', 'href="/real-estate"')
    jsx = jsx.replace('href="hospitality.html"', 'href="/hospitality"')
    jsx = jsx.replace('href="/hospitality.html"', 'href="/hospitality"')
    jsx = jsx.replace('href="events-tourism.html"', 'href="/events-tourism"')
    jsx = jsx.replace('href="/events-tourism.html"', 'href="/events-tourism"')
    jsx = jsx.replace('href="asset-investment-management.html"', 'href="/asset-investment-management"')
    jsx = jsx.replace('href="/asset-investment-management.html"', 'href="/asset-investment-management"')
    jsx = jsx.replace('href="destinations.html"', 'href="/destinations"')
    jsx = jsx.replace('href="/destinations.html"', 'href="/destinations"')
    jsx = jsx.replace('href="contact-us.html"', 'href="/contact-us"')
    jsx = jsx.replace('href="/contact-us.html"', 'href="/contact-us"')
    jsx = jsx.replace('href="terms-and-conditions.html"', 'href="/terms-and-conditions"')
    jsx = jsx.replace('href="/terms-and-conditions.html"', 'href="/terms-and-conditions"')
    jsx = jsx.replace('href="privacy-policy.html"', 'href="/privacy-policy"')
    jsx = jsx.replace('href="/privacy-policy.html"', 'href="/privacy-policy"')
    
    # About Modon links
    jsx = jsx.replace('href="about-modon/about-us.html"', 'href="/about-modon/about-us"')
    jsx = jsx.replace('href="/about-modon/about-us.html"', 'href="/about-modon/about-us"')
    jsx = jsx.replace('href="about-modon/careers.html"', 'href="/about-modon/careers"')
    jsx = jsx.replace('href="/about-modon/careers.html"', 'href="/about-modon/careers"')
    jsx = jsx.replace('href="about-modon/investor-relations.html"', 'href="/about-modon/investor-relations"')
    jsx = jsx.replace('href="/about-modon/investor-relations.html"', 'href="/about-modon/investor-relations"')
    jsx = jsx.replace('href="about-modon/investor-relationsc626.html?inv_tab=fact-sheet"', 'href="/about-modon/investor-relations?tab=fact-sheet"')
    jsx = jsx.replace('href="about-modon/investor-relationsf601.html?inv_tab=financial-information"', 'href="/about-modon/investor-relations?tab=financial-information"')
    jsx = jsx.replace('href="about-modon/investor-relations26ce.html?inv_tab=share-information"', 'href="/about-modon/investor-relations?tab=share-information"')
    jsx = jsx.replace('href="about-modon/investor-relationsf2a6.html?inv_tab=company-announcements"', 'href="/about-modon/investor-relations?tab=company-announcements"')
    jsx = jsx.replace('href="about-modon/investor-relations7e14.html?inv_tab=overview"', 'href="/about-modon/investor-relations?tab=overview"')
    jsx = jsx.replace('href="about-modon/media-centre.html"', 'href="/about-modon/media-centre"')
    jsx = jsx.replace('href="/about-modon/media-centre.html"', 'href="/about-modon/media-centre"')
    jsx = jsx.replace('href="about-modon/procurement.html"', 'href="/about-modon/procurement"')
    jsx = jsx.replace('href="/about-modon/procurement.html"', 'href="/about-modon/procurement"')
    jsx = jsx.replace('href="about-modon/whistleblowing.html"', 'href="/about-modon/whistleblowing"')
    jsx = jsx.replace('href="/about-modon/whistleblowing.html"', 'href="/about-modon/whistleblowing"')
    
    # Real estate projects
    jsx = jsx.replace('href="real-estate/al-naseem-community.html"', 'href="/real-estate/al-naseem-community"')
    jsx = jsx.replace('href="/real-estate/al-naseem-community.html"', 'href="/real-estate/al-naseem-community"')
    jsx = jsx.replace('href="real-estate/bashayer.html"', 'href="/real-estate/bashayer"')
    jsx = jsx.replace('href="/real-estate/bashayer.html"', 'href="/real-estate/bashayer"')
    jsx = jsx.replace('href="real-estate/hudayriyat-golf-estates.html"', 'href="/real-estate/hudayriyat-golf-estates"')
    jsx = jsx.replace('href="/real-estate/hudayriyat-golf-estates.html"', 'href="/real-estate/hudayriyat-golf-estates"')
    jsx = jsx.replace('href="real-estate/muheira.html"', 'href="/real-estate/muheira"')
    jsx = jsx.replace('href="/real-estate/muheira.html"', 'href="/real-estate/muheira"')
    jsx = jsx.replace('href="real-estate/nawayef-east.html"', 'href="/real-estate/nawayef-east"')
    jsx = jsx.replace('href="/real-estate/nawayef-east.html"', 'href="/real-estate/nawayef-east"')
    jsx = jsx.replace('href="real-estate/nawayef-parkviews.html"', 'href="/real-estate/nawayef-parkviews"')
    jsx = jsx.replace('href="/real-estate/nawayef-parkviews.html"', 'href="/real-estate/nawayef-parkviews"')
    jsx = jsx.replace('href="real-estate/nawayef-village.html"', 'href="/real-estate/nawayef-village"')
    jsx = jsx.replace('href="/real-estate/nawayef-village.html"', 'href="/real-estate/nawayef-village"')
    jsx = jsx.replace('href="real-estate/tara-park.html"', 'href="/real-estate/tara-park"')
    jsx = jsx.replace('href="/real-estate/tara-park.html"', 'href="/real-estate/tara-park"')
    jsx = jsx.replace('href="real-estate/ras-el-hekma.html"', 'href="/real-estate/ras-el-hekma"')
    jsx = jsx.replace('href="/real-estate/ras-el-hekma.html"', 'href="/real-estate/ras-el-hekma"')
    jsx = jsx.replace('href="real-estate/blog.html"', 'href="/real-estate/blog"')
    jsx = jsx.replace('href="/real-estate/blog.html"', 'href="/real-estate/blog"')
    
    # 8. Convert HTML comments to JSX comments
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
