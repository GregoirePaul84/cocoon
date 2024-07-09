export const stepsContent = (scrollTo) => [
    {
        id: 1,
        title: 'Première prise de contact',
        description: <>Appellez nous au <strong>04.48.15.08.72</strong> ou contactez-nous
        via&nbsp; 
            <button 
                style={{ 
                    border: 'none', 
                    background: 'none', 
                    padding: '0',
                    color: 'inherit', 
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    fontWeight: '700', 
                    cursor: 'pointer' 
                }} onClick={() => scrollTo('contact', 0)} 
            >
                notre formulaire
            </button>
            &nbsp;en ligne.
        </>
    },
    {
        id: 2,
        title: 'Entretien et évaluation',
        description: 'Entretien téléphonique afin de discuter en détail de vos besoins et attentes, visite et état des lieux de votre propriété, réponse à vos questions.'
    },
    {
        id: 3,
        title: 'Signature du contrat',
        description: 'Selon vos besoins, choisissez l\'une de nos trois formules: "Clés en main", "Clés confort", ou "Clés essentielles".'
    },
    {
        id: 4,
        title: 'Mise en valeur de votre propriété',
        description: 'Shooting photo professionnel afin de mettre en valeur votre logement, des annonces rédigées avec soin sur les plateformes de réservations (disponible dans les formules "Clés en main" et "Clés confort").'
    },
    {
        id: 5,
        title: 'Gestion quotidienne',
        description: 'Gestion du calendrier de réservations et communications avec les voyageurs 24/7 (disponible dans les formules "Clés en main" et "Clés confort").'
    },
    {
        id: 6,
        title: 'Opérations sur place',
        description: 'Entrées et sorties gérées professionnellement, état des lieux de sortie. Nettoyage de qualité hôtelière, approvisionnement des produits, maintenance régulière pour assurer le confort des voyageurs et la durabilité de votre bien.'
    },
    {
        id: 7,
        title: 'Gestion financière',
        description: 'Les loyers sont directement versés sur votre compte. À la fin de chaque mois, nous vous adressons une facture détaillant nos services et les frais correspondants. Vous ne payez que lorsque votre logement est loué !'
    },
]