import os
import re
from build_pages import convert_html_to_jsx, extract_main_content

with open('../www.modon.com/home.html', 'r', encoding='utf-8') as f:
    html = f.read()

content = extract_main_content(html)
jsx_content = convert_html_to_jsx(content)

home_tsx = """// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const spotlightSwiperRef = useRef<any>(null);
    const destSwiperRef = useRef<any>(null);
    const newLaunchesSwiperRef = useRef<any>(null);
    const newLaunchesThumbRef = useRef<any>(null);
    const [cookieDismissed, setCookieDismissed] = useState(false);

    useEffect(() => {
        // Safe React Hero Image Resize Logic
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

        // Initialize Swipers
        if ((window as any).Swiper) {
            spotlightSwiperRef.current = new (window as any).Swiper(".swiper-spotlight", {
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            });

            destSwiperRef.current = new (window as any).Swiper(".swiper-destination", {
                slidesPerView: 1.15,
                spaceBetween: 16,
                loop: false,
                breakpoints: {
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3.2,
                        spaceBetween: 30,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }
            });

            newLaunchesThumbRef.current = new (window as any).Swiper(".swiper-newlaunches-thumb", {
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });

            newLaunchesSwiperRef.current = new (window as any).Swiper(".swiper-newlaunches", {
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: newLaunchesThumbRef.current,
                },
            });
        }

        if ((window as any).AOS) {
            (window as any).AOS.init({ duration: 1200, once: true });
        }

        // Toggle more-details on destination cards
        const moreDetailBtns = document.querySelectorAll('.destination-card .more-details');
        const handleMoreDetailClick = (e: Event) => {
            e.preventDefault();
            const card = (e.currentTarget as HTMLElement).closest('.destination-card');
            if (card) {
                card.classList.toggle('active');
            }
        };
        moreDetailBtns.forEach(btn => btn.addEventListener('click', handleMoreDetailClick));

        return () => {
            window.removeEventListener('resize', handleResize);
            if (spotlightSwiperRef.current?.destroy) spotlightSwiperRef.current.destroy(true, true);
            if (destSwiperRef.current?.destroy) destSwiperRef.current.destroy(true, true);
            if (newLaunchesSwiperRef.current?.destroy) newLaunchesSwiperRef.current.destroy(true, true);
            if (newLaunchesThumbRef.current?.destroy) newLaunchesThumbRef.current.destroy(true, true);
            moreDetailBtns.forEach(btn => btn.removeEventListener('click', handleMoreDetailClick));
        };
    }, []);

    return (
        <div className="content-wrapper">
            <Header />
            """ + jsx_content + """
            <Footer />
            {!cookieDismissed && (
                <section className="cookie-section">
                    <div className="cookie-outer">
                        <p>
                            This website uses cookies. We use cookies to make sure you get the best experience on our website. Please read our privacy and cookie policy.
                        </p>
                        <div className="cookie-btns">
                            <a href="/privacy-policy" className="btn-knowmore">I want more info</a>
                            <button type="button" onClick={() => setCookieDismissed(true)} className="btn btn-cookie-consent">Yes, I accept cookies</button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
"""

with open('src/pages/Home.tsx', 'w', encoding='utf-8') as f:
    f.write(home_tsx)

print("Home.tsx generated.")
