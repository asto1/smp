import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;