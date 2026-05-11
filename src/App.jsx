import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import CustomCursor from './components/CustomCursor';
import ChatWidget from './components/ChatWidget';
import AgentPortal from './pages/AgentPortal';

import AOS from 'aos';
import 'aos/dist/aos.css';

function AppContent() {
  const location = useLocation();
  const isAgentPortal = location.pathname.startsWith('/agent-portal');

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 50
    });
  }, []);

  if (isAgentPortal) {
    return (
      <div className="app">
        <Routes>
          <Route path="/agent-portal" element={<AgentPortal />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="app">
      <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <ChatWidget />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
