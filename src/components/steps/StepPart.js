import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const StepPart = ({ step, isArrowVisible }) => {
    return (
        <Stack key={step.id} direction='row' spacing={3} >
            <Stack alignItems='center'>
                <Stack
                    height='50px'
                    width='50px'
                    borderRadius='50%'
                    bgcolor='#EAC985'
                    justifyContent='center'
                    alignItems='center'
                    boxShadow='-4px -0.5px 0 #6C462A'
                >
                    <Typography
                        component='p'
                        fontFamily='Dosis, sans-serif'
                        fontSize='2em'
                        fontWeight='600'
                        sx={{
                            color: '#6C462A'
                        }}
                    >
                        {`${step.id}`}
                    </Typography>
                </Stack>
                <Box
                    flexGrow='1'
                    minHeight='200px'
                    width='7px'
                    bgcolor='#EAC985'
                    boxShadow='-3.5px 0 0 #6C462A' 
                />
                {isArrowVisible ?
                    <Box position='relative'>
                        <Box 
                            sx={{
                                
                                width: 0,
                                height: 0,
                                borderLeft: '27px solid transparent',
                                borderRight: '27px solid transparent',
                                borderTop: '50px solid #EAC985',  
                            }}
                        />
                        <Box 
                            sx={{
                                width: 0,
                                height: 0,
                                borderLeft: '27px solid transparent',
                                borderRight: '27px solid transparent',
                                borderTop: '50px solid #6C462A',  
                                position: 'absolute',
                                top: '-1px',
                                left: '-4px',
                                zIndex: -1
                            }}
                        />
                        
                    </Box>    
                    :
                    null
                }
            </Stack>
            <Stack spacing={5} padding='8px 0 50px 0'>
                <Typography
                    component='p'
                    fontFamily='Dosis, sans-serif'
                    fontSize='1.4em'
                    fontWeight='700'
                    sx={{
                        width: {
                            xs: 'auto',
                            md: '50vw',
                            lg: '30vw'
                        },
                        color: '#504131'
                    }}
                >
                    {step.title}
                </Typography>
                <Typography
                    component='p'
                    fontFamily='Dosis, sans-serif'
                    fontSize='1.4em'
                    fontWeight='500'
                    sx={{
                        width: {
                            xs: 'auto',
                            md: '50vw',
                            lg: '30vw'
                        },
                        color: '#6C462A'
                    }}
                >
                    {step.description}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default StepPart;