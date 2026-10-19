import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Technology', href: '#tech', id: 'tech' },
    { name: 'Why CPS', href: '#why', id: 'why' },
    { name: 'Impact', href: '#impact', id: 'impact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (!isHome) return;

      const scrollPosition = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sec = document.getElementById(navLinks[i].id);
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    if (isHome && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, null, href);
        setIsMobileMenuOpen(false);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.png" alt="CPS" />
          <span className="logo-text">Closure Point Solutions</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a href="#cta" className="nav-cta" onClick={(e) => handleLinkClick(e, '#cta')}>
            Get in Touch
          </a>
        </div>

        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
      >
        <button 
          className="mobile-close" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          &times;
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className={`mob-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <a href="#cta" className="mob-link cta" onClick={(e) => handleLinkClick(e, '#cta')}>
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Header;
