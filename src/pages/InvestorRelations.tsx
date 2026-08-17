// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function InvestorRelations() {
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
             

	<section className="banner-section investor-page">
		<div className="swiper swiper-spotlight">
			<div className="swiper-wrapper">
					<div className="swiper-slide">
						<div className="image-outer">
								<img className="bannerimage" src="/images/modoncorporatelibraries/about-us/shutterstock_5690321322174.jpg" data-dsrc="/images/modoncorporatelibraries/about-us/shutterstock_5690321322174.jpg" data-msrc="/images/modoncorporatelibraries/about-us/shutterstock_5690321322174.jpg" alt='' />
						</div>
						<div className="details-section">
							<div className="container">
								<div className="row">
									<div className="col-sm-12">
										<div className="content">

												<div className="description"><iframe className="euro-frame" src="https://tools.eurolandir.com/tools/ticker/html/?companycode=ae-alqudra&amp;v=2024&amp;lang=en-GB" frameBorder="0"></iframe></div>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

			</div>
		</div>
	</section>
 

<div >
    <div className="sfContentBlock sf-Long-text" ><div className="stock-price-frame"><iframe src="https://tools.eurolandir.com/tools/ticker/html/?companycode=ae-alqudra&amp;v=scrolling2024&amp;lang=en-GB" frameBorder="0"></iframe></div></div>
</div>
	<div className="external-frame-section">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="parent-tab-outer">
						<ul className="nav nav-tabs" id="myTab" role="tablist">


								<li className="nav-item " role="presentation">
									<button className="nav-link parent active" id="overview" data-bs-toggle="tab" data-bs-target="#overview-pane" type="button" role="tab" aria-controls="overview-pane" aria-selected="true">
										<img src="/images/modoncorporatelibraries/icons/overview1f2d.svg" alt="" />Overview
									</button>
								</li>
								<li className="nav-item " role="presentation">
									<button className="nav-link parent" id="fact-sheet" data-bs-toggle="tab" data-bs-target="#fact-sheet-pane" type="button" role="tab" aria-controls="fact-sheet-pane" aria-selected="true">
										<img src="/images/modoncorporatelibraries/icons/factsheet4ee8.svg" alt="" />Fact Sheet
									</button>
								</li>
								<li className="nav-item multi-tab" role="presentation">
									<button className="nav-link parent" id="financial-information" data-bs-toggle="tab" data-bs-target="#financial-information-pane" type="button" role="tab" aria-controls="financial-information-pane" aria-selected="true">
										<img src="/images/modoncorporatelibraries/icons/financialinfo8c95.svg" alt="" />Financial Information
									</button>
										<ul className="nav nav-tabs inner-tab" id="childTab" role="tablist">
												<li className="nav-item" role="presentation">
													<button className="nav-link active" id="key-figures" data-bs-toggle="tab" data-bs-target="#key-figures-pane" type="button" role="tab" aria-controls="key-figures-pane" aria-selected="true">
														Key Figures
													</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className="nav-link" id="quaterly-financial-statements" data-bs-toggle="tab" data-bs-target="#quaterly-financial-statements-pane" type="button" role="tab" aria-controls="quaterly-financial-statements-pane" aria-selected="true">
														Quarterly Financial Statements
													</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className="nav-link" id="annual-financial-statements" data-bs-toggle="tab" data-bs-target="#annual-financial-statements-pane" type="button" role="tab" aria-controls="annual-financial-statements-pane" aria-selected="true">
														Annual Financial Statements
													</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className="nav-link" id="annual-reports" data-bs-toggle="tab" data-bs-target="#annual-reports-pane" type="button" role="tab" aria-controls="annual-reports-pane" aria-selected="true">
														Annual Reports
													</button>
												</li>
												<li className="nav-item" role="presentation">
													<button className="nav-link" id="sustainability-reports" data-bs-toggle="tab" data-bs-target="#sustainability-reports-pane" type="button" role="tab" aria-controls="sustainability-reports-pane" aria-selected="true">
														Sustainability Reports
													</button>
												</li>
										</ul>
								</li>
								<li className="nav-item " role="presentation">
									<button className="nav-link parent" id="share-information" data-bs-toggle="tab" data-bs-target="#share-information-pane" type="button" role="tab" aria-controls="share-information-pane" aria-selected="true">
										<img src="/images/modoncorporatelibraries/icons/shareinfo0268.svg" alt="" />Share Information
									</button>
								</li>
								<li className="nav-item " role="presentation">
									<button className="nav-link parent" id="company-announcements" data-bs-toggle="tab" data-bs-target="#company-announcements-pane" type="button" role="tab" aria-controls="company-announcements-pane" aria-selected="true">
										<img src="/images/modoncorporatelibraries/icons/companyannounbca2.svg" alt="" />Company Announcements
									</button>
								</li>
								<li className="nav-item " role="presentation">
									<button className="nav-link parent" id="email-subscription-centre" data-bs-toggle="tab" data-bs-target="#email-subscription-centre-pane" type="button" role="tab" aria-controls="email-subscription-centre-pane" aria-selected="true">
										<img src="/images/modoncorporatelibraries/about-us/emailsube2c2.svg" alt="" />Email Subscription Centre
									</button>
								</li>
								<li className="nav-item " role="presentation">
									<button className="nav-link parent" id="calendar" data-bs-toggle="tab" data-bs-target="#calendar-pane" type="button" role="tab" aria-controls="calendar-pane" aria-selected="true">
										<img src="/images/modoncorporatelibraries/about-us/calendar-monthbb7e.svg" alt="" />Calendar
									</button>
								</li>
						</ul>
						<div className="tab-content" id="myTabContent">

								<div className="tab-pane parent fade show active" id="overview-pane" role="tabpanel" aria-labelledby="overview" tabIndex="1">
										<div className="whoweare-section">
											<div className="container">
												<div className="row">
													<div className="col-sm-12">
														<div className="sub-title mb-0">Overview</div>
													</div>
												</div>
											</div>
										</div>

