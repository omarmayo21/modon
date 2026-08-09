import os
import re

def html_to_jsx(html):
    # Convert class to className
    jsx = html.replace('class="', 'className="')
    # Convert for to htmlFor
    jsx = jsx.replace('for="', 'htmlFor="')
    # Convert HTML comments to JSX comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx)
    # Close input tags
    jsx = re.sub(r'(<input[^>]*)(?<!/)>', r'\1 />', jsx)
    # Close img tags
    jsx = re.sub(r'(<img[^>]*)(?<!/)>', r'\1 />', jsx)
    # Fix selected="selected"
    jsx = jsx.replace('selected="selected"', 'defaultValue={true}')
    # Fix disabled="disabled"
    jsx = jsx.replace('disabled="disabled"', 'disabled={true}')
    # Fix readonly="readonly"
    jsx = jsx.replace('readonly="readonly"', 'readOnly={true}')
    # Fix checked="checked"
    jsx = jsx.replace('checked="checked"', 'defaultChecked={true}')
    # Fix type=hidden to type="hidden"
    jsx = jsx.replace('type=hidden', 'type="hidden"')
    # Fix maxlength to maxLength
    jsx = jsx.replace('maxlength="', 'maxLength="')
    
    # Remove recaptcha
    jsx = re.sub(r'<div className="g-recaptcha"[^>]*></div>', '', jsx)
    jsx = re.sub(r'<input type="hidden" className="ReCaptchaResponse"[^>]*/>', '', jsx)
    
    return jsx

def extract_form(html_path):
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    match = re.search(r'<form class="form contact" id="generic-project-form".*?</form>', html, flags=re.DOTALL)
    if match:
        form_html = match.group(0)
        return html_to_jsx(form_html)
    return None

def update_tsx(tsx_path, new_form_jsx):
    with open(tsx_path, 'r', encoding='utf-8') as f:
        tsx = f.read()
    
    new_tsx = re.sub(r'<form className="form contact" id="generic-project-form".*?</form>', new_form_jsx, tsx, flags=re.DOTALL)
    
    with open(tsx_path, 'w', encoding='utf-8') as f:
        f.write(new_tsx)

# Ras El Hekma
reh_html = r"d:\front end dev\modon\modon\www.modon.com\real-estate\ras-el-hekma.html"
reh_tsx = r"d:\front end dev\modon\modon\react-app\src\pages\RasElHekma.tsx"
new_reh_form = extract_form(reh_html)
if new_reh_form:
    print("Found Ras El Hekma form!")
    update_tsx(reh_tsx, new_reh_form)

# Contact Us
cu_html = r"d:\front end dev\modon\modon\www.modon.com\contact-us.html"
cu_tsx = r"d:\front end dev\modon\modon\react-app\src\pages\ContactUs.tsx"
new_cu_form = extract_form(cu_html)
if new_cu_form:
    print("Found Contact Us form!")
    update_tsx(cu_tsx, new_cu_form)
