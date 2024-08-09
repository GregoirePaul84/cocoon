import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapComponent from './MapComponent';

const Location = () => {
    return (
        <Box bgcolor='#eac98559'>
            <Container
                sx={{
                    width: '100vw',
                    padding: '40px 7%',
                }}
            >
                <Stack alignItems='center' spacing={2} width='100%'>
                    <Stack 
                        justifyContent='center'
                        alignItems='center'

                        sx={{
                            height: '100px',
                            width: '100px', 
                            border: '2px solid #6C462A',
                            borderRadius: '50%',
                            bgcolor: 'rgba(203, 166, 126, 0.15)'
                        }}
                    >
                        <LocationOnIcon sx={{ fontSize: '60px', color: '#6C462A' }} />
                    </Stack>
                    <Stack spacing={1} margin='16px 0 !important' >
                        <Typography
                            align='center'
                            component='p'
                            fontFamily='Dosis, sans-serif'
                            fontSize='1.6em'
                            fontWeight='500'
                            sx={{
                                color: '#504131'
                            }}
                        >
                            Avant de nous contacter...
                        </Typography>
                        <Typography
                            align='center'
                            component='p'
                            fontFamily='Dosis, sans-serif'
                            fontSize='1.2em'
                            fontWeight='400'
                            sx={{
                                color: '#6C462A'
                            }}
                        >
                            Votre logement est il compris dans la zone d'intervention?
                        </Typography>
                    </Stack>
                    <Stack width='100%'>
                        <MapComponent />
                    </Stack>
                    <Stack marginTop='30px !important' >
                        <Typography
                            align='center'
                            component='p'
                            fontFamily='Dosis, sans-serif'
                            fontSize='1.2em'
                            fontWeight='400'
                            sx={{
                                color: '#6C462A'
                            }}
                        >
                            La conciergerie <span style={{ fontFamily: '"League Spartan", sans-serif', fontSize: '1.4em', fontWeight: '700', letterSpacing: '-2.5px' }}>Cocoon</span> vous propose ses services dans plusieurs villes et villages du Gard ou d'Ardèche.
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Location;