// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Hospitality() {
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
             

<div >
    <div className="sfContentBlock sf-Long-text" ><section className="content-section bannerless-top pb-0"><div className="container"><div className="row"><div className="col-sm-12"><div className="section-title">Hospitality</div></div><div className="col-sm-12"><h5>We develop distinctive UAE and international hospitality projects that enrich travel and tourism while maintaining the distinctive identity of their surroundings. Our resorts will make you feel at home and love life outside.</h5></div></div></div></section></div>
</div> 

	<section className="realestate-listing-section">
		<div className="container">
			<div className="row">
				<div className="col-sm-12" data-aos="fade-up" data-aos-duration="2000">
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/anantara-sir-bani-yas-island-listing707a.jpg" alt='Anantara Sir Bani Yas Island' />
									</div>

								<div>
										<div className="title">Anantara Sir Bani Yas Island</div>


										<div className="desc">Anantara Sir Bani Yas Island provides three distinct hotels on an island off the coastline of the emirate of Abu Dhabi.</div>

										<a href="https://www.anantara.com/en/al-sahel-sir-bani-yas" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/qasr-al-sarab-desert-resort-by-anantara-listing13bc.jpg" alt='Qasr Al Sarab Desert Resort by Anantara' />
									</div>

								<div>
										<div className="title">Qasr Al Sarab Desert Resort by Anantara</div>


										<div className="desc">Qasr Al Sarab Desert Resort by Anantara is situated in the towering dunes of the Empty Quarter in the emirate of Abu Dhabi.</div>

										<a href="https://www.anantara.com/en/qasr-al-sarab-abu-dhabi" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/about-us/bab-al-nojoum-al-mugheirah-listinge2fb.jpg" alt='Bab Al Nojoum - Al Mugheirah' />
									</div>

								<div>
										<div className="title">Bab Al Nojoum - Al Mugheirah</div>


										<div className="desc">Bab Al Nojoum is the perfect escape to reconnect with nature and to experience nature camping in an exclusive style.</div>

										<a href="https://babalnojoum.com/al-mugheirah-resort/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/bab-al-nojoum-bateen-liwa-listing9f50.jpg" alt='Bab Al Nojoum Bateen Liwa' />
									</div>

								<div>
										<div className="title">Bab Al Nojoum Bateen Liwa</div>


										<div className="desc">Bab Al Nojoum Bateen Liwa is an ecotourism gem nestled among the iconic red sand dunes of the Liwa Desert.</div>

										<a href="https://babalnojoum.com/bateen-liwa-resort/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/bab-al-nojoum-hudayriyat-listing4731.jpg" alt='Bab Al Nojoum - Hudayriyat' />
									</div>

								<div>
										<div className="title">Bab Al Nojoum - Hudayriyat</div>


										<div className="desc">Ignite your inner explorer and enjoy the finer things in life with our premium and exclusive resort retreats</div>

										<a href="https://babalnojoum.com/hudayriyat/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/four-seasons-rabat-listing80fa.jpg" alt='Four Seasons Rabat' />
									</div>

								<div>
										<div className="title">Four Seasons Rabat</div>


										<div className="desc">Overlooking the Atlantic, Four Seasons Rabat combines historic charm with modern luxury</div>

										<a href="https://www.fourseasons.com/rabat/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/the-reykjavik-edition-listing7969.jpg" alt='The Reykjavik EDITION' />
									</div>

								<div>
										<div className="title">The Reykjavik EDITION</div>


										<div className="desc">The Reykjavik EDITION brings the first 5-star modern luxury experience</div>

										<a href="https://www.editionhotels.com/reykjavik/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/aloft-abu-dhabi-listing23d6.jpg" alt='Aloft Abu Dhabi' />
									</div>

								<div>
										<div className="title">Aloft Abu Dhabi</div>


										<div className="desc">Aloft Abu Dhabi blends urban style with comfort, featuring vibrant rooms, rooftop pool, live music, and direct access to ADNEC</div>

										<a href="https://www.marriott.com/en-us/hotels/auhnl-aloft-abu-dhabi/overview/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/andaz-capital-gate-listingd4f0.jpg" alt='Andaz Capital Gate' />
									</div>

								<div>
										<div className="title">Andaz Capital Gate</div>


										<div className="desc">Set in the iconic leaning tower, Andaz Capital Gate offers artistic design, panoramic views, and immersive local experiences, perfect for business travelers and culture seekers alike.</div>

										<a href="https://www.hyatt.com/andaz/abdcc-andaz-capital-gate-abu-dhabi?src=corp_lclb_google_seo_abdcc&amp;utm_source=google&amp;utm_medium=organic&amp;utm_campaign=lmr" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/aloft-london-listingd512.jpg" alt='Aloft London' />
									</div>

								<div>
										<div className="title">Aloft London</div>


										<div className="desc">Connected to ExCeL London, Aloft London Excel offers stylish rooms, vibrant social spaces, a buzzing bar, and easy access to Canary Wharf</div>

										<a href="https://www.marriott.com/en-us/hotels/lonal-aloft-london-excel/overview/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/doubletree-london-listingfd92.jpg" alt='DoubleTree London' />
									</div>

								<div>
										<div className="title">DoubleTree London</div>


										<div className="desc">Overlooking Royal Victoria Dock and near ExCeL London, DoubleTree London ExCeL offers warm hospitality, modern comfort</div>

										<a href="https://www.hilton.com/en/locations/united-kingdom/london/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/green-mubbazarah-chalets-listing6281.jpg" alt='Green Mubbazarah Chalets' />
									</div>

								<div>
										<div className="title">Green Mubbazarah Chalets</div>


										<div className="desc">Nestled at the foothills of Jebel Hafeet, Green Mubazzarah Chalets offer rustic charm, lake views, and hot springs. A serene retreat with natural surroundings, perfect for a peaceful escape from city life.</div>

										<a href="https://www.danathotels.com/alain/greenmubazzarahchalets" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/olympia_resort_abu_dhabia9a5.webp" alt='Olympia Resort Abu Dhabi' />
									</div>

								<div>
										<div className="title">Olympia Resort Abu Dhabi</div>


										<div className="desc">Located on Hudayriyat Island, Olympia Resort Abu Dhabi offers a lifestyle of movement, balance, and wellbeing. A retreat where sport, recovery, and relaxation come together by the sea.</div>

										<a href="http://www.olympia-resort.com/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>

				</div>
			</div>
		</div>
	</section>




 
            <Footer />
        </div>
    );
}
