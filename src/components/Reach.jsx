import React from 'react';
import './Reach.css';

import AnimatedNumber from './AnimatedNumber';

const Reach = () => {
  const cards = [
    {
      title: '📍 Local Talent Intelligence',
      desc: 'Active candidate pipelines in 30+ Tier 2 cities across every sector we serve.',
      color: 'var(--primary)'
    },
    {
      title: '🏆 Proven in Non-Metro Markets',
      desc: 'Successfully closed roles in manufacturing hubs, logistics corridors and real estate growth zones.',
      color: 'var(--secondary)'
    },
    {
      title: '🚀 Same Speed. Same Quality.',
      desc: 'AI tools and niche expertise deliver Tier 1-quality hiring outcomes — wherever you\'re hiring.',
      color: 'var(--accent)'
    }
  ];

  return (
    <section id="reach" className="reach-section section">
      <div className="container">
        <div className="reach-inner">
          <div className="reach-content" data-aos="fade-right">
            <div className="stag">Our Reach</div>
            <h2 className="dsp">Looking to expand to <em>Tier 2 Cities?</em></h2>
            <p className="reach-sub">
              We love a challenge. Tier 2 is exactly where we thrive.
            </p>
            <p className="body-text" style={{marginBottom: '2rem'}}>
              Most staffing firms avoid non-metro markets. We lean in. Closure Point has active talent pipelines, local employer networks, and proven hiring playbooks in 30+ Tier 2 cities across India.
            </p>
            <div className="reach-stats">
              <div className="r-stat">
                <div className="r-n">
                  <AnimatedNumber end={30} suffix="+" />
                </div>
                <div className="r-l">Tier 2 Cities</div>
              </div>
              <div className="r-stat">
                <div className="r-n">
                  <AnimatedNumber end={48} suffix="h" />
                </div>
                <div className="r-l">Shortlist TAT</div>
              </div>
              <div className="r-stat">
                <div className="r-n">
                  <AnimatedNumber end={100} suffix="%" />
                </div>
                <div className="r-l">Quality Parity</div>
              </div>
            </div>
          </div>

          <div className="reach-cards">
            {cards.map((card, i) => (
              <div 
                key={i} 
                className="reach-card" 
                style={{borderLeftColor: card.color}}
                data-aos="fade-left"
                data-aos-delay={i * 200}
              >
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reach;
