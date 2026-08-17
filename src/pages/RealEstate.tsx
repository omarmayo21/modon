// @ts-nocheck
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
