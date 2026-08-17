// @ts-nocheck
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
            try {
                spotlightSwiperRef.current = new (window as any).Swiper(".swiper-spotlight", {
                    slidesPerView: 1,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    effect: 'fade',
                    fadeEffect: { crossFade: true }
                });
            } catch (e) { console.warn(e); }

            try {
                destSwiperRef.current = new (window as any).Swiper(".swiper-destination", {
                    slidesPerView: 1.15,
                    spaceBetween: 16,
                    loop: false,
                    breakpoints: {
                        768: { slidesPerView: 2.2, spaceBetween: 24 },
                        1024: { slidesPerView: 3.2, spaceBetween: 30 },
                        1440: { slidesPerView: 4, spaceBetween: 30 }
                    }
                });
            } catch (e) { console.warn(e); }

            try {
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
            } catch (e) { console.warn(e); }
        }

        if ((window as any).AOS) {
            (window as any).AOS.init({ duration: 1200, once: true });
        }

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
             

	<section className="banner-section no-filter vh-100">
		<div className="swiper swiper-spotlight">
			<div className="swiper-wrapper">

					<div className="swiper-slide">
						<div className="image-outer">
								<img className="bannerimage" src="/images/modoncorporatelibraries/new-images-home/spotlight/ras-el-hekma884a.webp" data-dsrc="/images/modoncorporatelibraries/new-images-home/spotlight/ras-el-hekma884a.webp" data-msrc="/images/modoncorporatelibraries/new-images-home/spotlight/ras-el-hekma884a.webp" alt='Ras El Hekma' />
						</div>
						<div className="details-section">
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="content">

												<a className="btn theme-btn-white " href="/real-estate/ras-el-hekma" target="_self">
													<span>Learn more</span> <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/btnarrowwhite.svg" alt="" />
												</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="image-outer">
								<img className="bannerimage" src="/images/modoncorporatelibraries/banners/ras-el-hekmaeba2.jpeg" data-dsrc="/images/modoncorporatelibraries/banners/ras-el-hekmaeba2.jpeg" data-msrc="/images/modoncorporatelibraries/banners/ras-el-hekmaeba2.jpeg" alt='Ras El Hekma' />
						</div>
						<div className="details-section">
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="content">
												<div className="title"><h1>Ras El Hekma</h1><h2>Timeless Mediterranean Living</h2></div>

												<a className="btn theme-btn-white " href="/real-estate/ras-el-hekma" target="_self">
													<span>Explore Ras El Hekma</span> <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/btnarrowwhite.svg" alt="" />
												</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="image-outer">
								<img className="bannerimage" src="/images/modoncorporatelibraries/banners/hudayriyat-islandf85b.jpeg" data-dsrc="/images/modoncorporatelibraries/banners/hudayriyat-islandf85b.jpeg" data-msrc="/images/modoncorporatelibraries/banners/hudayriyat-islandf85b.jpeg" alt='Hudayriyat-Island' />
						</div>
						<div className="details-section">
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="content">
												<div className="title"><h1>Hudayriyat</h1><h2>Abu Dhabi</h2></div>

												<a className="btn theme-btn-white " href="/real-estate" target="_self">
													<span>Explore Real Estate projects</span> <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/btnarrowwhite.svg" alt="" />
												</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="swiper-slide">
						<div className="image-outer">
								<img className="bannerimage" src="/images/modoncorporatelibraries/banners/la-zagaletab2cc.jpeg" data-dsrc="/images/modoncorporatelibraries/banners/la-zagaletab2cc.jpeg" data-msrc="/images/modoncorporatelibraries/banners/la-zagaletab2cc.jpeg" alt='La Zagaleta' />
						</div>
						<div className="details-section">
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="content">
												<div className="title"><h1>La Zagaleta</h1><h2>Spain</h2></div>

												<a className="btn theme-btn-white " href="/real-estate" target="_self">
													<span>Explore Real Estate projects</span> <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/btnarrowwhite.svg" alt="" />
												</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
	</section>
 


	<section className="destination-section">
		<div className="container" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-outer">
						<div className="title">Explore Modon</div>
						
						<div className="desc">We create iconic designs and experiences for living, leisure and business that continually surpass expectations.</div>
					</div>
				</div>
			</div>
		</div>
		<div className="carousal-outer" data-aos="fade-up" data-aos-duration="2000">
			<div className="swiper swiper-destination">
				<div className="swiper-wrapper">
						<div className="swiper-slide">

							<div className="card destination-card">
								<div className="image-outer">
										<img src="/images/modoncorporatelibraries/real-estate/real-estate0772.jpg" alt='Real Estate' />
								</div>
								<div className="category-title">
									<div>
										
										<div className="category">Real Estate</div>
									</div>
								</div>
								<a className="more-details" href="javascript:;">
									<span>More Details</span> <span className="icon"></span>
								</a>
								<div className="detailed-view">
									<div className="top">
										
										<div className="category">Real Estate</div>
										<div className="desc">
