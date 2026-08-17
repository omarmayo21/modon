import os
import re
import glob
from refine_pages import convert_html_to_jsx, extract_main_content, resolve_asset

# 1. Project Page Form and Map handlers
def fix_form_in_jsx(jsx, project_title, redirect_url):
    form_component = f'<ProjectLeadForm projectName="{project_title}" redirectUrl="{redirect_url}" />'
    jsx = re.sub(r'<div className="form-section contactus-form-selector">.*?<div id="Contentplaceholder1_', f'{form_component}\n\n\t\t\t</div>\n\t\t\t<div id="Contentplaceholder1_', jsx, flags=re.DOTALL)
    return jsx

def fix_map_in_jsx(jsx, lat, lng, title, address="Hudayriyat Island - Abu Dhabi"):
    map_jsx = f"""
        <div className="map-outer gmap-container" style={{{{ height: '450px', width: '100%', minHeight: '400px' }}}}>
            <MapContainer center={{[{lat}, {lng}]}} zoom={{13}} scrollWheelZoom={{false}} style={{{{ height: '100%', width: '100%', borderRadius: '12px' }}}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{{s}}.tile.openstreetmap.org/{{z}}/{{x}}/{{y}}.png"
                />
                <Marker position={{[{lat}, {lng}]}}>
                    <Popup>
                        <strong>{title}</strong><br />{address}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    """
    jsx = re.sub(r'<div class(?:Name)?="map-outer gmap-container">[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)', map_jsx, jsx)
    return jsx

