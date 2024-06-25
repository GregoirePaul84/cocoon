import { Box, Container, Divider, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import useTypewriterEffect from '../../hooks/useTypewriterEffect';

const Banner = ({ index, topTitle, bottomTitle, description, currentSlide }) => {

    const [text, cursorVisible] = useTypewriterEffect([topTitle, bottomTitle], 75, currentSlide, index);

    console.log('le slide =>', currentSlide);

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
                paddingTop='25vh'
            >
                <Stack 
                    spacing={2}
                >
                    <Box minHeight='calc(6.2em * 1.1)'>
                        <Typography
                            align='center'
                            color={'#fff'}
                            component={'h2'}
                            fontFamily={'Cormorant, serif'}
                            fontSize={'3.1em'}
                            fontWeight={'700'}
                            letterSpacing={'-1.5px'}
                            lineHeight={'1.1'}
                            whiteSpace={'pre-line'}
                        >
                            {text}<span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
                        </Typography>
                    </Box>
                    <Divider
                        variant='middle'
                        sx={{
                            width: '100px',
                            borderColor: '#EAC985',
                            borderBottomWidth: '2px',
                            alignSelf: 'center'
                        }}
                    />
                    <Stack alignItems='center'>
                        <Typography
                            align='center'
                            component='p'
                            color='#fff'
                            fontSize='1.1em'
                            fontFamily='Dosis, sans-serif'
                            fontWeight='100'
                            lineHeight='2.5'
                            maxWidth='500px'
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
                                padding: '5px 16px 6px 16px',
                                fontFamily: 'Dosis, sans-serif',
                                fontSize: '0.9em',
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