We are dynamic, smart and progressive. We display an entrepreneurial mindset to proactively challenge market conventions, creating a better way of building growth for greater good.										</div>
									</div>

										<div className="latest-project">
											<div className="proj-list">
													<a className="" href="/real-estate/ras-el-hekma" target="">
															<img src="/images/modoncorporatelibraries/banners/ras-el-hekm-listing377c.webp" alt='Ras El Hekma' />

															<span>Ras El Hekma</span>
													</a>
													<a className="" href="/real-estate/nawayef-village" target="">
															<img src="/images/modoncorporatelibraries/real-estate/nawayef-village5775.jpg" alt='Nawayef Village' />

															<span>Nawayef Village</span>
													</a>
													<a className="" href="/real-estate/nawayef-parkviews" target="">
															<img src="/images/modoncorporatelibraries/real-estate/nawayef-park-views8e2b.jpg" alt='Nawayef Park Views' />

															<span>Nawayef Park Views</span>
													</a>
													<a className="" href="/real-estate/nawayef-east" target="">
															<img src="/images/modoncorporatelibraries/real-estate/nawayef-east-hills9749.jpg" alt='Nawayef East Hills' />

															<span>Nawayef East</span>
													</a>
											</div>
										</div>

										<a className="btn theme-btn-white" href="/real-estate">Explore More <span className="icon"></span></a>
								</div>
							</div>
						</div>
						<div className="swiper-slide">

							<div className="card destination-card">
								<div className="image-outer">
										<img src="/images/modoncorporatelibraries/about-us/destinations-homepagea1eb.jpg" alt='Destinations' />
								</div>
								<div className="category-title">
									<div>
										
										<div className="category">Destinations</div>
									</div>
								</div>
								<a className="more-details" href="javascript:;">
									<span>More Details</span> <span className="icon"></span>
								</a>
								<div className="detailed-view">
									<div className="top">
										
										<div className="category">Destinations</div>
										<div className="desc">
Modon develops vibrant communities across Abu Dhabi, offering a wide range of commercial properties, recreational facilities, innovation hubs, retail outlets, diverse dining options, and more!										</div>
									</div>

										<div className="latest-project">
											<div className="proj-list">
													<a className="" href="/real-estate/ras-el-hekma" target="">
															<img src="/images/modoncorporatelibraries/banners/ras-el-hekm-listing377c.webp" alt='Ras El Hekma' />

															<span>Ras El Hekma</span>
													</a>
													<a className="no-link" href="javascript:;" target="">
															<img src="/images/modoncorporatelibraries/projects/souq-mina-zayed-listing0324.jpg" alt='Souq Mina Zayed' />

															<span>Souq Mina Zayed</span>
													</a>
											</div>
										</div>

										<a className="btn theme-btn-white" href="/destinations">Discover More <span className="icon"></span></a>
								</div>
							</div>
						</div>
						<div className="swiper-slide">

							<div className="card destination-card">
								<div className="image-outer">
										<img src="/images/modoncorporatelibraries/about-us/hospitality-and-tourism-homepagee90e.jpg" alt='Hospitality and Tourism' />
								</div>
								<div className="category-title">
									<div>
										
										<div className="category">Hospitality</div>
									</div>
								</div>
								<a className="more-details" href="javascript:;">
									<span>More Details</span> <span className="icon"></span>
								</a>
								<div className="detailed-view">
									<div className="top">
										
										<div className="category">Hospitality</div>
										<div className="desc">
