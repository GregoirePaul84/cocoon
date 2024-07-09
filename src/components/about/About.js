import { Stack, Box, Container, Divider, Typography, Button } from '@mui/material';
import React from 'react';
import gregoireImg from '../../medias/images/DSC_8437.JPG';
import gregoireDesktopImg from '../../medias/images/DSC_8437_inverted.JPG';
import { useScroll } from '../utils/ScrollContext';

const About = () => {

    const { scrollTo } = useScroll();

    return (
        <Stack 
            direction='row'
            sx={{
                backgroundColor: {
                    xs: 'inherit',
                    lg: '#504131'
                }
            }}
        >
            <Box
                width='35vw'
                minHeight='100vh'
                sx={{
                    display: {
                        xs: 'none',
                        lg: 'flex'
                    },
                    bgcolor: '#504131'
                }}
            />
            <Box
                id="votre concierge"
                minHeight='100vh'
                sx={{
                    width: {
                        xs: '100vw',
                        lg: '65vw',
                    },
                    backgroundImage: {
                        xs: `linear-gradient(rgba(40, 24, 12, 0.47), rgba(40, 24, 12, 0.47)), url(${gregoireImg})`,
                        lg: `
                            linear-gradient(to right, rgba(80, 65, 49, 1) 0%, rgba(80, 65, 49, 0) 70%),
                            linear-gradient(rgba(40, 24, 12, 0.47), rgba(40, 24, 12, 0.47)), 
                            url(${gregoireDesktopImg})
                            `,
                    },
                    backgroundSize: 'cover',  
                    backgroundRepeat: 'no-repeat',  
                    backgroundPosition: {
                        xs: 'top left',
                        lg: 'top left'
                    },  
                    scrollMarginTop: '70px'
                }}
            >
                <Container
                    maxWidth={false}
                    disableGutters
                    sx={{
                        height: '100%',
                        width: '100%',
                        padding: '40px 7%',
                    }}
                >
                    <Stack
                        sx={{
                            maxWidth: {
                                xs: 'none',
                                lg: '50%',
                            },
                            position: {
                                xs: 'static',
                                lg: 'relative'
                            },
                            right: '50%'
                        }}
                    >
                        <Stack spacing={2} marginBottom='115px'>
                            <Typography
                                align='center'
                                component='h2'
                                fontFamily='cormorant, serif'
                                fontWeight='600'
                                textTransform='uppercase'
                                lineHeight='1.2'
                                sx={{
                                    color: '#fff',
                                    fontSize: {
                                        xs: '2.5em',

                                    }
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
                        <Stack spacing={2}>
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
                                    fontSize='1.2em'
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
                                    fontSize='1.2em'
                                    fontWeight='300'
                                    lineHeight='2'
                                    sx={{
                                        color: '#fff'
                                    }}
                                >
                                    À 34 ans, j'ai choisi de poser mes valises dans cette magnifique région, riche en culture et en beauté naturelle, pour me consacrer à mon objectif : <strong>proposer un service de conciergerie de qualité.</strong>
                                </Typography>
                                <Typography
                                    fontFamily='Dosis, sans-serif'
                                    fontSize='1.2em'
                                    fontWeight='300'
                                    lineHeight='2'
                                    sx={{
                                        color: '#fff'
                                    }}
                                >
                                    Après plusieurs années d'expérience dans le conseil clientèle de luxe, je mets à présent mon savoir-faire au service des propriétaires exigeants, désireux de maximiser leurs revenus locatifs sans tracas.
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
                </Container>
            </Box>
        </Stack>
        
    );
};

export default About;