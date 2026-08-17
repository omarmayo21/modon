// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Careers() {
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
             

        <section className="img-desc-section bannerless-top career-page">
            <div className="whoweare-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="title">Work with us</div>
                                                            <div className="sub-title">
                                    We actively contribute to strengthening Abu Dhabi's reputation as one of the best places in the world to live, work, and visit.
                                </div>
                            <div className="description-outer">
                                    <div className="start">
                                        We believe a strong, diverse team of passionate professionals who take pride in their work is crucial to our success. As we grow our family, we are building a team of likeminded individuals from around the world who are keen to play their part in redefining the emirate&rsquo;s landscape. Are you one of them?
                                    </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>

                    <section className="parallax-section p-0">
                        <div className="parallax-outer">
                            <div className="parallax-bg" data-parallax="scroll" data-image-src="/images/modoncorporatelibraries/careers/careers_main_new3829.jpg"></div>
                        </div>
                    </section>
        </section>





 

        <section className="process-section">
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <div className="row">
                    <div className="col-sm-12">
                            <div className="title">Life at Modon</div>
                                                    <div className="sub-title">
                                We pride ourselves on being a people-centric company.
                            </div>
                    </div>
                </div>
            </div>
            <div className="details-outer" data-aos="fade-up" data-aos-duration="2000">
                    <div className="img-outer">
                        <img src="/images/modoncorporatelibraries/about-us/careers02a7.jpg" alt="careers" />
                    </div>
                <div className="desc">
                        <p>The happiness, wellbeing, and growth of our people are at the core of what we do. We offer a positive, inclusive, encouraging working environment where every opinion is valued, and every single member of the Modon family is empowered to fulfil their potential.</p>
                                            <p>We are just as invested in creating treasured moments at work for our employees as in crafting memorable experiences for the residents and visitors of Abu Dhabi.</p>
                </div>
            </div>


        </section>






        <section className="process-section">
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <div className="row">
                    <div className="col-sm-12">
                                            </div>
                </div>
            </div>
            <div className="details-outer" data-aos="fade-up" data-aos-duration="2000">
                    <div className="img-outer">
                        <img src="/images/modoncorporatelibraries/careers/simata48e.jpg" alt="" />
                    </div>
                <div className="desc">
                        <p>Simat is Modon&rsquo;s Group-wide graduate development programme, delivered in partnership with ADGM Academy to develop high-potential Emirati talent. Through structured learning, hands-on experience, and leadership engagement, graduates build the skills needed for successful careers while strengthening Modon&rsquo;s future capabilities and supporting the UAE&rsquo;s national development priorities.</p>
                                    </div>
            </div>


        </section>






	{/*  corevalues section starts here  */}
	<section className="corevalues-section">
		<div className="container">
			<div className="row" data-aos="fade-up" data-aos-duration="2000">
				<div className="col-sm-12">
					<div className="sectiontitle-outer">
						<div className="section-title">Core Values</div>
						<div className="slider-btn-outer">
							<a id="core-valuesPrev" href="javascript:;"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/prevarrow.svg" alt="" /></a>
							<a id="core-valuesNext" href="javascript:;"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/nextarrrow.svg" alt="" /></a>
						</div>
					</div>
					<div className="carousal-outer">
						<div className="swiper swiper-core-values">
							<div className="swiper-wrapper">
									<div className="swiper-slide stretch-card">
										<div className="card value-card">
											<div className="card-body">
												<div className="title-outer">
														<div className="title">Vibrant</div>

														<img src="/images/modoncorporatelibraries/icons/monitoring6df3.svg" alt='' />
												</div>
													<div className="desc"><div><div>We are creative, operating with style, meaning and</div><div>purpose, enhancing daily life, and investing in iconic</div><div>projects where everyone can thrive.</div><p></p></div></div>
											</div>
										</div>
									</div>
									<div className="swiper-slide stretch-card">
										<div className="card value-card">
											<div className="card-body">
												<div className="title-outer">
														<div className="title">Transformative</div>

														<img src="/images/modoncorporatelibraries/icons/deblur23a8.svg" alt='' />
												</div>
													<div className="desc">We push boundaries and embrace ground-breaking
solutions, creating spaces that redefine modern living.
From cutting-edge designs to forward-thinking concepts,
innovation shapes every aspect of our business.</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide stretch-card">
										<div className="card value-card">
											<div className="card-body">
												<div className="title-outer">
														<div className="title">Impactful</div>

														<img src="/images/modoncorporatelibraries/icons/bulb1ad0.svg" alt='' />
												</div>
													<div className="desc">We make a positive impact on the people and places we
interact with, driving lasting economic and social impact
to advance societies.</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide stretch-card">
										<div className="card value-card">
											<div className="card-body">
												<div className="title-outer">
														<div className="title">Sustainable</div>

														<img src="/images/modoncorporatelibraries/icons/accountbalancef664.svg" alt='' />
												</div>
													<div className="desc">We are redefining the way we live, work and play
through the delivery of long-term growth and economic
resilience. We drive sustainability by managing all
resources intelligently, to ensure a brighter future.</div>
											</div>
										</div>
									</div>
									<div className="swiper-slide stretch-card">
										<div className="card value-card">
											<div className="card-body">
												<div className="title-outer">
														<div className="title">Committed</div>

														<img src="/images/modoncorporatelibraries/about-us/comitted1d98.png" alt='Comitted' />
												</div>
													<div className="desc">With unwavering determination, we deliver on our promises,
adopting the highest standards of professionalism and
always achieving exceptional results.</div>
											</div>
										</div>
									</div>

								<div className="swiper-button-prev core-values-prev"></div>
								<div className="swiper-button-next core-values-next"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>





	<section className="benifit-section">
		<div className="container" data-aos="fade-up" data-aos-duration="2000">
			<div className="row">
				<div className="col-sm-12">
					<div className="section-title">
						Benefits of working at Modon
					</div>
					<div className="benifit-outer">
							<div className="card benifit-card">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/icons/emoji_eventsa5da.svg" alt='' />
										</div>
																			<div className="title">Well-defined career path</div>
								</div>
							</div>
							<div className="card benifit-card">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/icons/business_center7f1f.svg" alt='' />
										</div>
																			<div className="title">Never stop learning</div>
								</div>
							</div>
							<div className="card benifit-card">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/icons/emoji_objectsf6f3.svg" alt='' />
										</div>
																			<div className="title">Unleash your creativity</div>
								</div>
							</div>
							<div className="card benifit-card">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/icons/person_celebrate56c1.svg" alt='' />
										</div>
																			<div className="title">Feel at home</div>
								</div>
							</div>
							<div className="card benifit-card">
								<div className="card-body">
										<div className="img-outer">
											<img src="/images/modoncorporatelibraries/icons/hotel_class4814.svg" alt='' />
										</div>
																			<div className="title">Rewarding excellence</div>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/*  enhance section ends here  */}




 
            <Footer />
        </div>
    );
}
