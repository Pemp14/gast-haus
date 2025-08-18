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
      <section className="py-8 lg:py-12 bg-gradient-to-b from-light-gold via-cream to-warm-white">
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
              className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/40 transition-all duration-300 z-50"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Navigation buttons */}
            {menuImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/40 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/40 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              {selectedImageIndex + 1} / {menuImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Compact Contact Section */}
      <div className="text-center py-10 lg:py-12 bg-gradient-to-br from-light-gold via-cream to-warm-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-1/4 w-20 h-20 bg-green-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-1/4 w-16 h-16 bg-gold/10 rounded-full blur-lg"></div>
        </div>
        
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-charcoal mb-4 text-base lg:text-lg">{t('callNowReservation')}</p>
          <button
            onClick={handleCall}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 flex items-center justify-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            <span>{t('phone')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;