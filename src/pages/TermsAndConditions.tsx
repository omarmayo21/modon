// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsAndConditions() {
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
             
 

<div >
    <div className="sfContentBlock sf-Long-text" ><section className="content-section bannerless-top"><div className="container"><div className="row"><div className="col-sm-12"><div className="section-title">Terms &amp; Conditions</div></div><div className="col-sm-12"><div className="title">LEGAL NOTICE</div><div className="desc">Please read these terms carefully before using this site. This website is provided by Modon Properties PJSC and its subsidiaries (&ldquo;Modon&rdquo;), and may only be used for informational purposes. By viewing the site or downloading materials from the site, you agree to abide by the terms and conditions set forth in this notice. If you do not agree to abide by these terms and conditions, do not use the site or download materials from it.</div><div className="title">LIMITED LICENSE</div><div className="desc">Subject to the terms and conditions set forth herein, Modon grants you a non-exclusive, non-transferable, limited right to access, use, and display this site and the materials thereon. You agree not to disrupt or attempt to disrupt the operation of the site in any way.</div><div className="title">COPYRIGHT</div><div className="desc">Copyright to all the website content, including but not limited to text, images, videos, audio, and interactive presentations, is owned by Modon unless otherwise indicated.</div><div className="title">DISCLAIMER</div><div className="desc"><p>Whilst every effort is made to ensure the accuracy of the content, Modon does not warrant the accuracy or completeness of the materials or the reliability of any advice, opinion, statement, or other information displayed or distributed through the site. You acknowledge that any reliance on any such opinion, advice, statement, memorandum, or information shall be at your sole risk. Modon accepts no liability whatsoever for any such reliance by you on this information.
                            </p><p>Modon reserves the right, in its sole discretion, to correct any errors or omissions in any portion of the site. Modon may make any other changes to the site, the materials, and the products, programs, services, or prices (if any) described on the site at any time without notice.
                            </p><p>This site, the information and materials thereon, and the software made available on the site are provided "as is" without any representation or warranty, express or implied, of any kind, including but not limited to warranties of merchantability, non-infringement, fitness for any particular purpose, or non-infringement of any content published on or available throughout the site; that the server which makes this site available is free of viruses or other components that may infect, harm, or cause damage to your computer equipment or any other property when you access, browse, download from, or otherwise use this site.
                            </p><p>Under no circumstances, including but not limited to Modon&rsquo;s negligence, shall Modon be liable for any consequential, direct, incidental, indirect, punitive, or special damages related to the use of, the inability to use, or errors or omissions in the contents and functions of this site.
                            </p><p>By using this website, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use our website. All information posted on this website is provided for information purposes only.
                            </p><p>Modon makes no representations or warranties in relation to accuracy or completeness of the information and materials provided on this website for whatsoever reason.
                        </p></div><p>&nbsp;</p></div></div></div></section></div>
</div> 
            <Footer />
        </div>
    );
}
