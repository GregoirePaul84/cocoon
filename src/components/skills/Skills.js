import { Container, Stack } from '@mui/material';
import React from 'react';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import SkillCard from './SkillCard';

const skillsContent = [
    {
        id: 0,
        icon: <DiamondOutlinedIcon sx={{ fontSize: '40px', color: '#58371f', position: 'relative', top: '2px'}} />,
        title: <>Travail <br /> soigné</>,
        description: 'Chaque détail de la gestion de votre propriété sera traitée avec précision.'
    },
    {
        id: 1,
        icon: <HandshakeOutlinedIcon sx={{ fontSize: '40px', color: '#58371f', position: 'relative', top: '2px'}} />,
        title: <>Honnêteté et <br /> transparence</>,
        description: 'Pas de frais cachés, une communication claire et des rapports détaillés pour une totale tranquillité d\'esprit.'
    },
    {
        id: 2,
        icon: <PhoneInTalkOutlinedIcon sx={{ fontSize: '40px', color: '#58371f', position: 'relative', top: '2px'}} />,
        title: <>Diplomatie et <br /> réactivité</>,
        description: 'Une gestion des litiges réactive et dans le calme, une prise en charge rapide des communications.'
    },
]

const Skills = () => {
    return (
        <Container
            sx={{
                width: '100vw',
                padding: '60px 7%',
            }}
        >
            <Stack 
                direction={{
                    xs: 'column',
                    md: 'row'
                }}
                spacing={{
                    xs: 8,
                    md: 4
                }}
            >
                {
                    skillsContent.map((card) => {
                        return(
                            <SkillCard 
                                key={card.id}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        )
                    })
                }
            </Stack>
        </Container>
    );
};

export default Skills;