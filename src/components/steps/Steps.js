import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { stepsContent } from '../../content/steps/stepsContent';
import StepPart from './StepPart';
import { useScroll } from '../utils/ScrollContext';

const Steps = () => {

    const { scrollTo } = useScroll(); 
    const content = stepsContent(scrollTo);

    return (
        <Container
            sx={{
                width: '100vw',
                padding: '60px 7% 40px 7%',
            }}
        >
            <Stack spacing={8}>
                <Stack spacing={1}>
                    <Typography
                        align='center'
                        component='p'
                        fontFamily='Dosis, sans-serif'
                        fontSize='2.3em'
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
                        fontSize='2em'
                        fontWeight='600'
                        sx={{
                            color: '#6C462A'
                        }}
                    >
                        Comment faire ?
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        alignItems: {
                            xs: 'flex-start',
                            md: 'center'
                        }
                    }}
                >
                    {
                        content.map((step, index) => {
                            return(
                                <StepPart key={step.id} step={step} isArrowVisible={content.length - 1 === index} />
                            )
                        })
                    }
                </Stack> 
            </Stack>
        </ Container>
    );
};

export default Steps;