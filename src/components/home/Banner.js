import { Container, Divider, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import useTypewriterEffect from '../../hooks/useTypewriterEffect';
import { useScroll } from '../utils/ScrollContext';

const Banner = ({ index, isAnimationEnded, topTitle, bottomTitle, description, currentSlide }) => {

    const [text, cursorVisible] = useTypewriterEffect([topTitle, bottomTitle], 75, currentSlide, index, isAnimationEnded);

    const { scrollTo } = useScroll();

    return (
        <Container
            sx={{
                minHeight: '100vh',
                width: '100vw',
                padding: '0 7%',
            }}
        >
            <Stack
                minHeight='100vh'
                paddingTop='24vh'
            >
                <Stack 
                    spacing={3}
                >
                    <Stack 
                        alignItems='center'
                        sx={{
                            minHeight: {
                                xs: 'calc(6em * 1.2)', // > 0px
                                sm: 'calc(8em * 1.2)', // > 600px
                                md: 'calc(9em * 1.2)', // > 900px
                                lg: 'calc(8em * 1.2)', // > 1200px
                                xl: 'calc(10em * 1.2)', // > 1536px
                            }
                        }}
                    >
                        <Typography
                            align='center'
                            color={'#fff'}
                            component={'h2'}
                            fontFamily={'Cormorant, serif'}
                            fontWeight={'700'}
                            letterSpacing={'-1.5px'}
                            lineHeight={'1.2'}
                            whiteSpace={'pre-line'}
                            sx={{
                                maxWidth: {
                                    xs: '300px',
                                    sm: '350px',
                                    md: '400px',
                                    lg: '430px'
                                },
                                fontSize: {
                                    xs: '3em',
                                    sm: '4em',
                                    md: '4em',
                                    lg: '4em',
                                    xl: '5em'
                                },
                            }}
                        >
                            {text}
                            <span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
                        </Typography>
                    </Stack>
                    <Divider
                        variant='middle'
                        sx={{
                            width: '9vw',
                            minWidth: '90px',
                            borderColor: '#EAC985',
                            borderBottomWidth: '3px',
                            alignSelf: 'center'
                        }}
                    />
                    <Stack alignItems='center'>
                        <Typography
                            align='center'
                            component='p'
                            color='#fff'
                            fontFamily='Dosis, sans-serif'
                            fontWeight='200'
                            sx={{
                                WebkitTextStroke: '0.15px black',
                                maxWidth: {
                                    xs: 'auto',
                                    sm: '65vw',
                                    md: '70vw',
                                    lg: '65vw',
                                    xl: '700px'
                                },
                                fontSize: {
                                    xs: '1em',
                                    sm: '1.4em',
                                    md: '1.5em',
                                    lg: '1.5em',
                                    xl: '1.7em'
                                },
                                lineHeight: {
                                    xs: '2.5',
                                    sm: '3',
                                    md: '3.3'
                                }
                            }}
                        >
                            { description }
                        </Typography> 
                    </Stack>
                                    
                </Stack>
                <Stack
                    alignItems='center'
                    margin='45px 0 70px 0'
                >
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
                        onClick={() => scrollTo('services', -40)}
                    >
                        Découvrez nos services
                    </Button>
                </Stack>
            </Stack>
            
        </Container>
    );
};

export default Banner;