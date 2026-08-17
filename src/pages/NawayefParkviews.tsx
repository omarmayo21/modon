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

export default function NawayefParkviews() {
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
             


	<section className="banner-section realestate-details vh-100 vh-100">
		<div className="swiper swiper-spotlight">
			<div className="swiper-wrapper">
				<div className="swiper-slide">
					<div className="image-outer">
							<video className="video" src="/videos/modoncorporatelibraries/default-video-library/modon_2024_nawayef_park_views_highres_newe3f8.mp4" data-dsrc="/videos/modoncorporatelibraries/default-video-library/modon_2024_nawayef_park_views_highres_newe3f8.mp4" data-msrc="/videos/modoncorporatelibraries/default-video-library/modon_2024_nawayef_park_views_highres_newe3f8.mp4" autoplay loop muted playsInline></video>
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
												<img src="/images/modoncorporatelibraries/real-estate/logo/nawayef_park-views_logo_english_white3331.png" alt="" />
											</div>

											<div className="title"><h1>Nawayef Park Views</h1> <p style={{ fontSize: '26px' }}>Perfectly placed, exquisitely crafted</p></div>
										<div className="btn-outer">
												<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/hudayriyat/?state=nawayef_souq&amp;zone=nawayef_souq&amp;utm_source=Website&amp;utm_medium=Nawayef_Park_Views&amp;utm_campaign=VR_Button">virtual tour</a>

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
			<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/hudayriyat/?state=nawayef_souq&amp;zone=nawayef_souq&amp;utm_source=Website&amp;utm_medium=Nawayef_Park_Views&amp;utm_campaign=VR_Button">virtual tour</a>

			<a className="btn btn-white btn-scroll" href="#register-now">Register now</a>
	</div>
 
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col00" className="sf_colsIn" data-sf-element="Project Details and Image" data-placeholder-label="Project Details and Image">
	<section className="info-box-section details-page">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="info-block">

							<div className="desc"><p>Set between the scenic Nawayef Hills on Hudayriyat Island, Nawayef Park Views offers an exclusive chance to own Mediterranean-inspired freehold apartments in Abu Dhabi. Combining island serenity with lively amenities, these residences are surrounded by a vibrant souq plaza, fine dining, luxury retail and wellness spaces. With timeless architecture and park-facing terraces, Nawayef Park Views is the ideal retreat for those seeking both tranquility and a vibrant lifestyle in Abu Dhabi.</p></div>
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
							<img src="/images/modoncorporatelibraries/about-us/nawayef-park-viewsaf3a26c9-9f1f-4cf0-be0b-d35e6bdfd8433b01.jpg" alt='Nawayef Park Views' title='Nawayef Park Views' />
						</div>
				</div>
				<div className="col-md-6">
					<div className="details">
													<div className="desc"><div className="highlight">Park View provides amenities for a vibrant, wellness-focused lifestyle, including a gym, yoga zone, shaded green spaces with BBQ areas, a lap pool, children&rsquo;s pool with splash area and a play area.
</div><p>Residents enjoy access to a lush park, healthcare facilities and the adjacent souq, offering upscale retail, dining and entertainment around its lively plaza. The beach and a boutique hotel are also close by, adding to the community&rsquo;s Mediterranean charm.</p></div>
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
						<div className="parkview-block">
								<div className="img-outer">
									<img src="/images/modoncorporatelibraries/about-us/fact-imageb38a.jpg" alt='Nawayef Park Views' title='fact-image' />
								</div>

							<div className="details">
									<div className="title">Nawayef Park Views</div>

								<ul>
										<li>
												<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																							<span>Payment plan: 60/40</span>

										</li>
										<li>
												<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																							<span>Handover: Q1 2028</span>

										</li>
										<li>
												<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																							<span>Unit types: 1 - 4 Bedroom apartments</span>

										</li>
										<li>
												<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																							<span>Starting price: AED 2M</span>

										</li>
								</ul>


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
									<img src="/images/modoncorporatelibraries/about-us/gym42724334-d0f6-4755-9508-97539de65429e10d.png" alt='Gym' />

									<span>Gym</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/clubhouse9b9c.png" alt='CLUBHOUSE' />

									<span>Clubhouse</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/yoga-zone2807b484-9ba0-49cc-818c-72dd058785a40290.png" alt='Yoga Zone' />

									<span>Yoga zone</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/coworking-space54fd.png" alt='COWORKING SPACE' />

									<span>Coworking space</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/swimmingb186.png" alt='Swimming' />

									<span>Lap swimming pool</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/games-roomc93c.png" alt='GAMES ROOM' />

									<span>Games room</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/concierge-and-valet40ab.png" alt='CONCIERGE AND VALET' />

									<span>Concierge and valet</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/beachf0ed.png" alt='BEACH' />

									<span>Beach</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/about-us/parkd314.png" alt='PARK' />

									<span>Park</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

<div >
    <div className="sfContentBlock sf-Long-text" ><div className="nawayef-map-section"><div className="container"><div className="row"><div className="col-sm-12"><div className="map-outer"><img src="/images/modoncorporatelibraries/about-us/nawayef-park-view-map853b.jpg" className="w-100 sf-immutable-selected" alt="" sf-size="365294" /></div></div></div></div></div></div>
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
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp06_interior_kitchen_rev050b80.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp08_interior_kitchen_rev03fae3.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp03_interioramenities_lobby_rev069869.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp05_interior_powderroom_rev04f23f.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp01_interioramenities_kids-room_rev04649f.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp02_interior_living_rev052f1e.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp11_exterior_kidpool_rev06a652500a-c30b-4541-aa4a-940fbc1604c1a9d2.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp12_exterior_generale_rev05d28b.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp04_exterior_pool_rev044924c565-a6ec-4f1e-9119-4a21459bfaf57c5b.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp06_exterior_padel_rev043104.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp02_exterior_general_rev04a537.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp01_exterior_aerial_skyextension_rev038be5.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp02_exterior_aerial_rev04-(edited)deee.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/me1806_vp01_exterior_entrance_rev042c69b51d-77e7-47bd-92a2-8ab39c347eb8fc5c.jpg" alt="" />
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
											When is the expected handover date for Nawayef Park Views?
										</button>
									</div>
									<div id="collapse-1" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Nawayef Park Views is scheduled for handover in Q1 2028.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
											Are Nawayef Park Views homeowners eligible for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-2" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, buyers of properties in Nawayef Park Views are qualified to apply for the Golden Visa, as all prices meet or exceed the minimum threshold required.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
											Is Nawayef Park Views a freehold development?
										</button>
									</div>
									<div id="collapse-3" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, properties at Nawayef Park Views can be fully owned by all nationalities.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
											What is the starting price for an apartment in Nawayef Park Views?
										</button>
									</div>
									<div id="collapse-4" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The starting price for a spacious one-bedroom apartment is AED 2 million. Modon offers an attractive 60/40 payment plan with a 10% downpayment on booking, 50% paid in structured instalments during construction and the final 40% due upon handover.&nbsp;
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
											Which facilities does Nawayef Park Views offer?
										</button>
									</div>
									<div id="collapse-5" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The development includes a gym, a yoga zone, shaded green spaces with BBQ areas, a lap pool and a children&rsquo;s pool with a splash area and a play area, supporting an active, wellness-focused lifestyle. Residents can also enjoy easy access to a park, a beach, healthcare facilities and a vibrant souq plaza with fine dining, luxury retail and wellness spaces.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
											What types of properties are available in Nawayef Park Views?
										</button>
									</div>
									<div id="collapse-6" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Nawayef Park Views features elegant one- to four-bedroom apartments, inspired by Mediterranean architecture.
										</div>
									</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</section>





    </div>
</div><section data-sf-element="Row" className="location-section realestate-details">
	<div className="container-lg visual-anim">
		<div className="row">
			<div id="Contentplaceholder1_T620A45DA002_Col00" className="sf_colsIn col-lg-5" data-sf-element="Contact Us Form" data-placeholder-label="Contact Us Form">

	<ProjectLeadForm projectName="Nawayef Park Views" redirectUrl="/real-estate/nawayef-parkviews/thank-you" title="Register your interest" />

			</div>
			<div id="Contentplaceholder1_T620A45DA002_Col01" className="sf_colsIn col-lg-7" data-sf-element="Map Section" data-placeholder-label="Map Section">


        
        <div className="map-outer gmap-container" style={{ height: '450px', width: '100%', minHeight: '400px' }}>
            <MapContainer center={[24.413042, 54.352053]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%', borderRadius: '12px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[24.413042, 54.352053]}>
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
