import { Box, Button, Card, Collapse, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PriceServices from './PriceServices';
import { useScroll } from '../utils/ScrollContext';

const PriceCard = ({ bgGradient, bgImg, bgColor, title, subtitle, price, servicesList }) => {

    const timeoutRef = useRef(null);

    const [showServices, setShowServices] = useState(false);

    const { locomotiveScroll } = useScroll();

    const handleServicesDisplay = () => {
        setShowServices(!showServices);
        if (locomotiveScroll) {
            setTimeout(() => {
                locomotiveScroll.update();
              }, 500); 
        }
    }

    useEffect(() => {
        const currentTimeout = timeoutRef.current;
    
        return () => {
            if (currentTimeout) {
                clearTimeout(currentTimeout);
            }
        };
    }, []);

    return (
        <Card
            elevation={4}
            sx={{
                height: 'auto',
                width: '100%',
                maxWidth: '370px',
                borderRadius: '10px',
                bgcolor: bgColor
            }}
        >
            <Stack>
                <Stack
                    justifyContent='space-between'
                    sx={{
                        minHeight: '450px',
                        padding: '20px',
                        backgroundImage: `linear-gradient(${bgGradient}, ${bgGradient}), url(${bgImg})`,
                        backgroundSize: 'cover',  
                        backgroundRepeat: 'no-repeat',  
                        backgroundPosition: 'center',  
                    }}
                >
                    <Stack alignItems='center'>
                        <Typography
                            align='center'
                            component='h3'
                            fontFamily='Cormorant, serif'
                            fontSize='1.9em'
                            fontWeight='600'
                            textTransform='uppercase'
                            sx={{
                                color: '#FFFBF1'
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            align='center'
                            component='h3'
                            fontFamily='Dosis, sans-serif'
                            fontSize='1.1em'
                            fontWeight='200'
                            sx={{
                                color: '#FFE9BE'
                            }}
                        >
                            {subtitle}
                        </Typography>    
                        <Stack direction='row' alignItems='center' marginTop='20px'>
                            <Divider sx={{ width: '48px', marginRight: '10px', borderColor: '#E6C9A8'}} />
                            <Box height='10px' width='10px' borderRadius='50%' bgcolor={'#E6C9A8'} />
                            <Divider sx={{ width: '48px', marginLeft: '10px', borderColor: '#E6C9A8'}} />
                        </Stack>
                        <Stack padding='0 40px'>
                            <Typography
                                align='center'
                                component='h3'
                                fontFamily='Dosis, sans-serif'
                                fontSize='2.9em'
                                fontWeight='400'
                                marginTop='20px'
                                sx={{
                                    color: '#EAC985',
                                    textShadow: '-3px 2px 0 #4D3122'
                                }}
                            >
                                {price}
                            </Typography> 
                            <Typography
                                align='center'
                                component='p'
                                fontFamily='Dosis, sans-serif'
                                fontSize='1em'
                                fontWeight='200'
                                // marginTop='20px'
                                sx={{
                                    color: '#FFFBF1',
                                }}
                            >
                                des loyers, <strong>hors frais de ménage</strong> (à la charge du voyageur)
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack 
                        alignItems='center'
                        onClick={() => handleServicesDisplay()}
                        marginTop='20px'
                    >
                        <Button sx={{ width: 'fit-content', border: '1px solid #EAC985' }} >
                            <Typography
                                align='center'
                                component='p'
                                fontFamily='Dosis, sans-serif'
                                fontSize='1em'
                                fontWeight='400'
                                sx={{
                                    color: '#EAC985',
                                }}
                            >
                                Services
                            </Typography>
                            {showServices ? <ExpandLess sx={{ color: '#EAC985' }} /> : <ExpandMore sx={{ color: '#EAC985' }} />}
                        </Button>
                    </Stack>
                </Stack>
                <Collapse in={showServices} timeout="auto" unmountOnExit>
                    <Stack bgcolor={bgColor} padding='10px 20px 30px 20px'>
                        {
                            servicesList.map((li) => {
                                return(
                                    <PriceServices key={li.id} description={li.description} />
                                )
                            })
                        }
                    </Stack>
                </Collapse>
            </Stack>
        </Card>
    );
};

export default PriceCard;