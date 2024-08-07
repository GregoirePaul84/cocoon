import { Card, Box, Stack, Typography, Divider } from '@mui/material';
import React from 'react';

const ServiceCard = ({ bgcolor, borderColor, dividerColor, titleColor, textColor, img, title, description }) => {

    return (
        <Card
            elevation={4}
            sx={{
                minHeight: '570px',
                maxWidth: '370px',
                // bgcolor: bgcolor,
                background : bgcolor,
                borderRadius: '10px',
            }}
        >
            <Stack
                spacing={2}
                // height='calc(100% - 41.6px)'
                width='calc(100% - 41.6px)'
                alignItems='center'
                padding='30px 20px 20px 20px'
                margin='20px'
                border='1px solid #967941'
                sx={{
                    borderRadius: '10px'
                }}
            >
                <Box 
                    sx={{
                        height: '125px',
                        width: '125px',
                        border: '2px solid #8F6648',
                        borderRadius: '100%',
                        backgroundImage: `linear-gradient(rgba(203, 166, 126, 0.15), rgba(203, 166, 126, 0.15)), url(${img})`,
                        backgroundSize: 'cover',  
                        backgroundRepeat: 'no-repeat',  
                        backgroundPosition: 'center'  
                    }}
                />
                <Typography
                    align='center'
                    component='h3'
                    fontFamily='Cormorant, serif'
                    fontSize='1.7em'
                    fontWeight='600'
                    letterSpacing='-1px'
                    textTransform='uppercase'
                    color='#623E2A'
                    // sx={{
                    //     color: titleColor
                    // }}
                >
                    {title}

                </Typography>
                <Stack direction='row' alignItems='center' position='relative' top='5px'>
                    <Divider sx={{ width: '48px', marginRight: '10px', borderColor: '#69542b'}} />
                    <Box height='10px' width='10px' borderRadius='50%' bgcolor='#69542b' />
                    <Divider sx={{ width: '48px', marginLeft: '10px', borderColor:'#69542b'}} />
                </Stack>
                <Stack flexGrow='1' justifyContent='center'>
                    <Typography
                        component='p'
                        align='center'
                        fontFamily='Dosis, sans-serif'
                        fontSize='1.2em'
                        fontWeight='200'
                        lineHeight='2'
                        marginBottom='20px'
                        color='#392c22'
                        // sx={{
                        //     color: textColor
                        // }}
                    >
                        {description}
                    </Typography>
                </Stack>
            </Stack>

        </Card>
    );
};

export default ServiceCard;