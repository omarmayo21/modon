export const initAnalytics = () => {
  const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const GTM_ID = import.meta.env.VITE_GTM_ID;
  const GADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID;

  if (typeof window === 'undefined') return;

  (window as any).dataLayer = (window as any).dataLayer || [];

  if (!(window as any).gtag) {
    (window as any).gtag = function () {
      (window as any).dataLayer.push(arguments);
    };
    (window as any).gtag('js', new Date());
  }

  // Load GA4 & Google Ads base script (they share the same tag)
  const primaryId = GA_ID || GADS_ID;
  if (primaryId && !document.querySelector(`script[src*="id=${primaryId}"]`)) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
    script.async = true;
    document.head.appendChild(script);
  }

  if (GA_ID) {
    (window as any).gtag('config', GA_ID, {
      send_page_view: false, // We'll handle this manually for SPA
    });
  }

  if (GADS_ID) {
    (window as any).gtag('config', GADS_ID);
  }

  // Load GTM
  if (GTM_ID && !document.querySelector(`script[src*="id=${GTM_ID}"]`)) {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
    `;
    document.head.appendChild(script);
  }
};

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined') return;
  
  // Exclude PII just in case
  const safeParams = { ...params };
  delete safeParams.email;
  delete safeParams.phone;
  delete safeParams.PhoneNumber;
  delete safeParams.first_name;
  delete safeParams.last_name;
  delete safeParams.mobile;
  
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    event: eventName,
    ...safeParams,
  });

  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, safeParams);
  }
};

export const persistUTMs = () => {
  if (typeof window === 'undefined') return false;

  const urlParams = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
  
  let changed = false;
  utmKeys.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      sessionStorage.setItem(key, value);
      changed = true;
    }
  });

  return changed;
};
