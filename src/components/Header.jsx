import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Vendor Management', href: '#vendor' },
    { name: 'Recruitment', href: '#recruitment' },
    { name: 'Manpower', href: '#manpower' },
  ];

  const renderLink = (link, className) => {
    if (isHome) {
      return <a href={link.href} className={className} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>;
    }
    return <Link to={`/${link.href}`} className={className} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        {isHome ? (
          <a href="#home" className="logo">
            <img src="/logo.png" alt="Closure Point Solutions" className="logo-image" />
            <span className="logo-text" style={{ color: 'black', fontWeight: 'bold' }}>Closure Point Solutions</span>
          </a>
        ) : (
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Closure Point Solutions" className="logo-image" />
            <span className="logo-text" style={{ color: 'black', fontWeight: 'bold' }}>Closure Point Solutions</span>
          </Link>
        )}

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                {renderLink(link, "nav-link")}
              </li>
            ))}
          </ul>
          {isHome ? (
            <a href="#contact" className="btn btn-primary btn-sm">
              Contact Us <ChevronRight size={16} />
            </a>
          ) : (
            <Link to="/#contact" className="btn btn-primary btn-sm">
              Contact Us <ChevronRight size={16} />
            </Link>
          )}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                {renderLink(link, "mobile-nav-link")}
              </li>
            ))}
          </ul>
          {isHome ? (
            <a
              href="#contact"
              className="btn btn-primary btn-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          ) : (
            <Link
              to="/#contact"
              className="btn btn-primary btn-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
