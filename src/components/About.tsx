import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-warm-white to-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
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
          <div className="lg:pl-12 animate-slide-up mt-8 lg:mt-0">
            <div className="elegant-border mb-8">
              <p className="text-gold font-medium text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
                Our Story
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 sm:mb-8 font-serif leading-tight">
              {t('about')}
            </h2>
            
            <div className="w-16 sm:w-20 h-1 bg-gold mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-lg lg:text-xl text-warm-gray leading-relaxed mb-8 sm:mb-12 font-light">
              {t('aboutText')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">🎵</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-charcoal">Live Music</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">🌿</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-charcoal">Terrace</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">💼</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-charcoal">Business Lunch</div>
              </div>
              
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-light-gold to-cream rounded-2xl luxury-shadow hover-lift">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">🍽️</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-charcoal">Nikkei Cuisine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;