import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItem {
  nameKey: string;
  descKey: string;
  price: string;
  image: string;
}

interface MenuCategory {
  titleKey: string;
  items: MenuItem[];
}

const MenuPage: React.FC = () => {
  const { t } = useLanguage();

  const handleCall = () => {
    window.location.href = 'tel:+37378076073';
  };

  const menuCategories: MenuCategory[] = [
    {
      titleKey: 'salads',
      items: [
        {
          nameKey: 'caesarSalad',
          descKey: 'caesarDesc',
          price: '120 MDL',
          image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      titleKey: 'sushiRolls',
      items: [
        {
          nameKey: 'philadelphiaRoll',
          descKey: 'philadelphiaDesc',
          price: '150 MDL',
          image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      titleKey: 'mainDishes',
      items: [
        {
          nameKey: 'beefSteak',
          descKey: 'beefDesc',
          price: '250 MDL',
          image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      titleKey: 'desserts',
      items: [
        {
          nameKey: 'cheesecake',
          descKey: 'cheesecakeDesc',
          price: '90 MDL',
          image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      titleKey: 'drinks',
      items: [
        {
          nameKey: 'cappuccino',
          descKey: '',
          price: '50 MDL',
          image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  ];

  return (
    <div className="pt-16 sm:pt-18 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-warm-white to-cream overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 border border-gold/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-gold/30 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="elegant-border mb-8">
            <p className="text-gold font-medium text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
              Culinary Excellence
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

      {/* Menu Categories */}
      <section className="section-padding bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="space-y-16 lg:space-y-24">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="text-center animate-slide-up">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-8 lg:mb-12 font-serif">
                  {t(category.titleKey)}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="menu-card rounded-3xl overflow-hidden luxury-shadow hover-lift">
                      <div className="h-48 sm:h-56 lg:h-64 relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={t(item.nameKey)}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      
                      <div className="p-6 lg:p-8">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                          <h3 className="text-xl lg:text-2xl font-bold text-charcoal font-serif leading-tight mb-2 sm:mb-0">
                            {t(item.nameKey)}
                          </h3>
                          <span className="price-tag sm:ml-4 self-start">
                            {item.price.replace(' MDL', '')}
                            <span className="text-xs ml-1">MDL</span>
                          </span>
                        </div>
                        
                        {item.descKey && (
                          <p className="text-sm sm:text-base text-warm-gray leading-relaxed font-light mb-4">
                            {t(item.descKey)}
                          </p>
                        )}

                        <button
                          onClick={handleCall}
                          className="w-full luxury-button py-3 rounded-full font-semibold text-sm flex items-center justify-center space-x-2"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Order Now</span>
                        </button>
                      </div>
                    </div>
                  ))}
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
            Ready to Order?
          </h2>
          <p className="text-lg lg:text-xl text-warm-gray mb-8 leading-relaxed">
            Call us now to make a reservation or place your order
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