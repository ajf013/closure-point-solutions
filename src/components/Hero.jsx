import React from 'react';
import CountUp from 'react-countup';
import { ArrowRight, Activity, Users, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge animate-fade-in" data-aos="fade-down" data-aos-delay="100">
                        <span className="badge-dot"></span> Next-Gen Business Solutions
                    </div>
                    <h3 className="hero-title animate-fade-in delay-100">
                        <span style={{ display: 'inline-block' }} data-aos="fade-right" data-aos-delay="200">
                            Empower Your Business
                        </span>{' '}
                        <span style={{ display: 'inline-block' }} data-aos="zoom-in" data-aos-delay="400">With</span> <br />
                        <span style={{ color: 'black', fontWeight: 'bold', display: 'inline-block' }} data-aos="fade-up" data-aos-delay="600">Closure Point Solutions</span>
                    </h3>
                    <p className="hero-desc animate-fade-in delay-200" data-aos="fade-up" data-aos-delay="300">
                        Comprehensive services in Vendor Management, Expert Recruitment, and Reliable Manpower Supply. Partner with us to streamline your operations and scale efficiently.
                    </p>
                    <div className="hero-actions animate-fade-in delay-300" data-aos="fade-up" data-aos-delay="400">
                        <a href="#services" className="btn btn-primary">
                            Explore Services <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Us
                        </a>
                    </div>

                    <div className="hero-stats animate-fade-in delay-400" data-aos="fade-up" data-aos-delay="500">
                        <div className="stat-item">
                            <div className="stat-value">
                                <CountUp end={500} duration={2.5} enableScrollSpy scrollSpyOnce={false} />+
                            </div>
                            <div className="stat-label">Vendors Managed</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">
                                <CountUp end={10} duration={2.5} enableScrollSpy scrollSpyOnce={false} />k+
                            </div>
                            <div className="stat-label">Talents Placed</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-value">
                                <CountUp end={99} duration={2.5} enableScrollSpy scrollSpyOnce={false} />%
                            </div>
                            <div className="stat-label">Client Retention</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
