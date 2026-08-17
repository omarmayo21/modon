import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { initAnalytics, trackEvent, persistUTMs } from '../lib/analytics';

// Global Set to ensure exactly ONE conversion event fires per lead submission
const processedSuccessSignatures = new Set<string>();

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

    const isThankYouPage = location.pathname.includes('thank-you');

    // If navigating on regular pages, clear the processed signature set so future legitimate leads can fire
    if (!isThankYouPage) {
      processedSuccessSignatures.clear();
    }

    const searchParams = new URLSearchParams(location.search);
    const leadSuccess = searchParams.get('lead_success');
    const leadError = searchParams.get('lead_error');
    const errorType = searchParams.get('error_type');

    if (leadSuccess === '1') {
      const signature = `${location.pathname}?lead_success=1`;

      // Only fire if not already fired in this submission cycle (prevents StrictMode & re-render duplicate hits)
      if (!processedSuccessSignatures.has(signature)) {
        processedSuccessSignatures.add(signature);

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
        
        if (isThankYouPage && gadsConversionId && gadsConversionLabel && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', {
            send_to: `AW-${gadsConversionId}/${gadsConversionLabel}`,
          });
        }
      }

      // Clear the query param to clean the URL and prevent duplicate events on refresh
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
      if (isThankYouPage) {
        trackEvent('thank_you_page_view', {
          page_path: location.pathname,
          page_title: document.title,
        });
      }
    }
  }, [location.pathname, location.search, navigate]);

  return <>{children}</>;
}
