import formImg from '../../medias/images/step_form.webp';
import houseImg from '../../medias/images/step_house.webp';
import contractImg from '../../medias/images/step_contract.webp';
import cameraImg from '../../medias/images/step_camera.webp';
import calendarImg from '../../medias/images/step_calendar.webp';
import cleaningImg from '../../medias/images/step_cleaning.webp';
import invoiceImg from '../../medias/images/step_invoice.webp';

export const stepsContent = (scrollTo) => [
    {
        id: 1,
        img: formImg,
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
        img: houseImg,
        title: 'Entretien et évaluation',
        description: <>Entretien téléphonique afin de discuter en détail de vos besoins et attentes, <strong>visite et état des lieux de votre propriété</strong>, réponse à vos questions.</>
    },
    {
        id: 3,
        img: contractImg,
        title: 'Signature du contrat',
        description: <>Selon vos besoins, choisissez <strong>l'une de nos trois formules :</strong> "Clés en main", "Clés confort", ou "Clés essentielles".</>
    },
    {
        id: 4,
        img: cameraImg,
        title: 'Mise en valeur de votre propriété',
        description: <><strong>Shooting photo professionnel</strong> afin de mettre en valeur votre logement, des <strong>annonces rédigées avec soin</strong> sur les plateformes de réservations (disponible dans la formule "Clés en main").</>
    },
    {
        id: 5,
        img: calendarImg,
        title: 'Gestion quotidienne',
        description: <><strong>Gestion du calendrier de réservations</strong> et communications avec les voyageurs 24/7 (disponible dans les formules "Clés en main" et "Clés confort").</>
    },
    {
        id: 6,
        img: cleaningImg,
        title: 'Opérations sur place',
        description: <><strong>Entrées et sorties des voyageurs</strong>, état des lieux de sortie. <strong>Ménage de qualité hôtelière</strong>, approvisionnement des produits, maintenance régulière pour assurer le confort des voyageurs et la durabilité de votre bien.</>
    },
    {
        id: 7,
        img: invoiceImg,
        title: 'Gestion financière',
        description: <>Les loyers sont directement versés sur votre compte. À la fin de chaque mois, nous vous adressons une facture détaillant nos services et les frais correspondants. <strong>Vous ne payez que lorsque votre logement est loué !</strong></>
    },
]