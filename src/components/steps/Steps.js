import { Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { stepsContent } from '../../content/steps/stepsContent';
import { useScroll } from '../utils/ScrollContext';
import StepPart2 from './StepPart2';

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
                        Comment se passe la suite ?
                    </Typography>
                </Stack>
                <Grid container spacing={2}>
                    {content.map((step) => (
                        <Grid item xs={12} md={6} lg={4} key={step.id}>
                            <StepPart2 
                                number={step.id} 
                                img={step.img} 
                                title={step.title} 
                                description={step.description} 
                            />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </ Container>
    );
};

export default Steps;