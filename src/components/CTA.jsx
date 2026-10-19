import React, { useState } from 'react';
import { Mail, Phone, Copy, Check } from 'lucide-react';
import './CTA.css';

const CTA = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (type, value) => {
    navigator.clipboard.writeText(value);
    setCopiedField(type);
    setTimeout(() => setCopiedField(null), 2200);
  };

  return (
    <section id="cta" className="cta-section section">
      <div className="container">
        <div className="cta-inner" data-aos="fade-up">
          <div className="cta-tag">READY TO START?</div>
          <h2 className="cta-hl">Let’s <em>Scale</em> your <br />Business together.</h2>
          <p className="cta-sub">
            Join the industry leaders who trust Closure Point Solutions for 
            their critical human capital and operational needs.
          </p>

          <div className="cta-contacts">
            <div className="cta-ct">
              <Mail size={16} /> 
              <a href="mailto:info@closurepointsolutions.com">info@closurepointsolutions.com</a>
              <button 
                type="button"
                className="cta-copy-btn" 
                onClick={() => copyToClipboard('email', 'info@closurepointsolutions.com')}
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedField === 'email' ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                {copiedField === 'email' && <span className="copied-tooltip">Copied!</span>}
              </button>
            </div>
            
            <div className="cta-ct">
              <Phone size={16} /> 
              <a href="tel:+919940828907">+91 9940828907</a>
              <button 
                type="button"
                className="cta-copy-btn" 
                onClick={() => copyToClipboard('phone', '+919940828907')}
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedField === 'phone' ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                {copiedField === 'phone' && <span className="copied-tooltip">Copied!</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
