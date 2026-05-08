import React from 'react';
import './Why.css';

const Why = () => {
  const edgeItems = [
    {
      title: "Niche Domain Expertise",
      desc: "Specialists, not generalists. Our recruiters understand your industry from the inside out — the roles, the language, the talent landscape."
    },
    {
      title: "AI-Driven Speed",
      desc: "Proprietary tools cut time-to-shortlist dramatically. You get access to top talent faster than any traditional search firm can deliver."
    },
    {
      title: "Committed Partnership",
      desc: "We align on your goals, not just the numbers. We're an extension of your team — not just another vendor on a shortlist."
    },
    {
      title: "Full Transparency",
      desc: "Live pipeline visibility via our dashboards. No black boxes, no guesswork — you always know exactly where every candidate stands."
    },
    {
      title: "Proven ROI",
      desc: "Better fit = longer tenure = lower cost-per-hire. We optimise for long-term outcomes, not quick placement fees."
    },
    {
      title: "Compliance Cover",
      desc: "Statutory compliance, payroll and risk management fully handled for contract and staffing roles. Zero headache, fully covered."
    }
  ];

  return (
    <section id="why" className="why-section">
      <div className="container">
        <div className="why-top" data-aos="fade-up">
          <div className="why-stag">
            <span className="stag-line"></span>
            Why Closure Point
          </div>
          <h2 className="why-hl">Our <em>Edge</em></h2>
        </div>
        
        <div className="why-grid">
          {edgeItems.map((item, idx) => (
            <div 
              key={idx} 
              className="why-card" 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <div className="why-rule"></div>
              <h3 className="why-card-ttl">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
