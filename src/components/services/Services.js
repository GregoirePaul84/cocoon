import { Container, Box, Stack } from '@mui/material';
import React from 'react';
import cameraImg from '../../medias/images/camera.webp';
import laptopImg from '../../medias/images/laptop.webp';
import keysImg from '../../medias/images/keys.webp';
import productsImg from '../../medias/images/products.webp';
import assistanceImg from '../../medias/images/assistance.webp';
import cleaningImg from '../../medias/images/cleaning.webp';
import ServiceCard2 from './ServiceCard2';

const servicesContent = [
    {
        id: 0,
        bgcolor: '#bfa484',
        direction: 'row',
        img: cameraImg,
        title: 'Mise en valeur de votre bien',
        description: <>Nous sublimons votre propriété avec des <strong>photographies professionnelles</strong> et des <strong>annonces rédigées avec soin</strong> pour maximiser son attrait sur les plateformes de réservation.</>
    },
    {
        id: 1,
        bgcolor: '#c4b4a1',
        direction: 'row-reverse',
        img: laptopImg,
        title: 'Gestion des réservations',
        description: <>Nous <strong>gérons vos annonces</strong> sur des plateformes telles que Booking et Airbnb, en assurant une <strong>réponse rapide et efficace</strong> aux requêtes des voyageurs.</>
    },
    {
        id: 2,
        bgcolor: '#e4d9cd',
        direction: 'row',
        img: keysImg,
        title: 'Entrée / Sortie des voyageurs',
        description: <>Nous <strong>accueillons chaleureusement les voyageurs</strong>, gérons la remise et la récupération des clés, et assurons un <strong>état des lieux méticuleux</strong> à chaque rotation.</>
    },
    {
        id: 3,
        bgcolor: '#bfa484',
        direction: 'row-reverse',
        img: productsImg,
        title: 'Accueil personnalisé',
        description: <>Nous mettons à disposition un <strong>livret d'accueil</strong> afin de guider les voyageurs lors de leur séjour. Nous offrons également une sélection de <strong>produits de bienvenue</strong>, comme du vin et des spécialités locales.</>
    },
    {
        id: 4,
        bgcolor: '#c4b4a1',
        direction: 'row',
        img: assistanceImg,
        title: 'Assistance aux voyageurs',
        description: <>Disponibles <strong>24h/24 et 7j/7</strong>, nous offrons une <strong>assistance continue aux voyageurs</strong>, prêts à résoudre tout problème qui pourrait survenir durant leur séjour.</>
    },
    {
        id: 5,
        bgcolor: '#e4d9cd',
        direction: 'row-reverse',
        img: cleaningImg,
        title: 'Ménage et entretien',
        description: <>Nous effectuons un <strong>ménage de niveau hôtelier</strong>, nous occupons de la blanchisserie et de la maintenance courante, tout en fournissant les consommables (papier toilette, thé, café...)</>
    },
]

const Services = () => {
    return (
        <Box
            bgcolor='#e9d4bc'
            sx={{
                marginTop: {
                    xs: '150px',
                    md: '200px'
                },
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    width: '100vw',
                    padding: {
                        xs: '40px 5vw 60px 5vw',
                        md: '40px 5vw 80px 5vw'
                    }
                }}
            >
                <Stack 
                    id='services' 
                    marginTop='-162px'
                    sx={{
                        rowGap: {
                            xs: '40px',
                            md: '100px'
                        }
                    }}
                >
                    {
                        servicesContent.map((service) => {
                            return(
                                <ServiceCard2 
                                    key={service.id}
                                    direction={service.direction}
                                    title={service.title}
                                    img={service.img}
                                    description={service.description}
                                />
                            )   
                            
                        })
                    }
                </Stack>
            </Container>
        </Box>
    );
};

export default Services;