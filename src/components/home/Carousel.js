// Import des libs externes
import React from 'react';
import { Stack } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import des composants internes
import Banner from "./Banner";

// Import du contenu
import { bannersContent } from '../../content/banners/bannersContent';

// Import des images de fond / mobile / tablette
import img1 from '../../medias/images/house-8274529_1280.jpg';
import img2 from '../../medias/images/pexels-rachel-claire-4577191.jpg';
import img3 from '../../medias/images/pexels-jonathanborba-5563472.jpg';

const Carousel = () => {

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,  // Affiche les points de navigation en bas du carousel
    infinite: true,  // Permet au carousel de boucler infiniment
    speed: 500,  // Vitesse de transition entre les diapositives
    slidesToShow: 1,  // Nombre de diapositives à montrer à la fois
    slidesToScroll: 1,  // Nombre de diapositives à défiler
    swipeToSlide: true,  // Permet de swiper directement à une diapositive spécifique
    touchThreshold: 10,  // Sensibilité du swipe, valeur plus basse = plus sensible
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    appendDots: dots => (
        <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
          <ul style={{ margin: "0px", padding: "0 0 15px 0" }}> {dots} </ul>
        </div>
      ),
  };

  return (
    <Slider className='custom-slider' {...settings} >
       <Stack
          sx={{
              minHeight: '100vh',
              width: '100vw',
              backgroundImage: `linear-gradient(180deg, rgb(0 0 0 / 17%) 0%, rgb(0 0 0 / 58%) 50%, rgb(0 0 0 / 75%) 100%), url(${img1})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center bottom 30%',
              flexShrink: '0',
              justifyContent: 'flex-end'
          }}
        >
          <Banner  
            index={0}
            topTitle={bannersContent[0].topTitle}
            bottomTitle={bannersContent[0].bottomTitle}
            description={bannersContent[0].description}
            currentSlide={currentSlide}
          />
        </Stack>
        <Stack
          sx={{
              minHeight: '100vh',
              width: '100vw',
              backgroundImage: `linear-gradient(180deg, rgb(0 0 0 / 17%) 0%, rgb(0 0 0 / 58%) 50%, rgb(0 0 0 / 75%) 100%), url(${img2})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center bottom 30%',
              flexShrink: '0',
              justifyContent: 'flex-end'
          }}
        >
          <Banner  
            index={1}
            topTitle={bannersContent[1].topTitle}
            bottomTitle={bannersContent[1].bottomTitle}
            description={bannersContent[1].description}
            currentSlide={currentSlide}
          />
        </Stack>
        <Stack
          sx={{
              minHeight: '100vh',
              width: '100vw',
              backgroundImage: `linear-gradient(180deg, rgb(0 0 0 / 17%) 0%, rgb(0 0 0 / 58%) 50%, rgb(0 0 0 / 75%) 100%), url(${img3})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              flexShrink: '0',
              justifyContent: 'flex-end'
          }}
        >
          <Banner  
            index={2}
            topTitle={bannersContent[2].topTitle}
            bottomTitle={bannersContent[2].bottomTitle}
            description={bannersContent[2].description}
            currentSlide={currentSlide}
          />
        </Stack>
    </Slider>
  );
};

export default Carousel;