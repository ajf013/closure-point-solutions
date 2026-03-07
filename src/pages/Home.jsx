import React from 'react';
import Hero from '../components/Hero';
import Vendor from '../components/Vendor';
import Recruitment from '../components/Recruitment';
import Manpower from '../components/Manpower';

const Home = () => {
    return (
        <main>
            <Hero />
            <Vendor />
            <Recruitment />
            <Manpower />
        </main>
    );
};

export default Home;
