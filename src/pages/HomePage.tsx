import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import HeroCarousel from '../components/HeroCarousel';

const HomePage: React.FC = () => {
  const { t } = useLanguage();


  return (
    <div>
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Quick Links Section */}
<section className="bg-gradient-to-b from-warm-white to-cream pt-0 pb-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 font-serif">
              {t('exploreGastHaus')}
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Menu Card */}
            <Link to="/menu" className="group">
              <div className="menu-card rounded-3xl overflow-hidden luxury-shadow hover-lift h-full">
                <div className="h-48 lg:h-56 relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Menu"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-charcoal font-serif mb-3">
                    {t('menu')}
                  </h3>
                  <p className="text-warm-gray mb-4 text-sm lg:text-base">
                    {t('menuIntro')}
                  </p>
                  <div className="flex items-center text-black font-semibold">
                    <span className="mr-2">{t('viewMenu')}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>

            {/* About Card */}
            <Link to="/about" className="group">
              <div className="menu-card rounded-3xl overflow-hidden luxury-shadow hover-lift h-full">
                <div className="h-48 lg:h-56 relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="About"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-charcoal font-serif mb-3">
                    {t('about')}
                  </h3>
                  <p className="text-warm-gray mb-4 text-sm lg:text-base">
                    {t('nikkeiCuisineDesc')}
                  </p>
                  <div className="flex items-center text-black font-semibold">
                    <span className="mr-2">{t('learnMore')}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;