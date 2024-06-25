import { Container, Stack } from '@mui/material';
import React from 'react';
import BenefitCard from './BenefitCard';
import EuroIcon from '@mui/icons-material/Euro';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpaIcon from '@mui/icons-material/Spa';

const benefitsText = [
    {
        id: 0,
        icon: <EuroIcon sx={{ fontSize: '50px', color: '#6C462A'}} />,
        title: 'Rentabilité accrue',
        text: 'Maximisez vos revenus locatifs grâce à une tarification efficace adaptée aux tendances du marché.'
    },
    {
        id: 1,
        icon: <AccessTimeIcon sx={{ fontSize: '50px', color: '#6C462A'}} />,
        title: 'Gain de temps',
        text: 'Libérez-vous des contraintes de la gestion locative quotidienne et économisez des heures précieuses.'
    },
    {
        id: 2,
        icon: <SpaIcon sx={{ fontSize: '50px', color: '#6C462A'}} />,
        title: 'Tranquillité d\'esprit',
        text: 'Dormez sur vos deux oreilles, sachant que votre propriété est gérée avec soin et professionnalisme.'
    },
]

const Benefits = () => {
    return (
        <Container
            sx={{
                width: '100vw',
                padding: '60px 7% 40px 7%',
            }}
        >
            <Stack 
                justifyContent='space-evenly'
                alignItems='center'    
                rowGap='57.5px'
            >
                {
                    benefitsText.map((obj) => {
                        return(
                            <BenefitCard key={obj.id} icon={obj.icon} title={obj.title} text={obj.text} />
                        )
                    })
                }
            </Stack>

        </Container>
    );
};

export default Benefits;