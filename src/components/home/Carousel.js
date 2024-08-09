// Import des libs externes
import React, { useEffect, useState } from 'react';
import { Stack, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import des composants internes
import Banner from "./Banner";

// Import du contenu
import { bannersContent } from '../../content/banners/bannersContent';

// Import des images de fond / mobile / tablette
import img1 from '../../medias/images/house.webp';
import img2 from '../../medias/images/customers.webp';
import img3 from '../../medias/images/management.webp';

const Carousel = ({ setImagesLoaded, isAnimationEnded }) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [thumbnails] = useState([img1, img2, img3]);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const settings = {
    dots: true,  // Affiche les points de navigation en bas du carousel
    infinite: true,  // Permet au carousel de boucler infiniment
    speed: 1000,  // Vitesse de transition entre les diapositives
    slidesToShow: 1,  // Nombre de diapositives à montrer à la fois
    slidesToScroll: 1,  // Nombre de diapositives à défiler
    swipeToSlide: true,  // Permet de swiper directement à une diapositive spécifique
    touchThreshold: 10,  // Sensibilité du swipe, valeur plus basse = plus sensible
    arrows: false,
    autoplay: false, // Active le défilement automatique une fois les images chargées
    afterChange: (current) => {
      setCurrentSlide(current);
    },
    customPaging: (i) => (
      <div>
        <img src={thumbnails[i]} alt={`Thumbnail ${i}`} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      </div>
    ),
    appendDots: dots => (
        <div style={{ 
          display: isMd ? 'block' : 'none',
          position: "absolute", 
          right: '40px', 
          bottom: '50%', 
          transform: 'translate(0, 50%)', 
          height: 'fit-content', 
          width: '50px' }}
        >
          <ul style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '60px 0',
            margin: "0px", 
            padding: "0" }}
          > 
            {dots} 
          </ul>
        </div>
      ),
  };

  useEffect(() => {
    const images = [img1, img2, img3];
    const loadImages = Promise.all(images.map(image => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
      });
    }));

    const minimumDelay = new Promise(resolve => setTimeout(resolve, 3000));

    Promise.all([loadImages, minimumDelay]).then(() => {
      setImagesLoaded(true);
    });
  }, [setImagesLoaded]);

  return (
    <>
      <Slider className='custom-slider' {...settings} >
        {[img1, img2, img3].map((img, index) => (
          <Stack
            key={index}
            sx={{
              minHeight: '100vh',
              width: '100vw',
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center bottom 30%',
              flexShrink: '0',
              justifyContent: 'flex-end',
            }}
          >
            <Banner  
              index={index}
              isAnimationEnded={isAnimationEnded}
              topTitle={bannersContent[index].topTitle}
              bottomTitle={bannersContent[index].bottomTitle}
              description={bannersContent[index].description}
              currentSlide={currentSlide}
            />
          </Stack>
        ))}
      </Slider>
    </>
    
  );
};

export default Carousel;