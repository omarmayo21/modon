// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Procurement() {
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
             

        <section className="img-desc-section bannerless-top">
            <div className="whoweare-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="title">Procurement</div>
                                                            <div className="sub-title">
                                    Our Procurement Department is committed to fulfilling the vision of our leadership by procuring best-practice and cost-effective solutions that add value to the local communities and the emirate of Abu Dhabi in a sustainable manner.
                                </div>
                            <div className="description-outer">

                            </div>



                        </div>
                    </div>
                </div>
            </div>

                    <section className="parallax-section p-0">
                        <div className="parallax-outer">
                            <div className="parallax-bg" data-parallax="scroll" data-image-src="/images/modoncorporatelibraries/whistleblowing-procurement/whisltleblowingf09c.png"></div>
                        </div>
                    </section>
        </section>





 

        <section className="img-desc-section procurement-desc">
            <div className="whoweare-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                                <div className="">
                                    We devised our procurement philosophy with maximum transparency and integrity of the end-to-end procurement cycle. We developed our policies and processes to maintain strong governance and establish a consistent, effective, reliable, and automated approach towards all procurement undertakings.
                                </div>

                            <div className="description-outer">
                                    <div className="start">
                                        <p>Procurement responsibilities mainly revolve around:</p><ul><li>Vendor Registration &amp; Prequalification</li><li>Sourcing &amp; Tendering</li><li>Contract Management &amp; Administration</li><li>Vendor Performance Management</li></ul>
                                    </div>

                                    <div className="end">
                                        <div>We have completed digitization and full automation of all procurement-related activities by adopting:</div><ul><li>Online Registration and Prequalification</li><li>e-Tendering</li><li>e-Contract Management</li><li>Online Payment Applications and Invoice Processing</li></ul>
                                    </div>
                            </div>

                                <div>
                                    The e-procurement system is now live, and prospective vendors have already obtained login details to access the new system to be able to receive invitations to bid. If you have any questions, please contact us at  <a href="mailto:mh.registration@modon.com" data-sf-ec-immutable="">mh.registration@modon.com</a> 

                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>





<section data-sf-element="Row" className="working-section">
	<div className="container">
		<div className="row" data-aos="fade-up" data-aos-duration="2000">
			<div id="Contentplaceholder1_C003_Col00" className="sf_colsIn col-12" data-sf-element="How it Works Listing" data-placeholder-label="How it Works Listing">
	<div className="row">
		<div className="col-sm-12">
			<div className="section-title">How it works</div>
		</div>

				<div className="col-sm-6 mb-4 mb-lg-0 col-lg-3 stretch-card">
					<div className="card steps-card">
						<div className="card-body">
<span>01 &mdash; </span><span>Register/Prequalify</span>						</div>
					</div>
				</div>
				<div className="col-sm-6 mb-4 mb-lg-0 col-lg-3 stretch-card">
					<div className="card steps-card">
						<div className="card-body">
<span> 02 &mdash; </span><span>Receive Tenders</span>						</div>
					</div>
				</div>
				<div className="col-sm-6 mb-4 mb-lg-0 col-lg-3 stretch-card">
					<div className="card steps-card">
						<div className="card-body">
<span>03 &mdash; </span><span>Respond to Tenders</span>						</div>
					</div>
				</div>
				<div className="col-sm-6 mb-4 mb-lg-0 col-lg-3 stretch-card">
					<div className="card steps-card">
						<div className="card-body">
