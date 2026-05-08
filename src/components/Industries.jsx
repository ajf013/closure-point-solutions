import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import './Industries.css';

const Industries = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const industries = [
    {
      idx: '01',
      name: 'Supply Chain & Logistics',
      roles: ['Procurement Managers', 'Logistics Coordinators', 'Warehouse Ops Leaders', 'SCM Analysts', '3PL & 4PL Specialists'],
      quote: "Supply chains move at the speed of talent. We build pipelines in the roles that keep operations running — before you even know you need them."
    },
    {
      idx: '02',
      name: 'E-Commerce & Retail Tech',
      roles: ['Category Managers', 'Growth & Performance Marketers', 'Marketplace Ops', 'D2C Brand Leads', 'Tech Product Managers'],
      quote: "E-commerce evolves overnight. We stay ahead of the talent curve so our clients always have the people who drive growth."
    },
    {
      idx: '03',
      name: 'Real Estate & PropTech',
      roles: ['Sales & CRM Leaders', 'Project Management', 'PropTech Product Leads', 'Asset & Facility Managers', 'Real Estate Analysts'],
      quote: "Property deals are built on trust and relationships — so is great hiring. We bring both to every mandate we take on."
    }
  ];

  return (
    <section id="industries" className="industries-section section">
      <div className="container">
        <div className="industries-top" data-aos="fade-up">
          <div className="top-content">
            <div className="stag">Industries We Serve</div>
            <h2 className="dsp">Fewer Industries.<br /><em>Deeper Expertise.</em></h2>
          </div>
          <p className="industries-intro">
            We deliberately serve fewer industries so we can serve them better than anyone else. We know the sectors, the roles, and the people.
          </p>
        </div>

        <div className="industries-list">
          {industries.map((ind, i) => (
            <div 
              key={ind.idx} 
              className={`industry-item ${openIndex === i ? 'open' : ''}`}
              data-aos="fade-right"
              data-aos-delay={i * 200}
            >
              <div className="industry-hdr" onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                <div className="ind-n">{ind.idx}</div>
                <div className="ind-name">{ind.name}</div>
                <div className="ind-arr">
                  <Plus size={20} className="plus-icon" />
                </div>
              </div>
              <div className="industry-body">
                <div className="ind-roles">
                  <h4>Key Roles We Fill</h4>
                  <ul>
                    {ind.roles.map((role, ri) => (
                      <li key={ri}>{role}</li>
                    ))}
                  </ul>
                </div>
                <div className="ind-quote">
                  <blockquote>{ind.quote}</blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
