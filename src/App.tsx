import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import RasElHekma from './pages/RasElHekma';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function LegacyScriptsManager() {
  const location = useLocation();

  useEffect(() => {
    // Re-initialize legacy Modon JS after route change
    // Using setTimeout to ensure React has fully committed the DOM
    setTimeout(() => {
      if ((window as any).initModonLegacyJS) {
        (window as any).initModonLegacyJS();
      }
    }, 100);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <LegacyScriptsManager />
      <Routes>
        <Route path="/" element={<Navigate to="/real-estate/ras-el-hekma" />} />
        <Route path="/real-estate/ras-el-hekma" element={<RasElHekma />} />
        <Route path="/about-modon/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
