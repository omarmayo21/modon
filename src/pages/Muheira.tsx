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

export default function Muheira() {
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
							<video className="video" src="/videos/modoncorporatelibraries/default-video-library/muheira-desktop-video-1920x10807e9c.mp4" data-dsrc="/videos/modoncorporatelibraries/default-video-library/muheira-desktop-video-1920x10807e9c.mp4" data-msrc="/videos/modoncorporatelibraries/default-video-library/muheira-desktop-video-1920x10807e9c.mp4" autoplay loop muted playsInline></video>
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
												<img src="/images/modoncorporatelibraries/about-us/muheira-new-logo503a.png" alt="" />
											</div>

											<div className="title"><h1>Muheira</h1> <p style={{ fontSize: '26px' }}>Where every view tells a story</p></div>
										<div className="btn-outer">
												<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/?zone=reem_island">virtual tour</a>

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
			<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/?zone=reem_island">virtual tour</a>

			<a className="btn btn-white btn-scroll" href="#register-now">Register now</a>
	</div>
 
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col00" className="sf_colsIn" data-sf-element="Project Details and Image" data-placeholder-label="Project Details and Image">
	<section className="info-box-section details-page">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="info-block">

							<div className="desc"><p>Muheira is situated in one of the Abu Dhabi's most desirable locations, close to the capital’s financial district and many wellbeing and lifestyle options.  Offering a curated collection of 1, 2, and 3-bedroom luxury apartments, Muheira combines convenience with resort-style amenities.</p></div>
					</div>
				</div>
			</div>
		</div>
	</section>



    </div>
</div>
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col01" className="sf_colsIn" data-sf-element="Activities" data-placeholder-label="Activities">

	<section className="detailed-block-section">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
						<div className="img-outer">
							<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/promo-card/muheira-promocard0516.jpg" alt='Muheira promocard' title='Muheira-promocard' />
						</div>
				</div>
				<div className="col-md-6">
					<div className="details">
													<div className="desc"><h2 className="highlight">The new phase of Muheira
</h2><p>Muheira comprises two thoughtfully designed residential towers located on Reem Island, offering a contemporary lifestyle focusing on convenience and comfort. It features modern 1-, 2-, and 3-bedroom apartments, with stunning city views that complement the dynamic Reem Island lifestyle. Thoughtfully designed layouts feature spacious interiors and high-end finishes, with large windows and balconies to enhance seamless indoor/outdoor living. Every apartment is designed to provide comfort and privacy while maximising natural light and views.</p></div>
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
																																	<span>Size: 74 - 86 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 50/50</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2029</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 1.6m</span>
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
																																	<span>Size: 113 - 156 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 50/50</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2029</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 2.8m</span>
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
																																	<span>Size: 188 - 240 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 50/50</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2029</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 4.3m</span>
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
									<img src="/images/modoncorporatelibraries/amenities-icons/bbq-and-picnic-areasdc26.svg" alt='BBQ and picnic areas' />

									<span>BBQ and picnic areas</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/children-play-area166e667fde2349fc802641cf07999e853929.svg" alt='Children&#39;s play area' />

									<span>Children's play area</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/children-play-roome6cf.svg" alt='Children&#39;s play room' />

									<span>Children's play room</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/children-pooldbb9.svg" alt='Children&#39;s pool' />

									<span>Children's pool</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/cinema-room3718.svg" alt='Cinema room' />

									<span>Cinema room</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/gym-and-yoga-studioa643.svg" alt='Gym and Yoga studio' />

									<span>Gym and Yoga studio</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/outdoor-fitness7b4f.svg" alt='Outdoor fitness' />

									<span>Outdoor fitness</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/outdoor-loungeaa88.svg" alt='Outdoor lounge' />

									<span>Outdoor lounge</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/padel-court994e.svg" alt='Padel court' />

									<span>Padel court</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/roof-terrace-bbq-gardenecf8.svg" alt='Roof terrace and BBQ garden' />

									<span>Roof terrace and BBQ garden</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

<div >
    <div className="sfContentBlock sf-Long-text" ><div className="nawayef-map-section"><div className="container"><div className="row"><div className="col-sm-12"><div className="map-outer"><img src="/images/modoncorporatelibraries/maps/muheira-new-map0f87.jpg" className="w-100" alt="" sf-size="365294" /></div></div></div></div></div></div>
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
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-buildings-view098b.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-podium-poole4e1.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-indoor-kids-play-mezzanine260e.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-indoor-kids-play23e4.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-lobbyec3a.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-private-diningf48f.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-3-bed-corner-unit74df.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-games-lounge80c7.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-standard-corner-unit-living-3bed6c95.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/muhiera-b/gallery/muheira-master-bedroom4d5e.jpg" alt="" />
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
											Where exactly is the project located?
										</button>
									</div>
									<div id="collapse-1" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>The development is situated within easy walking distance of the Abu Dhabi Global Market (ADGM) international financial district. This prime location ensures residents are at the heart of the capital&rsquo;s financial and retail hub.</p>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
											What is the expected completion date?
										</button>
									</div>
									<div id="collapse-2" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>The estimated handover for this refined community is scheduled for Q2 2029.</p>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
											What types of residences are available in Muheira?
										</button>
									</div>
									<div id="collapse-3" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Muheira features a curated selection of contemporary 1, 2, and 3-bedroom apartments.
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
											Muheira offers a resort-inspired living experience, distinguished by a suite of premium amenities. Residents enjoy access to a 25-metre lap pool, dedicated children&rsquo;s playrooms and outdoor play areas, as well as curated BBQ and picnic spaces. The wellness offering includes a state-of-the-art gym and yoga studio, outdoor fitness stations, and a tranquil outdoor lounge, complemented by an exclusive cinema room and further bespoke facilities.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
											Are the properties in Muheira freehold?
										</button>
									</div>
									<div id="collapse-5" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Muheira is a freehold development, inviting both local and international investors to secure property within one of Abu Dhabi&rsquo;s most prestigious and sought-after neighbourhoods.</p>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
											Does purchase of Muheira qualify for the UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-6" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Property investments in Muheira exceeding AED 2,000,000 typically enable owners to apply for the prestigious 10-year UAE Golden Visa, ensuring long-term security and residency within the Emirates.
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

	<ProjectLeadForm projectName="Muheira" redirectUrl="/real-estate/muheira/thank-you" title="Register your interest" />

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
