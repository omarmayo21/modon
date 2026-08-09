// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
             <header className="header"> <div className="container"> <div className="row"> <div className="col-sm-12"> <div className="header-contents"> <div className="logo-outer"> 



















            <a href="/">
                <img src="/images/modoncorporatelibraries/about-us/modon-logo8e0386b4-26f6-44a0-95a8-634904fd208c9eb0.svg?sfvrsn=fdf072ec_0" alt="" />
            </a>
 </div> <div className="menu-navs"> 

  
 <a className="navbar-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
								   aria-controls="offcanvasScrolling"> <span>Menu</span> <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/nav-toggler.svg" alt="" /> </a> </div> </div> </div> </div> </div> <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1}
				 id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"> <div className="container"> <div className="row"> <div className="col-sm-12"> <div className="offcanvas-menus"> <div className="offcanvas-header"> <div className="logo-outer"> 

 </div> <div className="d-flex"> 
 <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"> <span>Close</span> <img src="/ResourcePackages/ModonCorporate/Assets/src/Assets/images/closewhite.svg" alt="" /> </button> </div> </div> <div className="offcanvas-body"> <div className="menu-outer"> 

		<ul>
					<li><Link to="/real-estate/ras-el-hekma">Real Estate</Link></li>
		</ul>

		<ul>
					<li>
						<div className="accordion" id="menuCollapse-About-Modon">
							<div className="accordion-item">
								<div className="accordion-header">
									<div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-About-Modon" aria-expanded="false" aria-controls="collapse-About-Modon">About Modon</div>
								</div>
								<div id="collapse-About-Modon" className="accordion-collapse collapse" data-bs-parent="#menuCollapse-About-Modon">
									<div className="accordion-body">
											<Link to="/about-modon/about-us">About Us</Link>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li><Link to="/contact-us">Contact Us</Link></li>
		</ul>

 </div> </div> <div className="offcanvas-footer">
{/* script removed */}{/* script removed */}</div> </div> </div> </div> </div> </div> 





</header> 
        </>
    );
}