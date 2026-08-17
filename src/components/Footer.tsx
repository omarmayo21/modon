// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="menu-outer">
                <div className="logo-outer">
                    <Link to="/">
                        <img src="/images/modoncorporatelibraries/about-us/modon-logo-black5ea80736-1364-498f-afbd-9d3d1d0863568ba9.png?sfvrsn=ff9d88d7_3" alt="Modon Logo" />
                    </Link>
                </div>
                <div className="menus">
                    <ul>
                        <li><Link to="/real-estate">Real Estate</Link></li>
                        <li><Link to="/events-tourism">Events, Catering &amp; Tourism</Link></li>
                        <li><Link to="/hospitality">Hospitality</Link></li>
                        <li><Link to="/asset-investment-management">Asset &amp; Investment Management</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/about-modon/about-us">About Us</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/about-modon/careers">Careers</Link></li>
                        <li><Link to="/about-modon/media-centre">Media Centre</Link></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-block">
                <div className="terms-links">
                    <div>
                        <a href="javascript:;">&#169; Modon 2026 — All rights reserved</a>
                    </div>
                    <div>
                        <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}