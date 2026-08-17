// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Whistleblowing() {
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
             

	<section className="banner-section">
		<div className="swiper swiper-spotlight">
			<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="image-outer">
								<img className="bannerimage" src="/images/modoncorporatelibraries/about-us/whistleblowing-bannera392.jpg" data-dsrc="/images/modoncorporatelibraries/about-us/whistleblowing-bannera392.jpg" data-msrc="/images/modoncorporatelibraries/about-us/whistleblowing-bannera392.jpg" alt='Whistleblowing Banner' />
						</div>
						<div className="details-section">
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="content">
												<div className="title">Whistleblowing</div>

												<div className="description">We are committed to acting with integrity in everything we do through implementing and maintaining the highest ethical standards.</div>

												<a className="btn btn-white " href="#whistle-blow" target="_self">
													<span>Create Report</span>
													<span className="arrow"></span>
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
 

        <section className="img-desc-section">
            <div className="whoweare-section" data-aos="fade-up" data-aos-duration="2000">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                                <div className="title">Overview</div>
                                                            <div className="sub-title">
                                    Our success depends on our reputation for achieving high standards of conduct, and that’s why we have adopted a zero-tolerance approach to fraud. Fraud will not be tolerated under any circumstances.
                                </div>
                            <div className="description-outer">
                                    <div className="start">
                                        Reaffirming our commitment to acting with integrity, our Good Conduct Framework aims to prevent, detect, avoid, and respond to fraud. Adherence to the Code of Conduct and the Fraud Control Standard ensures that all our employees and stakeholders are working in the same direction as we do, and helps us achieve excellence in work operations.
<br /><br /><a href="#whistle-blow" style={{ textDecoration: 'underline', color: 'inherit' }} data-sf-ec-immutable="">Send Report<img src="/images/modoncorporatelibraries/about-us/button-arrowc0cd.svg" sf-size="100" data-sf-ec-immutable="" alt="button-arrow" style={{ display: 'inline-block', margin: '0 20px' }} /></a>
                                    </div>

                                    <div className="end">
                                        We encourage our employees and stakeholders to make use of the whistleblowing reporting mechanism we have established to solicit information about potential fraud. If you become aware of any instances of fraud, or believe a situation may involve or lead to a violation of the Code of Conduct or the Fraud Control Standard, please report this using the link below:

                                    </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>






        <section className="process-section">
            <div className="container" data-aos="fade-up" data-aos-duration="2000">
                <div className="row">
                    <div className="col-sm-12">
                            <div className="title">Modon Ethics Line</div>
                                            </div>
                </div>
            </div>
            <div className="details-outer" data-aos="fade-up" data-aos-duration="2000">
                    <div className="img-outer">
                        <img src="/images/modoncorporatelibraries/whistleblowing-procurement/whistleblowing404e.jpg" alt="whistleblowing" />
                    </div>
                <div className="desc">
                        <p>We don&rsquo;t tolerate retaliation against anyone for using the Modon Ethics Line to report a fraud or unethical behavior in good faith. Individuals who raise red flags about possible fraud or unethical behavior play an important role in maintaining our ethical workplace and ensuring that we always do the right thing.</p>
                                    </div>
            </div>


        </section>





<section data-sf-element="Row" className="working-section">
	<div className="container">
		<div className="row" data-aos="fade-up" data-aos-duration="2000">
			<div id="Contentplaceholder1_C005_Col00" className="sf_colsIn col-12" data-sf-element="How it Works Listing" data-placeholder-label="How it Works Listing">

			</div>
			<div id="Contentplaceholder1_C005_Col01" className="sf_colsIn col-12" data-sf-element="Alternate Card" data-placeholder-label="Alternate Card">
    <div className="row whistleblow-data">
        <div className="col-sm-12">
                <div className="section-title">You can report your concern using one of the following options:</div>
        </div>
        <div className="col-sm-6 stretch-card">
            <div className="card matter-card  ">
                <div className="card-body">
                        <div className="top">
                            Option 1
<ul><li>Send an email to modonethicsline@modon.com</li></ul>                        </div>
                    <div className="bottom">
                        <a className="" target="_self" href="mailto:modonethicsline@modon.com">
                            <span>modonethicsline@modon.com</span><span className="icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 stretch-card">
            <div className="card matter-card highlight">
                <div className="card-body">
                        <div className="top">
                            Option 2
<ul><li>Complete the form below:</li></ul>                        </div>
                    <div className="bottom">
                        <a className="btn theme-btn-white" target="_self" href="#whistle-blow">
                            <span>Fill the Form</span><span className="icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>







			</div>
		</div>
	</div>
</section><section data-sf-element="Row"  className="location-section contactus whistleblowing">
	<div className="container-lg">
		<div className="row">
			<div id="Contentplaceholder1_C006_Col00" className="sf_colsIn col-lg-6" data-sf-element="Whistleblowing Form" data-placeholder-label="Whistleblowing Form" data-aos="fade-right" data-aos-duration="2000">

<div id="whistle-blow" className="form-section whistleblow-form-selector">
	<div className="title-section">
		<div className="title">Reporting Form</div>
	</div>
