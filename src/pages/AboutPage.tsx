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
                Добро пожаловать в Gast Haus – место, где встречаются традиции и современные вкусы. Мы стремимся предложить нашим гостям не только изысканные блюда, но и атмосферу уюта, где каждый момент станет особенным.
              </p>
              
              <p>
                Наши шеф-повара используют только лучшие ингредиенты, чтобы создать кулинарные шедевры, которые удовлетворят даже самых взыскательных гурманов.
              </p>
            </div>
            
            <div className="space-y-4">
              <p>
                Мы гордимся нашей разнообразной кухней, которая сочетает в себе европейские и локальные традиции, а также уникальные рецепты, способные удивить и вдохновить.
              </p>
              
              <p className="font-medium text-charcoal">
                Присоединяйтесь к нам, чтобы насладиться гастрономическим путешествием, которое мы создали специально для вас.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gradient-to-b from-cream to-warm-white">
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

          {/* Map */}
          <div className="relative mb-8 lg:mb-12">
            <div className="rounded-3xl overflow-hidden luxury-shadow bg-gray-100 max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.4!2d28.8356!3d47.0246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c9c4b4b4b4b%3A0x1234567890abcdef!2sChisinau%2C%20Moldova!5e0!3m2!1sen!2smd!4v1640995200000!5m2!1sen!2smd"
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
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 luxury-shadow h-32 flex items-center">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Адрес</h3>
                  <p className="text-warm-gray">Strada Cojocarilor 17</p>
                  <p className="text-warm-gray">Chisinau, Moldova</p>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 luxury-shadow h-32 flex items-center">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🕒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Часы работы</h3>
                  <p className="text-warm-gray">Ежедневно</p>
                  <p className="text-warm-gray">8:00 - 00:00</p>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 luxury-shadow h-32 flex items-center">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">Контакты</h3>
                  <p className="text-warm-gray">+373 78 076 073</p>
                  <p className="text-warm-gray">gasthaus.md</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <a
              href="https://www.google.com/maps/place/Strada+Cojocarilor+17,+Chișinău,+Moldova"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 luxury-shadow"
            >
              <span>🗺️</span>
              <span>Открыть в Google Maps</span>
            </a>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-cream to-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">
              Дополнительные услуги
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl mb-4">📶</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Wi-Fi</h3>
              <p className="text-warm-gray text-sm">Бесплатный интернет для гостей</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Оплата картой</h3>
              <p className="text-warm-gray text-sm">Принимаем все виды карт</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl mb-4">🚚</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Доставка Glovo</h3>
              <p className="text-warm-gray text-sm">Заказывайте с доставкой на дом</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl mb-4">🎉</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Банкетный зал</h3>
              <p className="text-warm-gray text-sm">Для особых мероприятий</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;