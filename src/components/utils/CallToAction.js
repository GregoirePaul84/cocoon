import { Button, Stack } from '@mui/material';
import React from 'react';

const CallToAction = () => {
    return (
        <Stack
            alignItems='center'
            position='absolute'
            bottom='0'
            zIndex='100'
        >
            <a href={'#services'} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button
                    variant='contained'
                    sx={{ 
                        width: 'fit-content',
                        padding: '5px 16px 6px 16px',
                        fontFamily: 'Dosis, sans-serif',
                        fontSize: '0.9em',
                        fontWeight: '600',
                        textTransform: 'initial',
                        color: '#3E3E3E',
                        backgroundColor: '#EAC985', 
                        '&:hover': { backgroundColor: '#d9b278' },
                        borderRadius: '25px'
                    }}

                >
                    Découvrez nos services
                </Button>
            </a>
        </Stack>
    );
};

export default CallToAction;