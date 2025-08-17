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
          <div className="elegant-border mb-8">
            <p className="text-gold font-medium text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 sm:mb-8 font-serif">
            {t('about')}
          </h1>
          <div className="section-divider"></div>
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
                Culinary Excellence
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
                    <h3 className="text-xl font-bold text-charcoal mb-2">Nikkei Cuisine</h3>
                    <p className="text-warm-gray">Japanese-Peruvian fusion meets European elegance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎵</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Live Music</h3>
                    <p className="text-warm-gray">Enjoy live performances in our cozy atmosphere</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal mb-2">Terrace Dining</h3>
                    <p className="text-warm-gray">Beautiful outdoor seating for perfect evenings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl lg:text-4xl mb-4">🎵</div>
              <div className="text-lg font-semibold text-charcoal">Live Music</div>
            </div>
            
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl lg:text-4xl mb-4">🌿</div>
              <div className="text-lg font-semibold text-charcoal">Terrace</div>
            </div>
            
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl lg:text-4xl mb-4">💼</div>
              <div className="text-lg font-semibold text-charcoal">Business Lunch</div>
            </div>
            
            <div className="text-center p-6 lg:p-8 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
              <div className="text-3xl lg:text-4xl mb-4">🍽️</div>
              <div className="text-lg font-semibold text-charcoal">Nikkei Cuisine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-warm-white to-light-gold">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">
              Why Choose Gast Haus?
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-charcoal mb-4 font-serif">Expert Chefs</h3>
              <p className="text-warm-gray leading-relaxed">
                Our experienced chefs bring passion and creativity to every dish
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🥘</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-charcoal mb-4 font-serif">Fresh Ingredients</h3>
              <p className="text-warm-gray leading-relaxed">
                We source only the finest, freshest ingredients for our dishes
              </p>
            </div>

            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-charcoal mb-4 font-serif">Award Winning</h3>
              <p className="text-warm-gray leading-relaxed">
                Recognized for excellence in cuisine and service
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;