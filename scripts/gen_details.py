import glob
import os
import re
import json
from build_pages import convert_html_to_jsx, extract_main_content

# 1. Generate BlogDetail.tsx
blog_articles = {}
for path in glob.glob('../www.modon.com/real-estate/blog/*.html'):
    filename = os.path.basename(path)
    slug = filename.replace('.html', '')
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    content = extract_main_content(html)
    jsx = convert_html_to_jsx(content)
    blog_articles[slug] = jsx

blog_detail_code = """// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BLOG_ARTICLES: Record<string, React.ReactNode> = {
"""

for slug, jsx in blog_articles.items():
    blog_detail_code += f'    "{slug}": (\n        <>\n{jsx}\n        </>\n    ),\n'

blog_detail_code += """};

export default function BlogDetail() {
    const { slug } = useParams<{ slug: string }>();
    const content = slug && BLOG_ARTICLES[slug] ? BLOG_ARTICLES[slug] : null;

    useEffect(() => {
        if ((window as any).AOS) {
            (window as any).AOS.init({ duration: 1200, once: true });
        }
        window.scrollTo(0, 0);
    }, [slug]);

    if (!content) {
        return (
            <div className="content-wrapper">
                <Header />
                <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Article Not Found</h2>
                    <p>The requested blog article could not be found.</p>
                    <Link to="/real-estate/blog" className="btn theme-btn mt-3">Back to Blog</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="content-wrapper">
            <Header />
            {content}
            <Footer />
        </div>
    );
}
"""

with open('src/pages/BlogDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(blog_detail_code)
print("BlogDetail.tsx generated.")

# 2. Generate MediaDetail.tsx
media_articles = {}
for path in glob.glob('../www.modon.com/about-modon/media-centre/details/**/*.html', recursive=True):
    rel = os.path.relpath(path, '../www.modon.com/about-modon/media-centre/details')
    key = rel.replace('\\', '/').replace('.html', '')
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    content = extract_main_content(html)
    jsx = convert_html_to_jsx(content)
    media_articles[key] = jsx

media_detail_code = """// @ts-nocheck
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MEDIA_ARTICLES: Record<string, React.ReactNode> = {
"""

for key, jsx in media_articles.items():
    # normalize key
    clean_key = key.replace('\\', '/')
    media_detail_code += f'    "{clean_key}": (\n        <>\n{jsx}\n        </>\n    ),\n'

media_detail_code += """};

export default function MediaDetail() {
    const params = useParams();
    const splat = params['*'] || '';
    const cleanKey = splat.replace(/\\.html$/, '');
    const content = MEDIA_ARTICLES[cleanKey] || null;

    useEffect(() => {
        if ((window as any).AOS) {
            (window as any).AOS.init({ duration: 1200, once: true });
        }
        window.scrollTo(0, 0);
    }, [splat]);

    if (!content) {
        return (
            <div className="content-wrapper">
                <Header />
                <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Press Release Not Found</h2>
                    <p>The requested media article could not be found.</p>
                    <Link to="/about-modon/media-centre" className="btn theme-btn mt-3">Back to Media Centre</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="content-wrapper">
            <Header />
            {content}
            <Footer />
        </div>
    );
}
"""

with open('src/pages/MediaDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(media_detail_code)
print("MediaDetail.tsx generated.")

# 3. Generate ThankYouProject.tsx
thank_you_code = """// @ts-nocheck
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ThankYouProject() {
    const { project } = useParams<{ project: string }>();
    const formattedTitle = project ? project.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') : 'Modon';

    return (
        <div className="content-wrapper">
            <Header />
            <section className="thankyou-section vh-100 d-flex align-items-center justify-content-center text-center" style={{ minHeight: '70vh', padding: '120px 20px 80px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>Thank You</h1>
                            <p className="lead mb-4" style={{ fontSize: '1.25rem', color: '#555' }}>
                                Thank you for your interest in {formattedTitle}. Our sales advisory team will contact you shortly with more details.
                            </p>
                            <div className="mt-4">
                                <Link to="/" className="btn theme-btn" style={{ padding: '12px 30px', margin: '0 10px' }}>
                                    Back to Home
                                </Link>
                                <Link to="/real-estate" className="btn theme-btn-white" style={{ padding: '12px 30px', margin: '0 10px', background: '#000', color: '#fff' }}>
                                    Explore Properties
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
"""

with open('src/pages/ThankYouProject.tsx', 'w', encoding='utf-8') as f:
    f.write(thank_you_code)
print("ThankYouProject.tsx generated.")
