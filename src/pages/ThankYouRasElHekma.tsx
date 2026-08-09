// @ts-nocheck
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ThankYouRasElHekma() {
    return (
        <div className="content-wrapper">
            <Header />
            
            <section className="banner-section">
                <div className="swiper swiper-spotlight-project">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="image-outer">
                                <img className="bannerimage" src='/images/modoncorporatelibraries/banners/Ras-El-Hekma-banner-newdab8.webp?sfvrsn=bd77c7ce_3' alt='' />
                            </div>
                            <div className="details-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="content">
                                                <div className="title"><h2>Timeless mediterranean living</h2></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section data-sf-element="Row" className="location-section contactus">
                <div className="container-lg visual-anim">
                    <div className="row">
                        <div id="Contentplaceholder1_C002_Col00" className="sf_colsIn col-lg-5" data-sf-element="Contact Us Form" data-placeholder-label="Contact Us Form">
                            <div>
                                <div className="sfContentBlock sf-Long-text">
                                    <div className="thankyou-block">
                                        <div dir="ltr">
                                            <h3>Thank you!</h3>
                                            <p>Our team will be in touch with you shortly.</p>
                                            <a href="/real-estate/ras-el-hekma">Back to Ras El Hekma</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="Contentplaceholder1_C002_Col01" className="sf_colsIn col-lg-7" data-sf-element="Map Section" data-placeholder-label="Map Section">
                        </div>
                    </div>
                </div>
            </section>
            
            <div data-sf-element="Row" data-aos="fade-up" data-aos-duration="2000">
                <div id="Contentplaceholder1_C002_Col02" className="sf_colsIn" data-sf-element="Contact us link Section" data-placeholder-label="Contact us link Section">
                </div>
            </div>
            
            <Footer />
        </div>
    );
}
