import { Stack, Accordion, AccordionDetails, AccordionSummary, Box, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questionsList = [
    {
        id: 0,
        question: 'Quels types de services proposez-vous pour la gestion de résidences secondaires ?',
        answer: 'Nous offrons une gamme complète de services pour maximiser votre tranquillité d\'esprit et la rentabilité de votre bien. Cela inclut la prise de photos professionnelles, la mise en ligne des annonces, la communication avec les clients, l\'accueil et la remise des clés, la mise à disposition de produits locaux, le ménage, et la gestion des urgences 24/7.'
    },
    {
        id: 1,
        question: 'Comment déterminez-vous le prix de location de mon logement ?',
        answer: 'Le prix est établi en fonction de plusieurs facteurs, tels que l\'emplacement, la taille, les équipements du logement et les tarifs du marché local. Nous utilisons des données de marché actuelles pour optimiser les tarifs et maximiser vos revenus, tout en restant compétitifs.'
    },
    {
        id: 2,
        question: 'Puis-je choisir les locataires ?',
        answer: 'Oui, vous pouvez définir des critères de sélection des locataires. Nous nous chargeons du processus de vérification et vous proposons les candidats qui correspondent à vos critères pour une approbation finale.'
    },
    {
        id: 3,
        question: 'Que se passe-t-il en cas de dommages ou de problèmes pendant la location ?',
        answer: 'En cas de dommage, nous contactons immédiatement le locataire pour une résolution rapide et utilisons la caution pour couvrir les coûts de réparation. Nous vous tenons informé à chaque étape et gérons toutes les réparations nécessaires de manière efficace.'
    },
    {
        id: 4,
        question: 'Quelle est la durée d\'engagement avec votre service ?',
        answer: 'Nous proposons différentes formules d\'engagement, allant de contrats flexibles sans engagement à long terme à des accords annuels, selon vos préférences.'
    },
    {
        id: 5,
        question: 'Comment puis-je commencer à travailler avec vous ?',
        answer: 'Contactez-nous via notre site web ou par téléphone pour planifier une consultation gratuite. Nous discuterons de vos besoins, examinerons votre propriété et vous proposerons un plan personnalisé adapté à vos objectifs.'
    },
]

const Faq = () => {
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