We develop distinctive UAE and international hospitality projects that enrich travel and tourism while maintaining the distinctive identity of their surroundings. Our resorts will make you feel at home and love life outside.										</div>
									</div>

										<div className="latest-project">
											<div className="proj-list">
													<a className="" href="https://www.anantara.com/en/al-sahel-sir-bani-yas" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/anantara-sir-bani-yas-island-listing707a.jpg" alt='Anantara Sir Bani Yas Island' />

															<span>Anantara Sir Bani Yas Island</span>
													</a>
													<a className="" href="https://www.anantara.com/en/qasr-al-sarab-abu-dhabi" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/qasr-al-sarab-desert-resort-by-anantara-listing13bc.jpg" alt='Qasr Al Sarab Desert Resort by Anantara' />

															<span>Qasr Al Sarab Desert Resort by Anantara</span>
													</a>
													<a className="" href="https://babalnojoum.com/bateen-liwa-resort/" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/bab-al-nojoum-bateen-liwa-listing9f50.jpg" alt='Bab Al Nojoum Bateen Liwa' />

															<span>Bab Al Nojoum Bateen Liwa</span>
													</a>
													<a className="" href="https://babalnojoum.com/hudayriyat/" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/bab-al-nojoum-hudayriyat-listing4731.jpg" alt='Bab Al Nojoum - Hudayriyat' />

															<span>Bab Al Nojoum - Hudayriyat</span>
													</a>
											</div>
										</div>

										<a className="btn theme-btn-white" href="/hospitality">Explore More <span className="icon"></span></a>
								</div>
							</div>
						</div>
						<div className="swiper-slide">

							<div className="card destination-card">
								<div className="image-outer">
										<img src="/images/modoncorporatelibraries/about-us/events-and-exhibitions-homepage0e3c.jpg" alt='Events and Exhibitions' />
								</div>
								<div className="category-title">
									<div>
										
										<div className="category">Events, Catering & Tourism</div>
									</div>
								</div>
								<a className="more-details" href="javascript:;">
									<span>More Details</span> <span className="icon"></span>
								</a>
								<div className="detailed-view">
									<div className="top">
										
										<div className="category">Events, Catering & Tourism</div>
										<div className="desc">
With international locations including ADNEC in Abu Dhabi and ExCeL and the Business Design Centre in London, we provide the venues, infrastructure, and services to stage global events on any scale.										</div>
									</div>

										<div className="latest-project">
											<div className="proj-list">
													<a className="" href="https://www.adnec.ae/en" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/adnec-centre-abu-dhabi-listingbb87.jpg" alt='ADNEC Centre Abu Dhabi' />

															<span>ADNEC Centre Abu Dhabi</span>
													</a>
													<a className="" href="https://www.excel.london/" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/excel-london-listing4626.jpg" alt='ExCeL London' />

															<span>ExCeL London</span>
													</a>
													<a className="" href="https://www.capital360.ae/" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/capital-events-listingf71a.jpg" alt='Capital Events' />

															<span>Capital Events</span>
													</a>
													<a className="" href="https://www.capitalprotocol.ae/" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/capital-protocol-listinga5cf.jpg" alt='Capital Protocol' />

															<span>Capital Protocol</span>
													</a>
											</div>
										</div>

										<a className="btn theme-btn-white" href="/events-tourism">Learn More <span className="icon"></span></a>
								</div>
							</div>
						</div>
						<div className="swiper-slide">

							<div className="card destination-card">
								<div className="image-outer">
										<img src="/images/modoncorporatelibraries/sports---leisure/velodromefcc5.jpg" alt='Velodrome' />
								</div>
								<div className="category-title">
									<div>
										
										<div className="category">Asset & Investment Management</div>
									</div>
								</div>
								<a className="more-details" href="javascript:;">
									<span>More Details</span> <span className="icon"></span>
								</a>
								<div className="detailed-view">
									<div className="top">
										
										<div className="category">Asset & Investment Management</div>
										<div className="desc">
