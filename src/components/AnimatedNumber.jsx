import React from 'react';
import CountUp from 'react-countup';

const AnimatedNumber = ({ end, suffix = "", prefix = "", decimals = 0, duration = 2 }) => {
  if (end === undefined || end === null) return <span>0</span>;
  
  return (
    <CountUp
      start={0}
      end={end}
      duration={duration}
      decimals={decimals}
      prefix={prefix}
      suffix={suffix}
      enableScrollSpy={true}
      scrollSpyOnce={false}
    >
      {({ countUpRef }) => (
        <span ref={countUpRef} />
      )}
    </CountUp>
  );
};

export default AnimatedNumber;
