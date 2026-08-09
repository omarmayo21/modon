import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { initAnalytics, trackEvent, persistUTMs } from '../lib/analytics';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initAnalytics();
      persistUTMs();
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    // Persist UTMs on every route change in case they appear late
    persistUTMs();

    const searchParams = new URLSearchParams(location.search);
    const leadSuccess = searchParams.get('lead_success');
    const leadError = searchParams.get('lead_error');
    const errorType = searchParams.get('error_type');

    if (leadSuccess === '1') {
      trackEvent('generate_lead', {
        page_path: location.pathname,
        page_title: document.title,
      });
      trackEvent('lead_submit_success', {
        page_path: location.pathname,
        page_title: document.title,
      });

      // Fire Google Ads conversion exactly once ONLY on Thank You pages
      const gadsConversionId = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID;
      const gadsConversionLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL;
      const isThankYouPage = location.pathname.includes('thank-you');
      
      if (isThankYouPage && gadsConversionId && gadsConversionLabel && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
          send_to: `AW-${gadsConversionId}/${gadsConversionLabel}`,
        });
      }

      // Clear the query param to prevent duplicate events on refresh
      searchParams.delete('lead_success');
      const newSearch = searchParams.toString();
      navigate(`${location.pathname}${newSearch ? '?' + newSearch : ''}`, { replace: true });
    } else if (leadError === '1') {
      trackEvent('lead_submit_error', {
        page_path: location.pathname,
        page_title: document.title,
        error_type: errorType || 'unknown',
      });

      searchParams.delete('lead_error');
      searchParams.delete('error_type');
      const newSearch = searchParams.toString();
      navigate(`${location.pathname}${newSearch ? '?' + newSearch : ''}`, { replace: true });
    } else {
      // Normal page view
      trackEvent('page_view', {
        page_path: location.pathname,
        page_title: document.title,
      });

      // If it's a thank you page (without lead_success=1, which was handled above, or handled on previous render)
      if (location.pathname.includes('thank-you')) {
        trackEvent('thank_you_page_view', {
          page_path: location.pathname,
          page_title: document.title,
        });
      }
    }
  }, [location, navigate]);

  return <>{children}</>;
}
