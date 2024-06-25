import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { stepsContent } from '../../content/steps/stepsContent';
import StepPart from './StepPart';

const Steps = () => {
    return (
        <Container
            sx={{
                width: '100vw',
                padding: '40px 7%',
            }}
        >
            <Stack spacing={4}>
                <Stack spacing={1}>
                    <Typography
                        align='center'
                        component='p'
                        fontFamily='Dosis, sans-serif'
                        fontSize='1.4em'
                        fontWeight='400'
                        sx={{
                            color: '#6C462A'
                        }}
                    >
                        Je suis intéressé(e) par vos services.
                    </Typography>
                    <Typography
                        align='center'
                        component='p'
                        fontFamily='Dosis, sans-serif'
                        fontSize='1.4em'
                        fontWeight='600'
                        sx={{
                            color: '#6C462A'
                        }}
                    >
                        Comment faire ?
                    </Typography>
                </Stack>
                <Stack>
                    {
                        stepsContent.map((step, index) => {
                            return(
                                <StepPart key={step.id} step={step} isArrowVisible={stepsContent.length - 1 === index} />
                            )
                        })
                    }
                </Stack> 
            </Stack>
        </ Container>
    );
};

export default Steps;