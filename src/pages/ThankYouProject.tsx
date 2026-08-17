// @ts-nocheck
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ThankYouProject() {
    const { project } = useParams<{ project: string }>();
    const formattedTitle = project ? project.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ') : 'Modon';

    return (
        <div className="content-wrapper">
            <Header />
            <section className="thankyou-section vh-100 d-flex align-items-center justify-content-center text-center" style={{ minHeight: '70vh', padding: '120px 20px 80px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="mb-4" style={{ fontSize: '3rem', fontWeight: 'bold' }}>Thank You</h1>
                            <p className="lead mb-4" style={{ fontSize: '1.25rem', color: '#555' }}>
                                Thank you for your interest in {formattedTitle}. Our sales advisory team will contact you shortly with more details.
                            </p>
                            <div className="mt-4">
                                <Link to="/" className="btn theme-btn" style={{ padding: '12px 30px', margin: '0 10px' }}>
                                    Back to Home
                                </Link>
                                <Link to="/real-estate" className="btn theme-btn-white" style={{ padding: '12px 30px', margin: '0 10px', background: '#000', color: '#fff' }}>
                                    Explore Properties
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
