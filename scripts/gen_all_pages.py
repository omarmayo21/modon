import os
import re
import glob
from build_pages import convert_html_to_jsx, extract_main_content

def fix_form_in_jsx(jsx, project_name, redirect_url):
    jsx = re.sub(r'action="https?://[^"]*"', 'action="/api/submit"', jsx)
    jsx = re.sub(r'<input[^>]*name="retURL"[^>]*\/>', f'<input type="hidden" name="redirectUrl" value="{redirect_url}" />', jsx)
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
    
    # Replace from map-outer all the way to the closing div of the map column before </section>
    jsx = re.sub(r'<div class(?:Name)?="map-outer gmap-container">[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)', map_jsx, jsx)
    return jsx

def generate_standard_page(source_path, target_file, component_name, swiper_init=""):
    with open(source_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    content = extract_main_content(html)
    jsx_content = convert_html_to_jsx(content)
    
    header_block = """// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function """ + component_name + """() {
    useEffect(() => {
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

        """ + swiper_init + """

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="content-wrapper">
            <Header />
            """ + jsx_content + """
            <Footer />
        </div>
    );
}
"""
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(header_block)
    print(f"Generated {target_file}")

def generate_project_page(source_path, target_file, component_name, project_title, lat, lng, map_title):
    with open(source_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    
    content = extract_main_content(html)
    jsx_content = convert_html_to_jsx(content)
    jsx_content = fix_form_in_jsx(jsx_content, project_title, f"/real-estate/{project_title.lower().replace(' ', '-')}/thank-you")
    jsx_content = fix_map_in_jsx(jsx_content, lat, lng, map_title)
    
    header_block = """// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function """ + component_name + """() {
    const gallerySwiperRef = useRef<any>(null);
    const spotlightSwiperRef = useRef<any>(null);
    const parkviewSwiperRef = useRef<any>(null);

    useEffect(() => {
        if (typeof (window as any).initModonForm === 'function') {
            (window as any).initModonForm();
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

        if ((window as any).Swiper) {
            spotlightSwiperRef.current = new (window as any).Swiper(".swiper-spotlight", {
                slidesPerView: 1,
                loop: false,
                autoplay: false,
            });

            parkviewSwiperRef.current = new (window as any).Swiper(".swiper-parkview", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: false,
                navigation: {
                    nextEl: ".parkview-next, #parkviewNext",
                    prevEl: ".parkview-prev, #parkviewPrev"
                },
                breakpoints: {
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 }
                }
            });

            gallerySwiperRef.current = new (window as any).Swiper(".swiper-gallery", {
                slidesPerView: 1.2,
                spaceBetween: 16,
                loop: true,
                centeredSlides: true,
                navigation: {
                    nextEl: ".gallery-next, #galleryNext",
                    prevEl: ".gallery-prev, #galleryPrev"
                },
                breakpoints: {
                    768: { slidesPerView: 2.2, spaceBetween: 24, centeredSlides: false },
                    1024: { slidesPerView: 3.2, spaceBetween: 30, centeredSlides: false }
                }
            });
        }

        if ((window as any).AOS) {
            (window as any).AOS.init({ duration: 1200, once: true });
        }

        const muteBtns = document.querySelectorAll('.mute-btn');
        const handleMuteToggle = (e: Event) => {
            const btn = e.currentTarget as HTMLElement;
            const video = btn.closest('.image-outer')?.querySelector('video') as HTMLVideoElement;
            if (video) {
                video.muted = !video.muted;
                btn.classList.toggle('unmute', !video.muted);
                btn.classList.toggle('mute', video.muted);
            }
        };
        muteBtns.forEach(btn => btn.addEventListener('click', handleMuteToggle));

        return () => {
            window.removeEventListener('resize', handleResize);
            if (spotlightSwiperRef.current?.destroy) spotlightSwiperRef.current.destroy(true, true);
            if (parkviewSwiperRef.current?.destroy) parkviewSwiperRef.current.destroy(true, true);
            if (gallerySwiperRef.current?.destroy) gallerySwiperRef.current.destroy(true, true);
            muteBtns.forEach(btn => btn.removeEventListener('click', handleMuteToggle));
        };
    }, []);

    return (
        <div className="content-wrapper">
            <Header />
            """ + jsx_content + """
            <Footer />
        </div>
    );
}
"""
    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(header_block)
    print(f"Generated {target_file}")

# Standard Pages
generate_standard_page('../www.modon.com/real-estate.html', 'src/pages/RealEstate.tsx', 'RealEstate')
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

print("All pages regenerated successfully.")
