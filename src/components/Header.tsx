// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const handleNavClick = () => {
        // Dismiss Bootstrap offcanvas if open
        const offcanvasEl = document.getElementById('offcanvasScrolling');
        if (offcanvasEl && (window as any).bootstrap) {
            const bsOffcanvas = (window as any).bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        }
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) backdrop.remove();
        document.body.classList.remove('modal-open');
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('padding-right');
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="header-contents">
                                <div className="logo-outer">
                                    <Link to="/">
                                        <img src="/images/modoncorporatelibraries/about-us/modon-logo8e0386b4-26f6-44a0-95a8-634904fd208c9eb0.svg?sfvrsn=fdf072ec_0" alt="Modon Logo" />
                                    </Link>
                                </div>
                                <div className="menu-navs">
                                    <a className="navbar-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                                        <span>Menu</span>
                                        <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/nav-toggler.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="offcanvas-menus">
                                    <div className="offcanvas-header">
                                        <div className="logo-outer">
                                            <Link to="/" onClick={handleNavClick}>
                                                <img src="/images/modoncorporatelibraries/about-us/modon-logo8e0386b4-26f6-44a0-95a8-634904fd208c9eb0.svg?sfvrsn=fdf072ec_0" alt="Modon Logo" />
                                            </Link>
                                        </div>
                                        <div className="d-flex">
                                            <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <span>Close</span>
                                                <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/closewhite.svg" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div className="menu-outer">
                                            <ul>
                                                <li><Link to="/real-estate" onClick={handleNavClick}>Real Estate</Link></li>
                                                <li><Link to="/hospitality" onClick={handleNavClick}>Hospitality</Link></li>
                                                <li><Link to="/events-tourism" onClick={handleNavClick}>Events, Catering &amp; Tourism</Link></li>
                                                <li><Link to="/asset-investment-management" onClick={handleNavClick}>Asset &amp; Investment Management</Link></li>
                                            </ul>

                                            <ul>
                                                <li>
                                                    <div className="accordion" id="menuCollapse-About-Modon">
                                                        <div className="accordion-item">
                                                            <div className="accordion-header">
                                                                <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-About-Modon" aria-expanded="false" aria-controls="collapse-About-Modon">
                                                                    About Modon
                                                                </div>
                                                            </div>
                                                            <div id="collapse-About-Modon" className="accordion-collapse collapse" data-bs-parent="#menuCollapse-About-Modon">
                                                                <div className="accordion-body">
                                                                    <Link to="/about-modon/about-us" onClick={handleNavClick}>About Us</Link>
                                                                    <Link to="/about-modon/careers" onClick={handleNavClick}>Careers</Link>
                                                                    <Link to="/about-modon/investor-relations" onClick={handleNavClick}>Investor Relations</Link>
                                                                    <Link to="/about-modon/media-centre" onClick={handleNavClick}>Media Centre</Link>
                                                                    <Link to="/about-modon/procurement" onClick={handleNavClick}>Procurement</Link>
                                                                    <a target="_blank" rel="noreferrer" href="/docs/modoncorporatelibraries/default-document-library/modon-code-of-business-conduct.pdf" onClick={handleNavClick}>Code of Business Conduct</a>
                                                                    <Link to="/about-modon/whistleblowing" onClick={handleNavClick}>Whistleblowing</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li><Link to="/contact-us" onClick={handleNavClick}>Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="offcanvas-footer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}