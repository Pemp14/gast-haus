import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MenuPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const handleCall = () => {
    window.location.href = 'tel:+37378076073';
  };

  // Функция для получения префикса языка
  const getLanguagePrefix = () => {
    switch (currentLanguage) {
      case 'ru': return 'Ru';
      case 'ro': return 'Md';
      case 'en': return 'En';
      default: return 'Md';
    }
  };

  // Массив изображений меню для текущего языка
  const menuImages = [
    // Для тестирования используем разные изображения для каждого языка
    currentLanguage === 'ru' ? [
      'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1200', // Суши для русского
      'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1200', // Стейк
      'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1200', // Салат
    ] : currentLanguage === 'ro' ? [
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200', // Интерьер для румынского
      'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1200', // Десерт
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200', // Кофе
    ] : [
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200', // Ресторан для английского
      'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200', // Атмосфера
      'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1200', // Кухня
    ]
  ];

  return (
    <div className="pt-16 sm:pt-18 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-warm-white to-cream overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 border border-gold/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-gold/30 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="elegant-border mb-8">
            <p className="text-green-400 font-medium text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
              {t('culinaryExcellence')}
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 sm:mb-8 font-serif">
            {t('menu')}
          </h1>
          <div className="section-divider"></div>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed font-light">
            {t('menuIntro')}
          </p>
        </div>
      </section>

      {/* Menu Images */}
      <section className="section-padding bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-8 lg:space-y-12">
            {menuImages.map((imageSrc, index) => (
              <div key={index} className="animate-slide-up">
                <div className="max-w-4xl mx-auto">
                  <img
                    src={imageSrc}
                    alt={`${t('menu')} ${index + 1}`}
                    className="w-full h-auto rounded-3xl luxury-shadow transition-transform duration-500 hover:scale-[1.02]"
                    onError={(e) => {
                      // Fallback к изображению-заглушке если файл не найден
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

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-light-gold to-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">
            {t('readyToOrder')}
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray mb-8 leading-relaxed">
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
      </section>
    </div>
  );
};

export default MenuPage;