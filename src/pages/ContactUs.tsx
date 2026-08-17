// @ts-nocheck
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectLeadForm from '../components/ProjectLeadForm';

export default function ContactUs() {
	useEffect(() => {
		if (typeof (window as any).initModonForm === 'function') {
			(window as any).initModonForm();
		}
	}, []);

	return (
		<div className="content-wrapper">
			<Header />


			<div >
				<div className="sfContentBlock sf-Long-text" ><section className="content-section bannerless-top location-section contactus pb-0"><div className="container"><div className="row"><div className="col-sm-12"><div className="section-title">Contact Us</div></div></div></div></section></div>
			</div>

			<img loading="lazy" className="img-fluid" src="/images/modoncorporatelibraries/banners/reh-1b6cc.webp?sfvrsn=47fc2db4_0" title="REH 1" alt="Contact Us"

			/>

			<div >
				<div className="sfContentBlock sf-Long-text" ><section className="description-eg"><div className="container"><div className="row"><div className="col-sm-12"><p>Reach out to our team for any inquiries, customized advice, or to explore our premium offerings in Ras El Hekma.</p><div className="number-box flex-column"><div className="contact-item d-flex">&nbsp;
				</div>
				</div></div></div></div></section></div>
			</div>
			<section data-sf-element="Row" className="location-section contact-form" data-aos="fade-up" data-aos-duration="2000" id="contact-form">
				<div className="container-lg">
					<div className="row">
						<div id="Contentplaceholder1_C022_Col00" className="sf_colsIn col-lg-12" data-sf-element="Contact Us Form" data-placeholder-label="Contact Us Form">

							<ProjectLeadForm projectName="General Inquiry" redirectUrl="/contact-us/thank-you" title="Get In Touch" />
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}