import React from 'react';
import { Search, Target, Award, UserPlus } from 'lucide-react';
import './Services.css';

const Recruitment = () => {
    const steps = [
        {
            icon: <Target size={24} />,
            title: "Requirement Analysis",
            desc: "Deep dive into your organizational needs and cultural fit."
        },
        {
            icon: <Search size={24} />,
            title: "Talent Sourcing",
            desc: "Access to an extensive network of pre-vetted professionals."
        },
        {
            icon: <Award size={24} />,
            title: "Screening & Assessment",
            desc: "Rigorous evaluation of skills, experience, and potential."
        },
        {
            icon: <UserPlus size={24} />,
            title: "Placement & Onboarding",
            desc: "Seamless integration into your company's workforce."
        }
    ];

    return (
        <section id="recruitment" className="section service-section bg-alt">
            <div className="container">
                <div className="section-header right-align" data-aos="fade-up">
                    <h2 className="section-title">Elite <span className="gradient-text">Recruitment</span> Services</h2>
                    <p className="section-subtitle">
                        Connecting you with top-tier talent. Our targeted recruitment strategies ensure you find the right people to drive your business forward.
                    </p>
                </div>

                <div className="grid-2 reverse-mobile">
                    <div className="service-content" data-aos="fade-right">
                        <div className="timeline">
                            {steps.map((step, index) => (
                                <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 150}>
                                    <div className="timeline-icon">{step.icon}</div>
                                    <div className="timeline-content hover-up glass-panel">
                                        <h3 className="feature-title">{step.title}</h3>
                                        <p className="feature-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="service-visual glass-panel flex-center relative" data-aos="fade-left">
                        <div className="floating-card c1" data-aos="zoom-in" data-aos-delay="200">
                            <div className="avatar">JD</div>
                            <div className="info">
                                <h4>Jane Doe</h4>
                                <p>Senior Developer - Hired</p>
                            </div>
                        </div>
                        <div className="floating-card c2" data-aos="zoom-in" data-aos-delay="400">
                            <div className="avatar bg-alt">SM</div>
                            <div className="info">
                                <h4>Sam Mitchell</h4>
                                <p>Project Manager - In Review</p>
                            </div>
                        </div>
                        <div className="floating-card c3" data-aos="zoom-in" data-aos-delay="600">
                            <div className="avatar bg-accent">AR</div>
                            <div className="info">
                                <h4>Alex Rivera</h4>
                                <p>Data Analyst - Interviewing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recruitment;
