// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MediaCentre() {
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
             
 

<section className="mediacenter-section bannerless-top">
	<div className="container">
		<div className="row">
			<div className="col-sm-12" data-aos="fade-up" data-aos-duration="2000">
				<div className="section-title">Media Centre</div>
			</div>
			<div className="col-sm-12" data-aos="fade-up" data-aos-duration="2000">
				<a className="card comp-project-card master-card" href="media-centre/details/2026/07/29/modon-delivers-record-first-half-results-with-aed-2.2-billion-in-net-profit-and-aed-65.html">
					<div className="card-body ">
							<div className="img-outer">
								<img src="/images/modoncorporatelibraries/news/modon-delivers-record-first-half-results-with-aed-2-2-billion-in-net-profit-and-aed-65-4-billion-revenue-backlog_banner3ff4.jpg" alt='' title='Modon delivers record first half results, with AED 2.2 billion in net profit and AED 65.4 billion revenue backlog_Banner' />
							</div>
						<div>
							<div className="date"> 29th July 2026</div>
							<div className="title">Modon delivers record first half results, with AED 2.2 billion in net profit and AED 65.4 billion revenue backlog</div>
							<div className="btn theme-btn">
								Read more <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
							</div>
						</div>
					</div>
				</a>
			</div>

					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2026/07/17/modon-sells-out-final-phase-of-bashayer-on-hudayriyat-island-within-one-day-of-launch--generating-approximately-aed-1.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/mth_modon_ba_view-15_a038be8.jpg" alt='Modon sells out final phase of Bashayer on Hudayriyat Island within one day of launch, generating approximately AED 1.25 billion in sales' title='mth_Modon_BA_View 15_a03' />
									</div>
								<div className="date"> 17th July 2026</div>
								<div className="title">Modon sells out final phase of Bashayer on Hudayriyat Island within one day of launch, generating approximately AED 1.25 billion in sales</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2026/07/16/modon-holding-and-nammos-hotels-resorts-bring-nammos-ras-el-hekma-to-egypt-s-north-coast.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/new-images-home/17_grotto-new90d3.jpg" alt='Modon Holding and Nammos Hotels &amp; Resorts bring Nammos Ras El Hekma to Egypt’s North Coast' title='17_Grotto-New' />
									</div>
								<div className="date"> 16th July 2026</div>
								<div className="title">Modon Holding and Nammos Hotels & Resorts bring Nammos Ras El Hekma to Egypt’s North Coast</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2026/07/09/modon-and-adib-introduce-abu-dhabi-s-first-off-plan-home-financing-solutions.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/updated16x9-website-18e3a.jpg" alt='' title='updated16x9-Website 1' />
									</div>
								<div className="date"> 9th July 2026</div>
								<div className="title">Modon and ADIB Introduce Abu Dhabi’s First Off-Plan Home Financing Solutions</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2026/07/07/modon%27s-hudayriyat-golf-estates-sets-uae-record-with-more-than-aed-13-billion-in-sales-within-days-of-launch.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon_hge_newprpage16x9_5b604359f20e43ccbbcef407fc2a0c59114a.jpg" alt='' title='MODON_HGE_NewPRpage16x9_' />
									</div>
								<div className="date"> 7th July 2026</div>
								<div className="title">Modon's Hudayriyat Golf Estates sets UAE record with more than AED 13 billion in sales within days of launch</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2026/05/17/modon-partners-with-montage-hotels-resorts-to-bring-ultra-luxury-hospitality-brand-to-egypts-ras-el-hekma.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/modon-partners-with-montage-hotels-resorts-to-bring-ultra-luxury-hospitality-brand-to-egypt-s-ras-el-hekma921d.jpg" alt='' title='Modon partners with Montage Hotels &amp; Resorts to bring ultra-luxury hospitality brand to Egypt’s Ras El Hekma' />
									</div>
								<div className="date"> 17th May 2026</div>
								<div className="title">Modon partners with Montage Hotels & Resorts to bring ultra-luxury hospitality brand to Egypt’s Ras El Hekma</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2026/04/29/modon-announces-the-sell-out-of-tara-park-on-reem-island--generating-approximately-aed-2-billion-in-sales.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/tara-park-night-hero-bannerba6f.jpg" alt='Tara Park' title='Tara-Park-Night-Hero-Banner' />
									</div>
								<div className="date"> 29th April 2026</div>
								<div className="title">Modon announces the sell-out of Tara Park on Reem Island, generating nearing AED 2 billion in sales</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2026/02/18/modon-delivers-outstanding-growth-in-2025-with-aed-3.9-billion-in-net-profit-and-aed-46.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/l-imad-holding-company-acquires-shares-of-majority-stakeholders-in-modon-holding-copyf3697053067746d2a8ce55765556deeb0114.webp" alt='' title='L’imad Holding Company, acquires shares of majority stakeholders in Modon Holding copy' />
									</div>
								<div className="date"> 18th February 2026</div>
								<div className="title">Modon delivers outstanding growth in 2025, with AED 3.9 billion in net profit and AED 46.0 billion revenue backlog</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="../media-centre/details/2025/12/22/modon-holding-forms-joint-venture-with-related-companies-and-panepinto-properties-to-deliver-harborside-4--a-luxury-residential-tower-along-the-waterfront-in-the">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/desktop-tn88566cb15a64405b8730e5fcbb31cc910439.jpg" alt='' title='Desktop tn' />
									</div>
								<div className="date"> 22nd December 2025</div>
								<div className="title">Modon Holding forms joint venture with Related Companies and Panepinto Properties to deliver Harborside 4, a luxury residential tower along the waterfront in the heart of downtown Jersey City</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/12/19/modon-awards-the-largest-residential-construction-contract-in-abu-dhabi-in-2025-for-nawayef-east-and-nawayef-west-on-hudayriyat-island.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/nawayef-arial-view-desktop1c97.jpg" alt='Nawayef arial view' title='Nawayef-Arial-View-Desktop' />
									</div>
								<div className="date"> 19th December 2025</div>
								<div className="title">Modon awards the largest residential construction contract in Abu Dhabi in 2025 for Nawayef East and Nawayef West on Hudayriyat Island</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/12/12/modon-awards-aed-1-billion-main-construction-contract-for-maysan-project-on-reem-island.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/mayar-maisonette-front-view2faa.jpg" alt='Mayar Maisonette Front View' title='Mayar Maisonette Front View' />
									</div>
								<div className="date"> 12th December 2025</div>
								<div className="title">Modon awards AED 1 billion main construction contract for “Maysan” project on Reem Island</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/12/10/modon-sells-out-bashayer-on-hudayriyat-island-within-one-day-of-launch.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/bashayer-semi-aerial-view3bdf.jpg" alt='Bashayer Semi-Aerial View' title='Bashayer Semi-Aerial View' />
									</div>
								<div className="date"> 10th December 2025</div>
								<div className="title">Modon sells out Bashayer on Hudayriyat Island within one day of launch</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/12/08/modon-launches-bashayer-hudayriyat-islands-first-ultra-premium-waterfront-community.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon_bashayer_media_centre_web0f069de073ba48b6a29d70c399354fed7c16.webp" alt='' title='modon_bashayer_media_centre_web' />
									</div>
								<div className="date"> 8th December 2025</div>
								<div className="title">Modon launches Bashayer: Hudayriyat Island’s first ultra-premium waterfront community</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="../media-centre/details/2025/11/26/modon-holding-announces-a-strategic-investment-in-wellington-lifestyle-partners--expanding-its-global-portfolio-in-luxury-lifestyle-destination-development.127.d">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/tn208b.webp" alt='' title='TN' />
									</div>
								<div className="date"> 26th November 2025</div>
								<div className="title">Modon Holding announces a strategic investment in Wellington Lifestyle Partners, expanding its global portfolio in luxury lifestyle destination development</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/10/30/l-imad-holding-company--acquires-shares-of-majority-stakeholders-in-modon-holding.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/l-imad-holding-company-acquires-shares-of-majority-stakeholders-in-modon-holding-copye10785bf809143818c71af9f1327d7c89cb3.webp" alt='' title='L’imad Holding Company, acquires shares of majority stakeholders in Modon Holding copy' />
									</div>
								<div className="date"> 30th October 2025</div>
								<div className="title">L’imad Holding Company, acquires shares of majority stakeholders in Modon Holding</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/10/28/modon-hospitality-launches-olympia-resort-abu-dhabi-a-new-active-lifestyle-destination-at-hudayriyat-island.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/featured-and-thumbnail-image397f.webp" alt='Olympia Resort' title='Olympia Resort' />
									</div>
								<div className="date"> 28th October 2025</div>
								<div className="title">Modon Hospitality launches Olympia Resort Abu Dhabi, a new active lifestyle experience on Hudayriyat Island</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/07/28/modon-holding-delivers-outstanding-aed-2.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-holding-delivers-outstanding-aed-2-1-billion-h1-2025-net-profit-with-continued-momentum-across-core-segments-supported-by-record-aed-10-billion-rea" alt='Modon Holding corporate profit and real estate sales' title='Modon Holding' />
									</div>
								<div className="date">Abu Dhabi, 28th July 2025</div>
								<div className="title">Modon Holding delivers outstanding AED 2.1 billion H1 2025 Net Profit, with continued momentum across core segments supported by record AED 10 billion real estate sales and strategic investments</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/07/04/modon-sells-out-wadeem--the-first-residential-plots-on-hudayriyat-island--within-72-hours.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/modon-sells-out-wadeem-the-first-residential-plots-on-hudayriyat-island-within-72-hoursbf18.jpg" alt='' title='Modon sells out Wadeem, the first residential plots on Hudayriyat Island, within 72 hours' />
									</div>
								<div className="date">Abu Dhabi, 4th July 2025</div>
								<div className="title">Modon sells out Wadeem, the first residential plots on Hudayriyat Island, within 72 hours</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/07/01/modon-launches-wadeem--its-first-residential-plots-communityon-hudayriyat-island.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/modon-launches-wadeem-its-first-residential-plots-community-on-hudayriyat-island07423cc2-bdb9-4ab4-86d1-045a05f73885df3d.jpg" alt='Modon launches Wadeem its first residential plots community on Hudayriyat Island' title='Modon launches Wadeem its first residential plots community on Hudayriyat Island' />
									</div>
								<div className="date">Abu Dhabi, 1st July 2025</div>
								<div className="title">Modon launches Wadeem, its first residential plots community on Hudayriyat Island</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/06/18/world-class-mouratoglou-tennis-center-opens-at-321-sports-on-hudayriyat-island.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/image3488.webp" alt='World-class Mouratoglou Tennis Center Opens at 321 Sports on Hudayriyat Island' title='World-class Mouratoglou Tennis Center' />
									</div>
								<div className="date">Abu Dhabi, 18th June 2025</div>
								<div className="title">World-class Mouratoglou Tennis Center Opens at 321 Sports on Hudayriyat Island</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="../media-centre/details/2025/05/29/gridora-signs-inaugural-mou-with-abu-dhabi-projects-and-infrastructure-centre-to-accelerate-delivery-of-transport-infrastructure-projects-worth-aed-35-billion.13">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/gridora-and-adpic-mou-signingc9df.webp" alt='' title='Gridora and ADPIC MoU signing' />
									</div>
								<div className="date">Abu Dhabi, UAE, 29th May 2025</div>
								<div className="title">Gridora signs inaugural MoU with ADPIC</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/05/23/muheira--the-first-modon-freehold-residential-towers-on-reem-island--sell-out-on-launch-day.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/muheira-the-first-modon-freehold-residential-towers-on-reem-island-sell-out-on-launch-day8101.jpg" alt='Muheira, the First Modon Freehold Residential Towers on Reem Island, Sell Out on Launch Day' title='Muheira, the First Modon Freehold Residential Towers on Reem Island, Sell Out on Launch Day' />
									</div>
								<div className="date">Abu Dhabi, 23rd May 2025</div>
								<div className="title">Muheira, the First Modon Freehold Residential Towers on Reem Island, Sell Out on Launch Day</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/05/22/modon-unveils-muheira--the-first-modon-freehold-residential-towers-on-reem-island.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/modon-unveils-muheira-reem-islandc9e8.jpg" alt='Modon Unveils Muheira - Reem Island' title='Modon-Unveils-Muheira-Reem-Island' />
									</div>
								<div className="date">Abu Dhabi, 22nd May 2025</div>
								<div className="title">Modon Unveils Muheira – the First Modon Freehold Residential Towers on Reem Island</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/05/08/modon-sells-out-nawayef-village-the-first-townhouses-on-hudayriyat-island-with-a-total-value-of-aed-2-billion--within-a-few-hours.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-sells-out-nawayef-village-the-first-townhouses-on-hudayriyat-island-with-a-total-value-of-aed-2-billion-within-a-few-hoursd950.jpg" alt='' title='Modon sells out Nawayef Village, the first townhouses on Hudayriyat Island, with a total value of AED 2 billion, within a few hours' />
									</div>
								<div className="date">Abu Dhabi, 8th May 2025</div>
								<div className="title">Modon sells out Nawayef Village, the first townhouses on Hudayriyat Island, with a total value of AED 2 billion, within a few hours</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/05/06/modon-launches-first-townhouses-on-hudayriyat-island-at-nawayef-village.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon_nawayef-village37eb1186-1c3b-4401-836f-a094c937cf313263.jpg" alt='' title='MODON_Nawayef Village' />
									</div>
								<div className="date">Abu Dhabi, 6th May 2025</div>
								<div className="title">Modon launches first townhouses on Hudayriyat Island at Nawayef Village</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/04/16/adq--ihc-and-modon-form-new-infrastructure-platform--gridora--to-accelerate-the-development-of-strategic-projects.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/adq-ihc-and-modon-form-new-infrastructure-platform-gridora-to-accelerate-the-development-of-strategic-projects6a26.jpg" alt='bridge to Hudayriyat Island' title='ADQ, IHC and Modon form new infrastructure platform ‘Gridora’ to accelerate the development of strategic projects' />
									</div>
								<div className="date">Abu Dhabi, 16th April 2025</div>
								<div className="title">ADQ, IHC and Modon form new infrastructure platform ‘Gridora’ to accelerate the development of strategic projects</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/03/27/modon-and-elsewedy-industrial-development-collaborate-to-launch-industrial-zone-for-ras-el-hekma-egypt.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-and-elsewedy-industrial-development-collaborate-to-launch-industrial-zone-for-ras-el-hekma-egyptdb4c.jpg" alt='Modon and Elsewedy Industrial Development collaborate to launch industrial zone for Ras El Hekma, Egypt' title='Modon and Elsewedy Industrial Development collaborate to launch industrial zone for Ras El Hekma, Egypt' />
									</div>
								<div className="date">Abu Dhabi, 27th March 2025</div>
								<div className="title">Modon and Elsewedy Industrial Development collaborate to launch industrial zone for Ras El Hekma, Egypt</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/02/03/modon-holding-has-entered-into-a-definitive-agreement-with-ihc-and-tasheel-holding-to-acquire-arena-events-group.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/silver-project-images_website-01a99e.jpg" alt='Modon Holding has entered into a definitive agreement with IHC and TasHeel Holding to acquire Arena Events Group' title='Silver Project Images_Website-01' />
									</div>
								<div className="date">Abu Dhabi, 3rd February 2025</div>
								<div className="title">Modon Holding has entered into a definitive agreement with IHC and TasHeel Holding to acquire Arena Events Group</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2025/01/24/modon-holding-announces-a-landmark-strategic-partnership-with-broadgate-reit-to-deliver-2-finsbury-avenue-london.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/broadgate-reit_lodon_v02801f.jpg" alt='Modon Holding announces a landmark strategic partnership with Broadgate REIT to deliver 2 Finsbury Avenue, London' title='Broadgate REIT_Lodon_V02' />
									</div>
								<div className="date">Abu Dhabi, 24th January 2025</div>
								<div className="title">Modon Holding announces a landmark strategic partnership with Broadgate REIT to deliver 2 Finsbury Avenue, London</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/12/19/modon-holding-completes-the-acquisition-of-la-zagaleta--one-of-the-most-exclusive-and-luxurious-residential-golf-estates-in-europe.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/la-zagaleta-cover-2000x1125495f.jpg" alt='La-Zagaleta-Cover-2000x1125' title='La-Zagaleta-Cover-2000x1125' />
									</div>
								<div className="date">Abu Dhabi, 19th December 2024</div>
								<div className="title">Modon Holding completes the acquisition of La Zagaleta, one of the most exclusive and luxurious residential golf estates in Europe</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/12/16/modon-and-four-seasons-host-opening-ceremony-of-four-seasons-hotel-rabat-at-kasr-al-bahr.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-and-four-seasons-host-opening-ceremony-of-four-seasons-hotel-rabat-at-kasr-al-bahrec6b.jpg" alt='Modon and Four Seasons host opening ceremony of Four Seasons Hotel Rabat at Kasr Al Bahr' title='Modon and Four Seasons host opening ceremony of Four Seasons Hotel Rabat at Kasr Al Bahr' />
									</div>
								<div className="date">Abu Dhabi, 16th December 2024</div>
								<div className="title">Modon and Four Seasons host opening ceremony of Four Seasons Hotel Rabat at Kasr Al Bahr</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/12/12/modon-is-the-first-real-estate-developer-to-use-green-steel-in-uae--in-collaboration-with-emsteel.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-is-the-first-real-estate-developer-to-use-green-steel-in-uae-in-collaboration-with-emsteeld5e4.jpg" alt='Modon is the first Real Estate Developer to use Green Steel in UAE, in collaboration with EMSTEEL' title='Modon is the first Real Estate Developer to use Green Steel in UAE, in collaboration with EMSTEEL' />
									</div>
								<div className="date">Abu Dhabi, 12th December 2024</div>
								<div className="title">Modon is the first Real Estate Developer to use Green Steel in UAE, in collaboration with EMSTEEL</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/12/10/modon-launches-nawayef-park-views--the-first-apartments-release-on-hudayriyat-island.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-launches-nawayef-park-views-the-first-apartments-release-on-hudayriyat-island798e.jpg" alt='Modon Launches Nawayef Park Views, the First Apartments Release on Hudayriyat Island' title='Modon Launches Nawayef Park Views, the First Apartments Release on Hudayriyat Island' />
									</div>
								<div className="date">Abu Dhabi, 10th December 2024</div>
								<div className="title">Modon Launches Nawayef Park Views, the First Apartments Release on Hudayriyat Island</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/11/19/modon-holding-and-hassan-allam-holding-to-explore-collaboration-across-large-scale-construction-projects-in-ras-el-hekma.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-holding-and-hassan-allam-holding-to-explore-collaboration-across-large-scale-construction-projects-in-ras-el-hekma51adb851-b4e7-4c6a-a2e1-a8bc0912f" alt='Modon Holding and Hassan Allam Holding to explore collaboration across large scale construction projects in Ras El Hekma' title='Modon Holding and Hassan Allam Holding to explore collaboration across large scale construction projects in Ras El Hekma' />
									</div>
								<div className="date">Abu Dhabi, UAE, 19th November 2024</div>
								<div className="title">Modon Holding and Hassan Allam Holding to explore collaboration across large scale construction projects in Ras El Hekma</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/11/07/modon-unveils-luxury-residences-on-the-east-hill-at-nawayef-on-hudayriyat-island.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-unveils-luxury-residences-on-the-east-hill-at-nawayef-on-hudayriyat-island81ca2b38-ce31-4671-aafa-812bc03d6acf5af2.jpg" alt='Modon unveils luxury residences on the east hill at Nawayef on Hudayriyat Island' title='Modon unveils luxury residences on the east hill at Nawayef on Hudayriyat Island' />
									</div>
								<div className="date">Abu Dhabi, UAE, 7th November 2024</div>
								<div className="title">Modon unveils luxury residences on the east hill at Nawayef on Hudayriyat Island</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/10/30/modon-sells-out-phase-one-of-maysan-within-a-few-hours.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/maysand77501e2-b50f-4f43-b9ae-366d6468d4855499.jpg" alt='Maysan' title='Maysan' />
									</div>
								<div className="date">Abu Dhabi, UAE, 30th October 2024</div>
								<div className="title">Modon sells out phase one of Maysan, a newly launched freehold development on Reem Island, within a few hours</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/10/25/modon-holding-partners-with-lulu-to-develop-retail-facilities-in-the-uae-and-egypt.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-holding-partners-with-lulu-to-develop-retail-facilities-in-the-uae-and-egypt7bbe.jpg" alt='Modon Holding partners with LuLu to develop retail facilities in the UAE and Egypt' title='Modon Holding partners with LuLu to develop retail facilities in the UAE and Egypt' />
									</div>
								<div className="date">Abu Dhabi, 25th October 2024</div>
								<div className="title">Modon Holding partners with LuLu to develop retail facilities in the UAE and Egypt</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/10/21/modon-launches-phase-one-of-maysan--a-freehold-development-on-reem-island.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/maysand77501e2-b50f-4f43-b9ae-366d6468d4855499.jpg" alt='Maysan' title='Maysan' />
									</div>
								<div className="date">Abu Dhabi, UAE, 21st October 2024</div>
								<div className="title">Modon launches phase one of Maysan, a freehold development on Reem Island</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/10/04/adq-appoints-modon-holding-as-master-developer-for-ras-el-hekma-megaproject-in-egypt.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/adq-appoints-modon-holding-as-master-developer9da8b2e1-38cd-4cbd-9407-29cde183a4c76ec5.jpg" alt='ADQ appoints Modon Holding as master developer' title='ADQ appoints Modon Holding as master developer' />
									</div>
								<div className="date">Matrouh Egypt, 4th October 2024</div>
								<div className="title">ADQ appoints Modon Holding as master developer for Ras El Hekma megaproject in Egypt</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/10/04/modon-holding-engages-with-investors--partners-for-ras-el-hekma-destination-megaproject-in-egypt.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-holding-engages-with-investors2acd0fe8-150f-4537-aecb-03136d8760a9c68f.jpg" alt='Modon Holding engages with investors' title='Modon Holding engages with investors' />
									</div>
								<div className="date">Matrouh Egypt, 4th October 2024</div>
								<div className="title">Modon Holding engages with investors, partners for Ras El Hekma destination megaproject in Egypt</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/08/12/surf-abu-dhabi-to-open-to-the-public-in-october-2024.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/surf-abu-dhabicdd2f488-4e10-4a9f-8de2-372204f7ed34decb.jpg" alt='Surf Abu Dhabi' title='Surf Abu Dhabi' />
									</div>
								<div className="date">Abu Dhabi, 12th August 2024</div>
								<div className="title">Surf Abu Dhabi to open to the public in October 2024</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2024/07/30/modon-holding-achieves-record-landmark-acquisition.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/modon-achieves-landmark-acquisition-5728.jpg" alt='Modon-Achieves-Landmark-Acquisition-' title='Modon-Achieves-Landmark-Acquisition-' />
									</div>
								<div className="date">Abu Dhabi, 31st July 2024</div>
								<div className="title">Modon Holding PSC Achieves Record Half-Yearly Results After Landmark Acquisition</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2023/11/07/modon-partners-kelly-slater-wave-company-on-surf-abu-dhabi.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news_kelly-first-wavef52e.jpg" alt='' title='News_kelly-first-wave' />
									</div>
								<div className="date">ABU DHABI, 7th November 2023</div>
								<div className="title">Surfing legend Kelly Slater ‘finds his wave’ at Surf Abu Dhabi, world’s most advanced wave facility</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2023/11/07/modon-partners-kelly-slater-wave-company-on-surf-abu-dhabi.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news-modon-partners-kelly-slater7d61.jpg" alt='' title='News-Modon-partners-Kelly-Slater' />
									</div>
								<div className="date">ABU DHABI, 15th June 2023</div>
								<div className="title">MODON partners Kelly Slater Wave Company on Surf Abu Dhabi</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2023/06/13/in-line-with-directives-of-mohamed-bin-zayed-modon-properties-reveals-hudayriyat-island-masterplan.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news-hudayriyat-island-masterplan08cc.jpg" alt='' title='News-Hudayriyat-Island-masterplan' />
									</div>
								<div className="date">ABU DHABI, 13th June 2023</div>
								<div className="title">In line with directives of Mohamed bin Zayed, Modon Properties reveals Hudayriyat Island masterplan</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2022/12/30/hamdan-bin-zayed-inaugurates-bab-al-nojoum-bateen-liwa.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news-bateen-liwa-resort2b0f.jpg" alt='' title='News-Bateen-Liwa-Resort' />
									</div>
								<div className="date">ABU DHABI, 30th December 2022</div>
								<div className="title">Hamdan bin Zayed inaugurates Bab Al Nojoum Bateen Liwa</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2022/12/22/hamdan-bin-zayed-inaugurates-new-waterfront-destinations-in-al-dhafra---al-mugheirah-bay-and-mamsha-al-mugheirah.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news-waterfront-destinations-al-dhafrab705.jpg" alt='' title='News-waterfront-destinations-Al-Dhafra' />
									</div>
								<div className="date">ABU DHABI, 22nd December 2022</div>
								<div className="title">Hamdan bin Zayed inaugurates new waterfront destinations in Al Dhafra – Al Mugheirah Bay and Mamsha Al Mugheirah</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2022/12/07/khaled-bin-mohamed-bin-zayed-inaugurates-trail-x-mountain-biking-facility.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news-trail-x3a43.jpg" alt='' title='News-Trail-X' />
									</div>
								<div className="date">ABU DHABI, 7th December 2022</div>
								<div className="title">Khaled bin Mohamed bin Zayed inaugurates Trail X mountain biking facility</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2022/08/17/modon-properties-opens-new-fish-market-at-mina-zayed-in-collaboration-with-dmt.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news-fish-market-mina-zayed02d2.jpg" alt='' title='News-Fish-Market-Mina-Zayed' />
									</div>
								<div className="date">ABU DHABI, 17th August 2022</div>
								<div className="title">Modon Properties opens new Fish Market at Mina Zayed in collaboration with DMT</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2022/01/13/hudayriyat-and-marsana-beaches-at-hudayriyat-mar-vista-receive-blue-flag-certificate.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news-marsana-beaches3525.jpg" alt='' title='News-Marsana-beaches' />
									</div>
								<div className="date">ABU DHABI, 13th January 2022</div>
								<div className="title">Hudayriyat and Marsana beaches at Hudayriyat Mar Vista receive Blue Flag certificate</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2022/01/12/hamdan-bin-zayed-inaugurates-bab-al-nojoum---al-mugheirah-resort.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/ban_m-vip_visit_1d2f9.jpg" alt='' title='BAN_M-VIP_Visit_1' />
									</div>
								<div className="date">ABU DHABI, 12th January 2022</div>
								<div className="title">Hamdan bin Zayed inaugurates Bab Al Nojoum – Al Mugheirah Resort</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2022/01/12/bab-al-nojoum---al-mugheirah-resort-welcomes-nature-lovers.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news-ban-al-mugheirah-ature-lovers148e.jpg" alt='' title='News-BAN-Al-Mugheirah-ature-Lovers' />
									</div>
								<div className="date">ABU DHABI, 12th January 2022</div>
								<div className="title">Bab Al Nojoum – Al Mugheirah Resort welcomes nature lovers</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
					<div className="col-sm-6 col-lg-4 stretch-card" data-aos="fade-up" data-aos-duration="2000">
						<a className="card comp-project-card" href="media-centre/details/2021/09/15/the-courtyard-mall-in-riyadh-city-opens-to-shoppers.html">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/news/news-thetcourtyardtmall-riyadh-city275e.jpg" alt='' title='News-thetCourtyardtMall-Riyadh-City' />
									</div>
								<div className="date">ABU DHABI, 15th September 2021</div>
								<div className="title">The Courtyard Mall in Riyadh City opens to shoppers</div>
								<div className="btn theme-btn">
									Discover<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
								</div>
							</div>
						</a>
					</div>
		</div>
	</div>
</section>

 
            <Footer />
        </div>
    );
}
