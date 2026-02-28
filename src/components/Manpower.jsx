import React from 'react';
import { Users, Shield, Clock, HardHat } from 'lucide-react';
import './Services.css';

const Manpower = () => {
    const categories = [
        {
            icon: <HardHat size={32} />,
            title: "Skilled Labor",
            desc: "Certified professionals for specialized technical roles."
        },
        {
            icon: <Users size={32} />,
            title: "General Workforce",
            desc: "Reliable personnel for operational and support functions."
        },
        {
            icon: <Clock size={32} />,
            title: "Temporary Staffing",
            desc: "Flexible manpower solutions for seasonal or project-based needs."
        },
        {
            icon: <Shield size={32} />,
            title: "Contract Personnel",
            desc: "Long-term dedicated staff with complete payroll and compliance management."
        }
    ];

    return (
        <section id="manpower" className="section service-section">
            <div className="container">
                <div className="section-header text-center max-w-2xl mx-auto" data-aos="fade-up">
                    <h2 className="section-title">Reliable <span className="gradient-text">Manpower</span> Supply</h2>
                    <p className="section-subtitle">
                        Scale your operations seamlessly with our dependable manpower solutions. We provide the right people at the right time.
                    </p>
                </div>

                <div className="grid-4 manpower-grid">
                    {categories.map((category, index) => (
                        <div key={index} className="manpower-card glass-panel hover-up" data-aos="fade-up" data-aos-delay={index * 150}>
                            <div className="card-icon">{category.icon}</div>
                            <h3 className="card-title">{category.title}</h3>
                            <p className="card-desc">{category.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="cta-banner glass-panel flex-between mt-4" data-aos="zoom-in" data-aos-delay="200">
                    <div>
                        <h3>Need a custom workforce solution?</h3>
                        <p>Our team can design a staffing model tailored to your specific industry requirements.</p>
                    </div>
                    <a href="#contact" className="btn btn-primary">Request Consultation</a>
                </div>
            </div>
        </section>
    );
};

export default Manpower;
