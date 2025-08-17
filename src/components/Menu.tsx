import React from 'react';
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

const Menu: React.FC = () => {
  const { t } = useLanguage();

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
    <section id="menu" className="section-padding bg-gradient-to-b from-warm-white via-cream to-warm-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="elegant-border mb-8">
            <p className="text-gold font-medium text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
              Culinary Excellence
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal mb-6 sm:mb-8 font-serif px-4">
            {t('menu')}
          </h2>
          <div className="section-divider"></div>
          <p className="text-base sm:text-lg lg:text-xl text-warm-gray max-w-4xl mx-auto leading-relaxed font-light px-4">
            {t('menuIntro')}
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center animate-slide-up">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-8 sm:mb-10 lg:mb-12 font-serif px-4">
                {t(category.titleKey)}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-card rounded-3xl overflow-hidden luxury-shadow hover-lift">
                    <div className="aspect-w-16 aspect-h-12 h-48 sm:h-56 lg:h-64 relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={t(item.nameKey)}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4">
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-charcoal font-serif leading-tight mb-2 sm:mb-0">
                          {t(item.nameKey)}
                        </h4>
                        <span className="price-tag sm:ml-4 self-start">
                          {item.price.replace(' MDL', '')}
                          <span className="text-xs ml-1">MDL</span>
                        </span>
                      </div>
                      
                      {item.descKey && (
                        <p className="text-sm sm:text-base text-warm-gray leading-relaxed font-light">
                          {t(item.descKey)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;