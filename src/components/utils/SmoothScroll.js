import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import { ScrollContext } from './ScrollContext';
import ScrollToTopBtn from './ScrollToTopBtn';

const SmoothScroll = ({ children }) => {
    const scrollContainerRef = useRef(null);
    const locomotiveScrollRef = useRef(null);
    const [locomotiveScroll, setLocomotiveScroll] = useState(null);

    // Définir la fonction de défilement vers un élément
    const handleScrollToElement = (elementId, offset = 0) => {
        if (locomotiveScrollRef.current) {
            const element = document.getElementById(elementId);
            if (element) {
                locomotiveScrollRef.current.scrollTo(element, {
                    offset: offset,
                    duration: 500,
                    easing: [0.25, 0.0, 0.35, 1.0]
                });
            }
        }
    };

    useEffect(() => {
        if (scrollContainerRef.current) {
            locomotiveScrollRef.current = new LocomotiveScroll({
                el: scrollContainerRef.current,
                smooth: true,
                smartphone: {
                    smooth: true
                },
                tablet: {
                    smooth: true
                }
            });

            setLocomotiveScroll(locomotiveScrollRef.current);

            const handleUpdate = () => {
                if (locomotiveScrollRef.current) {
                    locomotiveScrollRef.current.update();
                }
            };
    
            window.addEventListener('load', handleUpdate);
            window.addEventListener('resize', handleUpdate);
    
            return () => {
                window.removeEventListener('load', handleUpdate);
                window.removeEventListener('resize', handleUpdate);

                if (locomotiveScrollRef.current) {
                    locomotiveScrollRef.current.destroy();
                }
            };
        }
    }, []);
    
    return (
        <ScrollContext.Provider value={{ scrollTo: handleScrollToElement, locomotiveScroll: locomotiveScroll }}>
            <ScrollToTopBtn />
            <div data-scroll-container ref={scrollContainerRef}>
                {children}
            </div>
        </ScrollContext.Provider>
    );
};

export default SmoothScroll;
