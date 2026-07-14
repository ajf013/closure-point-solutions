import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="ft-top">
          <div className="ft-info">
            <Link to="/" className="ft-logo">
              <img src="/logo.png" alt="CPS" />
              <span>Closure Point Solutions</span>
            </Link>
            <p className="ft-desc">
              End-to-end talent solutions for Supply Chain, E-Commerce & Real Estate — powered by AI and deep niche expertise.
            </p>
          </div>

          <div className="ft-col">
            <h5>SERVICES</h5>
            <ul>
              <li><a href="#services">Full-Time Hiring</a></li>
              <li><a href="#services">Contract Staffing</a></li>
              <li><a href="#services">RPO Services</a></li>
              <li><a href="#services">Recruitment Analytics</a></li>
            </ul>
          </div>

          <div className="ft-col">
            <h5>COMPANY</h5>
            <ul>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#why">Why CPS</a></li>
              <li><a href="#impact">Our Impact</a></li>
            </ul>
          </div>

          <div className="ft-col">
            <h5>CONNECT</h5>
            <ul>
              <li><a href="mailto:info@closurepointsolutions.com">Email Us</a></li>
              <li><a href="tel:+919940828907">Call Us</a></li>
              {/* <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li> */}
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <p className="ft-copy">
            © {currentYear} Closure Point Solutions. All rights reserved.
          </p>
          <div className="ft-social">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-of-service">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
