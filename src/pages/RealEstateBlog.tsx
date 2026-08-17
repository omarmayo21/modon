// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RealEstateBlog() {
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

        

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="content-wrapper">
            <Header />
             
 





    <link rel="preload" href="../ResourcePackages/ModonCorporate/Assets/src/Assets/css/blog-styles30f4.css?v=3" as="style" onload="this.onload=null;this.rel='stylesheet'" />
    <noscript><link rel="stylesheet" href="../ResourcePackages/ModonCorporate/Assets/src/Assets/css/blog-styles30f4.css?v=3" /></noscript>
	<section className="blog-hero">
			<div className="blog-hero__background">
				<img src="/images/modoncorporatelibraries/about-us/blogherod2ac.png" alt="Modon Blog" loading="lazy" />
			</div>
		<div className="blog-hero__overlay"></div>
		<div className="blog-hero__breadcrumbs container">
			<div className="row">
				<div className="col-sm-12">
					<a href="../index-2.html">Home</a>
					<span className="blog-hero__breadcrumbs-separator">/</span>
					<a href="../real-estate.html">Real Estate</a>
					<span className="blog-hero__breadcrumbs-separator">/</span>
					<span>Blog</span>
				</div>
			</div>
		</div>
		<div className="blog-hero__content container">
			<div className="row">
				<div className="col-sm-12">
					<h1 className="blog-hero__title">Modon Blogs</h1>
					<div className="blog-filter" id="blogFilterBar">
							<div className="blog-filter__select-wrapper" data-name="year" data-placeholder="Year" data-value="">
		<button className="blog-filter__trigger" type="button"
				aria-haspopup="listbox" aria-expanded="false">
			<span className="blog-filter__label">Year</span>
			<svg className="blog-filter__chevron" xmlns="http://www.w3.org/2000/svg"
				 width="14" height="8" viewBox="0 0 14 8" fill="none">
				<path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</button>
		<ul className="blog-filter__options" role="listbox" aria-label="Filter by Year">
			<li className="blog-filter__option blog-filter__option--selected"
				role="option" data-value="" aria-selected="true">Year</li>
				<li className="blog-filter__option"
					role="option" data-value="2026" aria-selected="false">2026</li>
		</ul>
	</div>

							<div className="blog-filter__select-wrapper" data-name="month" data-placeholder="Month" data-value="">
		<button className="blog-filter__trigger" type="button"
				aria-haspopup="listbox" aria-expanded="false">
			<span className="blog-filter__label">Month</span>
			<svg className="blog-filter__chevron" xmlns="http://www.w3.org/2000/svg"
				 width="14" height="8" viewBox="0 0 14 8" fill="none">
				<path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</button>
		<ul className="blog-filter__options" role="listbox" aria-label="Filter by Month">
			<li className="blog-filter__option blog-filter__option--selected"
				role="option" data-value="" aria-selected="true">Month</li>
				<li className="blog-filter__option"
					role="option" data-value="1" aria-selected="false">January</li>
				<li className="blog-filter__option"
					role="option" data-value="2" aria-selected="false">February</li>
				<li className="blog-filter__option"
					role="option" data-value="3" aria-selected="false">March</li>
				<li className="blog-filter__option"
					role="option" data-value="4" aria-selected="false">April</li>
				<li className="blog-filter__option"
					role="option" data-value="5" aria-selected="false">May</li>
				<li className="blog-filter__option"
					role="option" data-value="6" aria-selected="false">June</li>
				<li className="blog-filter__option"
					role="option" data-value="7" aria-selected="false">July</li>
				<li className="blog-filter__option"
					role="option" data-value="8" aria-selected="false">August</li>
		</ul>
	</div>

							<div className="blog-filter__select-wrapper" data-name="category" data-placeholder="Category" data-value="">
		<button className="blog-filter__trigger" type="button"
				aria-haspopup="listbox" aria-expanded="false">
			<span className="blog-filter__label">Category</span>
			<svg className="blog-filter__chevron" xmlns="http://www.w3.org/2000/svg"
				 width="14" height="8" viewBox="0 0 14 8" fill="none">
				<path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</button>
		<ul className="blog-filter__options" role="listbox" aria-label="Filter by Category">
			<li className="blog-filter__option blog-filter__option--selected"
				role="option" data-value="" aria-selected="true">Category</li>
				<li className="blog-filter__option"
					role="option" data-value="real-estate-market" aria-selected="false">Real Estate Market</li>
		</ul>
	</div>

					</div>
				</div>
			</div>
		</div>
	</section>
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<nav className="blog-pills" aria-label="Blog categories">
							<a href="blog73f3.html?category=real-estate-market" className="blog-pills__item">
								Real Estate Market
							</a>
					</nav>
				</div>
			</div>
		</div>
		<section className="blog-grid">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="blog-grid__list">
								<article className="blog-card">
										<div className="blog-card__image-wrapper">
											<a href="blog/freehold-vs.html">
												<img className="blog-card__image" src="/images/modoncorporatelibraries/about-us/freezone_propertyaaed3a22ae1241d0a7a22b14d989890f0a3d.jpg" alt="Freehold vs. leasehold property: Which property type is right for you?" loading="lazy" />
											</a>
												<span className="blog-card__category">Real Estate Market</span>
										</div>
									<div className="blog-card__body">
										<time className="blog-card__date" datetime="2026-08-05">
											05 Aug, 2026
										</time>
										<h3 className="blog-card__title"><a href="blog/freehold-vs.html">Freehold vs. leasehold property: Which property type is right for you?</a></h3>
										<a href="blog/freehold-vs.html" className="blog-card__read-more">
											Read More <span className="blog-card__read-more-arrow" aria-hidden="true"></span>
										</a>
									</div>
								</article>
								<article className="blog-card">
										<div className="blog-card__image-wrapper">
											<a href="blog/fractional-property-ownership--what-is-it-and-what-are-the-benefits.html">
												<img className="blog-card__image" src="/images/modoncorporatelibraries/about-us/fractional_property_ownershipb3b1.jpg" alt="Fractional property ownership: What is it and what are the benefits?" loading="lazy" />
											</a>
												<span className="blog-card__category">Real Estate Market</span>
										</div>
									<div className="blog-card__body">
										<time className="blog-card__date" datetime="2026-08-05">
											05 Aug, 2026
										</time>
										<h3 className="blog-card__title"><a href="blog/fractional-property-ownership--what-is-it-and-what-are-the-benefits.html">Fractional property ownership: What is it and what are the benefits?</a></h3>
										<a href="blog/fractional-property-ownership--what-is-it-and-what-are-the-benefits.html" className="blog-card__read-more">
											Read More <span className="blog-card__read-more-arrow" aria-hidden="true"></span>
										</a>
									</div>
								</article>
								<article className="blog-card">
										<div className="blog-card__image-wrapper">
											<a href="blog/what-is-tawtheeq-a-complete-guide-in-2026.html">
												<img className="blog-card__image" src="/images/modoncorporatelibraries/about-us/tawtheeq_modon_blogdf65.jpg" alt="What is Tawtheeq - a complete guide in 2026" loading="lazy" />
											</a>
												<span className="blog-card__category">Real Estate Market</span>
										</div>
									<div className="blog-card__body">
										<time className="blog-card__date" datetime="2026-07-24">
											24 Jul, 2026
										</time>
										<h3 className="blog-card__title"><a href="blog/what-is-tawtheeq-a-complete-guide-in-2026.html">What is Tawtheeq - a complete guide in 2026</a></h3>
										<a href="blog/what-is-tawtheeq-a-complete-guide-in-2026.html" className="blog-card__read-more">
											Read More <span className="blog-card__read-more-arrow" aria-hidden="true"></span>
										</a>
									</div>
								</article>
								<article className="blog-card">
										<div className="blog-card__image-wrapper">
											<a href="blog/dari-in-abu-dhabi-everything-you-need-to-know.html">
												<img className="blog-card__image" src="/images/modoncorporatelibraries/about-us/dari_modon_blogce81.jpg" alt="DARI in Abu Dhabi - Everything you need to know" loading="lazy" />
											</a>
												<span className="blog-card__category">Real Estate Market</span>
										</div>
									<div className="blog-card__body">
										<time className="blog-card__date" datetime="2026-07-24">
											24 Jul, 2026
										</time>
										<h3 className="blog-card__title"><a href="blog/dari-in-abu-dhabi-everything-you-need-to-know.html">DARI in Abu Dhabi - Everything you need to know</a></h3>
										<a href="blog/dari-in-abu-dhabi-everything-you-need-to-know.html" className="blog-card__read-more">
											Read More <span className="blog-card__read-more-arrow" aria-hidden="true"></span>
										</a>
									</div>
								</article>
								<article className="blog-card">
										<div className="blog-card__image-wrapper">
											<a href="blog/best-international-schools-in-abu-dhabi.html">
												<img className="blog-card__image" src="/images/modoncorporatelibraries/about-us/modon_hge_schoolse701.jpg" alt="Best international schools in Abu Dhabi" loading="lazy" />
											</a>
												<span className="blog-card__category">Real Estate Market</span>
										</div>
									<div className="blog-card__body">
										<time className="blog-card__date" datetime="2026-06-24">
											24 Jun, 2026
										</time>
										<h3 className="blog-card__title"><a href="blog/best-international-schools-in-abu-dhabi.html">Best international schools in Abu Dhabi</a></h3>
										<a href="blog/best-international-schools-in-abu-dhabi.html" className="blog-card__read-more">
											Read More <span className="blog-card__read-more-arrow" aria-hidden="true"></span>
										</a>
									</div>
								</article>
								<article className="blog-card">
										<div className="blog-card__image-wrapper">
											<a href="blog/hudayriyat-island-abu-dhabi-the-complete-guide-to-visiting-living-and-investing.html">
												<img className="blog-card__image" src="/images/modoncorporatelibraries/about-us/he-hudayriyat-island5b4e.jpg" alt="Hudayriyat Island Abu Dhabi: The Complete Guide to Visiting, Living and Investing" loading="lazy" />
											</a>
												<span className="blog-card__category">Real Estate Market</span>
										</div>
									<div className="blog-card__body">
										<time className="blog-card__date" datetime="2026-06-24">
											24 Jun, 2026
										</time>
										<h3 className="blog-card__title"><a href="blog/hudayriyat-island-abu-dhabi-the-complete-guide-to-visiting-living-and-investing.html">Hudayriyat Island Abu Dhabi: The Complete Guide to Visiting, Living and Investing</a></h3>
										<a href="blog/hudayriyat-island-abu-dhabi-the-complete-guide-to-visiting-living-and-investing.html" className="blog-card__read-more">
											Read More <span className="blog-card__read-more-arrow" aria-hidden="true"></span>
										</a>
									</div>
								</article>
						</div>
					</div>
				</div>
			</div>

			
				<div className="blog-pager">
						<a className="blog-pills__item blog-pills__item--active" href="blog2679.html?page=1">1</a>
						<a className="blog-pills__item" href="blog4658.html?page=2">2</a>
						<a className="blog-pills__item" href="blog9ba9.html?page=3">3</a>
				</div>
		</section>
	{/* script removed */}



    <nav className="re-footer" aria-label="Footer">
        <div className="re-footer__inner">
                <div className="re-footer__section">
                    <div className="re-footer__column">

                        <ul className="re-footer__list">
                                <li className="re-footer__item">
                                    <a href="../real-estate.html" className="re-footer__link">Real Estate</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="blog.html" className="re-footer__link">Blog</a>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="re-footer__section">
                    <div className="re-footer__column">
                            <p className="re-footer__header">Projects</p>

                        <ul className="re-footer__list">
                                <li className="re-footer__item">
                                    <a href="ras-el-hekma.html" className="re-footer__link">Ras El Hekma</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="muheira.html" className="re-footer__link">Muheira</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="nawayef-village.html" className="re-footer__link">Nawayef Village</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="al-naseem-community.html" className="re-footer__link">Al Naseem Community</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="nawayef-parkviews.html" className="re-footer__link">Nawayef Park Views</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="nawayef-east.html" className="re-footer__link">Nawayef East</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="https://www.lazagaleta.com/" className="re-footer__link">La Zagaleta</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="bashayer.html" className="re-footer__link">Bashayer</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="tara-park.html" className="re-footer__link">Tara Park</a>
                                </li>
                                <li className="re-footer__item">
                                    <a href="hudayriyat-golf-estates.html" className="re-footer__link">Hudayriyat Golf Estates</a>
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
