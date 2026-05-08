import React from 'react';
import './Impact.css';
import AnimatedNumber from './AnimatedNumber';

const Impact = () => {
  const stats = [
    { v: 500, s: '+', l: 'Successful Placements', color: 'var(--primary)' },
    { v: 48, s: 'h', l: 'Avg Shortlist Delivery', color: 'var(--secondary)' },
    { v: 3, s: '', l: 'Niche Industries', color: 'var(--accent)' },
    { v: 92, s: '%', l: 'Offer-to-Joining Ratio', color: 'var(--primary)' },
    { v: 85, s: '%', l: 'Client Retention YoY', color: 'var(--secondary)' },
    { v: 2, s: '×', l: 'Faster Than Industry', color: 'var(--accent)' }
  ];

  return (
    <section id="impact" className="impact-section section">
      <div className="container">
        <div className="impact-top" data-aos="fade-up">
          <div className="stag">IMPACT</div>
          <h2 className="dsp">Closure Point by <em>the Numbers</em></h2>
        </div>

        <div className="impact-grid">
          {stats.map((s, i) => (
            <div 
              key={i} 
              className="impact-card" 
              data-aos={i < 3 ? "fade-right" : "fade-left"} 
              data-aos-delay={i * 150}
            >
              <div className="impact-rule" style={{background: s.color}}></div>
              <div className="impact-big" style={{color: s.color}}>
                <AnimatedNumber end={s.v} suffix={s.s} />
              </div>
              <div className="impact-lbl">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
