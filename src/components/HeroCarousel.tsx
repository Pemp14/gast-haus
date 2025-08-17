import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroCarousel: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isLeftPressed, setIsLeftPressed] = useState(false);
  const [isRightPressed, setIsRightPressed] = useState(false);

  const slides = [
    {
      image: '/images/GastMain1.jpg',
      title: t('heroTitle'),
      subtitle: 'Experience culinary excellence in the heart of Chișinău',
    },
    {
      image: '/images/GastMain3.jpg',
      title: t('heroTitle'),
      subtitle: 'Experience culinary excellence in the heart of Chișinău',
    },
    {
      image: '/images/GastMain4.jpg',
      title: t('heroTitle'),
      subtitle: 'Experience culinary excellence in the heart of Chișinău',
    },
    {
      image: '/images/GastMain5.jpg',
      title: t('heroTitle'),
      subtitle: 'Experience culinary excellence in the heart of Chișinău',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setIsLeftPressed(true); // Нажата левая стрелка
    prevSlide(); // Переход к предыдущему слайду
    setTimeout(() => setIsLeftPressed(false), 200); // Через 200мс сбрасываем
  };

  const handleNextClick = () => {
    setIsRightPressed(true); // Нажата правая стрелка
    nextSlide(); // Переход к следующему слайду
    setTimeout(() => setIsRightPressed(false), 200); // Через 200мс сбрасываем
  };

  return (
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-4 sm:pt-0 pb-0">
      {/* Carousel Container */}
      <div className="relative w-full h-[85vh] sm:h-[65vh] lg:h-[75vh] max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slides */}
        <div className="relative h-full rounded-3xl overflow-hidden luxury-shadow bg-black">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 hero-overlay"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-12">
                <div className="max-w-4xl mx-auto animate-fade-in">
                  

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 font-felidae leading-[0.9] text-shadow px-2">
  {slide.title}
</h1>


                  

                  {/*<p className="text-white font-medium text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
                    {slide.subtitle}
                  </p>*/}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevClick}
          className={`absolute left-6 lg:left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-all duration-300 z-20 ${isLeftPressed ? 'bg-green-500 border-2 border-green-500' : ''}`}
        >
          <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8" />
        </button>

        <button
          onClick={handleNextClick}
          className={`absolute right-6 lg:right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-all duration-300 z-20 ${isRightPressed ? 'bg-green-500 border-2 border-green-500' : ''}`}
        >
          <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8" />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
