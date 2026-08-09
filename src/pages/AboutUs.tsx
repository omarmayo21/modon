// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
    const spotlightSwiperRef = useRef<any>(null);
    const compProjectSwiperRef = useRef<any>(null);

    useEffect(() => {
        // Safe React Hero Image Resize Logic
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

        if (window.Swiper) {
            spotlightSwiperRef.current = new window.Swiper(".swiper-spotlight", {
                slidesPerView: 1,
                loop: false,
                autoplay: false,
            });

            compProjectSwiperRef.current = new window.Swiper(".swiper-comp-project", {
                slidesPerView: "auto",
                spaceBetween: 0,
                loop: true,
                freeMode: true,
                autoplay: false,
                centeredSlides: true,
                navigation: {
                    nextEl: ".comp-project-next",
                    prevEl: ".comp-project-prev"
                },
                breakpoints: {
                    768: {
                        loop: false,
                        centeredSlides: false,
                    },
                },
            });
        }
        
        const nextBtn = document.querySelector('.comp-project-next');
        const prevBtn = document.querySelector('.comp-project-prev');
        const triggerNext = () => { if (compProjectSwiperRef.current) compProjectSwiperRef.current.slideNext(); };
        const triggerPrev = () => { if (compProjectSwiperRef.current) compProjectSwiperRef.current.slidePrev(); };
        
        if(nextBtn) nextBtn.addEventListener('click', triggerNext);
        if(prevBtn) prevBtn.addEventListener('click', triggerPrev);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (spotlightSwiperRef.current) spotlightSwiperRef.current.destroy(true, true);
            if (compProjectSwiperRef.current) compProjectSwiperRef.current.destroy(true, true);
            if(nextBtn) nextBtn.removeEventListener('click', triggerNext);
            if(prevBtn) prevBtn.removeEventListener('click', triggerPrev);
        };
    }, []);

    return (
        <div className="content-wrapper">
            <Header />
 
 

	<section className="banner-section small-banner">
		<div className="swiper swiper-spotlight">
			<div className="swiper-wrapper">
				<div className="swiper-slide">
					<div className="details-section aboutus">
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div className="content" data-aos="fade-right" data-aos-duration="2000">
											<div className="title">
												We shape the future of intelligent, <span>connected living.</span>
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



        <section className="img-desc-section">
                    <div className="image-display-section">
                        <div className="img-outer">
                            <img src="/images/modoncorporatelibraries/whistleblowing-procurement/whisltleblowingf09c.png?sfvrsn=d7be3e0_0" alt="" />
                        </div>
                    </div>
            <div className="whoweare-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="title">Who we are</div>

                                <div className="sub-title">
                                    We create iconic designs and experiences for living, leisure and business that continually surpass expectations.<br /><br /> Through accelerated strategic investment and innovation on an unrivalled scale, we provide unparalleled opportunities to shape the future and advance societies.<br /><br /> Our goal is to deliver long-term, sustainable value wherever we go, laying the foundations for a new era of intelligent, connected living.
                                </div>

                            <div className="description-outer">

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>






        <section className="img-desc-section process-section">
            <div className="whoweare-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="title">Vision</div>

                                <div className="sub-title">
                                    <span style={{fontWeight:'bold', fontSize:'60px', color:'#000', display:'inline-block', margin:'0 10px'}}>"</span>To be at the forefront of urban innovation, shaping the future of intelligent, connected living.<span style={{fontWeight:'bold', fontSize:'60px', color:'#000', display:'inline-block', margin:'0 10px'}}>"</span>
                                </div>

                            <div className="description-outer">

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>






        <section className="img-desc-section">
            <div className="whoweare-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="title">Mission</div>

                                <div className="sub-title">
                                    <span style={{fontWeight:'bold', fontSize:'60px', color:'#000', display:'inline-block', margin:'0 10px'}}>"</span>We create iconic designs and experiences for living, leisure and business that continuously surpass expectations for our customers. Through accelerated strategic investment, collaboration and innovation we drive opportunities and embrace new technologies that set the future benchmark for intelligent, connected living.<span style={{fontWeight:'bold', fontSize:'60px', color:'#000', display:'inline-block', margin:'0 10px'}}>"</span>
                                </div>

                            <div className="description-outer">

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>







	<section className="ceo-section" data-aos="fade-up" data-aos-duration="2000">
		<div className="img-outer">
			<img src="/images/modoncorporatelibraries/about-us/h-e-jassem-Mohamed-main-image0e2f.jpg?sfvrsn=b2e6f076_2" alt="" />
		</div>
		<div className="content-outer">
			<div>
					<div className="content"><h3>
Abu Dhabi is witnessing unprecedented growth, driven by its leadership’s ambitious vision to enhance quality of life in the emirate and the well-being of its citizens, residents, and visitors. 
</h3>
<p>
Based in Abu Dhabi, with an international vision, Modon actively strives to contribute to charting the future map of the UAE capital and beyond. We do this by developing vibrant communities, unique hospitality, leisure and lifestyle experiences and world-class sporting facilities in partnership with industry leaders. We work with passion, style, and purpose to build a lasting legacy for future generations and drive positive economic, social and environmental impact.
</p></div>				
				
					<div className="designation">H.E. Jassem Mohamed<br />Bu Ataba Al Zaabi<br /> CHAIRMAN</div>
			</div>
		</div>
	</section>




	<section className="directors-section">
		<div className="container">
			<div className="row">
				<div className="col-sm-12" data-aos="fade-up" data-aos-duration="2000">
					<div className="title">Board of Directors</div>
					<div className="sub-title"></div>
				</div>
				
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-1-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/h-e-jassem-mohammed-bu-ataba-al-zaabicbdc54e9-b861-459e-b10a-caad584391da3256.png?sfvrsn=ed4eeb45_3" alt='H.E. Jassem Mohammed Bu Ataba Al Zaabi' />
									</div>

									<div className="name">H.E.  Jassem Mohamed Bu Ataba Al Zaabi</div>

									<div className="positoin">CHAIRMAN</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-1-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/h-e-jassem-mohammed-bu-ataba-al-zaabicbdc54e9-b861-459e-b10a-caad584391da3256.png?sfvrsn=ed4eeb45_3" alt='H.E. Jassem Mohammed Bu Ataba Al Zaabi' />
										</div>
									<div className="content-outer">
											<div className="title">H.E.  Jassem Mohamed Bu Ataba Al Zaabi</div>

											<div className="position">CHAIRMAN</div>

											<div className="desc">
												<p>H.E. Jassem Mohamed Bu Ataba Al Zaabi is Abu Dhabi&rsquo;s Chairman of the Department of Finance, where he instils a culture of financial sustainability across all government-related entities, preserving the emirate&rsquo;s robust financial standing.
</p><p>As the Secretary General of Abu Dhabi&rsquo;s Supreme Council for Financial and Economic Affairs and the Vice Chairman of the UAE Central Bank, he plays a pivotal role in guiding the economic and financial sectors.
</p><p>H.E Al Zaabi also serves as Chairman of Abu Dhabi Pension Fund and e&amp; PJSC, and a board member in prominent organizations, including, UAE Central Bank, Abu Dhabi Investment Authority (ADIA), Abu Dhabi National Oil Company (ADNOC), First Abu Dhabi Bank (FAB) and Tawazun Economic Council, as well as a member of the committee of the Education and Human Resources Council.
</p>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-2-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/h-e-sheikh-abdulla-bin-mohammed-bin-butti-al-hamedf18b0d04-051b-480c-8bc3-af51f5641710bf2d.png?sfvrsn=4927c684_2" alt='H.E. Sheikh Abdulla Bin Mohammed Bin Butti Al Hamed' />
									</div>

									<div className="name">H.E. Sheikh Abdulla Bin Mohammed Bin Butti Al Hamed</div>

									<div className="positoin">VICE CHAIRMAN</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-2-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/h-e-sheikh-abdulla-bin-mohammed-bin-butti-al-hamedf18b0d04-051b-480c-8bc3-af51f5641710bf2d.png?sfvrsn=4927c684_2" alt='H.E. Sheikh Abdulla Bin Mohammed Bin Butti Al Hamed' />
										</div>
									<div className="content-outer">
											<div className="title">H.E. Sheikh Abdulla Bin Mohammed Bin Butti Al Hamed</div>

											<div className="position">VICE CHAIRMAN</div>

											<div className="desc">
												<p>
H.E. Sheikh Abdulla Bin Mohammed Bin Butti Al Hamed holds several esteemed positions, including Board Member of Abu Dhabi Developmental Holding Company PJSC “ADQ”, Member of the Executive Committee of Al Jazira Club and Chairman of the Board of Directors of Al Jazira Investment Company, and Member of the Board of Trustees of Abu Dhabi University. He has garnered several awards and recognitions throughout his career, including the Golden Key Award - the highest honour accolade presented by the Arab Hospitals Federation in recognition of his outstanding efforts in leading Abu Dhabi's outstanding healthcare model; the Pioneer Leadership Award in Healthcare Arab Hospitals Federation Award - Medhealth Cairo 2022; Government Hero of the Year Award from the Department of Health Abu Dhabi in the COVID 19 response category and Executive Hero of the Year 2021 for his efforts in the health sector in response to the pandemic in the emirate.
</p>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-3-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/h-e--mohamed-ali-al-shorafa07e1.png?sfvrsn=f4ac4368_2" alt='H.E.-Mohamed-Ali-Al-Shorafa' />
									</div>

									<div className="name">H.E. Mohamed Ali Al Shorafa</div>

									<div className="positoin">BOARD MEMBER</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-3-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/h-e--mohamed-ali-al-shorafa07e1.png?sfvrsn=f4ac4368_2" alt='H.E.-Mohamed-Ali-Al-Shorafa' />
										</div>
									<div className="content-outer">
											<div className="title">H.E. Mohamed Ali Al Shorafa</div>

											<div className="position">BOARD MEMBER</div>

											<div className="desc">
												<p>
H.E. Mohamed Ali Al Shorafa is a distinguished member of the Abu Dhabi Executive Council and currently holds the esteemed position of Chairman of the Department of Municipalities and Transport (DMT) as of January 2023. In his capacity as Chairman, H.E. Al Shorafa plays a pivotal role in overseeing the urban planning and transport sectors, while also providing strategic guidance for DMT’s affiliated entities. In addition to his role at DMT, H.E. Al Shorafa holds various other prominent positions, including Chairman of the Abu Dhabi Housing Authority, Chairman of Etihad Aviation Group, Chairman of the SCA Board, Vice-Chair of the Abu Dhabi Global Market (ADGM), and serves as a board member of Etihad Rail and the Abu Dhabi Transport Company. His numerous leadership positions, coupled with him being honoured as one of the world’s most influential Arabs in 2019 and 2021 by Arabian Business in collaboration with Bombadier due to his outstanding achievements, reflect his deep commitment to the development and advancement of the Emirate of Abu Dhabi.
</p>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-4-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/h-e-dr-ahmed-mubarak-al-mazrouei61148378-9a65-490b-b126-4f0f5819c9b51682.png?sfvrsn=5c2c52cc_2" alt='H.E. Dr. Ahmed Mubarak Al Mazrouei' />
									</div>

									<div className="name">H.E. Dr. Ahmed Mubarak Al Mazrouei</div>

									<div className="positoin">BOARD MEMBER</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-4-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/h-e-dr-ahmed-mubarak-al-mazrouei61148378-9a65-490b-b126-4f0f5819c9b51682.png?sfvrsn=5c2c52cc_2" alt='H.E. Dr. Ahmed Mubarak Al Mazrouei' />
										</div>
									<div className="content-outer">
											<div className="title">H.E. Dr. Ahmed Mubarak Al Mazrouei</div>

											<div className="position">BOARD MEMBER</div>

											<div className="desc">
												<p>
H.E. Dr. Ahmed Mubarak Al Mazrouei is the Chairman of the Executive Office of Abu Dhabi. His extensive portfolio includes serving as a key member of the Executive Council of Abu Dhabi, the Supreme Council for Financial and Economic Affairs, and the Board of Directors of the Abu Dhabi National Oil Company (ADNOC).
</p>
<p>
H.E Dr. Al Mazrouei's expansive career has seen him in pivotal roles, such as Chairman of the Office of the Chairman of Abu Dhabi Executive Council, Secretary-General of the Executive Council of the Emirate of Abu Dhabi, and Deputy Secretary-General of the Executive Council of the Emirate of Abu Dhabi. He has also led as Chairman of the Abu Dhabi Water and Electricity Authority and presided over the Board of Directors of the Federal Nuclear Regulatory Authority. His notable leadership extends to chairing the Civil Service Council, the Health Insurance Company, and the Abu Dhabi Health Authority. Additionally, he has held presidential and membership positions on various boards of directors and committees, solidifying his profound impact on Abu Dhabi's diverse sectors.
</p>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-5-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/h-e-mariam-bint-mohammed-saeed-hareb-almheiri6b0017c0-58ab-4878-84fe-ef080ef66e5943be.png?sfvrsn=bc824d6d_2" alt='H.E. Mariam Bint Mohammed Saeed Hareb Almheiri' />
									</div>

									<div className="name">H.E. Mariam Bint Mohammed Saeed Hareb Almheiri</div>

									<div className="positoin">BOARD MEMBER</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-5-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/h-e-mariam-bint-mohammed-saeed-hareb-almheiri6b0017c0-58ab-4878-84fe-ef080ef66e5943be.png?sfvrsn=bc824d6d_2" alt='H.E. Mariam Bint Mohammed Saeed Hareb Almheiri' />
										</div>
									<div className="content-outer">
											<div className="title">H.E. Mariam Bint Mohammed Saeed Hareb Almheiri</div>

											<div className="position">BOARD MEMBER</div>

											<div className="desc">
												<p>H.E. Mariam bint Mohammed Al Mheiri, currently Chairman of the International Affairs Office at the Presidential Court of the UAE and CEO of 2pointZero, has an illustrious career in public service. Formerly the UAE Minister of Climate Change and Environment, she led comprehensive initiatives to accelerate climate action, enhance biodiversity, and strengthen food security. H.E. Al Mheiri, a trailblazer, was the first female appointed to the board of First Abu Dhabi Bank (FAB).
</p><p>She holds board membership positions at Q Holding, Abu Dhabi Fund for Development, and the International Humanitarian and Philanthropic Council. Internationally, she represents the UAE in the Schools Meals Coalition and serves on the International Advisory Board of EAT, a global platform for food system transformation.
</p><p>Her Excellency, a recipient of the Prime Minister's Medal, holds Master&rsquo;s and Bachelor&rsquo;s degrees in Mechanical Engineering from RWTH, Germany. A visionary leader, H.E. Al Mheiri continues to contribute significantly to global sustainability efforts.
</p>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-h-e-abdullah-al-sahi-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/md0b65.png?sfvrsn=c42d4b50_2" alt='H.E. Abdulla Al Sahi' />
									</div>

									<div className="name">H.E. Abdulla Al Sahi</div>

									<div className="positoin">GROUP MANAGING DIRECTOR & BOARD MEMBER</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-h-e-abdullah-al-sahi-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/md0b65.png?sfvrsn=c42d4b50_2" alt='H.E. Abdulla Al Sahi' />
										</div>
									<div className="content-outer">
											<div className="title">H.E. Abdulla Al Sahi</div>

											<div className="position">GROUP MANAGING DIRECTOR & BOARD MEMBER</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-7-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/mr-hamad-abdulla-al-hammadieac389c4-4e73-4bf6-9879-25327e6be24d7603.png?sfvrsn=77cc6d5_2" alt='Mr. Hamad Abdulla Al Hammadi' />
									</div>

									<div className="name">Mr. Hamad Abdulla Al Hammadi</div>

									<div className="positoin">BOARD MEMBER</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-7-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/mr-hamad-abdulla-al-hammadieac389c4-4e73-4bf6-9879-25327e6be24d7603.png?sfvrsn=77cc6d5_2" alt='Mr. Hamad Abdulla Al Hammadi' />
										</div>
									<div className="content-outer">
											<div className="title">Mr. Hamad Abdulla Al Hammadi</div>

											<div className="position">BOARD MEMBER</div>

											<div className="desc">
												<p>
Hamad Abdulla Al Hammadi is the Chief Executive Officer of Energy & Utilities and Sustainable Manufacturing at ADQ, and directs the strategic growth of portfolio companies within his broad mandate. As Chairman of both Emirates Steel Arkan (ESA) and Emirates Water and Electricity Company (EWEC), as well as the board member at Abu Dhabi National Energy Company (TAQA) and TA’ZIZ, he leverages his exceptional leadership skills to drive forward impactful projects across the Utilities, Industry, and Financial Services sectors.
</p>

											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-8-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/mr-greg-fewere8b68a7d-5f51-4c7d-8ee0-78e01422bbc5ea51.png?sfvrsn=7b23d1f6_2" alt='Mr.Greg Fewer' />
									</div>

									<div className="name">Mr. Greg Fewer</div>

									<div className="positoin">BOARD MEMBER</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-8-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/mr-greg-fewere8b68a7d-5f51-4c7d-8ee0-78e01422bbc5ea51.png?sfvrsn=7b23d1f6_2" alt='Mr.Greg Fewer' />
										</div>
									<div className="content-outer">
											<div className="title">Mr. Greg Fewer</div>

											<div className="position">BOARD MEMBER</div>

											<div className="desc">
												<p>
Greg Fewer is the Chief Financial Officer at a Dubai single family office, and is responsible for the company’s finance, treasury, and risk management. In his role, he also sits on the Member Management Committee and Investment Committee. Previously, Greg has worked as Group Chief Financial and Sustainability Officer for Aldar Properties in Abu Dhabi, where he led on all Aldar Group finance and sustainability functions including corporate finance, treasury, financial control, FP&A, insurance, risk management, investor relations, digital services, and sustainability.
</p>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-9-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/dr-karim-bennis2451b034-bbd9-4ad5-ae99-6b61eef265836cb7.png?sfvrsn=245364a_2" alt='Dr. Karim Bennis' />
									</div>

									<div className="name">Dr. Karim Bennis</div>

									<div className="positoin">BOARD MEMBER</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-9-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/dr-karim-bennis2451b034-bbd9-4ad5-ae99-6b61eef265836cb7.png?sfvrsn=245364a_2" alt='Dr. Karim Bennis' />
										</div>
									<div className="content-outer">
											<div className="title">Dr. Karim Bennis</div>

											<div className="position">BOARD MEMBER</div>

											<div className="desc">
												<p>
Karim Bennis is the Group Chief Financial Officer of e& Group and has international experience within various industries including manufacturing, retail and heavy equipment. 
</p>
<p>
He is a member of the Board and Audit Committee of Etisalat Egypt, Maroc Telecom Group in Morocco, Mobily in Saudi Arabia, Pakistan Telecommunication Company Ltd (PTCL Group) and Atlantique Telecom Holding.
</p>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
			</div>
		</div>
	</section>






	<section className="ceo-section" data-aos="fade-up" data-aos-duration="2000">
		<div className="img-outer">
			<img src="/images/modoncorporatelibraries/about-us/bill-o-regan97bd.jpg?sfvrsn=ac5992dd_3" alt="" />
		</div>
		<div className="content-outer">
			<div>
					<div className="content"><h3>
Abu Dhabi continues to experience consistent economic growth, through the development of extensive and sustainable projects, aligned with the UAE’s sustained pace of development. Modon buoys the economic and social growth of Abu Dhabi, promoting its status as an outstanding global business and leisure destination, by launching exciting projects that empower residents and tourists to enjoy the highest quality of experiences. </h3>
<p>
Inspired by Abu Dhabi’s vision to become a principal example of high-quality urban development, Modon is dedicated to applying the highest of international standards to its projects, creating a diverse range of world-class modern destinations across the emirate.</p></div>				
				
					<div className="designation">Bill O’Regan <br /> Group Chief Executive Officer</div>
			</div>
		</div>
	</section>




	<section className="directors-section">
		<div className="container">
			<div className="row">
				<div className="col-sm-12" data-aos="fade-up" data-aos-duration="2000">
					<div className="title">Executive Management</div>
					<div className="sub-title"></div>
				</div>
				
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#board-of-director-h-e-abdullah-al-sahi-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/md0b65.png?sfvrsn=c42d4b50_2" alt='H.E. Abdulla Al Sahi' />
									</div>

									<div className="name">H.E. Abdulla Al Sahi</div>

									<div className="positoin">GROUP MANAGING DIRECTOR & BOARD MEMBER</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="board-of-director-h-e-abdullah-al-sahi-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/md0b65.png?sfvrsn=c42d4b50_2" alt='H.E. Abdulla Al Sahi' />
										</div>
									<div className="content-outer">
											<div className="title">H.E. Abdulla Al Sahi</div>

											<div className="position">GROUP MANAGING DIRECTOR & BOARD MEMBER</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4 stretch-card mb-5" data-aos="fade-up" data-aos-duration="2000">
						<div className="card directors-card" data-bs-toggle="modal" data-bs-target="#bill-o-regan-modal">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/mr-bill-o-reganf1f8d586-1530-411a-a138-9e9f1ac460bae93f.png?sfvrsn=6e530ed0_2" alt='Mr. Bill O’Regan' />
									</div>

									<div className="name">Mr. Bill O'Regan</div>

									<div className="positoin">GROUP CHIEF EXECUTIVE OFFICER</div>
							</div>
						</div>
					</div>
					<div className="modal fade board-director" id="bill-o-regan-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/mr-bill-o-reganf1f8d586-1530-411a-a138-9e9f1ac460bae93f.png?sfvrsn=6e530ed0_2" alt='Mr. Bill O’Regan' />
										</div>
									<div className="content-outer">
											<div className="title">Mr. Bill O'Regan</div>

											<div className="position">GROUP CHIEF EXECUTIVE OFFICER</div>

											<div className="desc">
												<p>Since January 2024, Bill O&rsquo;Regan has been the Group Chief Executive Officer at Modon Holding. Prior to his role as Group CEO, he served as Chief Executive Officer of Modon Properties, and is a founding member of the C-Suite Executive team. Bill has 25 years&rsquo; experience in the real estate sector.
</p><p>An expert in large-scale development projects, Bill&rsquo;s impressive accolades include roles at Modon Properties and the Urban Planning Council.
</p><p>He played a key role in Abu Dhabi&rsquo;s famous skyline, heading projects like Hudayriat Island, Mina Wharf, Western Region Eco-Tourism projects, Riyadh City National Housing, and Baniyas North Development. With experience spanning developments in Greece, Ireland, Mexico, Holland, and France, coupled with his in-depth knowledge, Bill stands as a catalyst propelling Modon to new heights of success and innovation.
</p>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				
			</div>
		</div>
	</section>





	<section className="value-section">
		<div className="container" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="col-sm-12">
					<div className="title">Our Values</div>
				</div>
			</div>

			<div className="row">
					<div className="col-sm-6" data-aos="fade-right" data-aos-duration="2000">
							<div className="sub-title">Vibrant</div>
													<div className="desc"><div><div>We are creative, operating with style, meaning and</div><div>purpose, enhancing daily life, and investing in iconic</div><div>projects where everyone can thrive.</div><p></p></div></div>
					</div>
					<div className="col-sm-6" data-aos="fade-left" data-aos-duration="2000">
							<div className="sub-title">Transformative</div>
													<div className="desc">We push boundaries and embrace ground-breaking
solutions, creating spaces that redefine modern living.
From cutting-edge designs to forward-thinking concepts,
innovation shapes every aspect of our business.</div>
					</div>
					<div className="col-sm-6" data-aos="fade-right" data-aos-duration="2000">
							<div className="sub-title">Impactful</div>
													<div className="desc">We make a positive impact on the people and places we
interact with, driving lasting economic and social impact
to advance societies.</div>
					</div>
					<div className="col-sm-6" data-aos="fade-left" data-aos-duration="2000">
							<div className="sub-title">Sustainable</div>
													<div className="desc">We are redefining the way we live, work and play
through the delivery of long-term growth and economic
resilience. We drive sustainability by managing all
resources intelligently, to ensure a brighter future.</div>
					</div>
					<div className="col-sm-6" data-aos="fade-right" data-aos-duration="2000">
							<div className="sub-title">Committed</div>
													<div className="desc">With unwavering determination, we deliver on our promises,
adopting the highest standards of professionalism and
always achieving exceptional results.</div>
					</div>
			</div>

			
		</div>
	</section>





	<section className="completed-projects">
		<div className="container" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="col-sm-12">
					<div className="title-section">
						<div className="title">Completed Projects</div>
						<div className="slider-btn-outer">
							<a id="comp-projectPrev" href="javascript:;">
								<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/prevarrow.svg"
									 alt="" />
							</a>
							<a id="comp-projectNext" href="javascript:;">
								<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/nextarrrow.svg"
									 alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="carousal-outer" data-aos="fade-up" data-aos-duration="2000">
			<div className="swiper swiper-comp-project">
				<div className="swiper-wrapper">
						<div className="swiper-slide">
							<a className="card comp-project-card" href="javascript:;" target="">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/heritage-traile5386af0-8952-4aa5-b384-9250451814838900.jpg?sfvrsn=6b1515c1_5" alt='Heritage Trail' />
										</div>

										<div className="title">Hudayriyat Heritage Trail</div>

										<div className="desc">
											Established to protect the important archeological finds discovered on Hudayriyat Island, the Hudayriyat Heritage Trail takes you on a picturesque journey into the past.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="javascript:;" target="">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/fish-market-completede4fc.jpg?sfvrsn=b454b0ab_5" alt='' />
										</div>

										<div className="title">FISH MARKET - Abu Dhabi</div>

										<div className="desc">
											The new market offers a unique shopping experience with the design incorporating themes associated to the legacy of Abu Dhabi’s fishing trade and preserves the fish market’s history of more than forty years.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="https://www.hudayriyatisland.ae/en/cycling-track" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/cycle-track-completec761.jpg?sfvrsn=3ca6a5f4_2" alt='Cycle-track-complete' />
										</div>

										<div className="title">Cycling Track</div>

										<div className="desc">
											Hop on your bike and make your way around Hudayriyat Island to get closer to nature.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="https://babalnojoum.com/bateen-liwa-resort/" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/ban-bateen-liwaefa490bd-51c8-4ec7-b364-24b15ca562d1c084.jpg?sfvrsn=1253b07d_3" alt='BAN-Bateen-liwa' />
										</div>

										<div className="title">Bab Al Nojoum Bateen Liwa</div>

										<div className="desc">
											Bab Al Nojoum Bateen Liwa is an ecotourism gem nestled among the iconic red sand dunes of the Liwa Desert.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="https://babalnojoum.com/al-mugheirah-resort/" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/bab-al-nojoom-al-mugheirah-completed4294.jpg?sfvrsn=ef0b6f74_1" alt='' />
										</div>

										<div className="title">Bab Al Nojoum - Al Mugheirah</div>

										<div className="desc">
											Bab Al Nojoum is the perfect escape to reconnect with nature and to experience nature camping in an exclusive style.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="javascript:;" target="">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/al-mughierah-bay-completed-1ae3e.jpg?sfvrsn=2fde8e56_1" alt='' />
										</div>

										<div className="title">Al Mugheirah Bay</div>

										<div className="desc">
											Al Mugheirah Bay is a one-stop waterfront destination for retail, entertainment, leisure and lifestyle experiences with scenic views of the sea and the protected mangroves.  With scenic views of the sea and the protected mangroves.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="http://circuitxuae.com/" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/circuit-x-completed6607.jpg?sfvrsn=353ba8c6_1" alt='' />
										</div>

										<div className="title">Circuit X</div>

										<div className="desc">
											Let your imagination run wild at our lively adventure hub, Circuit X, where children and adults can experience fun and thrilling family-friendly activities.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="https://babalnojoum.com/hudayriyat/" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/bab_al_nojoum_hudayriyat_completed207bfbea-8fec-4665-988a-c6ba8392289f6bfa.jpg?sfvrsn=745c51bc_3" alt='Bab_Al_Nojoum_Hudayriyat_completed' />
										</div>

										<div className="title">Bab Al Nojoum - Hudayriyat</div>

										<div className="desc">
											Ignite your inner explorer and enjoy the finer things in life with our premium and exclusive resort retreats
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="https://www.hudayriyatisland.ae/" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/hudayriyat-mar-vista_completed8dd8.jpg?sfvrsn=e1dfd24b_0" alt='' />
										</div>

										<div className="title">Hudayriyat Mar Vista</div>

										<div className="desc">
											Hudayriyat Mar Vista is a buzzing beach-hub,    boasting a range of unique cultural and environmental attractions unique in their diversity and nature.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="https://www.hudayriyatisland.ae/en/trailx" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/trail-x-hudayriyat-completedf088.jpg?sfvrsn=c2fff36a_2" alt='' />
										</div>

										<div className="title">Trail X – Hudayriyat</div>

										<div className="desc">
											Trail X is the only mountain bike trail in Abu Dhabi that spans 15 km in length with 4 difficulty levels.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="https://321sports.ae/" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/321-sports-completed0e8d.jpg?sfvrsn=e5ee3feb_0" alt='' />
										</div>

										<div className="title">321 Sports</div>

										<div className="desc">
											321 Sports is a thrilling sports village, the perfect destination for those who are looking to elevate their fitness and wellness game.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="https://www.thecourtyardmall.ae/" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/courtyard-mall-completed0694043f-3a51-48f6-8db7-64df64c958bb15ab.jpg?sfvrsn=49f69502_0" alt='' />
										</div>

										<div className="title">The Courtyard Mall</div>

										<div className="desc">
											The Courtyard Mall is the first of several community retail malls to open in Riyadh City which contains a Lulu Supermarket, 12 independent retail units, and seven restaurants and cafes.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="javascript:;" target="">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/mamsh-al-mughera_completede74d.jpg?sfvrsn=40b6073e_4" alt='' />
										</div>

										<div className="title">Mamsha Al Mugheirah</div>

										<div className="desc">
											Mamsha Al Mugheirah is connecting Bab Al Nojoum - Al Mugheirah Resort and Mugheirah Bay waterfront together. Mamsha Al Mugheirah has a Surface area of 690 square metres and is 2 kilometres
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
						<div className="swiper-slide">
							<a className="card comp-project-card" href="https://www.marsana.ae/" target="_blank">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/about-us/marsanab772c721-1af8-4bc2-95ef-927da54b0d4a6fb4.jpg?sfvrsn=bd7a1e77_3" alt='Marsana' />
										</div>

										<div className="title">Marsana</div>

										<div className="desc">
											Enjoy a wide range of attractions and amenities, including a skate park, a children’s splash park and play area, easy access to the public beach, an outdoor gym, cycle paths, and a marina with a wooden pier.
										</div>

										<div className="btn theme-btn">
											Discover <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/button-arrow.svg" alt="" />
										</div>
								</div>
							</a>
						</div>
				</div>

				<div className="swiper-button-prev comp-project-prev"></div>
				<div className="swiper-button-next comp-project-next"></div>
			</div>
		</div>
	</section>


 
            <Footer />
        </div>
    );
}
