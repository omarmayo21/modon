// @ts-nocheck
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

							<div className="form-section contactus-form-selector contact-form-eg">
								<div className="title-section d-block">
									<div className="title mb-3">Get In Touch</div>
								</div>

								<form className="form contact" id="generic-project-form" action="/api/submit" method="POST">
									<input type="hidden" name="redirectUrl" value="/contact-us/thank-you" />

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
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}