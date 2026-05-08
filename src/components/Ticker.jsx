import React from 'react';
import './Ticker.css';

const Ticker = () => {
  const items = [
    "Full-Time Hiring",
    "Contract Staffing",
    "RPO Services",
    "Recruitment Analytics",
    "AI Screening",
    "Supply Chain",
    "E-Commerce",
    "Real Estate",
    "Tier 2 Cities",
    "HR Technology"
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="ticker-item">
            <span>{item}</span>
            <b className="ticker-dot">·</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
