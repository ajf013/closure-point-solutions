import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  return (
    <section id="cta" className="cta-section section">
      <div className="container">
        <div className="cta-inner" data-aos="fade-up">
          {/* <div className="cta-logo">
            <img src="/logo.png" alt="CPS Logo" />
          </div> */}
          <div className="cta-tag">READY TO START?</div>
          <h2 className="cta-hl">Let’s <em>Scale</em> your <br />Business together.</h2>
          <p className="cta-sub">
            Join the industry leaders who trust Closure Point Solutions for 
            their critical human capital and operational needs.
          </p>

          <div className="cta-contacts">
            <div className="cta-ct">
              <Mail size={14} /> <a href="mailto:info@closurepointsolutions.com">info@closurepointsolutions.com</a>
            </div>
            <div className="cta-ct">
              <Phone size={14} /> <a href="tel:+919940828907">+91 9940828907</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
