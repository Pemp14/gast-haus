import React, { useState } from 'react';
import { Phone, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MenuPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleCall = () => {
    window.location.href = 'tel:+37378076073';
  };

  // Функция для получения изображений меню в зависимости от языка
  const getMenuImages = () => {
    switch (currentLanguage) {
      case 'ru':
        return [
          'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ];
      case 'ro':
        return [
          'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ];
      case 'en':
        return [
          'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ];
      default:
        return [
          'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ];
    }
  };

  const menuImages = getMenuImages();

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % menuImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? menuImages.length - 1 : selectedImageIndex - 1);
    }
  };

  // Закрытие модального окна при нажатии Escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImageIndex]);

  return (
    <div className="pt-16 sm:pt-18 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-8 lg:py-12 bg-gradient-to-br from-warm-white via-cream to-light-gold">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 border border-gold/20 rounded-full animate-float hidden lg:block"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-gold/30 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="elegant-border mb-6">
            <p className="text-green-400 font-medium text-sm lg:text-base tracking-[0.2em] uppercase mb-3">
              {t('culinaryExcellence')}
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-serif">
            {t('menu')}
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
      </section>

      {/* Menu Images */}
      <section className="section-padding bg-gradient-to-b from-light-gold via-cream to-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-8 lg:space-y-12">
            {menuImages.map((imageSrc, index) => (
              <div key={index} className="animate-slide-up group cursor-pointer" style={{ animationDelay: `${index * 0.2}s` }}>
                <div 
                  className="relative overflow-hidden rounded-3xl luxury-shadow hover-lift transition-all duration-500"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={imageSrc}
                    alt={`${t('menu')} ${index + 1}`}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200';
                    }}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                      <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <img
              src={menuImages[selectedImageIndex]}
              alt={`${t('menu')} ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl luxury-shadow"
            />
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:bg-white transition-all duration-300 shadow-lg border border-gray-200/50 z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            {menuImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-4 text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-medium border border-white/20">
              {selectedImageIndex + 1} / {menuImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-warm-white via-light-gold to-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 luxury-shadow border border-white/20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">
              {t('readyToOrder')}
            </h2>
            <p className="text-lg lg:text-xl text-warm-gray mb-8 leading-relaxed font-light">
              {t('callNowReservation')}
            </p>
            <button
              onClick={handleCall}
              className="luxury-button px-10 py-4 rounded-full text-lg font-semibold tracking-wide transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
            >
              <Phone className="h-6 w-6" />
              <span>{t('call')} {t('phone')}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;