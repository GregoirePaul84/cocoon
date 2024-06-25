import { Container, Box, Stack } from '@mui/material';
import React from 'react';
import ServiceCard from './ServiceCard';
import cameraImg from '../../medias/images/camera.webp';
import laptopImg from '../../medias/images/laptop.webp';
import keysImg from '../../medias/images/keys.webp';
import assistanceImg from '../../medias/images/assistance.webp';
import cleaningImg from '../../medias/images/cleaning.webp';
import swimmingPoolImg from '../../medias/images/swimming_pool.webp';

const servicesContent = [
    {
        id: 0,
        bgcolor: '#504131',
        borderColor: '#8F6648',
        dividerColor: '#E6C9A8',
        titleColor: '#FFFBF1',
        textColor: '#FFE9BE',
        img: cameraImg,
        title: 'Mise en valeur de votre bien',
        description: <>Nous sublimons votre propriété avec des <strong>photographies professionnelles</strong> et des <strong>annonces rédigées avec soin</strong> pour maximiser son attrait sur les plateformes de réservation.</>
    },
    {
        id: 1,
        bgcolor: '#E7CAA9',
        borderColor: '#504131',
        dividerColor: '#8F6648',
        titleColor: '#504131',
        textColor: '#504131',
        img: laptopImg,
        title: 'Gestion des réservations',
        description: <>Nous <strong>gérons vos annonces</strong> sur des plateformes telles que Booking et Airbnb, en assurant une <strong>réponse rapide et efficace</strong> aux requêtes des voyageurs.</>
    },
    {
        id: 2,
        bgcolor: '#504131',
        borderColor: '#8F6648',
        dividerColor: '#E6C9A8',
        titleColor: '#FFFBF1',
        textColor: '#FFE9BE',
        img: keysImg,
        title: 'Entrée / Sortie des voyageurs',
        description: <>Nous <strong>accueillons chaleureusement les voyageurs</strong>, gérons la remise et la récupération des clés, et assurons un <strong>état des lieux méticuleux</strong> à chaque rotation.</>
    },
    {
        id: 3,
        bgcolor: '#E7CAA9',
        borderColor: '#504131',
        dividerColor: '#8F6648',
        titleColor: '#504131',
        textColor: '#504131',
        img: assistanceImg,
        title: 'Assistance aux voyageurs',
        description: <>Disponibles <strong>24h/24 et 7j/7</strong>, nous offrons une <strong>assistance continue aux voyageurs</strong>, prêts à résoudre tout problème qui pourrait survenir durant leur séjour.</>
    },
    {
        id: 4,
        bgcolor: '#504131',
        borderColor: '#8F6648',
        dividerColor: '#E6C9A8',
        titleColor: '#FFFBF1',
        textColor: '#FFE9BE',
        img: cleaningImg,
        title: 'Ménage et entretien',
        description: <>Nous effectuons un <strong>ménage de niveau hôtelier</strong>, nous occupons de la blanchisserie et de la maintenance courante, tout en fournissant les consommables (papier toilette, thé, café...)</>
    },
    {
        id: 5,
        bgcolor: '#E7CAA9',
        borderColor: '#504131',
        dividerColor: '#8F6648',
        titleColor: '#504131',
        textColor: '#504131',
        img: swimmingPoolImg,
        title: 'Soin piscine & Jardin',
        description: <>Nous <strong>maintenons votre piscine et vos espaces verts en parfait état</strong>, assurant un cadre extérieur aussi accueillant et soigné que l’intérieur de votre propriété.</>
    },
]

const Services = () => {
    return (
        <Box
            marginTop='200px'
            bgcolor='#CBA67E'
        >
            <Container
                sx={{
                    width: '100vw',
                    padding: '40px 7%',
                }}
            >
                <Stack
                    id='services'
                    rowGap='40px'
                    alignItems='center'
                    marginTop='-218px'
                    sx={{
                        scrollMarginTop: '70px'
                    }}
                >
                    {
                        servicesContent.map((card) => {
                            return(
                                <ServiceCard 
                                    key={card.id}
                                    bgcolor={card.bgcolor} 
                                    borderColor={card.borderColor} 
                                    dividerColor={card.dividerColor}
                                    titleColor={card.titleColor}
                                    textColor={card.textColor}
                                    img={card.img}
                                    title={card.title}
                                    description={card.description}
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