<div className="whoweare-section"><div className="container"><div className="row"><div className="col-sm-12">{/*  <div className="h4"></div>  */}
 <div className="description-outer"><div className="start">Modon is an international holding company, headquartered in Abu Dhabi, United Arab Emirates, and listed on the Abu Dhabi Securities Exchange (ADX). Modon is at the forefront of urban innovation, creating iconic designs and experiences that continually surpass expectations. From real estate to hospitality, asset and investment management, events, catering, and tourism, and urban infrastructure, we bring cities to life by delivering long-term and sustainable value.</div></div></div></div><div className="row mt-5"><div className="col-sm-12"><div className="calendar-frame"><div className="frame-outer"><iframe className="EurolandTool euro-frame" src="https://tools.eurolandir.com/tools/fincalendarticker/?companycode=ae-alqudra&amp;v=2024&amp;lang=en-GB" frameBorder="0"></iframe></div><div className="frame-outer"><iframe className="EurolandTool euro-frame" src="https://tools.eurolandir.com/tools/pressreleases/?companycode=ae-alqudra&amp;v=ticker2024&amp;lang=en-GB" frameBorder="0"></iframe></div></div></div></div></div></div>								</div>
								<div className="tab-pane parent fade " id="fact-sheet-pane" role="tabpanel" aria-labelledby="fact-sheet" tabIndex="2">
										<div className="whoweare-section">
											<div className="container">
												<div className="row">
													<div className="col-sm-12">
														<div className="sub-title mb-0">Fact Sheet</div>
													</div>
												</div>
											</div>
										</div>

<iframe className="EurolandTool euro-frame" src="https://tools.euroland.com/factsheet/ae-alqudra_2024/factsheethtml.asp?lang=english" frameBorder="0"></iframe>								</div>
								<div className="tab-pane parent fade " id="financial-information-pane" role="tabpanel" aria-labelledby="financial-information" tabIndex="3">
										<div className="inner-tab-outer">
											<div className="tab-content inner-tab-content" id="childTabContent">
													<div className="tab-pane fade show active" id="key-figures-pane" role="tabpanel" aria-labelledby="key-figures" tabIndex="1">
														<div className="whoweare-section">
															<div className="container">
																<div className="row">
																	<div className="col-sm-12">
																		<div className="sub-title mb-0">Key Figures</div>
																	</div>
																</div>
															</div>
														</div>

