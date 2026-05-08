import React from 'react';
import { Shield, Video, Users, Calendar, BarChart3, Database } from 'lucide-react';
import './Technology.css';

const Technology = () => {
  const techs = [
    { title: 'AI Candidate Screening', desc: 'Every CV scored and ranked against your JD parameters before any human review. Faster, sharper, bias-reduced shortlists.', icon: <Shield /> },
    { title: 'AI Video Calling & Screening', desc: 'Structured AI-assisted video interviews with automated scoring and playback — faster, unbiased candidate evaluations.', icon: <Video /> },
    { title: 'Recruitment CRM', desc: 'Every candidate interaction tracked internally — no qualified talent ever falls through the cracks across mandates.', icon: <Users /> },
    { title: 'Interview Slot Management', desc: 'Self-scheduling, automated reminders and calendar sync eliminate back-and-forth — interviews confirmed instantly.', icon: <Calendar /> },
    { title: 'HR Analytics Dashboard', desc: 'We monitor our own hiring funnels, TAT metrics and quality scores to continuously optimise outcomes for every client.', icon: <BarChart3 /> },
    { title: 'Applicant Tracking System', desc: 'A fully integrated ATS powers our end-to-end pipeline — from mandate intake to offer rollout — zero manual gaps.', icon: <Database /> }
  ];

  return (
    <section id="tech" className="tech-section section">
      <div className="container">
        <div className="tech-top" data-aos="fade-up">
          <div className="stag">Technology Edge</div>
          <h2 className="dsp">Our Tech <em>Advantage</em></h2>
          <p className="body-text" style={{marginTop: '1.5rem', maxWidth: '600px'}}>We invest in our dedicated Tech Wing to stay ahead of the curve — harnessing the latest technology internally to source faster, screen smarter, and deliver sharper outcomes on every mandate.</p>
        </div>

        <div className="tech-grid">
          {techs.map((t, i) => (
            <div key={i} className="tech-card" data-aos="fade-up" data-aos-delay={i * 50}>
              <div className="tech-icon">{t.icon}</div>
              <h3 className="tech-ttl">{t.title}</h3>
              <p className="tech-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
