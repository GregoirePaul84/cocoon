import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useScroll } from './ScrollContext';  // Assurez-vous d'importer votre hook personnalisé

const ScrollToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { locomotiveScroll } = useScroll(); // Utilisez le contexte pour obtenir l'instance de locomotiveScroll

    const handleClick = () => {
        if (locomotiveScroll) {
            locomotiveScroll.scrollTo(0);  // Utiliser scrollTo de Locomotive Scroll
        }
    };

    useEffect(() => {
        if (locomotiveScroll) {
            const handleScroll = () => {
                const shouldShow = locomotiveScroll.scroll.instance.scroll.y > 100;
                if(shouldShow) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }

            };

            locomotiveScroll.on('scroll', handleScroll);

            return () => {
                locomotiveScroll.off('scroll', handleScroll);
            };
        }
    }, [locomotiveScroll]);

    return (
        <Zoom in={isVisible}>
            <Fab
                color="secondary"
                size="small"
                onClick={handleClick}
                sx={{
                    position: 'fixed',
                    bottom: '16px',
                    right: '16px',
                    zIndex: '100',
                    color: '#3E3E3E',
                    bgcolor: '#EAC985',
                    '&:hover': {
                        bgcolor: '#EAC985'
                    }
                }}
                aria-label="scroll back to top"
            >
                <KeyboardArrowUpIcon />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTopBtn;
