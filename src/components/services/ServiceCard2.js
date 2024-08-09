import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServiceCard2 = ({ direction, title, img, description }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Animation déclenchée une seule fois
        threshold: 0.7, 
    });

    return (
        <Stack 
            direction={{
                xs: 'column',
                md: direction
            }}
            alignItems={{
                xs: 'center',
                md: 'flex-start'
            }}
        >
            <Stack 
                ref={ref}
                maxHeight='572px'
                maxWidth='450px' 
                bgcolor='#504131'
                sx={{
                    width: {
                        xs: '90vw',
                        md: 'calc(50vw - 5vw)'
                    },
                    minWidth: {
                        xs: 'auto',
                        sm: '400px'
                    },
                    boxShadow: {
                        xs: 'none',
                        md: '-25px -20px 0 #403326'
                    },
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    animation: inView ? `${fadeIn} 1s ease-out` : 'none',
                }}   
            >
                <Box
                    bgcolor='#504131'
                >
                    <Stack height='122px' justifyContent='center'>
                        <Typography
                            align='center'
                            component='h3'
                            fontFamily='Cormorant, serif'
                            fontSize='1.7em'
                            fontWeight='600'
                            letterSpacing='-1px'
                            textTransform='uppercase'
                            color='#fff'
                            padding='0 20px'
                        >
                            {title}

                        </Typography>
                    </Stack>
                    
                </Box>
                <Box
                    sx={{
                        height: {
                            xs: '90vw',
                            md: '50vw'
                        },
                        width: {
                            xs: '90vw',
                            md: 'auto'
                        },
                        maxHeight: '450px',
                        maxWidth: '450px',
                        backgroundImage: `linear-gradient(rgba(203, 166, 126, 0.15), rgba(203, 166, 126, 0.15)), url(${img})`,
                        backgroundSize: 'cover',  
                        backgroundRepeat: 'no-repeat',  
                        backgroundPosition: 'center'
                    }}
                >

                </Box>
            </Stack>
            <Stack 
                flexGrow='1'
                sx={{
                    marginTop: {
                        xs: '20px',
                        md: '0'
                    }
                }}
            >
                <Box 
                    sx={{
                        height: {
                            xs: '0px',
                            md: '122px'
                        },
                        width: {
                            xs: '90vw',
                            md: '45vw'
                        }
                    }}
                
                />
                <Stack marginTop='40px' >
                    <Typography
                        component='p'
                        align='center'
                        fontFamily='Dosis, sans-serif'
                        fontSize='1.8em'
                        fontWeight='200'
                        lineHeight='3'
                        marginBottom='20px'
                        color='#58371f'
                        sx={{
                            padding: direction === 'row' ? '0 0 0 5vw' : '0 7vw 0 0',
                            fontSize: {
                                xs: '1.5em',
                                md: '1.4em',
                                lg: '1.5em'
                            },
                            lineHeight: {
                                xs: '2.5',
                                md: '3'
                            }
                        }}
                    >
                        {description}
                    </Typography>   
                </Stack>
                
        </Stack>
        </Stack>
    );
};

export default ServiceCard2;