<iframe className="EurolandTool euro-frame" src="https://tools.eurolandir.com/tools/ia/?companycode=ae-alqudra&amp;v=2024&amp;lang=en-GB" frameBorder="0"></iframe>													</div>
													<div className="tab-pane fade " id="quaterly-financial-statements-pane" role="tabpanel" aria-labelledby="quaterly-financial-statements" tabIndex="2">
														<div className="whoweare-section">
															<div className="container">
																<div className="row">
																	<div className="col-sm-12">
																		<div className="sub-title mb-0">Quarterly Financial Statements</div>
																	</div>
																</div>
															</div>
														</div>

<div className="row"><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/financial-information/quarterly/modon_holding_psc_and_its_subsidiaries_sign_acc_30_june_2026_eng.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2026</div></div><div className="bottom-sec"><div className="label">Download H1</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/financial-information/quarterly/h1_2025_quarterly_financial_statementsfa1d.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2025</div></div><div className="bottom-sec"><div className="label">Download H1</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/financial-information/quarterly/h2_2024_quarterly_financial_statements1e4c.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2024</div></div><div className="bottom-sec"><div className="label">Download H2</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/financial-information/quarterly/financial-reports---management-report---30-jan-2024-h1b1fb.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2024</div></div><div className="bottom-sec"><div className="label">Download H1</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/financial-information/quarterly/q-holding-psc-consolidated-financial-statements-31-dec-2023-english-h2-2023df0b.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2023</div></div><div className="bottom-sec"><div className="label">Download H2</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" href="/docs/modoncorporatelibraries/financial-information/quarterly/qhh1202332fc.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2023</div></div><div className="bottom-sec"><div className="label">Download H1</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" href="/docs/modoncorporatelibraries/financial-information/quarterly/q-holding-psc-consolidated-financial-statements-31-dec-2022-english-h2-202250aa.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2022</div></div><div className="bottom-sec"><div className="label">Download H2</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" href="/docs/modoncorporatelibraries/financial-information/quarterly/qhh12022e1be.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2022</div></div><div className="bottom-sec"><div className="label">Download H1</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" href="/docs/modoncorporatelibraries/financial-information/quarterly/qhq120221aa2.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2022</div></div><div className="bottom-sec"><div className="label">Download Q1</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" href="/docs/modoncorporatelibraries/financial-information/quarterly/al-qudra-holding-english-fs-signed-h2-20211316.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2021</div></div><div className="bottom-sec"><div className="label">Download H2</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" href="/docs/modoncorporatelibraries/financial-information/quarterly/qhh120210d51.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2021</div></div><div className="bottom-sec"><div className="label">Download H1</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div></div>													</div>
													<div className="tab-pane fade " id="annual-financial-statements-pane" role="tabpanel" aria-labelledby="annual-financial-statements" tabIndex="3">
														<div className="whoweare-section">
															<div className="container">
																<div className="row">
																	<div className="col-sm-12">
																		<div className="sub-title mb-0">Annual Financial Statements</div>
																	</div>
																</div>
															</div>
														</div>

<div className="row"><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/financial-information/annual/fy-2025-adxa05f.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2025</div></div><div className="bottom-sec"><div className="label">Download</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/financial-information/annual/2024_annual_financial_statementsc227.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2024</div></div><div className="bottom-sec"><div className="label">Download</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/financial-information/annual/financial-reports---financial-report---30-jan-2024-annualc7f3.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2023</div></div><div className="bottom-sec"><div className="label">Download</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" href="/docs/modoncorporatelibraries/financial-information/annual/qhfy20228055.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2022</div></div><div className="bottom-sec"><div className="label">Download</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" href="/docs/modoncorporatelibraries/financial-information/annual/qhfy2021b48e.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2021</div></div><div className="bottom-sec"><div className="label">Download</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div></div>													</div>
													<div className="tab-pane fade " id="annual-reports-pane" role="tabpanel" aria-labelledby="annual-reports" tabIndex="4">
														<div className="whoweare-section">
															<div className="container">
																<div className="row">
																	<div className="col-sm-12">
																		<div className="sub-title mb-0">Annual Reports</div>
																	</div>
																</div>
															</div>
														</div>

