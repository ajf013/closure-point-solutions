import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      title: 'Mandate Intake',
      desc: 'Deep-dive briefing on role, culture and success metrics. We align on what a great hire looks like before we source anyone.',
      tag: 'Day 1'
    },
    {
      title: 'AI-Powered Sourcing',
      desc: 'Our proprietary AI activates across talent databases and passive networks — scoring candidates against your JD before any human review.',
      tag: 'Day 1–2'
    },
    {
      title: 'Expert Screening',
      desc: 'Domain-expert recruiters validate technical and cultural fit through structured interviews — including AI-assisted video screening.',
      tag: 'Day 2–3'
    },
    {
      title: 'Shortlist & Present',
      desc: 'Structured candidate dossiers delivered within 48 hours. No filler — only candidates worth your time.',
      tag: '48h Delivery'
    },
    {
      title: 'Closure & Onboarding',
      desc: 'Offer negotiation, acceptance tracking and post-join support. We stay engaged until your hire is settled and thriving.',
      tag: 'Done right'
    }
  ];

  return (
    <section id="process" className="process-section section">
      <div className="container">
        <div className="process-top" data-aos="fade-up">
          <div className="stag">How We Work</div>
          <h2 className="dsp">Our Hiring <em>Process</em></h2>
          <p className="body-text" style={{marginTop: '1.5rem'}}>A structured, transparent and technology-driven approach to every mandate — from intake to closure.</p>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="process-step" 
              data-aos="fade-right" 
              data-aos-delay={i * 200}
            >
              <div className="step-num">0{i + 1}</div>
              <div className="step-content">
                <h3 className="step-ttl">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                <div className="step-tag">{step.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
