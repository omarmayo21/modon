// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectLeadForm from '../components/ProjectLeadForm';
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

export default function TaraPark() {
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
            try {
                spotlightSwiperRef.current = new (window as any).Swiper(".swiper-spotlight", {
                    slidesPerView: 1,
                    loop: false,
                    autoplay: false,
                });
            } catch (e) { console.warn(e); }

            try {
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
            } catch (e) { console.warn(e); }

            try {
                gallerySwiperRef.current = new (window as any).Swiper(".swiper-gallery", {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                    loop: true,
                    centeredSlides: true,
                    navigation: {
                        nextEl: ".gallery-next, #galleryNext, .swiper-button-next",
                        prevEl: ".gallery-prev, #galleryPrev, .swiper-button-prev"
                    },
                    breakpoints: {
                        768: { slidesPerView: 2.2, spaceBetween: 24, centeredSlides: false },
                        1024: { slidesPerView: 3.2, spaceBetween: 30, centeredSlides: false }
                    }
                });
            } catch (e) { console.warn(e); }
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
             


	<section className="banner-section realestate-details vh-100">
		<div className="swiper swiper-spotlight">
			<div className="swiper-wrapper">
				<div className="swiper-slide">
					<div className="image-outer">
							<video className="video" src="/videos/modoncorporatelibraries/default-video-library/tara-park-desktop-video317b.mp4" data-dsrc="/videos/modoncorporatelibraries/default-video-library/tara-park-desktop-video317b.mp4" data-msrc="/videos/modoncorporatelibraries/default-video-library/tara-park-desktop-video317b.mp4" autoplay loop muted playsInline></video>
							<button className="mute-btn mute">
								<img className="muteicon" src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/mute.svg" alt="" />
								<img className="unmuteicon" src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/unmute.svg" alt="" />
							</button>
					</div>
					<div className="details-section">
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div className="content">

											<div className="logo-outer">
												<img src="/images/modoncorporatelibraries/real-estate/logo/tara-park-logo_whited0c8.png" alt="" />
											</div>

											<div className="title"><h1>Tara Park</h1> <p style={{ fontSize: '26px' }}>Where you belong</p></div>
										<div className="btn-outer">
												<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/tara-phase1/?state=phase1&amp;lang=en&amp;tower=phase1&amp;theme=light&amp;floor=GF">virtual tour</a>

												<a className="btn btn-white btn-scroll" href="#register-now">REGISTER NOW</a>
										</div>


									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div className="btn-outer mobile-view">
			<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/tara-phase1/?state=phase1&amp;lang=en&amp;tower=phase1&amp;theme=light&amp;floor=GF">virtual tour</a>

			<a className="btn btn-white btn-scroll" href="#register-now">REGISTER NOW</a>
	</div>
 
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col00" className="sf_colsIn" data-sf-element="Project Details and Image" data-placeholder-label="Project Details and Image">
	<section className="info-box-section details-page">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="info-block">

							<div className="desc"><p>Introducing Tara Park, a vibrant new residential destination of one, two and three-bedroom apartments, crafted for those who value modern comfort and meaningful connection. Set within landscaped podiums and walkable spaces, the community balances serenity and energy, offering a lifestyle that feels welcoming and unmistakably refined on Reem Island.</p></div>
					</div>
				</div>
			</div>
		</div>
	</section>




	<section className="detailed-block-section">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
						<div className="img-outer">
							<img src="/images/modoncorporatelibraries/real-estate/tara-a/hero_image_nightlight_1080x600fa63.jpg" alt='Tara Park night' title='HERO_IMAGE_NIGHTLIGHT_1080X600' />
						</div>
				</div>
				<div className="col-md-6">
					<div className="details">
													<div className="desc"><h2 className="highlight">Tara Park
</h2><p>A contemporary collection of homes designed for seamless urban living. Each apartment maximises space, light and comfort, with sleek finishes and views over landscaped gardens. Complemented by a swimming pool, gym, sports courts and social areas, Tara Park encourages an active, connected and effortless lifestyle.</p></div>
					</div>
				</div>
			</div>
		</div>
	</section>





	<section className="parkview-section">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-section">
						<h2 className="title">Factsheet</h2>
						<div className="btn-wrapper">
							<a id="parkviewPrev" href="javascript:;">
								<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/rightarrowlink.svg" alt="" />
							</a>
							<a id="parkviewNext" href="javscript:;">
								<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/leftarrowlink.svg" alt="" />
							</a>
						</div>
					</div>
					<div className="carousal-outer">
						<div className="swiper swiper-parkview">
							<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>1-Bedroom Apartment</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 81 - 103 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 1.68m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>2-Bedroom Apartment</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 120 - 214 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 2.68m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>3-Bedroom Apartment</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 186 - 238 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 3.68m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
							</div>
							<div className="swiper-button-prev parkview-prev"></div>
							<div className="swiper-button-next parkview-next"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>





    </div>
</div>
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col01" className="sf_colsIn" data-sf-element="Activities" data-placeholder-label="Activities">
		<section className="aminities-section property-details">
			<div className="container" data-aos="fade-up" data-aos-duration="2000">
				<div className="row">
					<div className="col-sm-12">
						<h2 className="title">Amenities</h2>
						<div className="aminity-outer">
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/tara_pool_icon_plain2bdb.png" alt='' />

									<span>Swimming Pools</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/tara_children-playroom_iconc8f0.svg" alt='Children playroom' />

									<span>Children playroom</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/tara-shaded-garden-lounge6533.svg" alt='Shaded garden lounge' />

									<span>Shaded garden lounge</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/tara-co-working-and-study-zone-icon0e08.svg" alt='Coworking and study zone' />

									<span>Coworking & study zone</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/tara-communal-dining-lounge-icond7f8.svg" alt='Communal dining lounge' />

									<span>Communal dining lounge</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/tara-outdoor-workspaces-iconcce1.svg" alt='Outdoor workspaces' />

									<span>Outdoor workspaces</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/tara-padel-icond3c7.svg" alt='Padel' />

									<span>Padel</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/tara_multi-sports-court_icon0756.svg" alt='Multi-sports court' />

									<span>Multi-sports court</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/tara_gym_iconf6c3.svg" alt='Gym' />

									<span>Gym</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/tara_yoga-studio_icon806a.svg" alt='Yoga studio' />

									<span>Yoga studio</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

<div >
    <div className="sfContentBlock sf-Long-text" ><br /><img sf-image-responsive="true" src="/images/modoncorporatelibraries/maps/tara-map-1400x788e7b2.jpg" height="789" style={{ maxWidth: 'calc(100% - 20px)', height: 'auto', marginRight: 'auto', marginLeft: 'auto', display: 'block' }} title="Bashayer-Desktop-Map-1400x788" width="1400" alt="TARA by Modon properties" className="-align-center sf-immutable-selected" sf-size="1902041" /><br /></div>
</div>
    </div>
</div>
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col02" className="sf_colsIn" data-sf-element="Location" data-placeholder-label="Location">
    </div>
</div>
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col03" className="sf_colsIn" data-sf-element="Updates" data-placeholder-label="Updates">
		<section className="realestate-gallery-section">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="title-section">
							<h2 className="title">Gallery</h2>
							<div className="btn-wrapper">
								<span id="galleryPrev"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/rightarrowlink.svg" alt="" /></span>
								<span id="galleryNext"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/leftarrowlink.svg" alt="" /></span>
							</div>
						</div>
						<div className="carousal-outer">
							<div className="swiper swiper-gallery">
								<div className="swiper-wrapper">
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-swimming-pool-zoomed-out-viewf65b.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-pool-aerial-view7416.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-swimming-pool-viewd03a.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-jogging-track7898.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-outside-view1f2f.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-retail-courtyard53ff.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-entrance805d.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-swimming-pool-1b194.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-swimming-poolad7f.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/exterior/tara-park-living-room-balcony-viewc6d7.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-lobby950c.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-coworking-area-1035b.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-coworking-area-26089.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-coworking-area2487.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-gym151a.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-kids-areacca8.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-livin-room-10ae3.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-living-roomb922.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-kitchen0460.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-bedroomf79e.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/tara-a/gallery/interior/tara-park-bathroom7cca.jpg" alt="" />
											</div>
										</div>
								</div>
								<div className="swiper-button-next gallery-next"></div>
								<div className="swiper-button-prev gallery-prev"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    </div>
</div>
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
											Where exactly is the project located?
										</button>
									</div>
									<div id="collapse-1" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Tara Park is ideally situated in the heart of&nbsp;Reem Island, Abu Dhabi, directly opposite the premier lifestyle destination,&nbsp;Reem Mall. This prime location ensures that shopping, dining, and entertainment are just steps away, while other key&nbsp;landmarks like Al Fay Park, Sorbonne University, and Repton School&nbsp;are also just moments from the residence. Its strategic placement provides effortless connectivity,&nbsp;only&nbsp;5 minutes from Downtown Abu Dhabi and the Abu Dhabi Global Market (ADGM), and 25 minutes from Zayed International Airport.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
											What is the expected&nbsp;handover for&nbsp;the project?
										</button>
									</div>
									<div id="collapse-2" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The estimated handover for this refined community is scheduled on early Q2 2030.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
											What types of residences are available in&nbsp;Tara Park and what types or configurations are&nbsp;offered?
										</button>
									</div>
									<div id="collapse-3" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Tara Park consists of two residential towers offering a variety of&nbsp;1, 2, and 3-bedroom apartments in total of 494 units.</p><strong>1-Bedroom</strong><br /><span style={{ textDecoration: 'underline' }}>No. of units</span>: 156<br /><span style={{ textDecoration: 'underline' }}>Average unit size</span>: 83 sqm
<br /><strong>2-Bedroom</strong><br /><span style={{ textDecoration: 'underline' }}>No. of units</span>: 310<br /><span style={{ textDecoration: 'underline' }}>Average unit size</span>: 138 sqm
<br /><strong>3-Bedroom</strong><br /><span style={{ textDecoration: 'underline' }}>No. of units</span>: 28<br /><span style={{ textDecoration: 'underline' }}>Average unit size</span>: 198 sqm
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
											What world-class amenities are available for residents?
										</button>
									</div>
									<div id="collapse-4" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p paraid="740358356" paraeid="{b496062d-cbab-45ee-80cd-c3c00bce9788}{180}">Residents will enjoy exclusive access to a comprehensive range of amenities, including security services, a central swimming pool, a padel court, a multi-purpose sports court, a fitness studio, and a yoga studio. Tara Park will also feature open-air workspaces, a shaded garden lounge, a communal dining lounge, a dedicated co-working and study zone, a one-of-a-kind children&rsquo;s playroom, a retail courtyard, an early learning&nbsp;centre, an art studio, and a social kitchen.<br /></p><p paraid="740358356" paraeid="{b496062d-cbab-45ee-80cd-c3c00bce9788}{180}"><span style={{ backgroundColor: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit', textAlign: 'inherit', textTransform: 'inherit', wordSpacing: 'normal', caretColor: 'auto', whiteSpace: 'inherit' }}>Additional&nbsp;retail shops, and dining outlets are available as part of the retail offering of Tara Park but will not be presented or managed by&nbsp;Modon.</span><br /></p><p paraid="740358356" paraeid="{b496062d-cbab-45ee-80cd-c3c00bce9788}{180}"><span style={{ textDecoration: 'underline' }}>Disclaimer</span>: <em>Please note the amenities may be updated before handover</em>.</p>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
											Are the properties in Tara Park freehold?&nbsp;
										</button>
									</div>
									<div id="collapse-5" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Tara Park is a freehold development, inviting both local and international investors to secure property within one of Abu Dhabi&rsquo;s most prestigious and sought-after&nbsp;neighborhoods.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
											Does&nbsp;purchase&nbsp;of Tara Park qualify for the UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-6" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Property investments in Tara Park exceeding AED 2,000,000 typically enable owners to apply for the prestigious 10-year Golden Visa, ensuring long-term security and residency within the Emirates.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-7" aria-expanded="true" aria-controls="collapse-7">
											Are there schools and hospitals nearby?
										</button>
									</div>
									<div id="collapse-7" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, residents are just minutes away from world-class&nbsp;schools and hospitals&nbsp;including Sorbonne University, Repton School, and Cleveland Clinic Abu Dhabi.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-8" aria-expanded="true" aria-controls="collapse-8">
											Are the apartments equipped with smart home features?
										</button>
									</div>
									<div id="collapse-8" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, each apartment is provisioned for home automation, allowing for smart home functionality.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-9" aria-expanded="true" aria-controls="collapse-9">
											What is the payment structure?
										</button>
									</div>
									<div id="collapse-9" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											A relaxed 40/60 payment plan applies (5% on booking, 35% staggered, and 60% on completion). No alternative plans are available currently.
										</div>
									</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</section>




<section data-sf-element="Row" className="location-section realestate-details">
	<div className="container-lg visual-anim">
		<div className="row">
			<div id="Contentplaceholder1_T620A45DA002_Col00" className="sf_colsIn col-lg-5" data-sf-element="Contact Us Form" data-placeholder-label="Contact Us Form">

	<ProjectLeadForm projectName="Tara Park" redirectUrl="/real-estate/tara-park/thank-you" title="Register your interest" />

			</div>
			<div id="Contentplaceholder1_T620A45DA002_Col01" className="sf_colsIn col-lg-7" data-sf-element="Map Section" data-placeholder-label="Map Section">


        
        <div className="map-outer gmap-container" style={{ height: '450px', width: '100%', minHeight: '400px' }}>
            <MapContainer center={[24.413063, 54.351577]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%', borderRadius: '12px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[24.413063, 54.351577]}>
                    <Popup>
                        <strong>Modon Sales Centre Hudayriyat Island</strong><br />Hudayriyat Island - Abu Dhabi
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>
		</div>
	</div>
</section><div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA005_Col00" className="sf_colsIn" data-sf-element="Generic Placeholder" data-placeholder-label="Generic Placeholder">
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


    </div>
</div> 
            <Footer />
        </div>
    );
}