<div className="row"><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/financial-information/annual-reports/annual-report-202559de.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2025</div></div><div className="bottom-sec"><div className="label">Download</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div></div>													</div>
													<div className="tab-pane fade " id="sustainability-reports-pane" role="tabpanel" aria-labelledby="sustainability-reports" tabIndex="5">
														<div className="whoweare-section">
															<div className="container">
																<div className="row">
																	<div className="col-sm-12">
																		<div className="sub-title mb-0">Sustainability Reports</div>
																	</div>
																</div>
															</div>
														</div>

<div className="row"><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/sustainability-documents/modon_2025_responsible_business_report6fa7.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2025</div></div><div className="bottom-sec"><div className="label">Download</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div><div className="col-sm-6 col-md-3 mb-4 mb-md-0 stretch-card"><a className="card download-doc-card" target="_blank" href="/docs/modoncorporatelibraries/sustainability-documents/responsible-business-report-2024f838.pdf"><div className="card-body"><div className="top-sec"><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/pdf.svg" alt="" data-sf-ec-immutable="" /><div className="year">2024</div></div><div className="bottom-sec"><div className="label">Download</div><img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/download.svg" alt="" data-sf-ec-immutable="" /></div></div></a>
 </div></div>													</div>
											</div>
										</div>

								</div>
								<div className="tab-pane parent fade " id="share-information-pane" role="tabpanel" aria-labelledby="share-information" tabIndex="4">
										<div className="whoweare-section">
											<div className="container">
												<div className="row">
													<div className="col-sm-12">
														<div className="sub-title mb-0">Share Information</div>
													</div>
												</div>
											</div>
										</div>

<iframe className="EurolandTool euro-frame" src="https://tools.euroland.com/tools/custom/ae-alqudra/2024.html" frameBorder="0"></iframe>								</div>
								<div className="tab-pane parent fade " id="company-announcements-pane" role="tabpanel" aria-labelledby="company-announcements" tabIndex="5">
										<div className="whoweare-section">
											<div className="container">
												<div className="row">
													<div className="col-sm-12">
														<div className="sub-title mb-0">Company Announcements</div>
													</div>
												</div>
											</div>
										</div>

<iframe className="EurolandTool euro-frame" src="https://tools.eurolandir.com/tools/pressreleases/?companycode=ae-alqudra&amp;v=2024&amp;lang=en-GB" frameBorder="0"></iframe>								</div>
								<div className="tab-pane parent fade " id="email-subscription-centre-pane" role="tabpanel" aria-labelledby="email-subscription-centre" tabIndex="6">
										<div className="whoweare-section">
											<div className="container">
												<div className="row">
													<div className="col-sm-12">
														<div className="sub-title mb-0">Email Subscription Centre</div>
													</div>
												</div>
											</div>
										</div>

<iframe className="EurolandTool euro-frame" src="https://tools.eurolandir.com/tools/SubscriptionCentre2/?companycode=ae-alqudra&amp;v=2024&amp;lang=en-GB" frameBorder="0"></iframe>								</div>
								<div className="tab-pane parent fade " id="calendar-pane" role="tabpanel" aria-labelledby="calendar" tabIndex="7">
										<div className="whoweare-section">
											<div className="container">
												<div className="row">
													<div className="col-sm-12">
														<div className="sub-title mb-0">Calendar</div>
													</div>
												</div>
											</div>
										</div>

<iframe className="EurolandTool euro-frame" src="https://tools.eurolandir.com/tools/fincalendar2/?companycode=ae-alqudra&amp;v=2024&amp;lang=en-GB" frameBorder="0"></iframe>								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>




 
            <Footer />
        </div>
    );
}
