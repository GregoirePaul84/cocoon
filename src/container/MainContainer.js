import React, { useEffect, useState } from 'react';

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
import Carousel from '../components/home/Carousel.js';
import SmoothScroll from '../components/utils/SmoothScroll.js';
import LoadingOverlay from '../components/utils/LoadingOverlay.js';

const MainContainer = () => {

    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [isAnimationEnded, setIsAnimationEnded] = useState(false);

    useEffect(() => {
        if(imagesLoaded) {
            setIsExiting(true);
        }
    }, [imagesLoaded]);

    useEffect(() => {
        if (!isAnimationEnded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isAnimationEnded]);

    return (
        <>
            { !isAnimationEnded && 
                <LoadingOverlay 
                    isExiting={isExiting} 
                    imagesLoaded={imagesLoaded}
                    setIsAnimationEnded={setIsAnimationEnded} 
                /> 
            }
            <SmoothScroll >
                <Header />
                <Carousel setImagesLoaded={setImagesLoaded} isAnimationEnded={isAnimationEnded}/>
                <Benefits />
                <Services />
                <About />
                <Skills />
                <Prices/>
                <Steps />
                <Location />
                <Contact />
                <Faq />
                <Footer />
            </SmoothScroll>
        </>
    );
};

export default MainContainer;