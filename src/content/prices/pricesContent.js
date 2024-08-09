import goldKeyImg from '../../medias/images/gold_key.webp';
import silverKeyImg from '../../medias/images/silver_key.webp';
import bronzeKeyImg from '../../medias/images/bronze_key.webp';

export const pricesContent = [
    {
        id: 0,
        bgGradient: 'rgba(69, 50, 0, 0.62)',
        bgImg: goldKeyImg,
        bgColor: '#71582D',
        title: <>Service "clés en main"</>,
        subtitle: 'Pour les propriétaires souhaitant une gestion totale et sans soucis',
        price: '25%',
        servicesList: [
            {
                id: 0,
                description: 'Mise en valeur de votre bien'
            },
            {
                id: 1,
                description: 'Achat des fournitures sur facture (literie, vaisselle...)'
            },
            {
                id: 2,
                description: 'Gestion des réservations'
            },
            {
                id: 3,
                description: 'Création d\'un livret d\'accueil personnalisé'
            },
            {
                id: 4,
                description: 'Entrée / sortie des voyageurs'
            },
            {
                id: 5,
                description: 'Assistance voyageurs 24 / 7'
            },
            {
                id: 6,
                description: 'Ménage de qualité hôtelière'
            },
            {
                id: 7,
                description: 'Gestion du linge (non fourni)'
            },
            {
                id: 8,
                description: 'Réassort des produits de première nécessité (papier toilette, savon...)'
            },
            {
                id: 9,
                description: 'Réassort des produits secondaires (thé, café, huile, shampoing, gel douche...)'
            },
            {
                id: 10,
                description: 'Petits entretiens (changement ampoules, débouchage, nettoyage des filtres de climatisation...)'
            },
        ]
    },
    {
        id: 1,
        bgGradient: 'rgba(69, 69, 69, 0.62)',
        bgImg: silverKeyImg,
        bgColor: '#746F68',
        title: <>Service "clés confort"</>,
        subtitle: 'Pour les propriétaires souhaitant se libérer des tâches chronophages',
        price: '20%',
        servicesList: [
            {
                id: 0,
                description: 'Gestion des réservations'
            },
            {
                id: 1,
                description: 'Entrée / sortie des voyageurs'
            },
            {
                id: 2,
                description: 'Assistance voyageurs 24 / 7'
            },
            {
                id: 3,
                description: 'Ménage de qualité hôtelière'
            },
            {
                id: 4,
                description: 'Gestion du linge (non fourni)'
            },
            {
                id: 5,
                description: 'Réassort des produits de première nécessité (papier toilette, savon...)'
            },
        ]
    },
    {
        id: 2,
        bgGradient: 'rgba(42, 30, 0, 0.60)',
        bgImg: bronzeKeyImg,
        bgColor: '#68563A',
        title: <>Service "clés essentielles"</>,
        subtitle: 'Pour les propriétaires intéressés par les aspects essentiels de la location',
        price: '15%',
        servicesList: [
            {
                id: 0,
                description: 'Entrée / sortie des voyageurs'
            },
            {
                id: 1,
                description: 'Ménage de qualité hôtelière'
            },
            {
                id: 5,
                description: 'Réassort des produits de première nécessité (papier toilette, savon...)'
            },
        ]
    },
]