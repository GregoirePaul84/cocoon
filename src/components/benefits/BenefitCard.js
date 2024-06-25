import { Stack, Box, Typography } from '@mui/material';
import React from 'react';

const BenefitCard = ({ icon, title, text }) => {
    return (
        <Stack 
            spacing={2}
            justifyContent='center'
            alignItems='center'
        >
            <Stack
                justifyContent='center'
                alignItems='center'
                sx={{
                    height: '100px',
                    width: '100px',
                    borderRadius: '50%',
                    bgcolor: '#EAC985',
                    border: '2px solid #6C462A',
                    boxShadow: '-15px -17.5px 0 #6C462A'
                }}
            >
                {icon}
            </Stack>
            <Typography
                component='h2'
                fontFamily='Cormorant, serif'
                fontSize='1.5em'
                fontWeight='700'
                textTransform='uppercase'
                letterSpacing='-1px'
                sx={{
                    color: '#623E2A'
                }}
            >
                {title}
            </Typography>
            <Typography
                align='center'
                component='p'
                fontFamily='Dosis, sans-serif'
                fontSize='1.2em'
                fontWeight='400'
                // letterSpacing='-1.5px'
                sx={{
                    color: '#C69F73'
                }}
            >
                {text}
            </Typography>
        </Stack>
    );
};

export default BenefitCard;