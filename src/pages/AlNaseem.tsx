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

export default function AlNaseem() {
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
							<img className="bannerimage" fetchPriority="high" src="/images/modoncorporatelibraries/real-estate/al-naseem_nightv_1920x1080721a.jpg" data-dsrc="/images/modoncorporatelibraries/real-estate/al-naseem_nightv_1920x1080721a.jpg" data-msrc="/images/modoncorporatelibraries/real-estate/al-naseem_nightv_1920x1080721a.jpg" alt='' />
					</div>
					<div className="details-section">
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div className="content">

											<div className="logo-outer">
												<img src="/images/modoncorporatelibraries/about-us/al-naseem-community_al-naseem-white-en12561cfaf00b4d0583b537244977780bd157.webp" alt="" />
											</div>

											<div className="title"><h1>Al Naseem Community</h1> <p style={{ fontSize: '26px' }}>Close to what matters</p></div>
										<div className="btn-outer">
												<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/hudayriyat/?state=hudayriyat&amp;zone=al_naseem&amp;utm_source=Website&amp;utm_medium=AL_Naseem_Community&amp;utm_campaign=VR_Button">virtual tour</a>

												<a className="btn btn-white btn-scroll" href="#register-now">Register now</a>
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
			<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/hudayriyat/?state=hudayriyat&amp;zone=al_naseem&amp;utm_source=Website&amp;utm_medium=AL_Naseem_Community&amp;utm_campaign=VR_Button">virtual tour</a>

			<a className="btn btn-white btn-scroll" href="#register-now">Register now</a>
	</div>
 
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col00" className="sf_colsIn" data-sf-element="Project Details and Image" data-placeholder-label="Project Details and Image">
	<section className="info-box-section details-page">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="info-block">

							<div className="desc"><p>Nestling close to the shores of Hudayriyat Island, Abu Dhabi, you’ll discover Al Naseem Community by Modon, an exclusive real estate development of luxury, freehold villas in Abu Dhabi. This residential neighbourhood offers four to six-bedroom luxury villas set within generous boundaries, tailormade for those searching for an enviable island lifestyle in the heart of the capital.</p></div>
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
							<img src="/images/modoncorporatelibraries/real-estate/al-naseem_skyline_1920x1080a151.jpg" alt='AL NASEEM' title='AL NASEEM_Skyline_1920x1080' />
						</div>
				</div>
				<div className="col-md-6">
					<div className="details">
													<div className="desc"><div className="highlight">The island provides some of the finest homes within the UAE, with Al Naseem Community specifically designed to complement the exclusive island living sought by so many.
</div><p>These spacious luxury villas in Abu Dhabi offer two contrasting, yet complementary fa&ccedil;ades, with either a South Californian or Modern Contemporary frontage, all with easy access to exceptional local amenities to satisfy your every need.</p></div>
					</div>
				</div>
			</div>
		</div>
	</section>





    </div>
</div>
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col01" className="sf_colsIn" data-sf-element="Activities" data-placeholder-label="Activities">
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
													<div className="title">5-Bedroom Villa:</div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>BUA internal: 587 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>BUA external: 195 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment Plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Starting Price: AED 9M</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q4 2027</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title">6-Bedroom Villa:</div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Starting price: AED 10M</span>
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





		<section className="aminities-section property-details">
			<div className="container" data-aos="fade-up" data-aos-duration="2000">
				<div className="row">
					<div className="col-sm-12">
						<h2 className="title">Amenities</h2>
						<div className="aminity-outer">
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/community-centreda83.png" alt='Community Centre' />

									<span>Community Centre</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/gymabe4.png" alt='Gym' />

									<span>Gym</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/swimmingb186.png" alt='Swimming' />

									<span>Swimming Pool</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/pedestrian_walk20d8b9ef-673a-4504-bcf7-d01a7a21f0f62abf.webp" alt='' />

									<span>Pedestrian Paths</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/cycleb668.svg" alt='' />

									<span>Cycle Routes</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/basketball-court029d.png" alt='Basketball court' />

									<span>Basketball Court</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/schoolee1d.webp" alt='' />

									<span>Schools</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/outdoor-play-area8bd2.png" alt='Outdoor play area' />

									<span>Outdoor Play Area</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

<div >
    <div className="sfContentBlock sf-Long-text" ><div className="nawayef-map-section"><div className="container"><div className="row"><div className="col-sm-12"><div className="map-outer"><img src="/images/modoncorporatelibraries/about-us/al-naseem-masterplan-locator-ver28ecb.jpg" className="w-100" alt="Maysan Map" sf-size="100" /></div></div></div></div></div></div>
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
													<img src="/images/modoncorporatelibraries/about-us/inna_dudai_vp001_cam-6_day_ver-025_mod_style7267.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/modon_alnaseem-villas_light_cgi02_living-area0feb.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/modon_alnaseem-villas_light_cgi04_show-kitche-opt01fa2f.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/modon_alnaseem-villas_light_cgi06-majlisd16e.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/inna_dudai_vp001_cam-1_evening_ver-025_cal_style1811.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/inna_dudai_vp001_cam-5_day_ver-025_cal_style03b1.jpg" alt="" />
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
											When is the expected handover date for Al Naseem Community?
										</button>
									</div>
									<div id="collapse-1" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The first phase of the development is scheduled for handover in Q4 2027.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
											Does purchasing a villa in Al Naseem Community qualify the owner for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-2" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, buyers of all properties in Al Naseem Community are eligible to apply for the Golden Visa, subject to current government regulations.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
											Is Al Naseem Community a freehold development?
										</button>
									</div>
									<div id="collapse-3" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, properties at Al Naseem Community can be fully owned by all nationalities.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
											What is the starting price for properties in Al Naseem Community?&nbsp;
										</button>
									</div>
									<div id="collapse-4" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<div><p paraid="1938165995" paraeid="{03f2fae7-fcf8-49a1-855e-aff38ee6af93}{35}">The starting price for a four-bedroom villa is AED 7.8 million. Modon offers an attractive 40/60 payment plan.<span style={{ backgroundColor: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit', textAlign: 'inherit', textTransform: 'inherit', wordSpacing: 'normal', caretColor: 'auto', whiteSpace: 'inherit' }}></span></p></div>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
											How close is Al Naseem Community to key attractions on Hudayriyat Island?
										</button>
									</div>
									<div id="collapse-5" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The project offers exceptional convenience, with major island leisure hubs, such as Surf Abu Dhabi, 321 Sports and the Marsana retail and dining complex, all located within a short drive.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
											What amenities are included in Al Naseem Community?
										</button>
									</div>
									<div id="collapse-6" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Al Naseem Community provides a wide variety of luxury amenities, such as a community centre, a gym, a swimming pool, pedestrian paths, cycle routes, basketball courts, schools and an outdoor play area.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-7" aria-expanded="true" aria-controls="collapse-7">
											What are the architectural styles of the villas in Al Naseem Community?
										</button>
									</div>
									<div id="collapse-7" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The villas feature two distinct elegant fa&ccedil;ade styles: the warm and traditional South Californian style and the Modern Contemporary style, characterised by a sleek, minimalist aesthetic with extensive glazing.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-8" aria-expanded="true" aria-controls="collapse-8">
											What types of properties are available in Al Naseem Community?
										</button>
									</div>
									<div id="collapse-8" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The development features luxury four- to six-bedroom standalone villas over a Ground + 1 Floor structure. Each villa is set within a generous private plot, providing maximum space and privacy.
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

	<ProjectLeadForm projectName="Al Naseem Community" redirectUrl="/real-estate/al-naseem-community/thank-you" title="Register your interest" />

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