# 2. Generator for Standard Pages
def generate_standard_page(source_path, target_file, component_name, custom_effects=""):
    with open(source_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    content = extract_main_content(html)
    jsx_content = convert_html_to_jsx(content)
    
    header_block = f"""// @ts-nocheck
import React, {{ useEffect, useRef, useState }} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function {component_name}() {{
    useEffect(() => {{
        const handleResize = () => {{
            const screenWidth = window.innerWidth;
            const heroImgs = document.querySelectorAll('.bannerimage');
            heroImgs.forEach(img => {{
                const dsrc = img.getAttribute('data-dsrc');
                const msrc = img.getAttribute('data-msrc');
                const newSrc = (screenWidth < 1025 && msrc) ? msrc : dsrc;
                if (newSrc && img.getAttribute('src') !== newSrc) {{
                    img.setAttribute('src', newSrc);
                }}
            }});
        }};
        handleResize();
        window.addEventListener('resize', handleResize);

        if ((window as any).AOS) {{
            (window as any).AOS.init({{ duration: 1200, once: true }});
        }}

        {custom_effects}

        return () => {{
            window.removeEventListener('resize', handleResize);
        }};
    }}, []);

    return (
        <div className="content-wrapper">
            <Header />
            {jsx_content}
            <Footer />
        </div>
    );
}}
"""
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(header_block)
    print(f"Generated {target_file}")

# 3. Generator for Real Estate Project Pages
def generate_project_page(source_path, target_file, component_name, project_title, lat, lng, map_title):
    with open(source_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    content = extract_main_content(html)
    jsx_content = convert_html_to_jsx(content)
    slug = project_title.lower().replace(' ', '-')
    jsx_content = fix_form_in_jsx(jsx_content, project_title, f"/real-estate/{slug}/thank-you")
    jsx_content = fix_map_in_jsx(jsx_content, lat, lng, map_title)
    
    header_block = f"""// @ts-nocheck
import React, {{ useEffect, useRef }} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectLeadForm from '../components/ProjectLeadForm';
import {{ MapContainer, TileLayer, Marker, Popup }} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({{
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
}});
L.Marker.prototype.options.icon = DefaultIcon;

export default function {component_name}() {{
    const gallerySwiperRef = useRef<any>(null);
    const spotlightSwiperRef = useRef<any>(null);
    const parkviewSwiperRef = useRef<any>(null);

    useEffect(() => {{
        if (typeof (window as any).initModonForm === 'function') {{
            (window as any).initModonForm();
        }}

        const handleResize = () => {{
            const screenWidth = window.innerWidth;
            const heroImgs = document.querySelectorAll('.bannerimage');
            heroImgs.forEach(img => {{
                const dsrc = img.getAttribute('data-dsrc');
                const msrc = img.getAttribute('data-msrc');
                const newSrc = (screenWidth < 1025 && msrc) ? msrc : dsrc;
                if (newSrc && img.getAttribute('src') !== newSrc) {{
                    img.setAttribute('src', newSrc);
                }}
            }});
        }};
        handleResize();
        window.addEventListener('resize', handleResize);

        if ((window as any).Swiper) {{
            try {{
                spotlightSwiperRef.current = new (window as any).Swiper(".swiper-spotlight", {{
                    slidesPerView: 1,
                    loop: false,
                    autoplay: false,
                }});
            }} catch (e) {{ console.warn(e); }}

            try {{
                parkviewSwiperRef.current = new (window as any).Swiper(".swiper-parkview", {{
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: false,
                    navigation: {{
                        nextEl: ".parkview-next, #parkviewNext",
                        prevEl: ".parkview-prev, #parkviewPrev"
                    }},
                    breakpoints: {{
                        640: {{ slidesPerView: 2, spaceBetween: 20 }},
                        1024: {{ slidesPerView: 3, spaceBetween: 30 }}
                    }}
                }});
            }} catch (e) {{ console.warn(e); }}

            try {{
                gallerySwiperRef.current = new (window as any).Swiper(".swiper-gallery", {{
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                    loop: true,
                    centeredSlides: true,
                    navigation: {{
                        nextEl: ".gallery-next, #galleryNext, .swiper-button-next",
                        prevEl: ".gallery-prev, #galleryPrev, .swiper-button-prev"
                    }},
                    breakpoints: {{
                        768: {{ slidesPerView: 2.2, spaceBetween: 24, centeredSlides: false }},
                        1024: {{ slidesPerView: 3.2, spaceBetween: 30, centeredSlides: false }}
                    }}
                }});
            }} catch (e) {{ console.warn(e); }}
        }}

        if ((window as any).AOS) {{
            (window as any).AOS.init({{ duration: 1200, once: true }});
        }}

        const muteBtns = document.querySelectorAll('.mute-btn');
        const handleMuteToggle = (e: Event) => {{
            const btn = e.currentTarget as HTMLElement;
            const video = btn.closest('.image-outer')?.querySelector('video') as HTMLVideoElement;
            if (video) {{
                video.muted = !video.muted;
                btn.classList.toggle('unmute', !video.muted);
                btn.classList.toggle('mute', video.muted);
            }}
        }};
        muteBtns.forEach(btn => btn.addEventListener('click', handleMuteToggle));

        return () => {{
            window.removeEventListener('resize', handleResize);
            if (spotlightSwiperRef.current?.destroy) spotlightSwiperRef.current.destroy(true, true);
            if (parkviewSwiperRef.current?.destroy) parkviewSwiperRef.current.destroy(true, true);
            if (gallerySwiperRef.current?.destroy) gallerySwiperRef.current.destroy(true, true);
            muteBtns.forEach(btn => btn.removeEventListener('click', handleMuteToggle));
        }};
    }}, []);

    return (
        <div className="content-wrapper">
            <Header />
            {jsx_content}
            <Footer />
        </div>
    );
}}
"""
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(header_block)
    print(f"Generated {target_file}")

# 4. Generate Home.tsx
def generate_home():
    with open('../www.modon.com/home.html', 'r', encoding='utf-8') as f:
        html = f.read()
    content = extract_main_content(html)
    jsx_content = convert_html_to_jsx(content)

    home_tsx = f"""// @ts-nocheck
import React, {{ useEffect, useRef, useState }} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {{
    const spotlightSwiperRef = useRef<any>(null);
    const destSwiperRef = useRef<any>(null);
    const newLaunchesSwiperRef = useRef<any>(null);
    const newLaunchesThumbRef = useRef<any>(null);
    const [cookieDismissed, setCookieDismissed] = useState(false);

    useEffect(() => {{
        const handleResize = () => {{
            const screenWidth = window.innerWidth;
            const heroImgs = document.querySelectorAll('.bannerimage');
            heroImgs.forEach(img => {{
                const dsrc = img.getAttribute('data-dsrc');
                const msrc = img.getAttribute('data-msrc');
                const newSrc = (screenWidth < 1025 && msrc) ? msrc : dsrc;
                if (newSrc && img.getAttribute('src') !== newSrc) {{
                    img.setAttribute('src', newSrc);
                }}
            }});
        }};
        handleResize();
        window.addEventListener('resize', handleResize);

        if ((window as any).Swiper) {{
            try {{
                spotlightSwiperRef.current = new (window as any).Swiper(".swiper-spotlight", {{
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {{
                        delay: 5000,
                        disableOnInteraction: false,
                    }},
                    effect: 'fade',
                    fadeEffect: {{ crossFade: true }}
                }});
            }} catch (e) {{ console.warn(e); }}

            try {{
                destSwiperRef.current = new (window as any).Swiper(".swiper-destination", {{
                    slidesPerView: 1.15,
                    spaceBetween: 16,
                    loop: false,
                    breakpoints: {{
                        768: {{ slidesPerView: 2.2, spaceBetween: 24 }},
                        1024: {{ slidesPerView: 3.2, spaceBetween: 30 }},
                        1440: {{ slidesPerView: 4, spaceBetween: 30 }}
                    }}
                }});
            }} catch (e) {{ console.warn(e); }}

            try {{
                newLaunchesThumbRef.current = new (window as any).Swiper(".swiper-newlaunches-thumb", {{
                    spaceBetween: 10,
                    slidesPerView: 4,
                    freeMode: true,
                    watchSlidesProgress: true,
                }});

                newLaunchesSwiperRef.current = new (window as any).Swiper(".swiper-newlaunches", {{
                    spaceBetween: 10,
                    navigation: {{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }},
                    thumbs: {{
                        swiper: newLaunchesThumbRef.current,
                    }},
                }});
            }} catch (e) {{ console.warn(e); }}
        }}

        if ((window as any).AOS) {{
            (window as any).AOS.init({{ duration: 1200, once: true }});
        }}

        const moreDetailBtns = document.querySelectorAll('.destination-card .more-details');
        const handleMoreDetailClick = (e: Event) => {{
            e.preventDefault();
            const card = (e.currentTarget as HTMLElement).closest('.destination-card');
            if (card) {{
                card.classList.toggle('active');
            }}
        }};
        moreDetailBtns.forEach(btn => btn.addEventListener('click', handleMoreDetailClick));

        return () => {{
            window.removeEventListener('resize', handleResize);
            if (spotlightSwiperRef.current?.destroy) spotlightSwiperRef.current.destroy(true, true);
            if (destSwiperRef.current?.destroy) destSwiperRef.current.destroy(true, true);
            if (newLaunchesSwiperRef.current?.destroy) newLaunchesSwiperRef.current.destroy(true, true);
            if (newLaunchesThumbRef.current?.destroy) newLaunchesThumbRef.current.destroy(true, true);
            moreDetailBtns.forEach(btn => btn.removeEventListener('click', handleMoreDetailClick));
        }};
    }}, []);

    return (
        <div className="content-wrapper">
            <Header />
            {jsx_content}
            <Footer />
            {{!cookieDismissed && (
                <section className="cookie-section">
                    <div className="cookie-outer">
                        <p>
                            This website uses cookies. We use cookies to make sure you get the best experience on our website. Please read our privacy and cookie policy.
                        </p>
                        <div className="cookie-btns">
                            <a href="/privacy-policy" className="btn-knowmore">I want more info</a>
                            <button type="button" onClick={{() => setCookieDismissed(true)}} className="btn btn-cookie-consent">Yes, I accept cookies</button>
                        </div>
                    </div>
                </section>
            )}}
        </div>
    );
}}
"""
    with open('src/pages/Home.tsx', 'w', encoding='utf-8') as f:
        f.write(home_tsx)
    print("Generated src/pages/Home.tsx")

# 5. Generate Dynamic Blog Detail
def generate_blog_detail():
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
    print("Generated src/pages/BlogDetail.tsx")

# 6. Generate Dynamic Media Detail
def generate_media_detail():
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
    print("Generated src/pages/MediaDetail.tsx")

def generate_real_estate_hub():
    code = """// @ts-nocheck
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RealEstate() {
    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            header.classList.add('secondary');
        }

        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const heroImgs = document.querySelectorAll('.bannerimage');
            heroImgs.forEach(img => {
                const dsrc = img.getAttribute('data-dsrc');
                const msrc = img.getAttribute('data-msrc');
                const newSrc = (screenWidth < 1025 && msrc) ? msrc : dsrc;
                if (newSrc && img.getAttribute('src') !== newSrc) {
                    img.setAttribute('src', newSrc);
                }
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        if ((window as any).AOS) {
            (window as any).AOS.init({ duration: 1200, once: true });
        }

        return () => {
            if (header) {
                header.classList.remove('secondary');
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const projects = [
        {
            title: "Ras El Hekma",
            desc: "Ras El Hekma is envisioned as a world-class, next-generation coastal city in Egypt, designed to seamlessly blend urban vibrancy with natural beauty.",
            image: "/images/modoncorporatelibraries/banners/ras-el-hekm-listing377c.webp",
            link: "/real-estate/ras-el-hekma",
            isExternal: false
        },
        {
            title: "Al Naseem Community",
            desc: "Al Naseem is a premier residential sanctuary on Hudayriyat Island featuring luxurious South Californian and Modern styled villas and townhouses.",
            image: "/images/modoncorporatelibraries/real-estate/al-naseem_skyline_1920x1080a151.jpg",
            link: "/real-estate/al-naseem-community",
            isExternal: false
        },
        {
            title: "Bashayer",
            desc: "Bashayer brings an exclusive waterfront living experience to Hudayriyat Island, offering custom-designed luxury villas and residences surrounded by tranquil nature.",
            image: "/images/modoncorporatelibraries/real-estate/bashayer/bashayer-villas-1080x600c5d1.jpg",
            link: "/real-estate/bashayer",
            isExternal: false
        },
        {
            title: "Hudayriyat Golf Estates",
            desc: "An elite golf-front development on Hudayriyat Island, featuring bespoke residences overlooking an international championship golf course.",
            image: "/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/hudayriyat-golf-estate-side-text01aa.jpg",
            link: "/real-estate/hudayriyat-golf-estates",
            isExternal: false
        },
        {
            title: "Muheira",
            desc: "Situated on prestigious Reem Island, Muheira offers refined freehold residences that integrate resort-style amenities with panoramic coastal vistas.",
            image: "/images/modoncorporatelibraries/real-estate/muhiera-b/promo-card/muheira-promocard0516.jpg",
            link: "/real-estate/muheira",
            isExternal: false
        },
        {
            title: "Nawayef East",
            desc: "Perched on the elevated terrain of Hudayriyat Island, Nawayef East features magnificent custom mansions and villas with breathtaking views of the Abu Dhabi skyline.",
            image: "/images/modoncorporatelibraries/real-estate/nawayef-east-hills9749.jpg",
            link: "/real-estate/nawayef-east",
            isExternal: false
        },
        {
            title: "Nawayef Park Views",
            desc: "Nawayef Park Views presents contemporary apartment living on Hudayriyat Island, surrounded by lush parks, landscaped gardens, and dynamic recreational facilities.",
            image: "/images/modoncorporatelibraries/real-estate/nawayef-park-views8e2b.jpg",
            link: "/real-estate/nawayef-parkviews",
            isExternal: false
        },
        {
            title: "Nawayef Village",
            desc: "A distinctive townhouse enclave on Hudayriyat Island that captures the essence of a serene hillside village with walkable neighborhood avenues.",
            image: "/images/modoncorporatelibraries/real-estate/nawayef-village5775.jpg",
            link: "/real-estate/nawayef-village",
            isExternal: false
        },
        {
            title: "Tara Park",
            desc: "A vibrant residential community nestled on Reem Island, offering stylish homes surrounded by lush central parklands and premium family lifestyle facilities.",
            image: "/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-outside-view1f2f.jpg",
            link: "/real-estate/tara-park",
            isExternal: false
        },
        {
            title: "La Zagaleta",
            desc: "Located in Benahavís, Spain, La Zagaleta is one of Europe's most exclusive private country clubs and residential golf estates, renowned for unmatched privacy and luxury.",
            image: "/images/modoncorporatelibraries/about-us/la-zagaleta-cover-2000x1125495f.jpg",
            link: "https://www.lazagaleta.com/",
            isExternal: true
        }
    ];

    return (
        <div className="content-wrapper">
            <Header />
             
            <div>
                <div className="sfContentBlock sf-Long-text">
                    <section className="content-section bannerless-top pb-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="section-title">Creating vibrant cities</h1>
                                </div>
                                <div className="col-sm-12">
                                    <p className="h5">
                                        Modon is a leading real estate company in Abu Dhabi. Our UAE and international real estate portfolio spans the Middle East, Europe and North Africa. Our vision is to be at the forefront of innovation, shaping the future of intelligent, connected living.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div> 

            {/* Real Estate Project Cards Listing Section */}
            <section className="realestate-listing-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12" data-aos="fade-up" data-aos-duration="2000">
                            {projects.map((project, index) => (
                                <div className="card realestate-card" key={index}>
                                    <div className="card-body">
                                        <div className="img-outer">
                                            <img src={project.image} alt={project.title} />
                                        </div>
                                        <div>
                                            <div className="title">{project.title}</div>
                                            <div className="desc">{project.desc}</div>
                                            <a 
                                                href={project.link} 
                                                className="btn btn-sand"
                                                target={project.isExternal ? "_blank" : "_self"}
                                                rel={project.isExternal ? "noopener noreferrer" : undefined}
                                            >
                                                <span>Learn More</span>
                                                <span className="icon"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="row" data-aos="fade-up" data-aos-duration="2000">
                        <div className="col-sm-12">
                            <div className="section-title">Frequently Asked Questions</div>
                            <div className="accordion faq-accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                            Does investing in a Modon property qualify buyers for the 10-year UAE Golden Visa?
                                        </button>
                                    </div>
                                    <div id="collapse-1" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Buyers of properties valued at AED 2 million or more are eligible to apply for the Golden Visa.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
                                            Are Modon properties available for purchase by all nationalities?
                                        </button>
                                    </div>
                                    <div id="collapse-2" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, Modon residential projects located in key investment zones (such as Hudayriyat Island and Al Reem Island) are offered on a freehold basis, allowing full ownership by all nationalities.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
                                            What is the typical payment plan structure Modon offers for off-plan projects?
                                        </button>
                                    </div>
                                    <div id="collapse-3" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Modon generally offers flexible payment plans, with common structures being the 40/60 or 50/50 split, requiring a downpayment (often 10% or 20%) and a final payment upon handover.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
                                            Which Modon projects are located on Reem Island?
                                        </button>
                                    </div>
                                    <div id="collapse-4" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Modon developments on Reem Island include <a href="/real-estate">Reem Hills</a>, <a href="/real-estate/muheira">Muheira</a>,&nbsp;<a href="/real-estate/tara-park">Tara Park</a>, and Maysan.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
                                            Which Modon projects are situated on Hudayriyat Island?
                                        </button>
                                    </div>
                                    <div id="collapse-5" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The company&rsquo;s residential developments on Hudayriyat Island include <a href="/real-estate/al-naseem-community">Al Naseem Community</a>, <a href="/real-estate/bashayer">Bashayer</a>, <a href="/real-estate/hudayriyat-golf-estates">Hudayriyat Golf Estates</a> and several collections under the Nawayef masterplan, such as <a href="/real-estate/nawayef-parkviews">Nawayef Park Views</a>, <a href="/real-estate/nawayef-village">Nawayef Village</a> and <a href="/real-estate/nawayef-east">Nawayef East</a>.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
                                            Does Modon offer investment opportunities outside the UAE?
                                        </button>
                                    </div>
                                    <div id="collapse-6" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, Modon&rsquo;s international portfolio includes major strategic developments, such as the large-scale <a href="/real-estate/ras-el-hekma">Ras El Hekma</a> project in Egypt and La Zagaleta in Spain.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse-7" aria-expanded="true" aria-controls="collapse-7">
                                            What types of residential properties does Modon offer?
                                        </button>
                                    </div>
                                    <div id="collapse-7" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            The company&rsquo;s diverse portfolio ranges from modern apartments and townhouses to luxury villas and mansions.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse-8" aria-expanded="true" aria-controls="collapse-8">
                                            What are Modon Properties&rsquo; primary areas of development in Abu Dhabi?
                                        </button>
                                    </div>
                                    <div id="collapse-8" className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Modon focuses its core residential development on two prestigious island destinations: Hudayriyat Island and Reem Island.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real Estate Footer Links */}
            <nav className="re-footer" aria-label="Footer">
                <div className="re-footer__inner">
                    <div className="re-footer__section">
                        <div className="re-footer__column">
                            <ul className="re-footer__list">
                                <li className="re-footer__item">
                                    <a href="/real-estate" className="re-footer__link">Real Estate</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="/real-estate/blog" className="re-footer__link">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="re-footer__section">
                        <div className="re-footer__column">
                            <p className="re-footer__header">Projects</p>
                            <ul className="re-footer__list">
                                <li className="re-footer__item">
                                    <a href="/real-estate/ras-el-hekma" className="re-footer__link">Ras El Hekma</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="/real-estate/muheira" className="re-footer__link">Muheira</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="/real-estate/nawayef-village" className="re-footer__link">Nawayef Village</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="/real-estate/al-naseem-community" className="re-footer__link">Al Naseem Community</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="/real-estate/nawayef-parkviews" className="re-footer__link">Nawayef Park Views</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="/real-estate/nawayef-east" className="re-footer__link">Nawayef East</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="https://www.lazagaleta.com/" target="_blank" rel="noopener noreferrer" className="re-footer__link">La Zagaleta</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="/real-estate/bashayer" className="re-footer__link">Bashayer</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="/real-estate/tara-park" className="re-footer__link">Tara Park</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="/real-estate/hudayriyat-golf-estates" className="re-footer__link">Hudayriyat Golf Estates</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
 
            <Footer />
        </div>
    );
}
"""
    with open('src/pages/RealEstate.tsx', 'w', encoding='utf-8') as f:
        f.write(code)
    print("Generated src/pages/RealEstate.tsx")

# Execute Generators
generate_home()

# Standard Pages
generate_real_estate_hub()
generate_standard_page('../www.modon.com/hospitality.html', 'src/pages/Hospitality.tsx', 'Hospitality')
generate_standard_page('../www.modon.com/events-tourism.html', 'src/pages/EventsTourism.tsx', 'EventsTourism')
generate_standard_page('../www.modon.com/asset-investment-management.html', 'src/pages/AssetInvestmentManagement.tsx', 'AssetInvestmentManagement')
generate_standard_page('../www.modon.com/destinations.html', 'src/pages/Destinations.tsx', 'Destinations')
generate_standard_page('../www.modon.com/about-modon/careers.html', 'src/pages/Careers.tsx', 'Careers')
generate_standard_page('../www.modon.com/about-modon/investor-relations.html', 'src/pages/InvestorRelations.tsx', 'InvestorRelations')
generate_standard_page('../www.modon.com/about-modon/media-centre.html', 'src/pages/MediaCentre.tsx', 'MediaCentre')
generate_standard_page('../www.modon.com/about-modon/procurement.html', 'src/pages/Procurement.tsx', 'Procurement')
generate_standard_page('../www.modon.com/about-modon/whistleblowing.html', 'src/pages/Whistleblowing.tsx', 'Whistleblowing')
generate_standard_page('../www.modon.com/terms-and-conditions.html', 'src/pages/TermsAndConditions.tsx', 'TermsAndConditions')
generate_standard_page('../www.modon.com/privacy-policy.html', 'src/pages/PrivacyPolicy.tsx', 'PrivacyPolicy')
generate_standard_page('../www.modon.com/real-estate/blog.html', 'src/pages/RealEstateBlog.tsx', 'RealEstateBlog')

# Real Estate Projects
generate_project_page('../www.modon.com/real-estate/al-naseem-community.html', 'src/pages/AlNaseem.tsx', 'AlNaseem', 'Al Naseem', 24.413063, 54.351577, 'Modon Sales Centre Hudayriyat Island')
generate_project_page('../www.modon.com/real-estate/bashayer.html', 'src/pages/Bashayer.tsx', 'Bashayer', 'Bashayer', 24.413063, 54.351577, 'Modon Sales Centre Hudayriyat Island')
generate_project_page('../www.modon.com/real-estate/hudayriyat-golf-estates.html', 'src/pages/HudayriyatGolfEstates.tsx', 'HudayriyatGolfEstates', 'Hudayriyat Golf Estates', 24.413063, 54.351577, 'Modon Sales Centre Hudayriyat Island')
generate_project_page('../www.modon.com/real-estate/muheira.html', 'src/pages/Muheira.tsx', 'Muheira', 'Muheira', 24.413063, 54.351577, 'Modon Sales Centre Hudayriyat Island')
generate_project_page('../www.modon.com/real-estate/nawayef-east.html', 'src/pages/NawayefEast.tsx', 'NawayefEast', 'Nawayef East', 24.413063, 54.351577, 'Modon Sales Centre Hudayriyat Island')
generate_project_page('../www.modon.com/real-estate/nawayef-parkviews.html', 'src/pages/NawayefParkviews.tsx', 'NawayefParkviews', 'Nawayef Park Views', 24.413042, 54.352053, 'Modon Sales Centre Hudayriyat Island')
generate_project_page('../www.modon.com/real-estate/nawayef-village.html', 'src/pages/NawayefVillage.tsx', 'NawayefVillage', 'Nawayef Village', 24.413063, 54.351577, 'Modon Sales Centre Hudayriyat Island')
generate_project_page('../www.modon.com/real-estate/tara-park.html', 'src/pages/TaraPark.tsx', 'TaraPark', 'Tara Park', 24.413063, 54.351577, 'Modon Sales Centre Hudayriyat Island')

generate_blog_detail()
generate_media_detail()

print("All non-protected pages generated and refined successfully.")
