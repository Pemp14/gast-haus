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
    
    // Additional translations
    learnMore: 'Află mai mult',
    orderNow: 'Comandă acum',
    readyToOrder: 'Gata să comanzi?',
    callNowReservation: 'Sună acum pentru rezervare sau comandă',
    phone: '+373 78 076 073',
    exploreGastHaus: 'Explorează Gast Haus',
    visualExperience: 'Experiență vizuală',
    exploreAtmosphere: 'Explorează atmosfera, bucătăria și experiențele de la Gast Haus',
    all: 'Toate',
    interior: 'Interior',
    food: 'Mâncare',
    terrace: 'Terasă',
    events: 'Evenimente',
    kitchen: 'Bucătărie',
    culinaryExcellence: 'Excelență culinară',
    whyChooseGastHaus: 'De ce să alegi Gast Haus?',
    expertChefs: 'Bucătari experți',
    expertChefsDesc: 'Bucătarii noștri experimentați aduc pasiune și creativitate în fiecare fel de mâncare',
    freshIngredients: 'Ingrediente proaspete',
    freshIngredientsDesc: 'Folosim doar cele mai fine și proaspete ingrediente pentru preparatele noastre',
    awardWinning: 'Premiat',
    awardWinningDesc: 'Recunoscut pentru excelența în bucătărie și servicii',
    liveMusic: 'Muzică live',
    businessLunch: 'Prânz de afaceri',
    nikkeiCuisine: 'Bucătărie Nikkei',
    terraceDining: 'Terasă',
    liveMusicDesc: 'Bucură-te de spectacole live în atmosfera noastră primitoare',
    terraceDiningDesc: 'Locuri frumoase în aer liber pentru seri perfecte',
    nikkeiCuisineDesc: 'Fuziunea japonezo-peruană întâlnește eleganța europeană',
    ourStory: 'Povestea noastră',
    experienceCulinary: 'Experimentează excelența culinară în inima Chișinăului',
    menuDescription: 'Pregătiți-vă pentru o călătorie gastronomică! Meniul nostru include preparate unice care combină tradițiile și accentele gustative moderne. Aici fiecare va găsi ceva pe plac – de la gustări rafinate la feluri de mâncare principale intense. Bucurați-vă de combinații excepționale de arome, care creează adevărate capodopere culinare.',
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
    
    // Additional translations
    learnMore: 'Узнать больше',
    orderNow: 'Заказать сейчас',
    readyToOrder: 'Готовы заказать?',
    callNowReservation: 'Звоните сейчас для бронирования или заказа',
    phone: '+373 78 076 073',
    exploreGastHaus: 'Исследуйте Gast Haus',
    visualExperience: 'Визуальный опыт',
    exploreAtmosphere: 'Исследуйте атмосферу, кухню и впечатления в Gast Haus',
    all: 'Все',
    interior: 'Интерьер',
    food: 'Еда',
    terrace: 'Терраса',
    events: 'События',
    kitchen: 'Кухня',
    culinaryExcellence: 'Кулинарное совершенство',
    whyChooseGastHaus: 'Почему выбрать Gast Haus?',
    expertChefs: 'Опытные повара',
    expertChefsDesc: 'Наши опытные повара привносят страсть и креативность в каждое блюдо',
    freshIngredients: 'Свежие ингредиенты',
    freshIngredientsDesc: 'Мы используем только лучшие и свежие ингредиенты для наших блюд',
    awardWinning: 'Награждённый',
    awardWinningDesc: 'Признан за превосходство в кухне и обслуживании',
    liveMusic: 'Живая музыка',
    businessLunch: 'Бизнес-ланч',
    nikkeiCuisine: 'Кухня Никкей',
    terraceDining: 'Терраса',
    liveMusicDesc: 'Наслаждайтесь живыми выступлениями в нашей уютной атмосфере',
    terraceDiningDesc: 'Красивые места на открытом воздухе для идеальных вечеров',
    nikkeiCuisineDesc: 'Японо-перуанская фьюжн встречается с европейской элегантностью',
    ourStory: 'Наша история',
    experienceCulinary: 'Испытайте кулинарное совершенство в сердце Кишинёва',
    menuDescription: 'Приготовьтесь к гастрономическому путешествию! В нашем меню – уникальные блюда, которые сочетает в себе традиции и современные вкусовые акценты. Здесь каждый найдет что-то по душе – от утончённых закусок до насыщенных основных блюд. Наслаждайтесь исключительными вкусовыми сочетаниями, создающими настоящие кулинарные шедевры.',
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
    
    // Additional translations
    learnMore: 'Learn More',
    orderNow: 'Order Now',
    readyToOrder: 'Ready to Order?',
    callNowReservation: 'Call us now to make a reservation or place your order',
    phone: '+373 78 076 073',
    exploreGastHaus: 'Explore Gast Haus',
    visualExperience: 'Visual Experience',
    exploreAtmosphere: 'Explore the atmosphere, cuisine, and experiences at Gast Haus',
    all: 'All',
    interior: 'Interior',
    food: 'Food',
    terrace: 'Terrace',
    events: 'Events',
    kitchen: 'Kitchen',
    culinaryExcellence: 'Culinary Excellence',
    whyChooseGastHaus: 'Why Choose Gast Haus?',
    expertChefs: 'Expert Chefs',
    expertChefsDesc: 'Our experienced chefs bring passion and creativity to every dish',
    freshIngredients: 'Fresh Ingredients',
    freshIngredientsDesc: 'We source only the finest, freshest ingredients for our dishes',
    awardWinning: 'Award Winning',
    awardWinningDesc: 'Recognized for excellence in cuisine and service',
    liveMusic: 'Live Music',
    businessLunch: 'Business Lunch',
    nikkeiCuisine: 'Nikkei Cuisine',
    terraceDining: 'Terrace Dining',
    liveMusicDesc: 'Enjoy live performances in our cozy atmosphere',
    terraceDiningDesc: 'Beautiful outdoor seating for perfect evenings',
    nikkeiCuisineDesc: 'Japanese-Peruvian fusion meets European elegance',
    ourStory: 'Our Story',
    experienceCulinary: 'Experience culinary excellence in the heart of Chișinău',
    menuDescription: 'Get ready for a gastronomic journey! Our menu features unique dishes that combine tradition with modern flavor accents. Here, everyone will find something to their liking – from delicate appetizers to rich main courses. Enjoy the exceptional flavor combinations that create true culinary masterpieces.',
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