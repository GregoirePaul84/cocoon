import { Stack, Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useScroll } from '../utils/ScrollContext';

const questionsList = [
    {
        id: 0,
        question: 'Qu\'est ce que la conciergerie Cocoon ?',
        answer: 'La Conciergerie Cocoon est une entreprise spécialisée dans la gestion locative saisonnière, dédiée à transformer votre propriété en une expérience parfaite pour les voyageurs tout en maximisant votre rentabilité. Notre mission est de fournir une gestion de location clé en main qui enlève le fardeau de la gestion quotidienne aux propriétaires immobiliers.'
    },
    {
        id: 1,
        question: 'À qui s\'adresse les services de la conciergerie Cocoon ?',
        answer: 'Nos services sont destinés aux propriétaires de biens meublés et bien entretenus qui souhaitent offrir une expérience de qualité à leurs hôtes. Nous collaborons avec des clients qui partagent notre engagement envers l\'excellence dans l\'accueil et le confort des voyageurs. Si vous possédez un logement en bon état, décoré avec soin et prêt à accueillir des hôtes, c\'est avec plaisir que nous travaillerons avec vous !'
    },
    {
        id: 2,
        question: 'Comment déterminez-vous le prix de location de mon logement ?',
        answer: 'Le prix est établi en fonction de plusieurs facteurs, tels que la saisonnalité, l\'emplacement, la taille, les équipements du logement et les tarifs du marché local. Nous utilisons des données de marché actuelles pour optimiser les tarifs et maximiser vos revenus, tout en restant compétitifs.'
    },
    {
        id: 3,
        question: 'Puis-je choisir les locataires ?',
        answer: 'Oui, vous pouvez définir des critères de sélection des locataires. Nous nous chargeons du processus de vérification selon vos critères (animaux acceptés ou non, maximum de voyageurs autorisés... ) et sélectionnons les voyageurs selon vos conditions.'
    },
    {
        id: 4,
        question: 'Que se passe-t-il en cas de dommages ou de problèmes pendant la location ?',
        answer: 'En cas de dommages ou de problèmes pendant la location, nous intervenons rapidement pour résoudre la situation. Nous travaillons en étroite collaboration avec les plateformes de réservations, qui offrent des assurances couvrant les dommages et les vols, afin de garantir que tout soit géré efficacement et sans tracas pour le propriétaire.'
    },
    {
        id: 5,
        question: 'Est-ce-que je pourrai encore occuper mon logement si je le loue sur Airbnb ou Booking ?',
        answer: 'Bien sûr ! Vous êtes maîtres du calendrier des réservations. Vous pouvez nous communiquer les dates où vous souhaitez occuper votre logement. Le logement étant contrôlé à chaque sortie de voyageurs, vous avez la garantie de trouver votre logement dans un état de propreté irréprochable.'
    }
]

const Faq = () => {

    const timeoutRef = useRef(null);

    const { locomotiveScroll } = useScroll();

    const updateLocomotiveScroll = () => {
        if (locomotiveScroll) {
            setTimeout(() => {
                locomotiveScroll.update();
              }, 300); 
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
        <Box
            bgcolor='#CBA67E'
        >
            <Container
                sx={{
                    width: '100vw',
                    padding: '40px 7%',
                }}
            >
                <Stack marginBottom='15px' >
                    <Typography 
                        fontFamily='"Dosis", sans-serif'
                        fontSize='1.6em'
                        fontWeight='500'
                        color='#5a371d'
                    >
                        FAQ <span style={{ fontFamily: '"League Spartan", sans-serif', fontSize: '1.4em', fontWeight: '700', letterSpacing: '-3.5px' }}>Cocoon</span>
                    </Typography>
                </Stack>
                <Stack spacing={3}>
                    {
                        questionsList.map((faq, index) => {
                            return(
                                <React.Fragment key={faq.id}>
                                    <Accordion 
                                        sx={{ 
                                            bgcolor: 'transparent', 
                                            boxShadow: 'none', 
                                            marginBottom: '10px',
                                            '&::before': {
                                                backgroundColor: 'transparent'
                                              }
                                        }}
                                        onClick={() => updateLocomotiveScroll()}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography
                                                fontFamily='Dosis, sans-serif'
                                                fontWeight='600'
                                                fontSize='1.1em'
                                                paddingRight='10px'
                                                sx={{
                                                    color: '#5a371d'
                                                }}
                                            >
                                                {faq.question}
                                            </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography
                                                    fontFamily='Dosis, sans-serif'
                                                    fontWeight='400'
                                                    fontSize='1.1em'
                                                    sx={{
                                                        color: '#6c462a'
                                                    }}
                                                >
                                                    {faq.answer}
                                                </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    {
                                        questionsList.length - 1 === index ?
                                            null
                                        :
                                            <Divider />
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </Stack>
            </Container>
        </Box>
    );
};

export default Faq;