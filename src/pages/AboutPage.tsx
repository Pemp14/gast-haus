import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 sm:pt-18 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-warm-white to-cream overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 border border-gold/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-gold/30 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 sm:mb-8 font-serif">
            {t('about')}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden luxury-shadow">
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-gold/30 rounded-full hidden lg:block animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-gold/20 rounded-full hidden lg:block animate-float animation-delay-1000"></div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gold rounded-full hidden lg:block animate-pulse"></div>
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

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl lg:text-4xl mb-4">🎵</div>
              <div className="text-lg font-semibold text-charcoal">{t('liveMusic')}</div>
            </div>
            
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl lg:text-4xl mb-4">🌿</div>
              <div className="text-lg font-semibold text-charcoal">{t('terrace')}</div>
            </div>
            
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl lg:text-4xl mb-4">💼</div>
              <div className="text-lg font-semibold text-charcoal">{t('businessLunch')}</div>
            </div>
            
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl lg:text-4xl mb-4">🍽️</div>
              <div className="text-lg font-semibold text-charcoal">{t('nikkeiCuisine')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-warm-white to-light-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <div className="elegant-border mb-8">
              <p className="text-green-400 font-medium text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
                Найдите нас
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">Наше местоположение</h2>
            <div className="section-divider"></div>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto leading-relaxed font-light">
              Мы находимся в самом сердце Кишинёва. Приходите к нам и насладитесь незабываемой атмосферой!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Map */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-3xl overflow-hidden luxury-shadow bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8234567890123!2d28.8356789!3d47.0245678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d3f04c6b50f%3A0x9eff6fa61b5fd3d3!2sGast%20Haus!5e0!3m2!1sen!2smd!4v1234567890123!5m2!1sen!2smd"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-3xl"
                  title="Gast Haus Location"
                ></iframe>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-green-400/20 rounded-full hidden lg:block animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-green-400/30 rounded-full hidden lg:block animate-float animation-delay-1000"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:pl-8">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 luxury-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Адрес</h3>
                    <p className="text-warm-gray">Кишинёв, Молдова</p>
                    <p className="text-warm-gray">ул. Примерная, 123</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 luxury-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Часы работы</h3>
                    <p className="text-warm-gray">Пн-Чт: 11:00 - 23:00</p>
                    <p className="text-warm-gray">Пт-Сб: 11:00 - 01:00</p>
                    <p className="text-warm-gray">Вс: 12:00 - 22:00</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 luxury-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Контакты</h3>
                    <p className="text-warm-gray">+373 78 076 073</p>
                    <p className="text-warm-gray">info@gasthaus.md</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <a
                  href="https://www.google.com/maps/place/gasthaus/data=!4m2!3m1!1s0x40c97d3f04c6b50f:0x9eff6fa61b5fd3d3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 luxury-shadow"
                >
                  <span>🗺️</span>
                  <span>Открыть в Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;