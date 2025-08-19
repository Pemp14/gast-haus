import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 sm:pt-18 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-8 lg:py-12 bg-gradient-to-br from-warm-white to-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 sm:mb-8 font-serif text-center">
            {t('about')}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 text-sm sm:text-base text-warm-gray leading-relaxed font-light">
            <div className="space-y-4">
              <p>
                {t('aboutWelcome')}
              </p>
              
              <p>
                {t('aboutChefs')}
              </p>
            </div>
            
            <div className="space-y-4">
              <p>
                {t('aboutDiversity')}
              </p>
              
              <p className="font-medium text-charcoal">
                {t('aboutJoinUs')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 lg:py-12 bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="rounded-3xl overflow-hidden luxury-shadow">
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-12 animate-slide-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 sm:mb-8 font-serif leading-tight">
                {t('culinaryExcellence')}
              </h2>
              
              <div className="w-16 sm:w-20 h-1 bg-gold mb-6 sm:mb-8"></div>
              
              <p className="text-lg lg:text-xl text-warm-gray leading-relaxed mb-8 lg:mb-12 font-light">
                {t('aboutText')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">{t('nikkeiCuisine')}</h3>
                    <p className="text-warm-gray">{t('nikkeiCuisineDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">{t('liveMusic')}</h3>
                    <p className="text-warm-gray">{t('liveMusicDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">{t('terraceDining')}</h3>
                    <p className="text-warm-gray">{t('terraceDiningDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-6 lg:py-8 bg-gradient-to-br from-cream to-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4 font-serif">
              {t('glovoDelivery')}
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed font-light">
              {t('glovoDescription')}
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://glovoapp.com/md/en/chisinau/gast-haus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 luxury-shadow"
            >
              <span className="text-2xl">🚚</span>
              <span>{t('orderOnGlovo')}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;