<span> 04 — </span><span>Award Contract</span>						</div>
					</div>
				</div>
	</div>



			</div>
			<div id="Contentplaceholder1_C003_Col01" className="sf_colsIn col-12" data-sf-element="Alternate Card" data-placeholder-label="Alternate Card">
    <div className="row">
        <div className="col-sm-12">
        </div>
        <div className="col-sm-6 stretch-card">
            <div className="card matter-card  ">
                <div className="card-body">
                        <div className="top">
                            Registered/prequalified vendor? Click here to access the Modon Vendor Portal.
                        </div>
                    <div className="bottom">
                        <a className="btn theme-btn" target="_blank" href="https://bit.ly/4wK5KS6">
                            <span>Sign In</span><span className="icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 stretch-card">
            <div className="card matter-card highlight">
                <div className="card-body">
                        <div className="top">
                            If you’re not registered yet, please click on Vendor Registration.
                        </div>
                    <div className="bottom">
                        <a className="btn theme-btn-white" target="_blank" href="https://bit.ly/4uud4zQ">
                            <span>Vendor Registration</span><span className="icon"></span>
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
											Does investing in a Modon property qualify buyers for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-1" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Buyers of properties valued at AED 2 million or more are eligible to apply for the Golden Visa.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
											Are Modon properties available for purchase by all nationalities?
										</button>
									</div>
									<div id="collapse-2" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, Modon residential projects located in key investment zones (such as Hudayriyat Island and Al Reem Island) are offered on a freehold basis, allowing full ownership by all nationalities.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
											What is the typical payment plan structure Modon offers for off-plan projects?
										</button>
									</div>
									<div id="collapse-3" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Modon generally offers flexible payment plans, with common structures being the 40/60 or 50/50 split, requiring a downpayment (often 10% or 20%) and a final payment upon handover.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
											Which Modon projects are located on Reem Island?
										</button>
									</div>
									<div id="collapse-4" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Modon developments on Reem Island include <a href="https://checkpoint.url-protection.com/v1/r07/url?o=https%3A//www.modon.com/real-estate/reem-hills&amp;g=NjQ2ZjJkOWIwMjZiYTExYw==&amp;h=M2IxMDZjZmRiNjYxNjZkY2M3YzcxNmNiZjQ1ZmNmYjBjMTc5NGRiNzFhNGY0Mjc2N2IyNmRjNGE3NDM4MjNkNg==&amp;p=bWVjMTptb2Rvbmdyb3VwOmM6bzo0MTQwYjVmYjVkNDdjNzlmMmY0YWMzNDAzMGVmYTEzZjo3OnA6VA==" target="_blank" rel="noreferrer noopener">Reem Hills</a>, <a href="https://checkpoint.url-protection.com/v1/r07/url?o=https%3A//www.modon.com/real-estate/muheira&amp;g=M2U4YTU5NGUxZWYyZDJkZA==&amp;h=MjM2YWI3Y2NhMGI0NDYxNTk0YzAyYzU0NTg4NWE3ZjYzYTU3ZjFlYmQ3NGRjMWUwMmQ4Y2ZkODgzMzI4YjM3NQ==&amp;p=bWVjMTptb2Rvbmdyb3VwOmM6bzo0MTQwYjVmYjVkNDdjNzlmMmY0YWMzNDAzMGVmYTEzZjo3OnA6VA==" target="_blank" rel="noreferrer noopener">Muheira</a>,&nbsp;<a href="../real-estate/tara-park.html" target="_blank" rel="noreferrer noopener">Tara Park</a>, and Maysan.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
											Which Modon projects are situated on Hudayriyat Island?
										</button>
									</div>
									<div id="collapse-5" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The company&rsquo;s residential developments on Hudayriyat Island include <a href="https://checkpoint.url-protection.com/v1/r07/url?o=https%3A//www.modon.com/real-estate/al-naseem-community&amp;g=NWI1ZGUzOTg3YjBkZmE1Mg==&amp;h=MmE0Yzk3Yzk4M2YyYjRhM2U1NDE2MjJkZTMyZDMyNTQxOWExMTczNjgyNTFjMWZkMzJjZTQ1MGRmN2FlNmYyNA==&amp;p=bWVjMTptb2Rvbmdyb3VwOmM6bzo0MTQwYjVmYjVkNDdjNzlmMmY0YWMzNDAzMGVmYTEzZjo3OnA6VA==" target="_blank" rel="noreferrer noopener">Al Naseem Community</a>, <a href="https://checkpoint.url-protection.com/v1/r07/url?o=https%3A//www.modon.com/real-estate/bashayer&amp;g=NWEzMDljMzc2N2MwY2Q4Yw==&amp;h=OTk5YzQ2MWExYjk3ZTk3NDg1MjBjZDBhOWU0ZTVlMThmOTQyZDMyNmJkOTI4ZGY0M2JiMjA0NzY2ZGVjY2NmNw==&amp;p=bWVjMTptb2Rvbmdyb3VwOmM6bzo0MTQwYjVmYjVkNDdjNzlmMmY0YWMzNDAzMGVmYTEzZjo3OnA6VA==" target="_blank" rel="noreferrer noopener">Bashayer, </a><a href="../real-estate/hudayriyat-golf-estates.html" target="_blank" rel="noreferrer noopener">Hudayriyat Golf Estates</a> and several collections under the Nawayef masterplan, such as <a href="https://checkpoint.url-protection.com/v1/r07/url?o=https%3A//www.modon.com/real-estate/nawayef-parkviews&amp;g=ZTZhMmYxNzIzNDhjNmQzZg==&amp;h=MDkzMWNiNjE1MjZkZDQxYmYzMDA1YzNjYzNiMjY3NDEyOTk4NWM2NGYwM2FkMTI5NTE1ODk1OWUwODhiZmE1OQ==&amp;p=bWVjMTptb2Rvbmdyb3VwOmM6bzo0MTQwYjVmYjVkNDdjNzlmMmY0YWMzNDAzMGVmYTEzZjo3OnA6VA==" target="_blank" rel="noreferrer noopener">Nawayef Park Views</a>, <a href="https://checkpoint.url-protection.com/v1/r07/url?o=https%3A//www.modon.com/real-estate/nawayef-village&amp;g=YTQzNDExNjI5ZjZkODRjNw==&amp;h=NDUwNTYzNGFlYjQ4Mzc1ODRhMTAwMTQ4NzBlZTRkNjI2NjNjMjAxZWExNWIzNWQwYTk2YTE2YmMzZGZmNTA5Ng==&amp;p=bWVjMTptb2Rvbmdyb3VwOmM6bzo0MTQwYjVmYjVkNDdjNzlmMmY0YWMzNDAzMGVmYTEzZjo3OnA6VA==" target="_blank" rel="noreferrer noopener">Nawayef Village</a> and <a href="https://checkpoint.url-protection.com/v1/r07/url?o=https%3A//www.modon.com/real-estate/nawayef-east&amp;g=ZDhhN2VmMDUwN2QyMGQ0Yg==&amp;h=MTE3ZGUyYjlkODc1MzBiMzVkYTE1ZDc3M2I0OGQyMDJhNTMzODBkYTU3Njk3NDk1YWE1MWYwNDIwM2NmY2VjNg==&amp;p=bWVjMTptb2Rvbmdyb3VwOmM6bzo0MTQwYjVmYjVkNDdjNzlmMmY0YWMzNDAzMGVmYTEzZjo3OnA6VA==" target="_blank" rel="noreferrer noopener">Nawayef East</a>.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
											Does Modon offer investment opportunities outside the UAE?
										</button>
									</div>
									<div id="collapse-6" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, Modon&rsquo;s international portfolio includes major strategic developments, such as the large-scale <a href="https://checkpoint.url-protection.com/v1/r07/url?o=https%3A//www.modon.com/real-estate/ras-el-hekma&amp;g=YTY0ZDRlZTE0NWM2NzQ1Mg==&amp;h=YWU3NDFhZTZhMTFmNzM4MzdlODZkZDI3ZGYzOTI1NmY1OThmMjdiZjlmYWIxYjNiNWViNjk3NTYzYjhhYzdjNw==&amp;p=bWVjMTptb2Rvbmdyb3VwOmM6bzo0MTQwYjVmYjVkNDdjNzlmMmY0YWMzNDAzMGVmYTEzZjo3OnA6VA==" target="_blank" rel="noreferrer noopener">Ras El Hekma</a> project in Egypt and La Zagaleta in Spain.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-7" aria-expanded="true" aria-controls="collapse-7">
											What types of residential properties does Modon offer?
										</button>
									</div>
									<div id="collapse-7" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The company&rsquo;s diverse portfolio ranges from modern apartments and townhouses to luxury villas and mansions.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-8" aria-expanded="true" aria-controls="collapse-8">
											What are Modon Properties&rsquo; primary areas of development in Abu Dhabi?
										</button>
									</div>
									<div id="collapse-8" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Modon focuses its core residential development on two prestigious island destinations: Hudayriyat Island and Reem Island.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-9" aria-expanded="true" aria-controls="collapse-9">
											Are there any specific tax benefits or incentives for foreign investors in Ras El Hekma?
										</button>
									</div>
									<div id="collapse-9" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The city will feature a free zone and an investment zone, which will offer significant incentives for investors, such as tax holidays, customs exemptions on equipment, streamlined business licensing and facilitated processes for repatriating profits.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-10" aria-expanded="true" aria-controls="collapse-10">
											What is the total estimated investment in Ras Al Hekma?
										</button>
									</div>
									<div id="collapse-10" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The city is being developed with an initial $35 billion investment from ADQ, with projected cumulative investments expected to exceed $150 billion.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-11" aria-expanded="true" aria-controls="collapse-11">
											What leisure facilities will the new city offer?
										</button>
									</div>
									<div id="collapse-11" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The masterplan features extensive leisure and tourism amenities, including prestigious international hotels, an international marina and multiple entertainment venues.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-12" aria-expanded="true" aria-controls="collapse-12">
											What architectural style will define Ras El Hekma?
										</button>
									</div>
									<div id="collapse-12" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The design vision, led by Modon, blends global luxury standards with a strong sense of local heritage. The development incorporates elements of traditional Bedouin architecture, ensuring the city maintains cultural authenticity while offering modern functionality and amenities.&nbsp;
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-13" aria-expanded="true" aria-controls="collapse-13">
											What are the key types of residential properties planned for Ras El Hekma?
										</button>
									</div>
									<div id="collapse-13" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The masterplan includes a wide array of luxury properties, such as villas, townhouses, chalets, apartments and serviced residences, distributed across several dedicated districts.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-14" aria-expanded="true" aria-controls="collapse-14">
											What major infrastructure additions are included in the masterplan?
										</button>
									</div>
									<div id="collapse-14" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Key infrastructure priorities include the development of a new international airport south of the city and the integration of high-speed road and rail networks for better regional connectivity.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-15" aria-expanded="true" aria-controls="collapse-15">
											When is the expected handover date for Bashayer?
										</button>
									</div>
									<div id="collapse-15" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The villas are scheduled for handover in Q1 2030, while the expected handover date for the apartments is Q2 2030.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-16" aria-expanded="true" aria-controls="collapse-16">
											Are Bashayer home owners eligible for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-16" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, purchasing a property in Bashayer qualifies the buyer to apply for the Golden Visa, as the starting prices for apartments and villas exceed the minimum threshold of AED 2 million.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-17" aria-expanded="true" aria-controls="collapse-17">
											Is Bashayer a freehold development?
										</button>
									</div>
									<div id="collapse-17" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, all nationalities can purchase property in Bashayer with full ownership rights.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-18" aria-expanded="true" aria-controls="collapse-18">
											What is the starting price for properties in Bashayer?
										</button>
									</div>
									<div id="collapse-18" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Prices for a one-bedroom apartment start from AED 2.5 million. Modon offers an attractive 50/50 payment plan with a 5% down payment on booking, 45% paid during construction and the final 50% due upon handover.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-19" aria-expanded="true" aria-controls="collapse-19">
											What amenities are available to residents of Bashayer?
										</button>
									</div>
									<div id="collapse-19" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Bashayer features a community centre, a children&rsquo;s play area, a swimming pool, a park, green spaces, padel courts, a multi-sports court, a gym as well as cycling and jogging trails.&nbsp;
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-20" aria-expanded="true" aria-controls="collapse-20">
											What types of residential properties are available in Bashayer?
										</button>
									</div>
									<div id="collapse-20" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The final phase of Bashayer will offer four- to five-bedroom villas and one- to four-bedroom apartments, townhomes, and penthouses.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-21" aria-expanded="true" aria-controls="collapse-21">
											When is the expected handover date for Nawayef East?
										</button>
									</div>
									<div id="collapse-21" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Nawayef East is scheduled for handover in December 2028.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-22" aria-expanded="true" aria-controls="collapse-22">
											Are Nawayef East home owners eligible for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-22" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, the starting property prices at Nawayef East significantly exceed the required threshold, qualifying the buyer to apply for the Golden Visa.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-23" aria-expanded="true" aria-controls="collapse-23">
											Is Nawayef East a freehold development?
										</button>
									</div>
									<div id="collapse-23" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, properties at Nawayef East can be fully owned by all nationalities.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-24" aria-expanded="true" aria-controls="collapse-24">
											What is the starting price for a villa in Nawayef East?
										</button>
									</div>
									<div id="collapse-24" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The starting price for Nawayef East Homes is AED 6.6 million. Modon offers a flexible 40/60 payment plan with a 10% downpayment, 30% paid in structured instalments during construction and the final 60% due upon handover.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-25" aria-expanded="true" aria-controls="collapse-25">
											What amenities are available to residents of Nawayef East?
										</button>
									</div>
									<div id="collapse-25" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Residents have access to a wealth of luxury amenities, including a jogging trail, a swimming pool, a tennis court, a gym, a play area, a club house, a mosque, verdant parkland and many more.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-26" aria-expanded="true" aria-controls="collapse-26">
											What is the architectural style of the residences in Nawayef East?
										</button>
									</div>
									<div id="collapse-26" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<div><p paraid="247943875" paraeid="{86cc7a58-9aaa-4510-842c-b1d0e1de7ec4}{133}">Nawayef Hills offers a collection of villas that celebrate architectural diversity and refined living. The community blends Southern Californian&ndash;inspired homes with striking contemporary villas featuring distinctive architectural cladding, creating a visually engaging streetscape.</p><p paraid="247943875" paraeid="{86cc7a58-9aaa-4510-842c-b1d0e1de7ec4}{133}"><span style={{ backgroundColor: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit', textAlign: 'inherit', textTransform: 'inherit', wordSpacing: 'normal', caretColor: 'auto', whiteSpace: 'inherit' }}>This thoughtful mix of styles and materials enhances the overall urban fabric, giving the neighborhood a strong sense of identity, exclusivity, and timeless appeal, and establishing Nawayef Hills as a unique residential destination in Abu Dhabi.</span></p></div>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-27" aria-expanded="true" aria-controls="collapse-27">
											What types of residential properties are available in Nawayef East?
										</button>
									</div>
									<div id="collapse-27" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The Premium to ultra-luxury residences in Nawayef East are presented in three distinct configurations: Homes (four to five bedrooms), Heights (five to seven bedrooms) and Mansions (six to eight bedrooms). Each property features a spacious terrace, a swimming pool, a majlis area and an expansive garden.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-28" aria-expanded="true" aria-controls="collapse-28">
											When is the expected handover date for Nawayef Park Views?
										</button>
									</div>
									<div id="collapse-28" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Nawayef Park Views is scheduled for handover in Q1 2028.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-29" aria-expanded="true" aria-controls="collapse-29">
											Are Nawayef Park Views homeowners eligible for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-29" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, buyers of properties in Nawayef Park Views are qualified to apply for the Golden Visa, as all prices meet or exceed the minimum threshold required.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-30" aria-expanded="true" aria-controls="collapse-30">
											Is Nawayef Park Views a freehold development?
										</button>
									</div>
									<div id="collapse-30" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, properties at Nawayef Park Views can be fully owned by all nationalities.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-31" aria-expanded="true" aria-controls="collapse-31">
											What is the starting price for an apartment in Nawayef Park Views?
										</button>
									</div>
									<div id="collapse-31" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The starting price for a spacious one-bedroom apartment is AED 2 million. Modon offers an attractive 60/40 payment plan with a 10% downpayment on booking, 50% paid in structured instalments during construction and the final 40% due upon handover.&nbsp;
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-32" aria-expanded="true" aria-controls="collapse-32">
											Which facilities does Nawayef Park Views offer?
										</button>
									</div>
									<div id="collapse-32" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The development includes a gym, a yoga zone, shaded green spaces with BBQ areas, a lap pool and a children&rsquo;s pool with a splash area and a play area, supporting an active, wellness-focused lifestyle. Residents can also enjoy easy access to a park, a beach, healthcare facilities and a vibrant souq plaza with fine dining, luxury retail and wellness spaces.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-33" aria-expanded="true" aria-controls="collapse-33">
											What types of properties are available in Nawayef Park Views?
										</button>
									</div>
									<div id="collapse-33" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Nawayef Park Views features elegant one- to four-bedroom apartments, inspired by Mediterranean architecture.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-34" aria-expanded="true" aria-controls="collapse-34">
											When is the expected handover date for Al Naseem Community?
										</button>
									</div>
									<div id="collapse-34" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The first phase of the development is scheduled for handover in Q4 2027.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-35" aria-expanded="true" aria-controls="collapse-35">
											Does purchasing a villa in Al Naseem Community qualify the owner for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-35" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, buyers of all properties in Al Naseem Community are eligible to apply for the Golden Visa, subject to current government regulations.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-36" aria-expanded="true" aria-controls="collapse-36">
											Is Al Naseem Community a freehold development?
										</button>
									</div>
									<div id="collapse-36" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, properties at Al Naseem Community can be fully owned by all nationalities.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-37" aria-expanded="true" aria-controls="collapse-37">
											What is the starting price for properties in Al Naseem Community?&nbsp;
										</button>
									</div>
									<div id="collapse-37" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<div><p paraid="1938165995" paraeid="{03f2fae7-fcf8-49a1-855e-aff38ee6af93}{35}">The starting price for a four-bedroom villa is AED 7.8 million. Modon offers an attractive 40/60 payment plan.<span style={{ backgroundColor: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit', textAlign: 'inherit', textTransform: 'inherit', wordSpacing: 'normal', caretColor: 'auto', whiteSpace: 'inherit' }}></span></p></div>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-38" aria-expanded="true" aria-controls="collapse-38">
											How close is Al Naseem Community to key attractions on Hudayriyat Island?
										</button>
									</div>
									<div id="collapse-38" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The project offers exceptional convenience, with major island leisure hubs, such as Surf Abu Dhabi, 321 Sports and the Marsana retail and dining complex, all located within a short drive.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-39" aria-expanded="true" aria-controls="collapse-39">
											What amenities are included in Al Naseem Community?
										</button>
									</div>
									<div id="collapse-39" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Al Naseem Community provides a wide variety of luxury amenities, such as a community centre, a gym, a swimming pool, pedestrian paths, cycle routes, basketball courts, schools and an outdoor play area.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-40" aria-expanded="true" aria-controls="collapse-40">
											What are the architectural styles of the villas in Al Naseem Community?
										</button>
									</div>
									<div id="collapse-40" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The villas feature two distinct elegant fa&ccedil;ade styles: the warm and traditional South Californian style and the Modern Contemporary style, characterised by a sleek, minimalist aesthetic with extensive glazing.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-41" aria-expanded="true" aria-controls="collapse-41">
											What types of properties are available in Al Naseem Community?
										</button>
									</div>
									<div id="collapse-41" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The development features luxury four- to six-bedroom standalone villas over a Ground + 1 Floor structure. Each villa is set within a generous private plot, providing maximum space and privacy.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-42" aria-expanded="true" aria-controls="collapse-42">
											What is the handover date for Reem Hills?
										</button>
									</div>
									<div id="collapse-42" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The villas are scheduled for handover in Q2 2026, while the expected handover date for the apartments is Q2 2027.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-43" aria-expanded="true" aria-controls="collapse-43">
											What is the long-term investment outlook for Reem Hills?
										</button>
									</div>
									<div id="collapse-43" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Reem Hills is a prime asset on Reem Island. Given its attractive, unique hilltop location and exclusive amenities, properties at the development are expected to deliver strong capital appreciation and competitive rental yields.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-44" aria-expanded="true" aria-controls="collapse-44">
											Are Reem Hills home owners eligible for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-44" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, the purchase of any property in Reem Hills valued at AED 2 million or more qualifies the buyer to apply for the Golden Visa.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-45" aria-expanded="true" aria-controls="collapse-45">
											Is Reem Hills a freehold development?
										</button>
									</div>
									<div id="collapse-45" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, properties at Reem Hills can be fully owned by all nationalities, making it an attractive opportunity for global investment.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-46" aria-expanded="true" aria-controls="collapse-46">
											What is the starting price for properties in Reem Hills?
										</button>
									</div>
									<div id="collapse-46" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The starting price for a one-bedroom apartment is AED 1.5 million. Modon offers an attractive 50/50 payment plan.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-47" aria-expanded="true" aria-controls="collapse-47">
											How close is Reem Hills to major landmarks?
										</button>
									</div>
									<div id="collapse-47" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The development is highly accessible, just a three-minute drive from Reem Hospital, a 10-minute drive from The Galleria mall and Sorbonne University Abu Dhabi and a 15-minute walk from Reem Mall.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-48" aria-expanded="true" aria-controls="collapse-48">
											What amenities are available for residents?
										</button>
									</div>
									<div id="collapse-48" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Reem Hills is centred around a massive man-made hill, featuring extensive greenery and landscaping. Amenities include exclusive access to the beach, clubhouses, swimming pools, gyms, private schools, expansive parkland, healthcare centres, jogging and cycling tracks and a retail avenue.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-49" aria-expanded="true" aria-controls="collapse-49">
											What types of properties are available in Reem Hills?
										</button>
									</div>
									<div id="collapse-49" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Reem Hills features a diverse collection of luxury villas, townhouses and modern apartments, catering to various family sizes and investment goals.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-50" aria-expanded="true" aria-controls="collapse-50">
											When is the expected handover date for Nawayef Village?
										</button>
									</div>
									<div id="collapse-50" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Nawayef Village is scheduled for handover from Q1 2029.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-51" aria-expanded="true" aria-controls="collapse-51">
											Are Nawayef Village home owners eligible for the 10-year UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-51" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, purchasing a property in Nawayef Village qualifies the buyer to apply for the Golden Visa, subject to current government regulations.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-52" aria-expanded="true" aria-controls="collapse-52">
											Is Nawayef Village a freehold development?
										</button>
									</div>
									<div id="collapse-52" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, properties at Nawayef Village can be fully owned by all nationalities.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-53" aria-expanded="true" aria-controls="collapse-53">
											What is the starting price for properties in Nawayef Village?
										</button>
									</div>
									<div id="collapse-53" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The starting price is AED 4.1 million. Modon offers an attractive 50/50 payment plan.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-54" aria-expanded="true" aria-controls="collapse-54">
											What kind of recreational facilities are close to Nawayef Village?
										</button>
									</div>
									<div id="collapse-54" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The neighborhood lies within walking distance from a vibrant retail avenue with a boutique cinema, with parks, schools, a health centre and a beach just minutes away.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-55" aria-expanded="true" aria-controls="collapse-55">
											What are the key lifestyle amenities at Nawayef Village?
										</button>
									</div>
									<div id="collapse-55" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The secure gated development offers residents an exclusive suite of amenities, including landscaped parks, community centres with swimming pools as well as dedicated walking and cycling paths.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-56" aria-expanded="true" aria-controls="collapse-56">
											What is the architectural style of Nawayef Village homes?
										</button>
									</div>
									<div id="collapse-56" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The design is inspired by Tuscan architecture.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-57" aria-expanded="true" aria-controls="collapse-57">
											What types of properties are available in Nawayef Village?
										</button>
									</div>
									<div id="collapse-57" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Nawayef Village offers a choice of three- to five-bedroom townhouses &ndash; the first ones on Hudayriyat Island &ndash; and twin villas.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-58" aria-expanded="true" aria-controls="collapse-58">
											Where is Nawayef Village located?
										</button>
									</div>
									<div id="collapse-58" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Nawayef Village is located between the East and West Hills of Hudayriyat Island.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-59" aria-expanded="true" aria-controls="collapse-59">
											Where is Ras El Hekma located?
										</button>
									</div>
									<div id="collapse-59" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Ras El Hekma is located in a picturesque coastal region on Egypt&rsquo;s Mediterranean shoreline in the Western Desert. It lies approximately 70 km east of Mersa Matruh and about 200 km west of Alexandria, placing it in a prime position along the highly desirable North Coast.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-60" aria-expanded="true" aria-controls="collapse-60">
											Are the Villas and Townhomes available for purchase by all nationalities?
										</button>
									</div>
									<div id="collapse-60" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, the Villas and Townhomes are open to buyers of all nationalities and are offered on a freehold basis.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-61" aria-expanded="true" aria-controls="collapse-61">
											Where exactly is the project located?
										</button>
									</div>
									<div id="collapse-61" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Tara Park is ideally situated in the heart of&nbsp;Reem Island, Abu Dhabi, directly opposite the premier lifestyle destination,&nbsp;Reem Mall. This prime location ensures that shopping, dining, and entertainment are just steps away, while other key&nbsp;landmarks like Al Fay Park, Sorbonne University, and Repton School&nbsp;are also just moments from the residence. Its strategic placement provides effortless connectivity,&nbsp;only&nbsp;5 minutes from Downtown Abu Dhabi and the Abu Dhabi Global Market (ADGM), and 25 minutes from Zayed International Airport.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-62" aria-expanded="true" aria-controls="collapse-62">
											Do we need to register our company to be part of future Modon Properties tenders?

										</button>
									</div>
									<div id="collapse-62" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, registration is mandatory for any tender submission with Modon Properties.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-63" aria-expanded="true" aria-controls="collapse-63">
											Is the community gated and secure?
										</button>
									</div>
									<div id="collapse-63" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, the Townhome community, Villa community, and Waterfront community, are gated with 24-hour private security.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-64" aria-expanded="true" aria-controls="collapse-64">
											What is the expected&nbsp;handover for&nbsp;the project?
										</button>
									</div>
									<div id="collapse-64" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The estimated handover for this refined community is scheduled on early Q2 2030.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-65" aria-expanded="true" aria-controls="collapse-65">
											Where exactly is the project located?
										</button>
									</div>
									<div id="collapse-65" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>The development is situated within easy walking distance of the Abu Dhabi Global Market (ADGM) international financial district. This prime location ensures residents are at the heart of the capital&rsquo;s financial and retail hub.</p>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-66" aria-expanded="true" aria-controls="collapse-66">
											How do we register our company with Modon Properties?
										</button>
									</div>
									<div id="collapse-66" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Please follow the link marked <a target="_blank" href="https://bit.ly/3fZ0CC6">Register Here</a>, complete all relevant sections, and submit the form for approval. Upon submission, our procurement team will review your application and get back to you promptly.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-67" aria-expanded="true" aria-controls="collapse-67">
											Can the property be resold before handover?
										</button>
									</div>
									<div id="collapse-67" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<div>Yes, the villa may be resold prior to handover, provided that at least 20% of the total payment has been made,</div><div>and all project guidelines are observed.</div>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-68" aria-expanded="true" aria-controls="collapse-68">
											What types of residences are available in&nbsp;Tara Park and what types or configurations are&nbsp;offered?
										</button>
									</div>
									<div id="collapse-68" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Tara Park consists of two residential towers offering a variety of&nbsp;1, 2, and 3-bedroom apartments in total of 494 units.</p><strong>1-Bedroom</strong><br /><span style={{ textDecoration: 'underline' }}>No. of units</span>: 156<br /><span style={{ textDecoration: 'underline' }}>Average unit size</span>: 83 sqm
<br /><strong>2-Bedroom</strong><br /><span style={{ textDecoration: 'underline' }}>No. of units</span>: 310<br /><span style={{ textDecoration: 'underline' }}>Average unit size</span>: 138 sqm
<br /><strong>3-Bedroom</strong><br /><span style={{ textDecoration: 'underline' }}>No. of units</span>: 28<br /><span style={{ textDecoration: 'underline' }}>Average unit size</span>: 198 sqm
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-69" aria-expanded="true" aria-controls="collapse-69">
											What is the expected completion date?
										</button>
									</div>
									<div id="collapse-69" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>The estimated handover for this refined community is scheduled for Q2 2029.</p>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-70" aria-expanded="true" aria-controls="collapse-70">
											We have an existing contract with Modon Properties; do we still need to register our company?
										</button>
									</div>
									<div id="collapse-70" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											No; if you have a contract with Modon Properties, then your profile already exists. Please send a request to <a href="mailto:registration@modon.ae">registration@modon.ae</a>
 to create a user account.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-71" aria-expanded="true" aria-controls="collapse-71">
											Are pets allowed?
										</button>
									</div>
									<div id="collapse-71" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, pets are allowed and a dog park is located in the community area.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-72" aria-expanded="true" aria-controls="collapse-72">
											What world-class amenities are available for residents?
										</button>
									</div>
									<div id="collapse-72" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p paraid="740358356" paraeid="{b496062d-cbab-45ee-80cd-c3c00bce9788}{180}">Residents will enjoy exclusive access to a comprehensive range of amenities, including security services, a central swimming pool, a padel court, a multi-purpose sports court, a fitness studio, and a yoga studio. Tara Park will also feature open-air workspaces, a shaded garden lounge, a communal dining lounge, a dedicated co-working and study zone, a one-of-a-kind children&rsquo;s playroom, a retail courtyard, an early learning&nbsp;centre, an art studio, and a social kitchen.<br /></p><p paraid="740358356" paraeid="{b496062d-cbab-45ee-80cd-c3c00bce9788}{180}"><span style={{ backgroundColor: 'transparent', color: 'inherit', fontFamily: 'inherit', fontSize: 'inherit', textAlign: 'inherit', textTransform: 'inherit', wordSpacing: 'normal', caretColor: 'auto', whiteSpace: 'inherit' }}>Additional&nbsp;retail shops, and dining outlets are available as part of the retail offering of Tara Park but will not be presented or managed by&nbsp;Modon.</span><br /></p><p paraid="740358356" paraeid="{b496062d-cbab-45ee-80cd-c3c00bce9788}{180}"><span style={{ textDecoration: 'underline' }}>Disclaimer</span>: <em>Please note the amenities may be updated before handover</em>.</p>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-73" aria-expanded="true" aria-controls="collapse-73">
											What types of residences are available in Muheira?
										</button>
									</div>
									<div id="collapse-73" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Muheira features a curated selection of contemporary 1, 2, and 3-bedroom apartments.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-74" aria-expanded="true" aria-controls="collapse-74">
											We have already registered our company with Modon Properties; however, we have not received the login details to access the portal. What should we do?
										</button>
									</div>
									<div id="collapse-74" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Try logging in using the link <a target="_blank" href="https://emyf.fa.em8.oraclecloud.com/">Access the application</a>. Use the email address as the username and click &ldquo;Forgot Password&rdquo; to get a link to reset the password. Note: While registering, you have to add contacts with the same email ID, select &ldquo;Create User Account&rdquo; first, and then select &ldquo;Create Administrative Account&rdquo;.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-75" aria-expanded="true" aria-controls="collapse-75">
											When will the community be ready for handover?
										</button>
									</div>
									<div id="collapse-75" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The community will be ready for handover by August 2030.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-76" aria-expanded="true" aria-controls="collapse-76">
											Are the properties in Tara Park freehold?&nbsp;
										</button>
									</div>
									<div id="collapse-76" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Tara Park is a freehold development, inviting both local and international investors to secure property within one of Abu Dhabi&rsquo;s most prestigious and sought-after&nbsp;neighborhoods.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-77" aria-expanded="true" aria-controls="collapse-77">
											What world-class amenities are available for residents?
										</button>
									</div>
									<div id="collapse-77" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Muheira offers a resort-inspired living experience, distinguished by a suite of premium amenities. Residents enjoy access to a 25-metre lap pool, dedicated children&rsquo;s playrooms and outdoor play areas, as well as curated BBQ and picnic spaces. The wellness offering includes a state-of-the-art gym and yoga studio, outdoor fitness stations, and a tranquil outdoor lounge, complemented by an exclusive cinema room and further bespoke facilities.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-78" aria-expanded="true" aria-controls="collapse-78">
											We already are a registered vendor; how can we participate in ongoing tenders?
										</button>
									</div>
									<div id="collapse-78" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											As our tenders are not public right now, we will send you all tender invitations directly.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-79" aria-expanded="true" aria-controls="collapse-79">
											What sustainability features are included?
										</button>
									</div>
									<div id="collapse-79" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Villas have a Pearl 3.0 rating as per Abu Dhabi Municipality.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-80" aria-expanded="true" aria-controls="collapse-80">
											Does&nbsp;purchase&nbsp;of Tara Park qualify for the UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-80" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Property investments in Tara Park exceeding AED 2,000,000 typically enable owners to apply for the prestigious 10-year Golden Visa, ensuring long-term security and residency within the Emirates.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-81" aria-expanded="true" aria-controls="collapse-81">
											Are the properties in Muheira freehold?
										</button>
									</div>
									<div id="collapse-81" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Muheira is a freehold development, inviting both local and international investors to secure property within one of Abu Dhabi&rsquo;s most prestigious and sought-after neighbourhoods.</p>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-82" aria-expanded="true" aria-controls="collapse-82">
											Why do we need to add bank details during registration?
										</button>
									</div>
									<div id="collapse-82" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Correct and complete bank details are important, as we make payments based on the bank account information added in the system.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-83" aria-expanded="true" aria-controls="collapse-83">
											Can I select my properties landscaping?
										</button>
									</div>
									<div id="collapse-83" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											All units come with garden space provisions, giving you the option to build your own landscape, as desired.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-84" aria-expanded="true" aria-controls="collapse-84">
											Are there schools and hospitals nearby?
										</button>
									</div>
									<div id="collapse-84" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, residents are just minutes away from world-class&nbsp;schools and hospitals&nbsp;including Sorbonne University, Repton School, and Cleveland Clinic Abu Dhabi.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-85" aria-expanded="true" aria-controls="collapse-85">
											Does purchase of Muheira qualify for the UAE Golden Visa?
										</button>
									</div>
									<div id="collapse-85" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Property investments in Muheira exceeding AED 2,000,000 typically enable owners to apply for the prestigious 10-year UAE Golden Visa, ensuring long-term security and residency within the Emirates.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-86" aria-expanded="true" aria-controls="collapse-86">
											The Non-Disclosure Agreement doesn&rsquo;t refer to any specific project. Is that correct?
										</button>
									</div>
									<div id="collapse-86" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, during registration, we ask you to sign a general Non-Disclosure Agreement.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-87" aria-expanded="true" aria-controls="collapse-87">
											Why buy a property on Hudayriyat Golf Estates?
										</button>
									</div>
									<div id="collapse-87" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<div>It&rsquo;s ultra-low-density golf-front living within an active island. You get privacy, space, and luxury villas with</div><div>immediate access to a proven leisure and lifestyle destination.</div>
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-88" aria-expanded="true" aria-controls="collapse-88">
											Are the apartments equipped with smart home features?
										</button>
									</div>
									<div id="collapse-88" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, each apartment is provisioned for home automation, allowing for smart home functionality.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-89" aria-expanded="true" aria-controls="collapse-89">
											We are a general contractor with multiple trades; do we need to select all categories under Products and Services?
										</button>
									</div>
									<div id="collapse-89" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, you should select multiple categories (whichever are applicable to your commercial licenses&rsquo; activities) from the dropdown list under Products and Services. You must select a third-level category to make sure you are searchable in the system. Selection of the main category alone will not be sufficient &ndash; you need to select all the relevant subcategories.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-90" aria-expanded="true" aria-controls="collapse-90">
											What is the payment structure?
										</button>
									</div>
									<div id="collapse-90" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											A relaxed 40/60 payment plan applies (5% on booking, 35% staggered, and 60% on completion). No alternative plans are available currently.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-91" aria-expanded="true" aria-controls="collapse-91">
											What should we do if we don&rsquo;t find any subcategory applicable to our trade?
										</button>
									</div>
									<div id="collapse-91" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Please contact us at <a href="mailto:registration@modon.ae">registration@modon.ae</a>
 so we can advise you.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-92" aria-expanded="true" aria-controls="collapse-92">
											We are a group of companies; do we need to register only the parent company or all companies under the group?
										</button>
									</div>
									<div id="collapse-92" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											You should register each company individually with its own trade license and bank details. Moreover, you need to attach the parent company or holding company license for further reference.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-93" aria-expanded="true" aria-controls="collapse-93">
											If we are registered, does it guarantee we&rsquo;ll be invited to bid for tenders?
										</button>
									</div>
									<div id="collapse-93" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Registration doesn&rsquo;t guarantee the invitation to all or any of the tenders. However, you will be listed as a potential vendor for any upcoming opportunity. Registration is mandatory for any vendor who wishes to be considered for work.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-94" aria-expanded="true" aria-controls="collapse-94">
											How will we know if we&rsquo;re invited to tender?
										</button>
									</div>
									<div id="collapse-94" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											You will receive an email notification inviting you to express your interest to participate in each specific tender. Please make sure that all contact details, including alternative emails and phone numbers, are clearly and correctly added during registration.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-95" aria-expanded="true" aria-controls="collapse-95">
											Our question is not answered here. What should we do?
										</button>
									</div>
									<div id="collapse-95" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											You can send us your queries at <a href="mailto:registration@modon.ae">registration@modon.ae</a>

										</div>
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
