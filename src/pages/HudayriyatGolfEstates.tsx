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

export default function HudayriyatGolfEstates() {
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
							<video className="video" src="/videos/modoncorporatelibraries/default-video-library/hudayriay-golf-estates-video-desktop9171.mp4" data-dsrc="/videos/modoncorporatelibraries/default-video-library/hudayriay-golf-estates-video-desktop9171.mp4" data-msrc="/videos/modoncorporatelibraries/default-video-library/hudayriay-golf-estates-video-desktop9171.mp4" autoplay loop muted playsInline></video>
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
												<img src="/images/modoncorporatelibraries/real-estate/logo/hge_logo_en_white_h1a12.svg" alt="" />
											</div>

											<div className="title"><h1>Hudayriyat Golf Estates</h1> <p style={{ fontSize: '26px' }}>Where life finds its swing</p></div>
										<div className="btn-outer">
												<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/hudayriyat/?zone=hudayriyat-golf-estates">virtual tour</a>

												<a className="btn btn-white btn-scroll" href="#register-now">REGISTER NOW</a>
										</div>

											<a className="btn btn-download" download href="/docs/modoncorporatelibraries/contactus-uploaded-documents/hge-brochure8415.pdf">
												download brochure
												<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/donwloadbros.png" alt="" />
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
	<div className="btn-outer mobile-view">
			<a className="btn btn-grey" target="_blank" href="https://world.modon.com/abu-dhabi/hudayriyat/?zone=hudayriyat-golf-estates">virtual tour</a>

			<a className="btn btn-white btn-scroll" href="#register-now">REGISTER NOW</a>
	</div>
 
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col00" className="sf_colsIn" data-sf-element="Project Details and Image" data-placeholder-label="Project Details and Image">
	<section className="info-box-section details-page">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="info-block">

							<div className="desc"><p>Hudayriyat Golf Estates offers a distinguished residential experience
set alongside sweeping fairways and serene water channels.
Designed for those who appreciate tranquility and prestige, this
exclusive precinct brings together Andalusian-inspired architecture,
pristine nature, and world-class amenities in perfect balance.</p></div>
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
							<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/hudayriyat-golf-estate-side-text01aa.jpg" alt='Hudayriyat Golf Estate' title='Hudayriyat-Golf-Estate-side-text' />
						</div>
				</div>
				<div className="col-md-6">
					<div className="details">
													<div className="desc"><h2 className="highlight">Mansions, Villas, and Townhomes
</h2><p>Mansions and villas are defined by their prime positioning and panoramic outlook, offering a living experience where every detail is considered. Designed for those who seek exclusivity, each residence is a study in elevated living. Townhomes present a modern residential solution that balances functionality and style. Thoughtfully designed for contemporary family life, they blend efficiency with elegance, delivering comfort, practicality, and a genuine sense of belonging within a vibrant community.
</p></div>
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
													<div className="title"><h3>3-bedroom Townhomes</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 204 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q3 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 4.2m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>4-bedroom Townhomes</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 237 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q3 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 4.9m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>4-bedroom Golf Homes</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 372 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q3 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 7.4m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>5-bedroom Range Villas</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 547 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q3 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 10.3m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>6-bedroom Fairway Villas</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 910 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q3 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 26.8m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>6-bedroom Golf Mansions</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 1,150 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q3 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 35.8m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>Par 3 Villas</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 235 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q3 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 4.9m</span>
															</li>
													</ul>

											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="parkview-block">
											<div className="details">
													<div className="title"><h3>Par 4 Villas</h3></div>

													<ul>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/bedroom_icon33f9.png" alt='Bedroom' title='Bedroom_Icon' />
																																	<span>Size: 327 sqm</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/payment_plan_iconfe14.png" alt='Payment Plan' title='Payment_Plan_Icon' />
																																	<span>Payment plan: 40/60</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/handover_icon3806.png" alt='Handover_Icon' title='Handover_Icon' />
																																	<span>Handover: Q3 2030</span>
															</li>
															<li>
																	<img src="/images/modoncorporatelibraries/icons/price_icon7ecc.png" alt='Price Icon' title='Price_Icon' />
																																	<span>Average price: 6.6m</span>
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
									<img src="/images/modoncorporatelibraries/amenities-icons/hge-18-hole-golf-course207d.svg" alt='18-Hole Golf Course' />

									<span>18-Hole Golf Course</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/hge-country-clubhouse4a5c.svg" alt='Country Clubhouse' />

									<span>Country Clubhouse</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/hge-dining-and-retail0312.svg" alt='Dining &amp; Retail' />

									<span>Dining & Retail</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/hgewellness-centre2085.svg" alt='Wellness Centre' />

									<span>Wellness Centre</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/hge-multi-sports-courts4ffb.svg" alt='Multi-Sports Courts' />

									<span>Multi-Sports Courts</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/hge-community-centre8a64.svg" alt='Community Centre' />

									<span>Community Centre</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/-private-school635f.svg" alt='Private School' />

									<span>Private School</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/hge-cycling-trails23db.svg" alt='Cycling Trails' />

									<span>Cycling Trails</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/hge-parks-and-green-spacese123.svg" alt='Parks &amp; Green Spaces' />

									<span>Parks & Green Spaces</span>
							</div>
							<div className="aminity">
									<img src="/images/modoncorporatelibraries/amenities-icons/hge-coworking-spacesc5a1.svg" alt='Coworking Spaces' />

									<span>Coworking Spaces</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

<div >
    <div className="sfContentBlock sf-Long-text" ><br /><img sf-image-responsive="true" src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/hudayriyat-golf-estate-map-1400x788c743.jpg" height="788" style={{ maxWidth: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} title="Hudayriyat-Golf-Estate-Map-1400x788" width="1400" alt="Hudayriyat Golf Estate Map" className="-align-center" sf-size="397055" /><br /></div>
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
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/exterior/hudayriyat-golf-estates-view5bf9.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/exterior/hudayriyat-golf-estates-view-33d8f.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/exterior/hudayriyat-golf-estates-view-5ada4.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/exterior/hudayriyat-golf-estates-view-443a4.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/exterior/hudayriyat-golf-estates-view-22fa1.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/interior/mth_modon_west-golf-townhouses_view-37_a02bb6e.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/interior/mth_modon_west-golf-townhouses_view-42_a02a51d.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/interior/mth_modon_west-golf-townhouses_view-34_a02418c.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/interior/mth_modon_west-golf-townhouses_view-35_a029d70.jpg" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/real-estate/hudayriyat-golf-estate/gallery/interior/mth_modon_west-golf-townhouses_view-41_a02cf41.jpg" alt="" />
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
											Are the Villas and Townhomes available for purchase by all nationalities?
										</button>
									</div>
									<div id="collapse-1" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, the Villas and Townhomes are open to buyers of all nationalities and are offered on a freehold basis.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
											Is the community gated and secure?
										</button>
									</div>
									<div id="collapse-2" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, the Townhome community, Villa community, and Waterfront community, are gated with 24-hour private security.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
											Can the property be resold before handover?
										</button>
									</div>
									<div id="collapse-3" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<div>Yes, the villa may be resold prior to handover, provided that at least 20% of the total payment has been made,</div><div>and all project guidelines are observed.</div>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
											Are pets allowed?
										</button>
									</div>
									<div id="collapse-4" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, pets are allowed and a dog park is located in the community area.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
											When will the community be ready for handover?
										</button>
									</div>
									<div id="collapse-5" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The community will be ready for handover by August 2030.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
											What sustainability features are included?
										</button>
									</div>
									<div id="collapse-6" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Villas have a Pearl 3.0 rating as per Abu Dhabi Municipality.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-7" aria-expanded="true" aria-controls="collapse-7">
											Can I select my properties landscaping?
										</button>
									</div>
									<div id="collapse-7" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											All units come with garden space provisions, giving you the option to build your own landscape, as desired.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-8" aria-expanded="true" aria-controls="collapse-8">
											Why buy a property on Hudayriyat Golf Estates?
										</button>
									</div>
									<div id="collapse-8" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<div>It&rsquo;s ultra-low-density golf-front living within an active island. You get privacy, space, and luxury villas with</div><div>immediate access to a proven leisure and lifestyle destination.</div>
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

	<ProjectLeadForm projectName="Hudayriyat Golf Estates" redirectUrl="/real-estate/hudayriyat-golf-estates/thank-you" title="Register your interest" />

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
