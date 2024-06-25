import goldKeyImg from '../../medias/images/gold_key.webp';
import silverKeyImg from '../../medias/images/silver_key.webp';
import bronzeKeyImg from '../../medias/images/bronze_key.webp';

export const pricesContent = [
    {
        id: 0,
        bgGradient: 'rgba(69, 50, 0, 0.62)',
        bgImg: goldKeyImg,
        bgColor: '#71582D',
        title: <>Service "clés en <br />main"</>,
        subtitle: 'Pour les propriétaires n\'habitant par sur place ou qui souhaitent un service de A à Z',
        price: '25%',
        servicesList: [
            {
                id: 0,
                description: 'Mise en valeur de votre bien'
            },
            {
                id: 1,
                description: 'Gestion des réservations'
            },
            {
                id: 2,
                description: 'Entrée / sortie des voyageurs'
            },
            {
                id: 3,
                description: 'Assistance voyageurs 24 / 7'
            },
            {
                id: 4,
                description: 'Ménage de qualité hôtelière'
            },
            {
                id: 5,
                description: 'Gestion du linge (non fourni)'
            },
            {
                id: 6,
                description: 'Réassort des produits de première nécessité (papier toilette, savon...)'
            },
            {
                id: 7,
                description: 'Réassort des produits secondaires (thé, café, huile, shampoing, gel douche...)'
            },
            {
                id: 8,
                description: 'Petits entretiens (changement ampoules, débouchage, nettoyage des filtres de climatisation...)'
            },
        ]
    },
    {
        id: 1,
        bgGradient: 'rgba(69, 69, 69, 0.62)',
        bgImg: silverKeyImg,
        bgColor: '#746F68',
        title: <>Service "clés en <br />confort"</>,
        subtitle: 'Pour les propriétaires qui souhaitent se libérer des tâches chronophages',
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
        title: <>Service "clés en <br />essentielles"</>,
        subtitle: 'Pour les propriétaires n\'habitant par sur place ou qui souhaitent un service de A à Z',
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