<form action="https://www.modon.com/about-modon/whistleblowing/Submit/" className="form" enctype="multipart/form-data" id="WhistleBlowFormId" method="post"><input type="hidden" value="" name="sf_antiforgery" />
<input type="hidden" value='/sitefinity/anticsrf' name='antiCsrfService' />
<input type="hidden" value='X-SF-ANTIFORGERY-REQUEST' name='antiCsrfCustomHeaderName' />		<div className="form-group">
			<input className="form-control" id="whistleblow_Name" maxLength="50" name="Name" placeholder="Name" required="" type="text" value="" />
		</div>
		<div className="form-group">
			<input className="form-control required" id="whistleblow_Email" maxLength="255" name="Email" placeholder="Email" type="email" value="" />
		</div>
		<div className="form-group">
			<input className="form-control phone" id="whistleblow_Phone" maxLength="25" name="PhoneNumber" placeholder="Phone Number" type="text" value="" />
		</div>
		<div className="form-group">
			<select className="form-control select" id="VoilationType" name="VoilationType"><option disabled={true} defaultValue={true} value="0">Type of Concern/Voilation *</option>
<option value="Corruption">Corruption</option>
<option value="Kickbacks">Kickbacks</option>
<option value="Conflict of interest">Conflict of interest</option>
<option value="Bribery">Bribery</option>
</select>
		</div>
		<div className="form-group">
			<input className="form-control datepicker placeholdertext" id="whistleblow_Date" maxLength="255" name="Date" placeholder="When did the violation happen?" type="date" value="" />
		</div>
		<div className="form-group">
			<textarea className="form-control textarea" cols="20" id="whistleblow_Message" name="Message" placeholder="Message" rows="3">
</textarea>
		</div>
		<div className="form-group">
			<div className="custom-fileupload">
				<input className="fileinput" type="file" name="IncidentFiles" id="selectFile" />
				<img className="inputbtn" src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/attach_file.svg" alt="" />
				<div className="filename">
					<p>Please attach any document or file that supports your report</p>
					<span>* Max File size: 10 MB. Allowed types: pdf, doc, docx, jpg, jpeg, png, txt</span>
				</div>
			</div>
			<span id="Message-error-file" className="error" style={{ display: 'none' }}></span>
		</div>
		<div className="form-group">
           <div className="check-box">
           <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/formcheck.svg" alt="" />
				<p>By submitting this form, you declare that you are reporting matters in good faith, and to the best of your knowledge, all the information provided isfactual.</p>
            </div>
        </div>
		<div className="form-group">
			
			
		</div>
		<input id="mobile" maxLength="255" name="mobile" size="20" type="hidden" />
		<input type="hidden" id="phoneCode" name="PhoneCode" value="" />
		<a href="javascript:;" id="form-btn" className="btn btn-dark d-flex w-100 justify-content-center">
			<span>Submit</span> 
			<img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/btnarrowwhite.svg" alt="" />
		</a>
</form>	<div className="success-message text-center submit-info">
		<div className="message"></div>
	</div> 
</div>
<input id="FullNameErrorMessage" name="FullNameErrorMessage" type="hidden" value="Please enter your full name" /><input id="EmailErrorMessage" name="EmailErrorMessage" type="hidden" value="Please enter a valid email address." /><input id="PhoneErrorMessage" name="PhoneErrorMessage" type="hidden" value="Please enter valid phone number." /><input id="MessageErrorMessage" name="MessageErrorMessage" type="hidden" value="Please enter message." /><input id="VoilationTypeErrorMessage" name="VoilationTypeErrorMessage" type="hidden" value="Please select violation type." /><input id="DateErrorMessage" name="DateErrorMessage" type="hidden" value="Please enter violation date." />
				
			</div>
			<div id="Contentplaceholder1_C006_Col01" className="sf_colsIn col-lg-6" data-sf-element="Map Section" data-placeholder-label="Map Section" data-aos="fade-left" data-aos-duration="2000">


        <div className="map-outer gmap-container">
            <div className="map" id="map"></div>
        </div>
<input id="map-longitude" name="map-longitude" type="hidden" value="54.351577" /><input id="map-latitude" name="map-latitude" type="hidden" value="24.413063" /><input id="map-title" name="map-title" type="hidden" value="Modon Sales Centre Hudayriyat Island" /><input id="map-zoomlevel" name="map-zoomlevel" type="hidden" value="13" /><input id="map-infowindow" name="map-infowindow" type="hidden" value="&lt;div id=&quot;content&quot; />&lt;div id=&quot;siteNotice&quot;>&lt;/div>&lt;div id=&quot;bodyContent&quot;>&lt;p>&lt;img src=&quot;https://modon.sitefinity.cloud/images/modoncorporatelibraries/about-us/modon-icon.jpg?sfvrsn=52ada886_1&quot; sf-size=&quot;3359&quot; data-sf-ec-immutable=&quot;&quot; alt=&quot;&quot; />&amp;nbsp; &lt;a href=&quot;https://maps.app.goo.gl/ETw91CnHYC43cxQk7&quot; style=&quot;display:inline-block;&quot; target=&quot;_blank&quot; data-sf-ec-immutable=&quot;&quot;>&lt;strong>Sales Centre Hudayriyat Island&lt;/strong>
 &lt;/a>
 &lt;/p>&lt;p>Hudayriyat Island - Al Hidayriyyat - Abu Dhabi&lt;/p>&lt;/div>&lt;/div>" />

				
			</div>
		</div>
	</div>
</section> 
            <Footer />
        </div>
    );
}
