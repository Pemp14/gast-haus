import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleCall = () => {
    window.location.href = 'tel:+37378076073';
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] ease-out"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/30 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-white/20 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>

      {/* Content */}
<div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto animate-fade-in mt-20">
        <div className="mb-8">
          
          
        </div>
        
            <h1 className="font-felidae text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-[0.9] text-shadow px-2">
            {t('heroTitle')}
            </h1>

        
        
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 px-4">
          <button
            onClick={scrollToMenu}
            className="luxury-button px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold tracking-wide transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            {t('viewMenu')}
          </button>
          
          <button
            onClick={handleCall}
            className="bg-transparent border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 sm:space-x-3 backdrop-blur-sm w-full sm:w-auto"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>{t('call')}</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 sm:h-4 bg-white rounded-full mt-2 sm:mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;