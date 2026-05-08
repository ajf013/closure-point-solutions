import React from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Reach from '../components/Reach';
import Process from '../components/Process';
import Technology from '../components/Technology';
import Impact from '../components/Impact';
import CTA from '../components/CTA';

import Why from '../components/Why';

const Home = () => {
  return (
    <main>
      <Hero />
      <Ticker />
      <Services />
      <Industries />
      <Reach />
      <Process />
      <Technology />
      <Why />
      <Impact />
      <CTA />
    </main>
  );
};

export default Home;
