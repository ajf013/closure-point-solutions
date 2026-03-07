import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, CheckCircle, BarChart, Settings, Users } from 'lucide-react';
import './Services.css';

const CountUp = ({ end, suffix = '', duration = 2000, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        let start = null;
        let animationFrame;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            const easeOut = 1 - Math.pow(1 - percentage, 3);

            setCount(Math.floor(easeOut * end));

            if (progress < duration) {
                animationFrame = window.requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };

        animationFrame = window.requestAnimationFrame(step);
        return () => window.cancelAnimationFrame(animationFrame);
    }, [end, duration, isVisible]);

    return <span>{count}{suffix}</span>;
};

const VendorSelection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: <Briefcase size={24} />,
            title: "Vendor Selection & Onboarding",
            desc: "Streamlined processes to identify, vet, and onboard the best vendors for your specific requirements."
        },
        {
            icon: <CheckCircle size={24} />,
            title: "Compliance Management",
            desc: "Ensuring all vendors adhere to industry standards and your company's regulatory requirements."
        },
        {
            icon: <BarChart size={24} />,
            title: "Performance Tracking",
            desc: "Real-time metrics and KPIs to evaluate vendor performance and ensure quality delivery."
        },
        {
            icon: <Settings size={24} />,
            title: "Contract Administration",
            desc: "End-to-end management of vendor agreements, renewals, and SLA monitoring."
        }
    ];

    return (
        <section id="vendor" className="section service-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">Strategic <span className="gradient-text">Vendor Management</span></h2>
                    <p className="section-subtitle">
                        Optimize your supply chain with our comprehensive vendor management solutions. We handle the complexity so you can focus on growth.
                    </p>
                </div>

                <div className="grid-2">
                    <div className="service-visual glass-panel" data-aos="fade-right">
                        <div className="mockup-ui">
                            <div className="mockup-header">
                                <div className="dots"><span></span><span></span><span></span></div>
                                <div className="title">Vendor Performance Dashboard</div>
                            </div>
                            <div className="mockup-body">
                                <div className="mockup-card">
                                    <div className="card-header">
                                        <span>Active Vendors</span>
                                        <span className="text-blue"><CountUp end={142} isVisible={isVisible} /></span>
                                    </div>
                                    <div className="progress-bar"><div className="progress" style={{ width: isVisible ? '85%' : '0%', transition: 'width 2s cubic-bezier(0.22, 1, 0.36, 1)' }}></div></div>
                                </div>
                                <div className="mockup-card">
                                    <div className="card-header">
                                        <span>Compliance Score</span>
                                        <span className="text-green"><CountUp end={98} suffix="%" isVisible={isVisible} /></span>
                                    </div>
                                    <div className="progress-bar"><div className="progress bg-green" style={{ width: isVisible ? '98%' : '0%', transition: 'width 2s cubic-bezier(0.22, 1, 0.36, 1)' }}></div></div>
                                </div>
                                <div className="mockup-card">
                                    <div className="card-header">
                                        <span>Risk Assessment</span>
                                        <span className="text-yellow">Low</span>
                                    </div>
                                    <div className="progress-bar"><div className="progress bg-yellow" style={{ width: isVisible ? '15%' : '0%', transition: 'width 2s cubic-bezier(0.22, 1, 0.36, 1)' }}></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-content" data-aos="fade-left">
                        <div className="features-list">
                            {features.map((feature, index) => {
                                const animations = ['fade-down', 'fade-right', 'fade-left', 'fade-up'];
                                return (
                                    <div key={index} className="feature-item hover-up" data-aos={animations[index % animations.length]} data-aos-delay={index * 100} data-aos-mirror="true" data-aos-once="false">
                                        <div className="feature-icon">{feature.icon}</div>
                                        <div>
                                            <h3 className="feature-title" style={{ fontWeight: '700' }}>{feature.title}</h3>
                                            <p className="feature-desc" style={{ fontWeight: '500', color: '#1a1a1a' }}>{feature.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VendorSelection;
