// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Destinations() {
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
    <div className="sfContentBlock sf-Long-text" ><section className="content-section bannerless-top pb-0"><div className="container"><div className="row"><div className="col-sm-12"><div className="section-title">Destinations</div></div><div className="col-sm-12"><h5>Modon develops vibrant destinations, providing opportunities for residents, visitors and investors and offering a broad range of residential communities with world-class lifestyle and leisure experiences.</h5></div></div></div></section></div>
</div> 





 
            <Footer />
        </div>
    );
}
