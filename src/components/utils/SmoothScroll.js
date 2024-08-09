import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import { ScrollContext } from './ScrollContext';
import ScrollToTopBtn from './ScrollToTopBtn';

const SmoothScroll = ({ children }) => {
    const scrollContainerRef = useRef(null);
    const locomotiveScrollRef = useRef(null);
    const timeoutRef = useRef(null);

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

    // Initialisation de locomotive scroll
    useEffect(() => {
        if (scrollContainerRef.current) {
            locomotiveScrollRef.current = new LocomotiveScroll({
                el: scrollContainerRef.current,
                smooth: true,
                smartphone: {
                    smooth: false // Désactivé sur les smartphones
                },
                tablet: {
                    smooth: false // Désactivé sur les tablettes
                }
            });

            setLocomotiveScroll(locomotiveScrollRef.current);
        }
    }, []);

    // Mise à jour de locomotive scroll : premier rendu et resize
    useEffect(() => {
        
        const handleUpdate = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                if (locomotiveScrollRef.current) {
                    locomotiveScrollRef.current.update();
                }
            }, 100);
        };

    
        window.addEventListener('load', handleUpdate);
        window.addEventListener('resize', handleUpdate);
    
        return () => {
            clearTimeout(timeoutRef.current);

            window.removeEventListener('load', handleUpdate);
            window.removeEventListener('resize', handleUpdate);

            if (locomotiveScrollRef.current) {
                locomotiveScrollRef.current.destroy();
            }
        };
    }, []);

    return (
        <ScrollContext.Provider value={{ scrollTo: handleScrollToElement, locomotiveScroll: locomotiveScroll }}>
            <ScrollToTopBtn />
            <div data-scroll-container ref={scrollContainerRef} style={{ minHeight: '100vh' }}>
                {children}
            </div>
        </ScrollContext.Provider>
    );
};

export default SmoothScroll;
