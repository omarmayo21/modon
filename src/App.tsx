import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Core Pages
import Home from './pages/Home';
import RasElHekma from './pages/RasElHekma';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ThankYouRasElHekma from './pages/ThankYouRasElHekma';
import ThankYouContactUs from './pages/ThankYouContactUs';
import AnalyticsProvider from './components/AnalyticsProvider';

// Newly Implemented Pages
import RealEstate from './pages/RealEstate';
import Hospitality from './pages/Hospitality';
import EventsTourism from './pages/EventsTourism';
import AssetInvestmentManagement from './pages/AssetInvestmentManagement';
import Destinations from './pages/Destinations';
import Careers from './pages/Careers';
import InvestorRelations from './pages/InvestorRelations';
import MediaCentre from './pages/MediaCentre';
import Procurement from './pages/Procurement';
import Whistleblowing from './pages/Whistleblowing';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RealEstateBlog from './pages/RealEstateBlog';
import BlogDetail from './pages/BlogDetail';
import MediaDetail from './pages/MediaDetail';
import ThankYouProject from './pages/ThankYouProject';

// Project Pages
import AlNaseem from './pages/AlNaseem';
import Bashayer from './pages/Bashayer';
import HudayriyatGolfEstates from './pages/HudayriyatGolfEstates';
import Muheira from './pages/Muheira';
import NawayefEast from './pages/NawayefEast';
import NawayefParkviews from './pages/NawayefParkviews';
import NawayefVillage from './pages/NawayefVillage';
import TaraPark from './pages/TaraPark';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LegacyScriptsManager() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Intercept internal link clicks for seamless SPA transitions
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('/docs') &&
        !href.startsWith('/images') &&
        !href.startsWith('/videos') &&
        !href.startsWith('/ResourcePackages') &&
        !href.startsWith('/Mvc') &&
        !href.endsWith('.pdf') &&
        !href.endsWith('.jpg') &&
        !href.endsWith('.png') &&
        !href.endsWith('.webp') &&
        !target.getAttribute('target') &&
        !target.getAttribute('download')
      ) {
        e.preventDefault();
        navigate(href);
      }
    };
    document.addEventListener('click', handleDocumentClick);

    // Re-initialize legacy Modon JS after route change
    setTimeout(() => {
      if ((window as any).initModonLegacyJS) {
        (window as any).initModonLegacyJS();
      }
    }, 100);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [location.pathname, navigate]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AnalyticsProvider>
        <ScrollToTop />
        <LegacyScriptsManager />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Real Estate */}
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/real-estate/ras-el-hekma" element={<RasElHekma />} />
          <Route path="/real-estate/ras-el-hekma/thank-you" element={<ThankYouRasElHekma />} />
          <Route path="/real-estate/al-naseem-community" element={<AlNaseem />} />
          <Route path="/real-estate/al-naseem" element={<AlNaseem />} />
          <Route path="/real-estate/bashayer" element={<Bashayer />} />
          <Route path="/real-estate/hudayriyat-golf-estates" element={<HudayriyatGolfEstates />} />
          <Route path="/real-estate/muheira" element={<Muheira />} />
          <Route path="/real-estate/nawayef-east" element={<NawayefEast />} />
          <Route path="/real-estate/nawayef-parkviews" element={<NawayefParkviews />} />
          <Route path="/real-estate/nawayef-village" element={<NawayefVillage />} />
          <Route path="/real-estate/tara-park" element={<TaraPark />} />
          <Route path="/real-estate/:project/thank-you" element={<ThankYouProject />} />

          {/* Blog */}
          <Route path="/real-estate/blog" element={<RealEstateBlog />} />
          <Route path="/real-estate/blog/:slug" element={<BlogDetail />} />

          {/* Core Business Pillars */}
          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/events-tourism" element={<EventsTourism />} />
          <Route path="/asset-investment-management" element={<AssetInvestmentManagement />} />
          <Route path="/corporate" element={<AssetInvestmentManagement />} />
          <Route path="/destinations" element={<Destinations />} />

          {/* About Modon */}
          <Route path="/about-modon/about-us" element={<AboutUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-modon/careers" element={<Careers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about-modon/investor-relations" element={<InvestorRelations />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/about-modon/media-centre" element={<MediaCentre />} />
          <Route path="/media-centre" element={<MediaCentre />} />
          <Route path="/about-modon/media-centre/details/*" element={<MediaDetail />} />
          <Route path="/about-modon/procurement" element={<Procurement />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/about-modon/whistleblowing" element={<Whistleblowing />} />
          <Route path="/whistleblowing" element={<Whistleblowing />} />

          {/* Contact */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact-us/thank-you" element={<ThankYouContactUs />} />

          {/* Legal */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terms-and-conditions.html" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />

          {/* Aliases & Fallbacks */}
          <Route path="/why-egypt" element={<Navigate to="/real-estate/ras-el-hekma" replace />} />
          <Route path="/why-nexus" element={<Navigate to="/real-estate/ras-el-hekma" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnalyticsProvider>
    </BrowserRouter>
  );
}

export default App;
