// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AssetInvestmentManagement() {
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
    <div className="sfContentBlock sf-Long-text" ><section className="content-section bannerless-top pb-0"><div className="container"><div className="row"><div className="col-sm-12"><div className="section-title">Asset &amp; Investment Management</div></div><div className="col-sm-12"><h5>We are breaking new ground with world-class sports and leisure facilities across a wide range of activities. From casual competition to professional athletes, or simply for casual enjoyment, Modon puts active living at the heart of the community.</h5></div></div></div></section></div>
</div> 

	<section className="realestate-listing-section">
		<div className="container">
			<div className="row">
				<div className="col-sm-12" data-aos="fade-up" data-aos-duration="2000">
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/surf-abu-dhabi-listing019e.jpg" alt='Surf Abu Dhabi' />
									</div>

								<div>
										<div className="title">Surf Abu Dhabi</div>


										<div className="desc">The World's Largest Man-Made Wave Pool. Experience amazing waves, exquisite dining, and beachfront bliss in the heart of Hudayriyat Island, Abu Dhabi.</div>

										<a href="https://www.surfabudhabi.com/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/velodrome-listingd3a0.jpg" alt='Velodrome' />
									</div>

								<div>
										<div className="title">Velodrome - Coming Soon</div>


										<div className="desc">Velodrome Abu Dhabi will feature the first UCI Category 1 indoor cycling track in the region, suitable for international championships.</div>


								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/al-ain-adventure-listingc460.jpg" alt='Al Ain Adventure' />
									</div>

								<div>
										<div className="title">Al Ain Adventure</div>


										<div className="desc">Al Ain Adventure is a world-class outdoor adventure park in Al Ain, UAE, offering white-water rafting, kayaking, surfing, wakeboarding, and climbing, set against a stunning desert mountain backdrop.</div>

										<a href="https://alainadventure.com/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/souq-mina-zayed-listing0324.jpg" alt='Souq Mina Zayed' />
									</div>

								<div>
										<div className="title">Souq Mina Zayed</div>


										<div className="desc">Known for its colourful souks and famous fish market, Mina Zayed has been one of Abu Dhabi’s key hubs for trade for more than five decades.</div>


								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/al-mugheirah-bay-listingb4d6.jpg" alt='Al Mugheirah Bay' />
									</div>

								<div>
										<div className="title">Al Mugheirah Bay</div>


										<div className="desc">Al Mugheirah Bay is a one-stop waterfront destination for retail, entertainment, leisure and lifestyle experiences with scenic views of the sea and the protected mangroves.  With scenic views of the sea and the protected mangroves.</div>


								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/321-sports-listingf53c.jpg" alt='321 Sports' />
									</div>

								<div>
										<div className="title">321 Sports</div>


										<div className="desc">321 Sports is a thrilling sports village, the perfect destination for those who are looking to elevate their fitness and wellness game.</div>

										<a href="https://321sports.ae/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/circuit-x-listing78a0.jpg" alt='Circuit X' />
									</div>

								<div>
										<div className="title">Circuit X</div>


										<div className="desc">Let your imagination run wild at our lively adventure hub, Circuit X, where children and adults can experience fun and thrilling family-friendly activities.</div>

										<a href="http://circuitxuae.com/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/abu-dhabi-summer-sports-listing81bb.jpg" alt='Abu Dhabi Summer Sports' />
									</div>

								<div>
										<div className="title">Abu Dhabi Summer Sports</div>


										<div className="desc">Abu Dhabi Summer Sports is the destination each summer for staying active and healthy. Sports facilities include Football, Cricket, Tennis, Padel, Basketball, Running track, and recreational activities catering to all ages including children.</div>

										<a href="https://www.adsummersports.ae/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/mamsha-al-mugheirah-listing96a5.jpg" alt='Mamsha Al Mugheirah' />
									</div>

								<div>
										<div className="title">Mamsha Al Mugheirah</div>


										<div className="desc">Mamsha Al Mugheirah is connecting Bab Al Nojoum - Al Mugheirah Resort and Mugheirah Bay waterfront together. Mamsha Al Mugheirah has a Surface area of 690 square metres and is 2 kilometres</div>


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
