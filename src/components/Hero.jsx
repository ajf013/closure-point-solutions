import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { ArrowRight, Activity, Users, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When the hero section leaves the viewport (scrolling down)
                    if (!entry.isIntersecting) {
                        // Find all AOS animated spans within the title
                        const animatedSpans = titleRef.current?.querySelectorAll('[data-aos]');
                        animatedSpans?.forEach(span => {
                            // Manually strip the class so AOS is forced to re-apply it next time we scroll up
                            span.classList.remove('aos-animate');
                        });
                    }
                });
            },
            { threshold: 0 } // Trigger as soon as 1 pixel is visible/hidden
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <section id="home" className="hero section">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="badge badge-animate">
                        <span className="badge-dot badge-dot-pulse"></span> Next-Gen Business Solutions
                    </div>
                    <h3 ref={titleRef} className="hero-title">
                        <span style={{ display: 'inline-block' }} data-aos="fade-up" data-aos-delay="100" data-aos-mirror="true" data-aos-once="false">
                            Empower Your Business
                        </span>{' '}
                        <span style={{ display: 'inline-block' }} data-aos="fade-up" data-aos-delay="200" data-aos-mirror="true" data-aos-once="false">With</span> <br />
                        <span className="title-highlight" style={{ display: 'inline-block' }} data-aos="fade-up" data-aos-delay="300" data-aos-mirror="true" data-aos-once="false">Closure Point Solutions</span>
                    </h3>
                    <p className="hero-desc animate-fade-in delay-200" data-aos="fade-up" data-aos-delay="400">
                        Comprehensive services in Vendor Management, Expert Recruitment, and Reliable Manpower Supply. Partner with us to streamline your operations and scale efficiently.
                    </p>
                    <div className="hero-actions animate-fade-in delay-500" data-aos="fade-up" data-aos-delay="500">
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
