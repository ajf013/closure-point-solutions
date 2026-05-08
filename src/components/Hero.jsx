import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

import AnimatedNumber from './AnimatedNumber';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-content" data-aos="fade-right" data-aos-duration="1000">
            <div className="hero-eyebrow">
              SPECIALIST RECRUITMENT & STAFFING
            </div>
            <h1 className="hero-hl">
              Hiring <em>Excellence</em> <br />
              for Niche <em>Sectors.</em>
            </h1>
            <p className="hero-sub">
              End-to-end talent solutions for Supply Chain, E-Commerce & Real Estate — powered by AI and deep niche expertise.
            </p>
            <div className="hero-btns">
              <a href="#cta" className="btn-p">
                Start Hiring <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-g">
                Our Services
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-stats-panel" data-aos="fade-left" data-aos-duration="1000">
            <div className="stat-main">
              <div className="stat-n">
                <AnimatedNumber end={48} suffix="h" />
              </div>
              <div className="stat-l">Average Shortlist Delivery</div>
            </div>
            <div className="stat-grid">
              <div className="stat-box">
                <div className="stat-n">
                  <AnimatedNumber end={500} suffix="+" />
                </div>
                <div className="stat-l">Successful Placements</div>
              </div>
              <div className="stat-box">
                <div className="stat-n">
                  <AnimatedNumber end={92} suffix="%" />
                </div>
                <div className="stat-l">Offer-to-Joining Ratio</div>
              </div>
              <div className="stat-box">
                <div className="stat-n">
                  <AnimatedNumber end={3} />
                </div>
                <div className="stat-l">Niche Industries</div>
              </div>
              <div className="stat-box">
                <div className="stat-n">
                  <AnimatedNumber end={85} suffix="%" />
                </div>
                <div className="stat-l">Client Retention YoY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
