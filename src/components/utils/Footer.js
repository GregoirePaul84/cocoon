import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import logoSrc from '../../medias/images/logo_2.svg';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
    return (
        <Box
            bgcolor='rgb(64 51 38)'
            paddingBottom='20px'
        >
            <Stack spacing={3} padding='20px 7% 60px 7%'>
                <img 
                    src={logoSrc} 
                    alt="logo conciergerie cocoon" 
                    style={{
                        width: '150px'
                    }}
                />
                <Stack direction='row' spacing={1} >
                    <PhoneIcon fontSize='medium' sx={{ color: '#fff' }} />
                    <Typography
                        component='p'
                        fontFamily='"Dosis", sans-serif'
                        sx={{ color: '#fff' }}
                    >
                        04.48.15.08.72
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
            <Stack 
                direction='row'
                width='100vw'
                justifyContent='center'
                columnGap='40px'
            >
                <Typography
                    component='p'
                    fontFamily='"Dosis", sans-serif'
                    sx={{ color: '#eac985' }}
                >
                    SIRET 92794922200016
                </Typography>
                <Typography
                    component='a'
                    fontFamily='"Dosis", sans-serif'
                    href="Mentions_legales.pdf"
                    download="Mentions_legales.pdf"
                    sx={{ 
                        color: '#eac985',
                        textDecoration: 'none'
                    }}

                >
                    Mentions légales 
                </Typography>
                <Typography
                    component='p'
                    fontFamily='"Dosis", sans-serif'
                    sx={{ color: '#eac985' }}
                >
                    | 
                </Typography>
                <Typography
                    component='p'
                    fontFamily='"Dosis", sans-serif'
                    sx={{ color: '#eac985' }}
                >
                    CGV
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;