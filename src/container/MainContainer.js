import React from 'react';

// Import des composants internes
import Header from '../components/utils/Header.js';
import Benefits from '../components/benefits/Benefits.js';
import Services from '../components/services/Services.js';
import About from '../components/about/About.js';
import Skills from '../components/skills/Skills.js';
import Prices from '../components/prices/Prices.js';
import Steps from '../components/steps/Steps.js';
import Location from '../components/location/Location.js';
import Faq from '../components/faq/Faq.js';
import Contact from '../components/contact/Contact.js';
import Footer from '../components/utils/Footer.js';
import ScrollToTopBtn from '../components/utils/ScrollToTopBtn.js';
import Carousel from '../components/home/Carousel.js';
import SmoothScroll from '../components/utils/SmoothScroll.js';

const MainContainer = () => {

    return (
        <SmoothScroll >
            {/* <ScrollToTopBtn /> */}
            <Header />
            <Carousel />
            <Benefits />
            <Services />
            <About />
            <Skills />
            <Prices/>
            <Steps />
            <Location />
            <Faq />
            <Contact />
            <Footer />
        </SmoothScroll>
    );
};

export default MainContainer;