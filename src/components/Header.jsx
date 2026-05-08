import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Process', href: '#process' },
    { name: 'Technology', href: '#tech' },
    { name: 'Why CPS', href: '#why' },
    { name: 'Impact', href: '#impact' },
  ];

  const handleLinkClick = (e, href) => {
    if (isHome && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logo.png" alt="CPS" />
          <span className="logo-text">Closure Point Solutions</span>
        </Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link"
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
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setIsMobileMenuOpen(false)}>&times;</button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="mob-link"
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
