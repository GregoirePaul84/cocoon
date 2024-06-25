import React from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopBtn = () => {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={trigger}>
            <Fab
                color="secondary"
                size="small"
                onClick={handleClick}
                sx={{
                    position: 'fixed',
                    bottom: '16px',
                    right: '16px',
                    color: '#3E3E3E',
                    bgcolor: '#EAC985',
                    '&:hover':{
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
