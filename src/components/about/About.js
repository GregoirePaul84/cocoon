import { Stack, Box, Container, Divider, Typography, Button } from '@mui/material';
import React from 'react';
import gregoireImg from '../../medias/images/DSC_8517_contrast.webp';
import { useScroll } from '../utils/ScrollContext';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const About = () => {

    const { scrollTo } = useScroll();

    const { ref, inView } = useInView({
        triggerOnce: true, // Animation déclenchée une seule fois
        threshold: 0.5, // Déclenchement lorsque 10% de l'élément est visible
    });

    return (
        <Stack 
            direction='row'
            sx={{
                backgroundColor: {
                    xs: 'inherit',
                    md: 'rgb(64 51 38)'
                }
            }}
        >
            <Box
                minHeight='100vh'
                sx={{
                    display: {
                        xs: 'none',
                        md: 'flex',
                        lg: 'flex'
                    },
                    width: {
                        md: '20vw',
                        lg: '35vw'
                    },
                    bgcolor: 'rgb(64 51 38)'
                }}
            />
            <Box
                id="votre concierge"
                minHeight='100vh'
                sx={{
                    width: {
                        xs: '100vw',
                        md: '80vw',
                        lg: '65vw',
                    },
                    backgroundImage: {
                        xs: `linear-gradient(180deg, rgba(40,24,12,0.47) 0%, rgba(40,24,12,0.8) 100%), url(${gregoireImg})`,
                        md: `
                            linear-gradient(to right, rgba(64, 51, 38, 1) 0%, rgba(64, 51, 38, 0) 70%),
                            url(${gregoireImg})
                            `,
                    },
                    backgroundSize: 'cover',  
                    backgroundRepeat: 'no-repeat',  
                    backgroundPosition: 'center',
                    scrollMarginTop: '70px'
                }}
            >
                <Container
                    maxWidth={false}
                    disableGutters
                    sx={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                        padding: {
                            xs: '40px 7%',
                            md: '60px 7%'
                        },
                    }}
                >
                    <Stack
                        ref={ref}
                        sx={{
                            maxWidth: {
                                xs: 'none',
                                md: '50%',
                            },
                            position: {
                                xs: 'static',
                                md: 'relative'
                            },
                            right: {
                                md: '20%',
                                lg: '50%'
                            },
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateX(0)' : 'translateX(20px)',
                            animation: inView ? `${fadeIn} 1s ease-out` : 'none',
                        }}
                    >
                        <Stack 
                            spacing={2} 
                            sx={{
                                marginBottom: {
                                    xs: '115px',
                                    md: '40px'
                                }
                            }}
                        >
                            <Typography
                                align='left'
                                component='h2'
                                fontFamily='cormorant, serif'
                                fontWeight='600'
                                textTransform='uppercase'
                                lineHeight='1.6'
                                sx={{
                                    color: '#fff',
                                    fontSize: {
                                        xs: '2.5em',

                                    }
                                }}
                            >
                                Votre <br />concierge

                            </Typography>
                            <Divider
                                variant='middle'
                                sx={{
                                    width: '150px',
                                    borderColor: '#EAC985',
                                    borderBottomWidth: '2px',
                                    // alignSelf: 'center'
                                }}
                            />
                        </Stack>
                        <Stack spacing={2}>
                            <Typography
                                fontFamily='Comorant, serif'
                                fontSize='2.7em'
                                fontWeight='300'
                                fontStyle='italic'
                                lineHeight='2'
                                sx={{
                                    color: '#fff'
                                }}
                            >
                                Bonjour !
                            </Typography>
                            <Stack spacing={6} >
                                <Typography
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
                                    fontFamily='Dosis, sans-serif'
                                    fontSize='1.4em'
                                    fontWeight='300'
                                    lineHeight='2'
                                    sx={{
                                        color: '#fff'
                                    }}
                                >
                                    À 34 ans, j'ai choisi de poser mes valises dans cette magnifique région, riche en culture et en beauté naturelle, pour me consacrer à mon objectif : <strong>proposer un service de conciergerie de qualité.</strong>
                                </Typography>
                            </Stack>              
                        </Stack>
                        <Stack alignItems='center' margin='50px 0'>
                            <Button
                                variant='contained'
                                sx={{ 
                                    width: 'fit-content',
                                    padding: {
                                        sx: '5px 16px 6px 16px',
                                        sm: '7px 20px 8px 20px',
                                        md: '9px 25px 10px 25px',
                                    },
                                    fontFamily: 'Dosis, sans-serif',
                                    fontSize: {
                                        xs: '0.9em',
                                        sm: '1.15em',
                                        md: '1.3em'
                                    },
                                    fontWeight: '600',
                                    textTransform: 'initial',
                                    color: '#3E3E3E',
                                    backgroundColor: '#EAC985', 
                                    '&:hover': { backgroundColor: '#d9b278' },
                                    borderRadius: '25px'
                                }}
                                onClick={() => scrollTo('contact', 0)}
                            >
                                Contactez-moi !
                            </Button>
                        </Stack>     
                    </Stack>
                    <Stack 
                        sx={{
                            position: {
                                xs: 'static',
                                md: 'absolute'
                            },
                            bottom: '20px',
                            right: '30px'
                        }}
                    >
                        <Typography align='center' color='#fff' fontWeight='100' >
                            Photographie : Jean-Michel André - Barjac
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </Stack>
        
    );
};

export default About;