import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import PriceCard from './PriceCard';
import { pricesContent } from '../../content/prices/pricesContent';

const Prices = () => {
    return (
        <Box
            marginTop='200px'
            bgcolor='#CBA67E'
        >
            <Container
                sx={{
                    width: '100vw',
                    padding: '40px 7%',
                }}
            >
                <Stack
                    id='tarifs'
                    rowGap='40px'
                    alignItems='center'
                    marginTop='-230px'
                    sx={{
                        scrollMarginTop: '70px'
                    }}
                >
                    {
                        pricesContent.map((card) => {
                            return(
                                <PriceCard
                                    key={card.id}
                                    bgGradient={card.bgGradient}
                                    bgImg={card.bgImg}
                                    bgColor={card.bgColor}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    price={card.price}
                                    servicesList={card.servicesList}
                                />
                            )
                        })
                    }
                </Stack>
            </Container>
        </Box>
    );
};

export default Prices;