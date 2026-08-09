// @ts-nocheck
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ThankYouContactUs() {
    return (
        <div className="content-wrapper">
            <Header />
            
            <section data-sf-element="Row" className="location-section contactus" style={{marginTop: "120px"}}>
                <div className="container-lg visual-anim">
                    <div className="row">
                        <div id="Contentplaceholder1_C002_Col00" className="sf_colsIn col-lg-5" data-sf-element="Contact Us Form" data-placeholder-label="Contact Us Form">
                            <div>
                                <div className="sfContentBlock sf-Long-text">
                                    <h3>Thank You!</h3>
                                    <p>
                                        Thank you for reaching out to us at Modon. We have received your message and appreciate your interest. Our team will review your inquiry and get back to you as soon as possible.
                                    </p>
                                    <br />
                                    <a href="/contact-us">Back to Contact Us</a>
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
