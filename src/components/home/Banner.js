import { Container, Divider, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import useTypewriterEffect from '../../hooks/useTypewriterEffect';

const Banner = ({ index, topTitle, bottomTitle, description, currentSlide }) => {

    const [text, cursorVisible] = useTypewriterEffect([topTitle, bottomTitle], 75, currentSlide, index);

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
                                xs: 'calc(6em * 1.2)',
                                sm: 'calc(8em * 1.2)',
                                md: 'calc(8em * 1.2)',
                                lg: 'calc(10em * 1.2)'
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
                                    md: '4.5em',
                                    lg: '5em'
                                }
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
                            minWidth: '100px',
                            borderColor: '#EAC985',
                            borderBottomWidth: '2.5px',
                            alignSelf: 'center'
                        }}
                    />
                    <Stack alignItems='center'>
                        <Typography
                            align='center'
                            component='p'
                            color='#fff'
                            fontFamily='Dosis, sans-serif'
                            fontWeight='100'
                            lineHeight='2.5'
                            sx={{
                                maxWidth: {
                                    xs: '350px',
                                    sm: '65vw',
                                    md: '500px',
                                    xl: '700px'
                                },
                                fontSize: {
                                    xs: '1em',
                                    sm: '1.6em',
                                    md: '1.4em',
                                    xl: '1.6em'
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
                    <a href={'#services'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button
                            variant='contained'
                            sx={{ 
                                width: 'fit-content',
                                padding: {
                                    sx: '5px 16px 6px 16px',
                                    sm: '7px 20px 8px 20px',
                                },
                                fontFamily: 'Dosis, sans-serif',
                                fontSize: {
                                    xs: '0.9em',
                                    sm: '1.15em',
                                },
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
            </Stack>
            
        </Container>
    );
};

export default Banner;