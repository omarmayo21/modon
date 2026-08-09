const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        
        // Listen to console
        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

        console.log("Navigating to page...");
        await page.goto('http://localhost:5173/real-estate/ras-el-hekma', { waitUntil: 'networkidle2' });

        // Wait a little extra
        await new Promise(r => setTimeout(r, 2000));

        const mapData = await page.evaluate(() => {
            const mapEl = document.getElementById('map');
            const googleMapsAvail = typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined';
            const jQueryAvail = typeof window.jQuery !== 'undefined';
            const gMapLocationAvail = window.jQuery && typeof window.jQuery.GMapLocation !== 'undefined';
            return {
                width: mapEl ? mapEl.clientWidth : 0,
                height: mapEl ? mapEl.clientHeight : 0,
                innerHTML: mapEl ? mapEl.innerHTML.substring(0, 100) : null,
                googleMaps: googleMapsAvail,
                jQuery: jQueryAvail,
                gMapLocation: gMapLocationAvail
            };
        });

        console.log("Map Data:", mapData);
        await browser.close();
    } catch (e) {
        console.error("Puppeteer script failed:", e);
    }
})();
