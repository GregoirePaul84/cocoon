import { Badge, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

// Créer un composant Badge personnalisé avec une couleur de fond spécifique
const CustomBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
        height: '50px',
        width: '50px',
        fontSize: '2em',
        backgroundColor: '#E5B555',
        color: '#6C462A', 
    },
}));

const StepPart2 = ({ number, img, title, description }) => {
    
    return (
        <Stack spacing={2} alignItems='center'>
            <CustomBadge
                badgeContent={number}
                color='#E5B555'
                
            >
                <Box 
                    sx={{
                        height: '50vw',
                        width: '50vw',
                        maxHeight: '200px',
                        maxWidth: '200px',
                        backgroundImage:`url(${img})`,
                        backgroundSize: 'cover',  
                        backgroundRepeat: 'no-repeat',  
                        backgroundPosition: 'center',  
                        borderRadius: '10px',
                        boxShadow: '0px 4px 11px #3c3c3c63' 
                    }}
                />
            </CustomBadge>
            <Stack spacing={4} padding='8px 0 50px 0'>
                <Typography
                    component='p'
                    align='center'
                    fontFamily='Dosis, sans-serif'
                    fontSize='1.4em'
                    fontWeight='700'
                    sx={{
                        color: '#504131'
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    component='p'
                    align='center'
                    fontFamily='Dosis, sans-serif'
                    fontSize='1.4em'
                    fontWeight='500'
                    sx={{
                        padding: {
                            xs: 0,
                            sm: '0 2vw'
                        },
                        color: '#6C462A'
                    }}
                >
                    {description}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default StepPart2;