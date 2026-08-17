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

export default function Bashayer() {
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
							<video className="video" src="/videos/modoncorporatelibraries/default-video-library/modon_bashayer_15s_a_16x9_251119_without-text3a79.mp4" data-dsrc="/videos/modoncorporatelibraries/default-video-library/modon_bashayer_15s_a_16x9_251119_without-text3a79.mp4" data-msrc="/videos/modoncorporatelibraries/default-video-library/modon_bashayer_15s_a_16x9_251119_without-text3a79.mp4" autoplay loop muted playsInline></video>
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
												<img src="/images/modoncorporatelibraries/about-us/bashayer-logo_new_english3ccc217d7-659f-4afd-b004-f6a186ea0b3a800d.png" alt="" />
											</div>

											<div className="title"><h1>Bashayer</h1> <p style={{ fontSize: '26px' }}>Where water welcomes you</p></div>
										<div className="btn-outer">
												<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/hudayriyat/?utm_source=Website&amp;utm_medium=Bashayer&amp;utm_campaign=VR_Button">virtual tour</a>

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
			<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/hudayriyat/?utm_source=Website&amp;utm_medium=Bashayer&amp;utm_campaign=VR_Button">virtual tour</a>

			<a className="btn btn-white btn-scroll" href="#register-now">REGISTER NOW</a>
	</div>
 
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col00" className="sf_colsIn" data-sf-element="Project Details and Image" data-placeholder-label="Project Details and Image">
	<section className="info-box-section details-page">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="info-block">

							<div className="desc"><p>Situated on Hudayriyat Island in Abu Dhabi, Bashayer is an exceptional waterfront neighbourhood for those who seek refined coastal living. Positioned within a one-of-a-kind community on the north side of Hudayriyat Island, these homes promise a lifestyle of exclusivity and sophistication.</p></div>
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
							<img src="/images/modoncorporatelibraries/real-estate/bashayer/bashayer-villas-1080x600c5d1.jpg" alt='Bashayer Villas' title='Bashayer-villas 1080x600' />
						</div>
				</div>
				<div className="col-md-6">
					<div className="details">
													<div className="desc"><h2 className="highlight">Bashayer Villas
</h2><p>A gated community of four- and five-bedroom villas set within tranquil surroundings, where every villa is thoughtfully crafted with spacious interiors, refined finishes, and a close connection to the waterfront. Complemented by a rich array of world-class amenities, Bashayer Villas is a distinctive retreat, where every moment feels extraordinary.</p></div>
					</div>
				</div>
			</div>
		</div>
	</section>






	<section className="detailed-block-section right-align">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
						<div className="img-outer">
							<img src="/images/modoncorporatelibraries/real-estate/bashayer/bashayer-residences-1080x60030a7.jpg" alt='Bashayer Residences' title='Bashayer-residences 1080x600' />
						</div>
				</div>
				<div className="col-md-6">
					<div className="details">
													<div className="desc"><h2 className="highlight">Bashayer Residences
</h2><p>A refined collection of one- to four-bedroom apartments,  penthouses, and townhomes where contemporary design meets effortless island living. Each residence features thoughtfully planned layouts, modern finishes, and expansive windows that frame sweeping views of the Abu Dhabi skyline. Enriched by a vibrant array of community amenities, Bashayer Residences delivers a lifestyle defined by comfort and harmony.</p></div>
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
													<div className="title"><h3>1-Bedroom apartment</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 81 - 94 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 50/50</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: AED 2.5M</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>2-Bedroom apartment</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 129 - 226 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 50/50</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: AED 3.15M</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>3-Bedroom apartment</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 178 - 299 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 50/50</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: AED 4.6M</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>2-Bedroom townhome</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 164 - 207 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 50/50</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: AED 4.3M</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>4-Bedroom townhome</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 253 - 386 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 50/50</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: AED 6.2M</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>Penthouse</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 390 - 489 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 50/50</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q2 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: AED 9M</span>
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
									<img src="/images/modoncorporatelibraries/amenities-icons/gated-communityb419bda7355d4f6cb781bd0f5386d46520f2.svg" alt='Gated-Community' />

									<span>Gated Community</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/community-centre18f0d40048e24967b419ba47f80f2ec79303.svg" alt='Community-Centre' />

									<span>Community Centre</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/children-play-areae51c.svg" alt='Children-Play-Area' />

									<span>Children's Play Area</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/waterfront-locationcc2909b315b5458c8346fe2958832821eedd.svg" alt='Waterfront-Location' />

									<span>Waterfront Location</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/swimming-poolcc3a73896a2a4cf58ce8fa15caeed79d70c8.svg" alt='Swimming-Pool' />

									<span>Swimming Pool</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/park-and-green-spaces1a9645c887944533a2049d24684b5a334bac.svg" alt='Park-and-Green-Spaces' />

									<span>Park & Green Spaces</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/padel-courtsbd521f99407d4b259300a2800b6e86484332.svg" alt='Padel-Courts' />

									<span>Padel Courts</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/multi-sports-courtbdf5e8314aba423ba4c6cfdbd8b7d2de5a87.svg" alt='Multi-Sports-Court' />

									<span>Multi-Sports Court</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/cycling-and-jogging-trails72e17b26c0e641c79ec9f3cef1e9b7b459ad.svg" alt='Cycling-and-Jogging-Trails' />

									<span>Cycling & Jogging Trails</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/gym9f04e7bbdcb840198ef728a59e9189ac7f5f.svg" alt='Gym' />

									<span>Gym</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

<div >
    <div className="sfContentBlock sf-Long-text" ><p><br /><img sf-image-responsive="true" src="/images/modoncorporatelibraries/maps/bashayer-in-page-map-image-1400x78898de.svg" height="789" style={{ maxWidth: 'calc(100% - 20px)', height: 'auto', marginRight: 'auto', marginLeft: 'auto', display: 'block' }} title="Bashayer-Desktop-Map-1400x788" width="1400" alt="Bashayer-Desktop-Map-1400x788" className="-align-center" sf-size="1902041" /></p></div>
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
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-14eb7a.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-1374d4.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-12723e.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-113b0b.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-07cf05.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-064a2a.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-05411d.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-18f21d.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-174551.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-163482.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-1556bf.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-10346a.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-09c5db.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/bashayer/gallery/bashayer-image-08ac1c.jpg" alt="" />
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
											When is the expected handover date for Bashayer?
										</button>
									</div>
									<div id="collapse-1" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The villas are scheduled for handover in Q1 2030, while the expected handover date for the apartments is Q2 2030.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
											Are Bashayer home owners eligible for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-2" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, purchasing a property in Bashayer qualifies the buyer to apply for the Golden Visa, as the starting prices for apartments and villas exceed the minimum threshold of AED 2 million.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
											Is Bashayer a freehold development?
										</button>
									</div>
									<div id="collapse-3" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, all nationalities can purchase property in Bashayer with full ownership rights.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
											What is the starting price for properties in Bashayer?
										</button>
									</div>
									<div id="collapse-4" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Prices for a one-bedroom apartment start from AED 2.5 million. Modon offers an attractive 50/50 payment plan with a 5% down payment on booking, 45% paid during construction and the final 50% due upon handover.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
											What amenities are available to residents of Bashayer?
										</button>
									</div>
									<div id="collapse-5" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Bashayer features a community centre, a children&rsquo;s play area, a swimming pool, a park, green spaces, padel courts, a multi-sports court, a gym as well as cycling and jogging trails.&nbsp;
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
											What types of residential properties are available in Bashayer?
										</button>
									</div>
									<div id="collapse-6" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The final phase of Bashayer will offer four- to five-bedroom villas and one- to four-bedroom apartments, townhomes, and penthouses.
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

	<ProjectLeadForm projectName="Bashayer" redirectUrl="/real-estate/bashayer/thank-you" title="Register your interest" />

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
