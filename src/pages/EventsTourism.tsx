// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EventsTourism() {
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
    <div className="sfContentBlock sf-Long-text" ><section className="content-section bannerless-top pb-0"><div className="container"><div className="row"><div className="col-sm-12"><div className="section-title">Events, Catering &amp; Tourism</div></div><div className="col-sm-12"><h5>With international locations including ADNEC in Abu Dhabi and ExCeL and the Business Design Centre in London, we provide the venues, infrastructure, and services to stage global events on any scale.</h5></div></div></div></section></div>
</div> 

	<section className="realestate-listing-section">
		<div className="container">
			<div className="row">
				<div className="col-sm-12" data-aos="fade-up" data-aos-duration="2000">
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/arena-group-listing557e.jpg" alt='Arena Group' />
									</div>

								<div>
										<div className="title">Arena Group</div>


										<div className="desc">Arena Group specializes in delivering innovative solutions for a wide range of events, from structures, semi-permanent builds, and exhibitions to delivering turnkey solutions.</div>

										<a href="https://arenagroup.com/me/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/adnec-centre-abu-dhabi-listingbb87.jpg" alt='ADNEC Centre Abu Dhabi' />
									</div>

								<div>
										<div className="title">ADNEC Centre Abu Dhabi</div>


										<div className="desc">ADNEC Centre Abu Dhabi is a multi-award winning venue offering organisers of exhibitions, conferences, and events outstanding facilities spread over a total space of 153,678 square metres.</div>

										<a href="https://www.adnec.ae/en" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/adnec-centre-al-ain-listing4d81.jpg" alt='ADNEC Centre Al Ain' />
									</div>

								<div>
										<div className="title">ADNEC Centre Al Ain</div>


										<div className="desc">ADNEC Centre Al Ain is a modern venue hosting exhibitions, conferences, and events, supporting regional business and community engagement.</div>

										<a href="https://www.adnecalain.ae/en" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/excel-london-listing4626.jpg" alt='ExCeL London' />
									</div>

								<div>
										<div className="title">ExCeL London</div>


										<div className="desc">ExCeL London is the largest international exhibition and convention centre in London, hosting diverse global events, conferences, and trade shows year-round.</div>

										<a href="https://www.excel.london/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/business-design-center-listing32d8.jpg" alt='Business Design Center' />
									</div>

								<div>
										<div className="title">Business Design Centre</div>


										<div className="desc">The Business Design Centre London is a stylish venue hosting exhibitions, conferences, and events in a historic, architecturally distinctive setting.</div>

										<a href="https://www.businessdesigncentre.co.uk/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/capital-360-listing0028.jpg" alt='Capital 360' />
									</div>

								<div>
										<div className="title">Capital 360</div>


										<div className="desc">Capital360 is a strategic Brand and Event experience agency, offering integrated marketing, creative, and digital services to elevate brands and enhance audience engagement.</div>

										<a href="https://www.capital360.ae/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/capital-events-listingf71a.jpg" alt='Capital Events' />
									</div>

								<div>
										<div className="title">Capital Events</div>


										<div className="desc">Capital Events delivers world-class event management services, organizing exhibitions, conferences, and live experiences across the UAE with professionalism and innovation.</div>

										<a href="https://www.capital360.ae/" target="_blank" className="btn btn-sand">
												<span>Learn More</span>
											<span className="icon"></span>
										</a>

								</div>
							</div>
						</div>
						<div className="card realestate-card">
							<div className="card-body">
									<div className="img-outer">
										<img src="/images/modoncorporatelibraries/projects/capital-protocol-listinga5cf.jpg" alt='Capital Protocol' />
									</div>

								<div>
										<div className="title">Capital Protocol</div>


										<div className="desc">Capital Protocol is dedicated to provide customised services to high-level delegations, VIPs, and government officials in the UAE.</div>

										<a href="https://www.capitalprotocol.ae/" target="_blank" className="btn btn-sand">
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
