import React from 'react';
import { Briefcase, Users, Clock, BarChart3 } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      idx: '01',
      title: 'Full-Time Hiring',
      desc: 'Strategic permanent placements with role-specific talent mapping and industry-benchmarked compensation guidance.',
      icon: <Briefcase size={32} />,
      items: ['Role-specific talent mapping', 'End-to-end candidate journey', 'Compensation benchmarking']
    },
    {
      idx: '02',
      title: 'Contract Staffing',
      desc: 'Flexible short and long-term staffing with rapid talent deployment. Compliance, payroll and scaling fully managed.',
      icon: <Users size={32} />,
      items: ['Rapid talent deployment', 'Compliance & payroll managed', 'Scale up or down seamlessly']
    },
    {
      idx: '03',
      title: 'RPO Services',
      desc: 'Full recruitment process outsourcing with dedicated hiring pods, measurable SLAs and seamless HR system integration.',
      icon: <Clock size={32} />,
      items: ['Dedicated hiring pods', 'Measurable SLAs', 'Reduced time-to-fill']
    },
    {
      idx: '04',
      title: 'Recruitment Analytics',
      desc: 'Data-driven hiring insights: funnel analytics, pipeline reporting, offer-to-join tracking and live industry benchmarking.',
      icon: <BarChart3 size={32} />,
      items: ['Funnel & pipeline analytics', 'Offer-to-join tracking', 'Industry benchmarking']
    }
  ];

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="services-top" data-aos="fade-up">
          <div className="stag">Our Services</div>
          <div className="services-header">
            <h2 className="dsp">What <em>We Do</em></h2>
            <p className="services-sub">
              Four service pillars built to cover every stage of your talent journey — from permanent placements to data-driven hiring intelligence.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div 
              key={svc.idx} 
              className="service-card"
              data-aos={i < 2 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 150}
            >
              <div className="svc-n">{svc.idx}</div>
              <div className="svc-icon">{svc.icon}</div>
              <h3 className="svc-ttl">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
              <ul className="svc-list">
                {svc.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
