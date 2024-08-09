import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import PriceCard from './PriceCard';
import { pricesContent } from '../../content/prices/pricesContent';
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

const Prices = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1,
    });

    return (
        <Box
            marginTop='200px'
            bgcolor='#DEC5A8'
        >
            <Container
                sx={{
                    width: '100vw',
                    padding: '40px 7%',
                }}
            >
                <Stack
                    id='tarifs'
                    ref={ref}
                    direction={{
                        xs: 'column',
                        md: 'row'
                    }}
                    rowGap='40px'
                    columnGap='2vw'
                    justifyContent='space-evenly'
                    alignItems='center'
                    marginTop='-230px'
                    sx={{
                        scrollMarginTop: '70px',
                        alignItems: {
                            xs: 'center',
                            md: 'flex-start'
                        }
                    }}
                >
                    {
                        pricesContent.map((card, index) => {
                            return(
                                <Box
                                    key={card.id}
                                    sx={{
                                        animation: inView ? `${fadeIn} 0.6s ease-out forwards` : 'none',
                                        animationDelay: `${index * 0.3}s`,
                                        opacity: 0, // Initial state before animation
                                    }}
                                >
                                    <PriceCard
                                        bgGradient={card.bgGradient}
                                        bgImg={card.bgImg}
                                        bgColor={card.bgColor}
                                        title={card.title}
                                        subtitle={card.subtitle}
                                        price={card.price}
                                        servicesList={card.servicesList}
                                    />
                                </Box>
                                
                            )
                        })
                    }
                </Stack>
            </Container>
        </Box>
    );
};

export default Prices;