We are breaking new ground with world-class sports and leisure facilities across a wide range of activities. From casual competition to professional athletes, or simply for casual enjoyment, Modon puts active living at the heart of the community.										</div>
									</div>

										<div className="latest-project">
											<div className="proj-list">
													<a className="" href="https://www.surfabudhabi.com/" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/surf-abu-dhabi-listing019e.jpg" alt='Surf Abu Dhabi' />

															<span>Surf Abu Dhabi</span>
													</a>
													<a className="no-link" href="javascript:;" target="">
															<img src="/images/modoncorporatelibraries/projects/velodrome-listingd3a0.jpg" alt='Velodrome' />

															<span>Velodrome - Coming Soon</span>
													</a>
													<a className="" href="https://alainadventure.com/" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/al-ain-adventure-listingc460.jpg" alt='Al Ain Adventure' />

															<span>Al Ain Adventure</span>
													</a>
													<a className="" href="https://www.adsummersports.ae/" target="_blank">
															<img src="/images/modoncorporatelibraries/projects/abu-dhabi-summer-sports-listing81bb.jpg" alt='Abu Dhabi Summer Sports' />

															<span>Abu Dhabi Summer Sports</span>
													</a>
													<a className="no-link" href="javascript:;" target="">
															<img src="/images/modoncorporatelibraries/projects/souq-mina-zayed-listing0324.jpg" alt='Souq Mina Zayed' />

															<span>Souq Mina Zayed</span>
													</a>
											</div>
										</div>

										<a className="btn theme-btn-white" href="/asset-investment-management">Explore More <span className="icon"></span></a>
								</div>
							</div>
						</div>
				</div>
			</div>
		</div>
	</section>
	{/*  destination section ends here  */}







	<section className="newlaunches-section bottom-thumb-position">
		<div className="container" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-outer">
						<div className="title">Featured Projects</div>
						
					</div>
				</div>
			</div>
		</div>
		<div className="carousal-outer" data-aos="fade-up" data-aos-duration="2000">
			<div className="swiper swiper-newlaunches">
				<div className="swiper-wrapper">
						<div className="swiper-slide">
							<a href="/real-estate/ras-el-hekma" target="" className="card newlaunch-card">
									<div className="image-outer">
										<img src="/images/modoncorporatelibraries/about-us/reh-featured-image1b7e.webp" alt='Ras El Hekma' />
									</div>
								<div className="proj-details">
									<div className="container">
										<div className="row">
											<div className="col-sm-12">
													<div className="title">
														<span>Ras El Hekma</span> <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/btnarrowwhite.svg" alt="" />
													</div>

												<ul className="proj-category">
														<li>
															<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/villa.svg" alt="" /><span>
																Villas, Townhouses, Apartments
															</span>
														</li>
																																								<li>
															<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/locationonwhite.svg"
																 alt="" /><span>Ras El Hekma, Egypt</span>
															</li>
																									</ul>
											</div>
										</div>
									</div>
								</div>
							</a>
						</div>
				</div>
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>
			</div>
			<div className="thumb-section">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div thumbsSlider="" className="swiper swiper-newlaunches-thumb">
								<div className="swiper-wrapper">
											<div className="swiper-slide">
												<img src="/images/modoncorporatelibraries/about-us/reh-featured-image1b7e.webp" alt='Ras El Hekma' />
											</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section className="news-section">
		<div className="container" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-section">
						<div className="title">Recent News</div>
						<a className="btn theme-btn" href="/about-modon/media-centre">Media Centre<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" /></a>
					</div>
				</div>
			</div>
		</div>
		<div className="main-story" data-aos="fade-up" data-aos-duration="2000">
				<div className="img-outer">
					<img src="/images/modoncorporatelibraries/news/modon-delivers-record-first-half-results-with-aed-2-2-billion-in-net-profit-and-aed-65-4-billion-revenue-backlog_banner3ff4.jpg" alt='' title='Modon delivers record first half results, with AED 2.2 billion in net profit and AED 65.4 billion revenue backlog_Banner' />
				</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="story-details">
							<div className="left">
								<div className="date"> 29th July 2026</div>
								<div className="title">Modon delivers record first half results, with AED 2.2 billion in net profit and AED 65.4 billion revenue backlog</div>
							</div>
							<div className="">
									<div className="desc">Abu Dhabi, UAE, 29 July 2026: Modon Holding PSC ("Modon" or the "Group") today reported record first-half results for the six months ended 30 June 2026, building on the momentum established over the past two years. The Group translated sustained customer demand, disciplined execution and continued operational delivery into record half-year revenue, while maintaining strong profitability and progressing its long-term strategic priorities. Modon also achieved record real estate sales and revenue backlog, underscoring continued demand and securing strong future revenue visibility.</div>
								<a className="btn theme-btn" href="about-modon/media-centre/details/2026/07/29/modon-delivers-record-first-half-results-with-aed-2.2-billion-in-net-profit-and-aed-65.html">
									Read more<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="container" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="col-sm-12">
						<ul className="sub-story-section">
								<li className="sub-story">
									<a href="about-modon/media-centre/details/2026/07/17/modon-sells-out-final-phase-of-bashayer-on-hudayriyat-island-within-one-day-of-launch--generating-approximately-aed-1.html">
											<div className="img-outer">
												<img src="/images/modoncorporatelibraries/news/mth_modon_ba_view-15_a038be8.jpg" alt='Modon sells out final phase of Bashayer on Hudayriyat Island within one day of launch, generating approximately AED 1.25 billion in sales' title='mth_Modon_BA_View 15_a03' />
											</div>
										<div className="details">
											<div className="date"> 17th July 2026</div>
											<div className="desc">Modon sells out final phase of Bashayer on Hudayriyat Island within one day of launch, generating approximately AED 1.25 billion in sales</div>
											<div className="btn theme-btn">
												Read more<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
											</div>
										</div>
									</a>
								</li>
								<li className="sub-story">
									<a href="about-modon/media-centre/details/2026/07/16/modon-holding-and-nammos-hotels-resorts-bring-nammos-ras-el-hekma-to-egypt-s-north-coast.html">
											<div className="img-outer">
												<img src="/images/modoncorporatelibraries/new-images-home/17_grotto-new90d3.jpg" alt='Modon Holding and Nammos Hotels &amp; Resorts bring Nammos Ras El Hekma to Egypt’s North Coast' title='17_Grotto-New' />
											</div>
										<div className="details">
											<div className="date"> 16th July 2026</div>
											<div className="desc">Modon Holding and Nammos Hotels & Resorts bring Nammos Ras El Hekma to Egypt’s North Coast</div>
											<div className="btn theme-btn">
												Read more<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
											</div>
										</div>
									</a>
								</li>
								<li className="sub-story">
									<a href="about-modon/media-centre/details/2026/07/09/modon-and-adib-introduce-abu-dhabi-s-first-off-plan-home-financing-solutions.html">
											<div className="img-outer">
												<img src="/images/modoncorporatelibraries/about-us/updated16x9-website-18e3a.jpg" alt='' title='updated16x9-Website 1' />
											</div>
										<div className="details">
											<div className="date"> 9th July 2026</div>
											<div className="desc">Modon and ADIB Introduce Abu Dhabi’s First Off-Plan Home Financing Solutions</div>
											<div className="btn theme-btn">
												Read more<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
											</div>
										</div>
									</a>
								</li>
						</ul>
				</div>
			</div>
		</div>
	</section>


	<section className="investor-section">
		<div className="container" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-outer">
						<div className="title">Investor Relations</div>
						<a className="btn theme-btn" href="/about-modon/investor-relations">
							<span>Explore More</span><span className="icon"></span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div className="container" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="col-sm-12">
					<div className="investor-grid-outer">
						<div className="left-grid">
									<a className="grid-item" href="about-modon/investor-relationsc626.html?inv_tab=fact-sheet" style={{ backgroundImage: 'url(%27/images/modoncorporatelibraries/about-us/small-tile9ae8.html?sfvrsn=e50ac594_2\')' }}>
											<img src="/images/modoncorporatelibraries/icons/factsheet4ee8.svg" alt='' />
										<div className="title">Fact Sheet</div>
									</a>
									<a className="grid-item" href="about-modon/investor-relationsf601.html?inv_tab=financial-information" style={{ backgroundImage: 'url(%27/images/modoncorporatelibraries/about-us/small-tile9ae8.html?sfvrsn=e50ac594_2\')' }}>
											<img src="/images/modoncorporatelibraries/icons/financialinfo8c95.svg" alt='' />
										<div className="title">Financial Information</div>
									</a>
									<a className="grid-item" href="about-modon/investor-relations26ce.html?inv_tab=share-information" style={{ backgroundImage: 'url(%27/images/modoncorporatelibraries/about-us/small-tile9ae8.html?sfvrsn=e50ac594_2\')' }}>
											<img src="/images/modoncorporatelibraries/icons/shareinfo0268.svg" alt='' />
										<div className="title">Share Information</div>
									</a>
									<a className="grid-item" href="about-modon/investor-relationsf2a6.html?inv_tab=company-announcements" style={{ backgroundImage: 'url(%27/images/modoncorporatelibraries/about-us/small-tile9ae8.html?sfvrsn=e50ac594_2\')' }}>
											<img src="/images/modoncorporatelibraries/icons/companyannounbca2.svg" alt='' />
										<div className="title">Company Announcements</div>
									</a>
									<a className="right-grid" href="about-modon/investor-relations7e14.html?inv_tab=overview" style={{}}>
<iframe className="euro-frame h-100" src="https://tools.eurolandir.com/tools/ticker/html/?companycode=ae-alqudra&amp;v=new&amp;lang=en-GB" frameBorder="0"></iframe>									</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>





		<section className="career-section">
				<img className="career-bg" src="/images/modoncorporatelibraries/about-us/careerbgd26f.png" alt="" />			<div className="career-details">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="details" data-aos="fade-right" data-aos-duration="2000">
									<div className="title">Careers at Modon</div>								
									<a className="btn theme-btn-white" href="/about-modon/careers">
										<span>Work with us</span> <span className="icon"></span>
									</a>							</div>
						</div>
					</div>
				</div>
			</div>
		</section> 




 
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
