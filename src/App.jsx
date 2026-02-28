import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vendor from './components/Vendor';
import Recruitment from './components/Recruitment';
import Manpower from './components/Manpower';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 50
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Vendor />
        <Recruitment />
        <Manpower />
      </main>
      <Footer />
    </div>
  );
}

export default App;
