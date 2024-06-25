import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import logoSrc from '../../medias/images/logo.svg';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
    return (
        <Box
            bgcolor='#987349'
        >
            <Stack spacing={3} padding='20px 7% 60px 7%'>
                <img 
                    src={logoSrc} 
                    alt="logo conciergerie cocoon" 
                    style={{
                        width: '50%'
                    }}
                />
                <Stack direction='row' spacing={1} >
                    <PhoneIcon fontSize='medium' sx={{ color: '#fff' }} />
                    <Typography
                        component='p'
                        fontFamily='"Dosis", sans-serif'
                        sx={{ color: '#fff' }}
                    >
                        07.81.37.30.10
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={1} >
                    <AlternateEmailIcon fontSize='medium' sx={{ color: '#fff' }} />
                    <Typography
                        component='p'
                        fontFamily='"Dosis", sans-serif'
                        sx={{ color: '#fff' }}
                    >
                        conciergerie.cocoon@gmail.com
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={1} >
                    <PlaceIcon fontSize='medium' sx={{ color: '#fff' }} />
                    <Typography
                        component='p'
                        fontFamily='"Dosis", sans-serif'
                        sx={{ color: '#fff' }}
                    >
                        13 rue des Combes, 30430 ROCHEGUDE
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Footer;