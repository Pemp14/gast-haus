import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'ro' | 'ru' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ro: {
    // Navigation
    home: 'Acasă',
    menu: 'Meniu',
    about: 'Despre',
    gallery: 'Galerie',
    reviews: 'Recenzii',
    call: 'Sună',
    
    // Hero
    heroTitle: 'Bucătărie de autor în inima Chișinăului',
    viewMenu: 'Vezi meniul',
    
    // Menu
    menuIntro: 'Descoperă preparatele noastre pregătite cu pasiune și ingrediente proaspete.',
    salads: 'Salate',
    sushiRolls: 'Sushi și Rulouri',
    mainDishes: 'Feluri Principale',
    desserts: 'Deserturi',
    drinks: 'Băuturi',
    
    // Menu items
    caesarSalad: 'Salată Caesar',
    caesarDesc: 'cu pui fraged și dressing clasic',
    philadelphiaRoll: 'Philadelphia Roll',
    philadelphiaDesc: 'somon, cremă de brânză',
    beefSteak: 'Beef Steak',
    beefDesc: 'servit cu legume la grătar',
    cheesecake: 'Cheesecake',
    cheesecakeDesc: 'cu sos de fructe de pădure',
    cappuccino: 'Cappuccino',
    
    // About
    aboutText: 'Gast Haus combină influențele bucătăriei Nikkei cu preparate europene contemporane. Oferim un spațiu cald și primitor, muzică live, terasă și prânzuri de afaceri.',
    
    // Footer
    copyright: '© 2025 Gast Haus',
    quickLinks: 'Linkuri rapide',
    followUs: 'Urmărește-ne',
  },
  ru: {
    // Navigation
    home: 'Главная',
    menu: 'Меню',
    about: 'О нас',
    gallery: 'Галерея',
    reviews: 'Отзывы',
    call: 'Позвонить',
    
    // Hero
    heroTitle: 'Авторская кухня в сердце Кишинёва',
    viewMenu: 'Посмотреть меню',
    
    // Menu
    menuIntro: 'Откройте для себя блюда, приготовленные с любовью и свежими ингредиентами.',
    salads: 'Салаты',
    sushiRolls: 'Суши и роллы',
    mainDishes: 'Горячее',
    desserts: 'Десерты',
    drinks: 'Напитки',
    
    // Menu items
    caesarSalad: 'Салат Цезарь',
    caesarDesc: 'с курицей и классическим соусом',
    philadelphiaRoll: 'Philadelphia Roll',
    philadelphiaDesc: 'лосось, сливочный сыр',
    beefSteak: 'Beef Steak',
    beefDesc: 'с овощами на гриле',
    cheesecake: 'Cheesecake',
    cheesecakeDesc: 'с ягодным соусом',
    cappuccino: 'Cappuccino',
    
    // About
    aboutText: 'Gast Haus объединяет кухню Nikkei и современные европейские блюда. У нас тёплая и уютная атмосфера, живая музыка, терраса и бизнес-ланчи.',
    
    // Footer
    copyright: '© 2025 Gast Haus',
    quickLinks: 'Быстрые ссылки',
    followUs: 'Подписывайтесь',
  },
  en: {
    // Navigation
    home: 'Home',
    menu: 'Menu',
    about: 'About',
    gallery: 'Gallery',
    reviews: 'Reviews',
    call: 'Call',
    
    // Hero
    heroTitle: "Author's cuisine in the heart of Chișinău",
    viewMenu: 'View Menu',
    
    // Menu
    menuIntro: 'Discover our dishes made with passion and fresh ingredients.',
    salads: 'Salads',
    sushiRolls: 'Sushi & Rolls',
    mainDishes: 'Main Dishes',
    desserts: 'Desserts',
    drinks: 'Drinks',
    
    // Menu items
    caesarSalad: 'Caesar Salad',
    caesarDesc: 'with tender chicken and classic dressing',
    philadelphiaRoll: 'Philadelphia Roll',
    philadelphiaDesc: 'salmon, cream cheese',
    beefSteak: 'Beef Steak',
    beefDesc: 'served with grilled vegetables',
    cheesecake: 'Cheesecake',
    cheesecakeDesc: 'with berry sauce',
    cappuccino: 'Cappuccino',
    
    // About
    aboutText: 'Gast Haus blends Nikkei and contemporary European cuisine. We offer a warm, welcoming atmosphere, live music, a terrace, and business lunches.',
    
    // Footer
    copyright: '© 2025 Gast Haus',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ro');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations['ro']] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};