import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import gregoireImg from '../../medias/images/gregoire.jpg';

const About = () => {
    return (
        <Box
            id='votre concierge'
            height='1000px'
            sx={{
                backgroundImage: `linear-gradient(rgba(87, 47, 18, 0.6), rgba(87, 47, 18, 0.6)), url(${gregoireImg})`,
                backgroundSize: 'cover',  
                backgroundRepeat: 'no-repeat',  
                backgroundPosition: 'center',  
                scrollMarginTop: '70px'
            }}
        >
            <Container
                sx={{
                    height: '100%',
                    width: '100vw',
                    padding: '40px 7%',
                }}
            >
                <Stack>
                    <Stack spacing={2} marginBottom='175px'>
                        <Typography
                            align='center'
                            component='h2'
                            fontFamily='cormorant, serif'
                            fontSize='3.2em'
                            fontWeight='600'
                            textTransform='uppercase'
                            lineHeight='1.2'
                            sx={{
                                color: '#fff'
                            }}
                        >
                            Votre concierge

                        </Typography>
                        <Divider
                            variant='middle'
                            sx={{
                                width: '100px',
                                borderColor: '#EAC985',
                                borderBottomWidth: '2px',
                                alignSelf: 'center'
                            }}
                        />
                    </Stack>
                    <Stack>
                        <Typography
                            fontFamily='Comorant, serif'
                            fontSize='2.5em'
                            fontWeight='300'
                            fontStyle='italic'
                            lineHeight='2'
                            sx={{
                                color: '#fff'
                            }}
                        >
                            Bonjour !
                        </Typography>
                        <Stack spacing={3} >
                            <Typography
                                // align='center'
                                fontFamily='Dosis, sans-serif'
                                fontSize='1.4em'
                                fontWeight='300'
                                lineHeight='2'
                                sx={{
                                    color: '#fff'
                                }}
                            >
                                Je suis <span style={{ fontWeight: '500', color: '#EAC985' }}>Grégoire</span>, votre concierge privé au service de votre résidence secondaire dans le nord du Gard et sud Ardèche.
                            </Typography>
                            <Typography
                                // align='center'
                                fontFamily='Dosis, sans-serif'
                                fontSize='1.4em'
                                fontWeight='300'
                                lineHeight='2'
                                sx={{
                                    color: '#fff'
                                }}
                            >
                                À 34 ans, j'ai choisi de poser mes valises dans cette magnifique région, riche en culture et en beauté naturelle, pour me consacrer à mon objectif : proposer un service de conciergerie de qualité 
                            </Typography>
                        </Stack>
                        
                    </Stack>
                </Stack>
               

            </Container>
        </Box>
    );
};

export default About;