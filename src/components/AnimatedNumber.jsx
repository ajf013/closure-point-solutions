import React from 'react';
import CountUp from 'react-countup';

const AnimatedNumber = ({ end, suffix = "", prefix = "", decimals = 0, duration = 2 }) => {
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
    />
  );
};

export default AnimatedNumber;
