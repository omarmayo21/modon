// @ts-nocheck
import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

export default function RasElHekma() {

    const gallerySwiperRef = useRef<any>(null);
    const spotlightSwiperRef = useRef<any>(null);

    useEffect(() => {
        // Initialize the legacy form plugins now that the form DOM is mounted
        if (typeof (window as any).initModonForm === 'function') {
            (window as any).initModonForm();
        }

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

        
        // Fix Spotlight Swiper
        if (window.Swiper) {
            spotlightSwiperRef.current = new window.Swiper(".swiper-spotlight", {
                slidesPerView: 1,
                loop: false,
                autoplay: false,
            });
        }

        // Fix Gallery Swiper
        if (window.Swiper) {
            gallerySwiperRef.current = new window.Swiper(".swiper-gallery", {
                slidesPerView: "auto",
                spaceBetween: 0,
                loop: true,
                freeMode: true,
                autoplay: false,
                centeredSlides: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    768: {
                        loop: false,
                        centeredSlides: false,
                    },
                },
            });
        }
        
        // Rebind gallery arrows
        const nextBtn = document.getElementById('galleryNext');
        const prevBtn = document.getElementById('galleryPrev');
        const triggerNext = () => document.querySelector('.gallery-next')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        const triggerPrev = () => document.querySelector('.gallery-prev')?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        
        if(nextBtn) nextBtn.addEventListener('click', triggerNext);
        if(prevBtn) prevBtn.addEventListener('click', triggerPrev);

        return () => {
            window.removeEventListener('resize', handleResize);
            
            if (spotlightSwiperRef.current) {
                spotlightSwiperRef.current.destroy(true, true);
            }
            if (gallerySwiperRef.current) {
                gallerySwiperRef.current.destroy(true, true);
            }
            if(nextBtn) nextBtn.removeEventListener('click', triggerNext);
            if(prevBtn) prevBtn.removeEventListener('click', triggerPrev);
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
							<img className="bannerimage" fetchPriority="high" src="/images/modoncorporatelibraries/banners/reh-landing-page0154.webp?sfvrsn=160cc8eb_1" data-dsrc='/images/modoncorporatelibraries/banners/reh-landing-page0154.webp?sfvrsn=160cc8eb_1' data-msrc='/images/modoncorporatelibraries/banners/reh-landing-page0154.webp?sfvrsn=160cc8eb_1' alt='' />
					</div>
					<div className="details-section">
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div className="content">

											<div className="logo-outer">
												<img src="/images/modoncorporatelibraries/about-us/modon_ras-el-hekma_logo_white_rgb-(1)d277.png?sfvrsn=d28b3e2_1" alt="" />
											</div>

											<div className="title"><h1>Ras El Hekma</h1><p style={{fontSize:'26px'}}>Timeless Mediterranean living</p></div>
										<div className="btn-outer">

												<a className="btn btn-white btn-scroll" href="#register-now">Register now</a>
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

			<a className="btn btn-white btn-scroll" href="#register-now">Register now</a>
	</div>
 
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col00" className="sf_colsIn" data-sf-element="Project Details and Image" data-placeholder-label="Project Details and Image">
	<section className="info-box-section details-page">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="info-block">

							<div className="desc"><p>Against a backdrop of Mediterranean turquoise and infused with the cultural richness of Egypt, Ras El Hekma is a new city that redefines contemporary coastal life. Spanning 44 kilometres of golden coastline, this is a place for those seeking the energy of city life, with the beauty offered by shoreside living.</p></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	

	
<section data-sf-element="Row" className="location-section realestate-details">
	<div className="container-lg visual-anim">
		<div className="row">
			<div id="Contentplaceholder1_T620A45DA002_Col00" className="sf_colsIn col-lg-5" data-sf-element="Contact Us Form" data-placeholder-label="Contact Us Form">

	<div className="form-section contactus-form-selector">
			<div className="title-section d-block">
				<div className="title mb-3">Register your interest</div>
			</div>

	<form className="form contact" id="generic-project-form" action="/api/submit" method="POST">
		<input type="hidden" name="redirectUrl" value="/real-estate/ras-el-hekma/thank-you" />

		<div className="form-group">
			<label htmlFor="first_name">First Name*</label>
			<input className="form-control" id="first_name" maxLength="40" name="first_name" size="20" type="text" required />
		</div>
		<div className="form-group">
			<label htmlFor="last_name">Last Name*</label>
			<input className="form-control" id="last_name" maxLength="80" name="last_name" size="20" type="text" required />
		</div>
		<div className="form-group field-loader">
			{/* spinner */}
			<div className="spinner-border d-none" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
			{/* spinner */}
			<label htmlFor="PhoneNumber">Mobile*</label>
			<input className="form-control phone" maxLength="15" id="PhoneNumber" name="PhoneNumber" size="20" type="tel" required />
		</div>
		<div className="form-group">
			{/* spinner */}
			<div className="spinner-border d-none" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
			{/* spinner */}
			<label htmlFor="email">Email*</label>
			<input className="form-control" id="email" maxLength="80" name="email" size="20" type="email" required autocomplete="off" />
		</div>
		
		<div className="form-group">
			<label htmlFor="00NVH000002y6iv">Country of Residence</label>
			<select id="00NVH000002y6iv" name="00NVH000002y6iv" title="Country of Residence" className="form-control select">
				<option value="">--None--</option>
				<option value="Afghanistan">Afghanistan</option>
				<option value="Albania">Albania</option>
				<option value="Algeria">Algeria</option>
				<option value="American Samoa">American Samoa</option>
				<option value="Andorra">Andorra</option>
				<option value="Angola">Angola</option>
				<option value="Anguilla">Anguilla</option>
				<option value="Antarctica">Antarctica</option>
				<option value="Antigua and Barbuda">Antigua and Barbuda</option>
				<option value="Argentina">Argentina</option>
				<option value="Armenia">Armenia</option>
				<option value="Aruba">Aruba</option>
				<option value="Australia">Australia</option>
				<option value="Austria">Austria</option>
				<option value="Azerbaijan">Azerbaijan</option>
				<option value="Bahamas">Bahamas</option>
				<option value="Bahrain">Bahrain</option>
				<option value="Bangladesh">Bangladesh</option>
				<option value="Barbados">Barbados</option>
				<option value="Belarus">Belarus</option>
				<option value="Belgium">Belgium</option>
				<option value="Belize">Belize</option>
				<option value="Benin">Benin</option>
				<option value="Bermuda">Bermuda</option>
				<option value="Bhutan">Bhutan</option>
				<option value="Bolivia">Bolivia</option>
				<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
				<option value="Botswana">Botswana</option>
				<option value="Bouvet Island">Bouvet Island</option>
				<option value="Brazil">Brazil</option>
				<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
				<option value="British Virgin Islands">British Virgin Islands</option>
				<option value="Brunei">Brunei</option>
				<option value="Bulgaria">Bulgaria</option>
				<option value="Burkina Faso">Burkina Faso</option>
				<option value="Burundi">Burundi</option>
				<option value="Cambodia">Cambodia</option>
				<option value="Cameroon">Cameroon</option>
				<option value="Canada">Canada</option>
				<option value="Cape Verde">Cape Verde</option>
				<option value="Cayman Islands">Cayman Islands</option>
				<option value="Central African Republic">Central African Republic</option>
				<option value="Chad">Chad</option>
				<option value="Chile">Chile</option>
				<option value="China">China</option>
				<option value="Christmas Island">Christmas Island</option>
				<option value="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
				<option value="Colombia">Colombia</option>
				<option value="Comoros">Comoros</option>
				<option value="Congo [DRC]">Congo [DRC]</option>
				<option value="Congo [Republic]">Congo [Republic]</option>
				<option value="Cook Islands">Cook Islands</option>
				<option value="Costa Rica">Costa Rica</option>
				<option value="Côte d&#39;Ivoire">Côte d&#39;Ivoire</option>
				<option value="Croatia">Croatia</option>
				<option value="Cuba">Cuba</option>
				<option value="Cyprus">Cyprus</option>
				<option value="Czech Republic">Czech Republic</option>
				<option value="Denmark">Denmark</option>
				<option value="Djibouti">Djibouti</option>
				<option value="Dominica">Dominica</option>
				<option value="Dominican Republic">Dominican Republic</option>
				<option value="Ecuador">Ecuador</option>
				<option value="Egypt">Egypt</option>
				<option value="El Salvador">El Salvador</option>
				<option value="Equatorial Guinea">Equatorial Guinea</option>
				<option value="Eritrea">Eritrea</option>
				<option value="Estonia">Estonia</option>
				<option value="Ethiopia">Ethiopia</option>
				<option value="Falkland Islands [Islas Malvinas]">Falkland Islands [Islas Malvinas]</option>
				<option value="Faroe Islands">Faroe Islands</option>
				<option value="Fiji">Fiji</option>
				<option value="Finland">Finland</option>
				<option value="France">France</option>
				<option value="French Guiana">French Guiana</option>
				<option value="French Polynesia">French Polynesia</option>
				<option value="French Southern Territories">French Southern Territories</option>
				<option value="Gabon">Gabon</option>
				<option value="Gambia">Gambia</option>
				<option value="Gaza Strip">Gaza Strip</option>
				<option value="Georgia">Georgia</option>
				<option value="Germany">Germany</option>
				<option value="Ghana">Ghana</option>
				<option value="Gibraltar">Gibraltar</option>
				<option value="Greece">Greece</option>
				<option value="Greenland">Greenland</option>
				<option value="Grenada">Grenada</option>
				<option value="Guadeloupe">Guadeloupe</option>
				<option value="Guam">Guam</option>
				<option value="Guatemala">Guatemala</option>
				<option value="Guernsey">Guernsey</option>
				<option value="Guinea">Guinea</option>
				<option value="Guinea-Bissau">Guinea-Bissau</option>
				<option value="Guyana">Guyana</option>
				<option value="Haiti">Haiti</option>
				<option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
				<option value="Honduras">Honduras</option>
				<option value="Hong Kong">Hong Kong</option>
				<option value="Hungary">Hungary</option>
				<option value="Iceland">Iceland</option>
				<option value="India">India</option>
				<option value="Indonesia">Indonesia</option>
				<option value="Iran">Iran</option>
				<option value="Iraq">Iraq</option>
				<option value="Ireland">Ireland</option>
				<option value="Isle of Man">Isle of Man</option>
				<option value="Israel">Israel</option>
				<option value="Italy">Italy</option>
				<option value="Jamaica">Jamaica</option>
				<option value="Japan">Japan</option>
				<option value="Jersey">Jersey</option>
				<option value="Jordan">Jordan</option>
				<option value="Kazakhstan">Kazakhstan</option>
				<option value="Kenya">Kenya</option>
				<option value="Kiribati">Kiribati</option>
				<option value="Kosovo">Kosovo</option>
				<option value="Kuwait">Kuwait</option>
				<option value="Kyrgyzstan">Kyrgyzstan</option>
				<option value="Laos">Laos</option>
				<option value="Latvia">Latvia</option>
				<option value="Lebanon">Lebanon</option>
				<option value="Lesotho">Lesotho</option>
				<option value="Liberia">Liberia</option>
				<option value="Libya">Libya</option>
				<option value="Liechtenstein">Liechtenstein</option>
				<option value="Lithuania">Lithuania</option>
				<option value="Luxembourg">Luxembourg</option>
				<option value="Macau">Macau</option>
				<option value="Macedonia [FYROM]">Macedonia [FYROM]</option>
				<option value="Madagascar">Madagascar</option>
				<option value="Malawi">Malawi</option>
				<option value="Malaysia">Malaysia</option>
				<option value="Maldives">Maldives</option>
				<option value="Mali">Mali</option>
				<option value="Malta">Malta</option>
				<option value="Marshall Islands">Marshall Islands</option>
				<option value="Martinique">Martinique</option>
				<option value="Mauritania">Mauritania</option>
				<option value="Mauritius">Mauritius</option>
				<option value="Mayotte">Mayotte</option>
				<option value="Mexico">Mexico</option>
				<option value="Micronesia">Micronesia</option>
				<option value="Moldova">Moldova</option>
				<option value="Monaco">Monaco</option>
				<option value="Mongolia">Mongolia</option>
				<option value="Montenegro">Montenegro</option>
				<option value="Montserrat">Montserrat</option>
				<option value="Morocco">Morocco</option>
				<option value="Mozambique">Mozambique</option>
				<option value="Myanmar [Burma]">Myanmar [Burma]</option>
				<option value="Namibia">Namibia</option>
				<option value="Nauru">Nauru</option>
				<option value="Nepal">Nepal</option>
				<option value="Netherlands">Netherlands</option>
				<option value="Netherlands Antilles">Netherlands Antilles</option>
				<option value="New Caledonia">New Caledonia</option>
				<option value="New Zealand">New Zealand</option>
				<option value="Nicaragua">Nicaragua</option>
				<option value="Niger">Niger</option>
				<option value="Nigeria">Nigeria</option>
				<option value="Niue">Niue</option>
				<option value="Norfolk Island">Norfolk Island</option>
				<option value="Northern Mariana Islands">Northern Mariana Islands</option>
				<option value="North Korea">North Korea</option>
				<option value="Norway">Norway</option>
				<option value="Oman">Oman</option>
				<option value="Pakistan">Pakistan</option>
				<option value="Palau">Palau</option>
				<option value="Palestinian Territories">Palestinian Territories</option>
				<option value="Panama">Panama</option>
				<option value="Papua New Guinea">Papua New Guinea</option>
				<option value="Paraguay">Paraguay</option>
				<option value="Peru">Peru</option>
				<option value="Philippines">Philippines</option>
				<option value="Pitcairn Islands">Pitcairn Islands</option>
				<option value="Poland">Poland</option>
				<option value="Portugal">Portugal</option>
				<option value="Puerto Rico">Puerto Rico</option>
				<option value="Qatar">Qatar</option>
				<option value="Réunion">Réunion</option>
				<option value="Romania">Romania</option>
				<option value="Russia">Russia</option>
				<option value="Rwanda">Rwanda</option>
				<option value="Saint Helena">Saint Helena</option>
				<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
				<option value="Saint Lucia">Saint Lucia</option>
				<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
				<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
				<option value="Samoa">Samoa</option>
				<option value="San Marino">San Marino</option>
				<option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
				<option value="Saudi Arabia">Saudi Arabia</option>
				<option value="Senegal">Senegal</option>
				<option value="Serbia">Serbia</option>
				<option value="Seychelles">Seychelles</option>
				<option value="Sierra Leone">Sierra Leone</option>
				<option value="Singapore">Singapore</option>
				<option value="Slovakia">Slovakia</option>
				<option value="Slovenia">Slovenia</option>
				<option value="Solomon Islands">Solomon Islands</option>
				<option value="Somalia">Somalia</option>
				<option value="South Africa">South Africa</option>
				<option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
				<option value="South Korea">South Korea</option>
				<option value="Spain">Spain</option>
				<option value="Sri Lanka">Sri Lanka</option>
				<option value="Sudan">Sudan</option>
				<option value="Suriname">Suriname</option>
				<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
				<option value="Swaziland">Swaziland</option>
				<option value="Sweden">Sweden</option>
				<option value="Switzerland">Switzerland</option>
				<option value="Syria">Syria</option>
				<option value="Taiwan">Taiwan</option>
				<option value="Tajikistan">Tajikistan</option>
				<option value="Tanzania">Tanzania</option>
				<option value="Thailand">Thailand</option>
				<option value="Timor-Leste">Timor-Leste</option>
				<option value="Togo">Togo</option>
				<option value="Tokelau">Tokelau</option>
				<option value="Tonga">Tonga</option>
				<option value="Trinidad and Tobago">Trinidad and Tobago</option>
				<option value="Tunisia">Tunisia</option>
				<option value="Turkey">Turkey</option>
				<option value="Turkmenistan">Turkmenistan</option>
				<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
				<option value="Tuvalu">Tuvalu</option>
				<option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
				<option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
				<option value="Uganda">Uganda</option>
				<option value="Ukraine">Ukraine</option>
				<option value="United Arab Emirates">United Arab Emirates</option>
				<option value="United Kingdom">United Kingdom</option>
				<option value="Uruguay">Uruguay</option>
				<option value="Uzbekistan">Uzbekistan</option>
				<option value="Vanuatu">Vanuatu</option>
				<option value="Vatican City">Vatican City</option>
				<option value="Venezuela">Venezuela</option>
				<option value="Vietnam">Vietnam</option>
				<option value="Wallis and Futuna">Wallis and Futuna</option>
				<option value="Western Sahara">Western Sahara</option>
				<option value="Yemen">Yemen</option>
				<option value="Zambia">Zambia</option>
				<option value="Zimbabwe">Zimbabwe</option>
				<option value="Commonwealth of Dominica">Commonwealth of Dominica</option>
				<option value="United States">United States of America</option>
			</select>
		</div>
		<div className="form-group">
			<label htmlFor="00NVH00000303CJ">Preferred Contact Time</label>
			<select className="form-control select" id="00NVH00000303CJ" name="00NVH00000303CJ"><option disabled={true} defaultValue={true} value="">--None--</option>
<option value="9 am to 11 am">9 am to 11 am</option>
<option value="11 am to 2 pm">11 am to 2 pm</option>
<option value="2 pm to 5 pm">2 pm to 5 pm</option>
<option value="after 5 pm">after 5 pm</option>
</select>
		</div>
		<div className="form-group">
			<label htmlFor="00NHp00000lQiTk">Nationality</label>
			<select id="00NHp00000lQiTk" name="00NHp00000lQiTk" title="Nationality" className="form-control select">
				<option value="">--None--</option>
				<option value="Afghanistan">Afghanistan</option>
				<option value="Albania">Albania</option>
				<option value="Algeria">Algeria</option>
				<option value="American Samoa">American Samoa</option>
				<option value="Andorra">Andorra</option>
				<option value="Angola">Angola</option>
				<option value="Anguilla">Anguilla</option>
				<option value="Antarctica">Antarctica</option>
				<option value="Antigua and Barbuda">Antigua and Barbuda</option>
				<option value="Argentina">Argentina</option>
				<option value="Armenia">Armenia</option>
				<option value="Aruba">Aruba</option>
				<option value="Australia">Australia</option>
				<option value="Austria">Austria</option>
				<option value="Azerbaijan">Azerbaijan</option>
				<option value="Bahamas">Bahamas</option>
				<option value="Bahrain">Bahrain</option>
				<option value="Bangladesh">Bangladesh</option>
				<option value="Barbados">Barbados</option>
				<option value="Belarus">Belarus</option>
				<option value="Belgium">Belgium</option>
				<option value="Belize">Belize</option>
				<option value="Benin">Benin</option>
				<option value="Bermuda">Bermuda</option>
				<option value="Bhutan">Bhutan</option>
				<option value="Bolivia">Bolivia</option>
				<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
				<option value="Botswana">Botswana</option>
				<option value="Bouvet Island">Bouvet Island</option>
				<option value="Brazil">Brazil</option>
				<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
				<option value="British Virgin Islands">British Virgin Islands</option>
				<option value="Brunei">Brunei</option>
				<option value="Bulgaria">Bulgaria</option>
				<option value="Burkina Faso">Burkina Faso</option>
				<option value="Burundi">Burundi</option>
				<option value="Cambodia">Cambodia</option>
				<option value="Cameroon">Cameroon</option>
				<option value="Canada">Canada</option>
				<option value="Cape Verde">Cape Verde</option>
				<option value="Cayman Islands">Cayman Islands</option>
				<option value="Central African Republic">Central African Republic</option>
				<option value="Chad">Chad</option>
				<option value="Chile">Chile</option>
				<option value="China">China</option>
				<option value="Christmas Island">Christmas Island</option>
				<option value="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
				<option value="Colombia">Colombia</option>
				<option value="Comoros">Comoros</option>
				<option value="Congo [DRC]">Congo [DRC]</option>
				<option value="Congo [Republic]">Congo [Republic]</option>
				<option value="Cook Islands">Cook Islands</option>
				<option value="Costa Rica">Costa Rica</option>
				<option value="Côte d&#39;Ivoire">Côte d&#39;Ivoire</option>
				<option value="Croatia">Croatia</option>
				<option value="Cuba">Cuba</option>
				<option value="Cyprus">Cyprus</option>
				<option value="Czech Republic">Czech Republic</option>
				<option value="Denmark">Denmark</option>
				<option value="Djibouti">Djibouti</option>
				<option value="Dominica">Dominica</option>
				<option value="Dominican Republic">Dominican Republic</option>
				<option value="Ecuador">Ecuador</option>
				<option value="Egypt">Egypt</option>
				<option value="El Salvador">El Salvador</option>
				<option value="Equatorial Guinea">Equatorial Guinea</option>
				<option value="Eritrea">Eritrea</option>
				<option value="Estonia">Estonia</option>
				<option value="Ethiopia">Ethiopia</option>
				<option value="Falkland Islands [Islas Malvinas]">Falkland Islands [Islas Malvinas]</option>
				<option value="Faroe Islands">Faroe Islands</option>
				<option value="Fiji">Fiji</option>
				<option value="Finland">Finland</option>
				<option value="France">France</option>
				<option value="French Guiana">French Guiana</option>
				<option value="French Polynesia">French Polynesia</option>
				<option value="French Southern Territories">French Southern Territories</option>
				<option value="Gabon">Gabon</option>
				<option value="Gambia">Gambia</option>
				<option value="Gaza Strip">Gaza Strip</option>
				<option value="Georgia">Georgia</option>
				<option value="Germany">Germany</option>
				<option value="Ghana">Ghana</option>
				<option value="Gibraltar">Gibraltar</option>
				<option value="Greece">Greece</option>
				<option value="Greenland">Greenland</option>
				<option value="Grenada">Grenada</option>
				<option value="Guadeloupe">Guadeloupe</option>
				<option value="Guam">Guam</option>
				<option value="Guatemala">Guatemala</option>
				<option value="Guernsey">Guernsey</option>
				<option value="Guinea">Guinea</option>
				<option value="Guinea-Bissau">Guinea-Bissau</option>
				<option value="Guyana">Guyana</option>
				<option value="Haiti">Haiti</option>
				<option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
				<option value="Honduras">Honduras</option>
				<option value="Hong Kong">Hong Kong</option>
				<option value="Hungary">Hungary</option>
				<option value="Iceland">Iceland</option>
				<option value="India">India</option>
				<option value="Indonesia">Indonesia</option>
				<option value="Iran">Iran</option>
				<option value="Iraq">Iraq</option>
				<option value="Ireland">Ireland</option>
				<option value="Isle of Man">Isle of Man</option>
				<option value="Israel">Israel</option>
				<option value="Italy">Italy</option>
				<option value="Jamaica">Jamaica</option>
				<option value="Japan">Japan</option>
				<option value="Jersey">Jersey</option>
				<option value="Jordan">Jordan</option>
				<option value="Kazakhstan">Kazakhstan</option>
				<option value="Kenya">Kenya</option>
				<option value="Kiribati">Kiribati</option>
				<option value="Kosovo">Kosovo</option>
				<option value="Kuwait">Kuwait</option>
				<option value="Kyrgyzstan">Kyrgyzstan</option>
				<option value="Laos">Laos</option>
				<option value="Latvia">Latvia</option>
				<option value="Lebanon">Lebanon</option>
				<option value="Lesotho">Lesotho</option>
				<option value="Liberia">Liberia</option>
				<option value="Libya">Libya</option>
				<option value="Liechtenstein">Liechtenstein</option>
				<option value="Lithuania">Lithuania</option>
				<option value="Luxembourg">Luxembourg</option>
				<option value="Macau">Macau</option>
				<option value="Macedonia [FYROM]">Macedonia [FYROM]</option>
				<option value="Madagascar">Madagascar</option>
				<option value="Malawi">Malawi</option>
				<option value="Malaysia">Malaysia</option>
				<option value="Maldives">Maldives</option>
				<option value="Mali">Mali</option>
				<option value="Malta">Malta</option>
				<option value="Marshall Islands">Marshall Islands</option>
				<option value="Martinique">Martinique</option>
				<option value="Mauritania">Mauritania</option>
				<option value="Mauritius">Mauritius</option>
				<option value="Mayotte">Mayotte</option>
				<option value="Mexico">Mexico</option>
				<option value="Micronesia">Micronesia</option>
				<option value="Moldova">Moldova</option>
				<option value="Monaco">Monaco</option>
				<option value="Mongolia">Mongolia</option>
				<option value="Montenegro">Montenegro</option>
				<option value="Montserrat">Montserrat</option>
				<option value="Morocco">Morocco</option>
				<option value="Mozambique">Mozambique</option>
				<option value="Myanmar [Burma]">Myanmar [Burma]</option>
				<option value="Namibia">Namibia</option>
				<option value="Nauru">Nauru</option>
				<option value="Nepal">Nepal</option>
				<option value="Netherlands">Netherlands</option>
				<option value="Netherlands Antilles">Netherlands Antilles</option>
				<option value="New Caledonia">New Caledonia</option>
				<option value="New Zealand">New Zealand</option>
				<option value="Nicaragua">Nicaragua</option>
				<option value="Niger">Niger</option>
				<option value="Nigeria">Nigeria</option>
				<option value="Niue">Niue</option>
				<option value="Norfolk Island">Norfolk Island</option>
				<option value="Northern Mariana Islands">Northern Mariana Islands</option>
				<option value="North Korea">North Korea</option>
				<option value="Norway">Norway</option>
				<option value="Oman">Oman</option>
				<option value="Pakistan">Pakistan</option>
				<option value="Palau">Palau</option>
				<option value="Palestinian Territories">Palestinian Territories</option>
				<option value="Panama">Panama</option>
				<option value="Papua New Guinea">Papua New Guinea</option>
				<option value="Paraguay">Paraguay</option>
				<option value="Peru">Peru</option>
				<option value="Philippines">Philippines</option>
				<option value="Pitcairn Islands">Pitcairn Islands</option>
				<option value="Poland">Poland</option>
				<option value="Portugal">Portugal</option>
				<option value="Puerto Rico">Puerto Rico</option>
				<option value="Qatar">Qatar</option>
				<option value="Réunion">Réunion</option>
				<option value="Romania">Romania</option>
				<option value="Russia">Russia</option>
				<option value="Rwanda">Rwanda</option>
				<option value="Saint Helena">Saint Helena</option>
				<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
				<option value="Saint Lucia">Saint Lucia</option>
				<option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
				<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
				<option value="Samoa">Samoa</option>
				<option value="San Marino">San Marino</option>
				<option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
				<option value="Saudi Arabia">Saudi Arabia</option>
				<option value="Senegal">Senegal</option>
				<option value="Serbia">Serbia</option>
				<option value="Seychelles">Seychelles</option>
				<option value="Sierra Leone">Sierra Leone</option>
				<option value="Singapore">Singapore</option>
				<option value="Slovakia">Slovakia</option>
				<option value="Slovenia">Slovenia</option>
				<option value="Solomon Islands">Solomon Islands</option>
				<option value="Somalia">Somalia</option>
				<option value="South Africa">South Africa</option>
				<option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
				<option value="South Korea">South Korea</option>
				<option value="Spain">Spain</option>
				<option value="Sri Lanka">Sri Lanka</option>
				<option value="Sudan">Sudan</option>
				<option value="Suriname">Suriname</option>
				<option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
				<option value="Swaziland">Swaziland</option>
				<option value="Sweden">Sweden</option>
				<option value="Switzerland">Switzerland</option>
				<option value="Syria">Syria</option>
				<option value="Taiwan">Taiwan</option>
				<option value="Tajikistan">Tajikistan</option>
				<option value="Tanzania">Tanzania</option>
				<option value="Thailand">Thailand</option>
				<option value="Timor-Leste">Timor-Leste</option>
				<option value="Togo">Togo</option>
				<option value="Tokelau">Tokelau</option>
				<option value="Tonga">Tonga</option>
				<option value="Trinidad and Tobago">Trinidad and Tobago</option>
				<option value="Tunisia">Tunisia</option>
				<option value="Turkey">Turkey</option>
				<option value="Turkmenistan">Turkmenistan</option>
				<option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
				<option value="Tuvalu">Tuvalu</option>
				<option value="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
				<option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
				<option value="Uganda">Uganda</option>
				<option value="Ukraine">Ukraine</option>
				<option value="United Arab Emirates">United Arab Emirates</option>
				<option value="United Kingdom">United Kingdom</option>
				<option value="Uruguay">Uruguay</option>
				<option value="Uzbekistan">Uzbekistan</option>
				<option value="Vanuatu">Vanuatu</option>
				<option value="Vatican City">Vatican City</option>
				<option value="Venezuela">Venezuela</option>
				<option value="Vietnam">Vietnam</option>
				<option value="Wallis and Futuna">Wallis and Futuna</option>
				<option value="Western Sahara">Western Sahara</option>
				<option value="Yemen">Yemen</option>
				<option value="Zambia">Zambia</option>
				<option value="Zimbabwe">Zimbabwe</option>
				<option value="Commonwealth of Dominica">Commonwealth of Dominica</option>
				<option value="United States">United States of America</option>
			</select>
		</div>
		<div className="form-group">
			<label htmlFor="00NHp00000lQiTv">Purpose of Use</label>
			<select className="form-control select" id="00NHp00000lQiTv" name="00NHp00000lQiTv"><option disabled={true} defaultValue={true} value="">--None--</option>
<option value="End User">End User</option>
<option value="Investor">Investor</option>
<option value="Not Disclosed">Not Disclosed</option>
<option value="Not Applicable">Not Applicable</option>
<option value="Other">Other</option>
</select>
		</div>

		<div className="form-group d-none">
			<select id="00NVH000003Z6wv" name="00NVH000003Z6wv" title="Source Entity">
				<option value="Modon - Egypt">Modon - Egypt</option>
			</select>
		</div>

		<div className="form-group d-none">
			<label htmlFor="00NHp00000tWW0R">Project Interest</label>
			<select className="form-control select" id="00NHp00000tWW0R" name="00NHp00000tWW0R"><option defaultValue={true} value="Ras El Hekma, Egypt">Ras El Hekma, Egypt</option>
</select>
		</div>

		<div className="check-box form-group">
			<div className="form-check">
				<input name="consentCheck" className="form-check-input" type="checkbox" id="consentCheck" />
			</div>
			<label id="lblConsentCheck" className="text-dark">By submitting this form, you agree to our Terms of Service and Privacy Policy.</label>
		</div>

		<div className="form-group d-none">
			<select id="lead_source" name="lead_source" title="Lead Source">
				<option value="Webform - Egypt Website">Webform - Egypt Website</option>
			</select>
		</div>

		

		<input id="00NHp00000rkes6" maxLength="255" name="00NHp00000rkes6" size="20" type="hidden" />{/* UTM Source */}
		<input id="00NHp00000rkeyC" maxLength="255" name="00NHp00000rkeyC" size="20" type="hidden" />{/* UTM Campaign */}
		<input id="00NVH000004mXYr" maxLength="255" name="00NVH000004mXYr" size="20" type="hidden" />{/* UTM Medium */}
		<input id="00NVH000005PrKn" maxLength="255" name="00NVH000005PrKn" size="20" type="hidden" /> {/* UTM URL */}

		<input id="00NVH000003TdQr" name="00NVH000003TdQr" type="hidden" /> {/*Phone Code*/}
		<input id="mobile" maxLength="15" name="mobile" size="10" type="hidden" />{/*Phone Number*/}

		<input type="submit" className="btn btn-dark w-100 justify-content-center" value="Submit" name="Submit" id="SFFormSubmit" />
	</form>

		<div>

			<input id="FirstNameErrorMessage" name="FirstNameErrorMessage" type="hidden" value="Please enter your first name." />
			<input id="LastNameErrorMessage" name="LastNameErrorMessage" type="hidden" value="Please enter your last name." />
			<input id="PhoneErrorMessage" name="PhoneErrorMessage" type="hidden" value="Please enter valid phone number." />
			<input id="NationalityErrorMessage" name="NationalityErrorMessage" type="hidden" value="NationalityErrorMessage" />
			<input id="PreferedContactTimeErrorMessage" name="PreferedContactTimeErrorMessage" type="hidden" value="PreferedContactTimeErrorMessage" />
			<input id="CountryErrorMessage" name="CountryErrorMessage" type="hidden" value="CountryErrorMessage" />
			<input id="PurposeOfUseErrorMessage" name="PurposeOfUseErrorMessage" type="hidden" value="PurposeOfUseErrorMessage" />
			<input id="EmailErrorMessage" name="EmailErrorMessage" type="hidden" value="Please enter a valid email address." />
		</div>
	</div>


			</div>
			<div id="Contentplaceholder1_T620A45DA002_Col01" className="sf_colsIn col-lg-7" data-sf-element="Map Section" data-placeholder-label="Map Section">


        <div className="map-outer gmap-container">
            <MapContainer 
                center={[31.2150002, 27.813904]} 
                zoom={13} 
                scrollWheelZoom={true} 
                className="map"
                style={{ height: '100%', width: '100%', zIndex: 1 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[31.2150002, 27.813904]}>
                    <Popup>
                        Ras El Hekma
                    </Popup>
                </Marker>
            </MapContainer>
        </div>


			</div>
		</div>
	</div>
</section><div data-sf-element="Row"></div>



	<section className="detailed-block-section">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
						<div className="img-outer">
							<img src="/images/modoncorporatelibraries/about-us/17d49.webp?sfvrsn=c2755bb7_1" alt='' title='1' />
						</div>
				</div>
				<div className="col-md-6">
					<div className="details">
													<div className="desc"><div className="highlight">Designed around 17 curated precincts, Ras El&nbsp;Hekma&nbsp;is where serenity and elegant design is inset with vibrant hubs for future living.
</div><p>Surrounded by nature and connected to the world, Ras El Hekma&nbsp;offers seamless access by road, sea, and air. It&rsquo;s a city where schools and state-of-the-art business facilities sit side by side with wellness&nbsp;centres, resorts, golf courses, and outstanding marinas.&nbsp;Designed to redefine modern living, this is a place that takes the best of Egyptian energy and Mediterranean&nbsp;beauty, and&nbsp;imagines something better.&nbsp;</p></div>
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
							<img src="/images/modoncorporatelibraries/about-us/ras-el-hekma-promo2af8d.webp?sfvrsn=846f014a_1" alt='Ras El Hekma' title='Ras-El-Hekma-promo2' />
						</div>
				</div>
				<div className="col-md-6">
					<div className="details">
													<div className="desc"><div className="highlight">Wadi Yemm: The opening chapter of Ras El Hekma
</div><p>Marking the first launch of 17 distinctive precincts, Wadi Yemm introduces an elegant take on coastal living. Set along sun-drenched shores and framed by turquoise waters, this Mediterranean-inspired neighbourhood brings a more relaxed rhythm to modern life.&nbsp;Designed for movement and connection, its pedestrian boulevards, waterfront pools, and green spaces make wellness a natural state of being.&nbsp;</p></div>
					</div>
				</div>
			</div>
		</div>
	</section>





    </div>
</div>
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col01" className="sf_colsIn" data-sf-element="Activities" data-placeholder-label="Activities">

    </div>
</div>
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col02" className="sf_colsIn" data-sf-element="Location" data-placeholder-label="Location">
<div >
    <div className="sfContentBlock sf-Long-text" ><div className="nawayef-map-section">
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <div className="map-outer"><img src="/images/modoncorporatelibraries/maps/ras-el-hekma-mapb389.webp?sfvrsn=112d73e7_1" className="w-100 sf-immutable-selected" alt="" sf-size={365294} /></div>
            </div>
        </div>
    </div>
</div></div>
</div>
    </div>
</div>
<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA001_Col03" className="sf_colsIn" data-sf-element="Updates" data-placeholder-label="Updates">
    </div>
</div>
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
													<img src="/images/modoncorporatelibraries/about-us/reh6b612.webp?sfvrsn=873b3a2f_1" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/reh56a0b.webp?sfvrsn=7b0d70c_1" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/reh42127.webp?sfvrsn=104570f_1" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/reh3ae73.webp?sfvrsn=7e46c525_1" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/reh2b2b0.webp?sfvrsn=138a4856_1" alt="" />
											</div>
										</div>
										<div className="swiper-slide">
											<div className="img-outer">
													<img src="/images/modoncorporatelibraries/about-us/reh165d5.webp?sfvrsn=cf8d5fe9_1" alt="" />
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
											What major infrastructure additions are included in the masterplan?
										</button>
									</div>
									<div id="collapse-1" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Key infrastructure priorities include the development of a new international airport south of the city and the integration of high-speed road and rail networks for better regional connectivity.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
											What are the key types of residential properties planned for Ras El Hekma?
										</button>
									</div>
									<div id="collapse-2" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The masterplan includes a wide array of luxury properties, such as villas, townhouses, chalets, apartments and serviced residences, distributed across several dedicated districts.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
											What is the total estimated investment in Ras Al Hekma?
										</button>
									</div>
									<div id="collapse-3" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The city is being developed with an initial $35 billion investment from ADQ, with projected cumulative investments expected to exceed $150 billion.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-4">
											What architectural style will define Ras El Hekma?
										</button>
									</div>
									<div id="collapse-4" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The design vision, led by Modon, blends global luxury standards with a strong sense of local heritage. The development incorporates elements of traditional Bedouin architecture, ensuring the city maintains cultural authenticity while offering modern functionality and amenities.&nbsp;
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5">
											Are there any specific tax benefits or incentives for foreign investors in Ras El Hekma?
										</button>
									</div>
									<div id="collapse-5" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The city will feature a free zone and an investment zone, which will offer significant incentives for investors, such as tax holidays, customs exemptions on equipment, streamlined business licensing and facilitated processes for repatriating profits.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-6">
											What leisure facilities will the new city offer?
										</button>
									</div>
									<div id="collapse-6" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											The masterplan features extensive leisure and tourism amenities, including prestigious international hotels, an international marina and multiple entertainment venues.
										</div>
									</div>
							</div>
							<div className="accordion-item">
									<div className="accordion-header">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
												data-bs-target="#collapse-7" aria-expanded="true" aria-controls="collapse-7">
											Where is Ras El Hekma located?
										</button>
									</div>
									<div id="collapse-7" className="accordion-collapse collapse"
										 data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Ras El Hekma is located in a picturesque coastal region on Egypt&rsquo;s Mediterranean shoreline in the Western Desert. It lies approximately 70 km east of Mersa Matruh and about 200 km west of Alexandria, placing it in a prime position along the highly desirable North Coast.
										</div>
									</div>
							</div>
					</div>
				</div>
			</div>
		</div>
	</section>



<div data-sf-element="Row">
    <div id="Contentplaceholder1_T620A45DA005_Col00" className="sf_colsIn" data-sf-element="Generic Placeholder" data-placeholder-label="Generic Placeholder">
    


    </div>
</div>  
            <Footer />
        </div>
    );
}