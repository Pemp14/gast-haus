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
    call: 'Sună',
    
    // Hero & Home
    welcomeToGastHaus: 'Bun venit la Gast Haus',
    heroTitle: 'Bucătărie de autor în inima Chișinăului',
    experienceCulinary: 'Experimentează excelența culinară în inima Chișinăului',
    exploreGastHaus: 'Explorează Gast Haus',
    viewMenu: 'Vezi meniul',
    learnMore: 'Află mai mult',
    
    // Menu
    menuIntro: 'Descoperă preparatele noastre pregătite cu pasiune și ingrediente proaspete.',
    menuDescription: 'Pregătiți-vă pentru o călătorie gastronomică! Meniul nostru include preparate unice care combină tradițiile și accentele gustative moderne. Aici fiecare va găsi ceva pe plac – de la gustări rafinate la feluri de mâncare principale intense. Bucurați-vă de combinații excepționale de arome, care creează adevărate capodopere culinare.',
    callNowReservation: 'Sună acum pentru rezervare sau comandă',
    phone: '+373 78 076 073',
    
    // About
    aboutText: 'Gast Haus combină influențele bucătăriei Nikkei cu preparate europene contemporane. Oferim un spațiu cald și primitor, muzică live, terasă și prânzuri de afaceri.',
    aboutWelcome: 'Bun venit la Gast Haus – locul unde se întâlnesc tradițiile și gusturile moderne. Ne străduim să oferim oaspeților noștri nu doar preparate rafinate, ci și o atmosferă de confort, unde fiecare moment devine special.',
    aboutChefs: 'Bucătarii noștri folosesc doar cele mai bune ingrediente pentru a crea capodopere culinare care vor satisface chiar și cei mai pretențioși gurmezi.',
    aboutDiversity: 'Ne mândrim cu bucătăria noastră diversă, care combină tradițiile europene și locale, precum și rețete unice, capabile să surprindă și să inspire.',
    aboutJoinUs: 'Alăturați-vă nouă pentru a vă bucura de călătoria gastronomică pe care am creat-o special pentru voi.',
    
    // Features
    culinaryExcellence: 'Excelență culinară',
    nikkeiCuisine: 'Bucătărie Nikkei',
    nikkeiCuisineDesc: 'Fuziunea japonezo-peruană întâlnește eleganța europeană',
    liveMusic: 'Muzică live',
    liveMusicDesc: 'Bucură-te de spectacole live în atmosfera noastră primitoare',
    terraceDining: 'Terasă',
    terraceDiningDesc: 'Locuri frumoase în aer liber pentru seri perfecte',
    hookah: 'Narghilea',
    hookahDesc: 'Selecție premium de narghilea pentru o experiență relaxantă',
    
    // Gallery
    gallery: 'Galerie',
    exploreAtmosphere: 'Explorează atmosfera, bucătăria și experiențele de la Gast Haus',
    visualExperience: 'Experiență vizuală',
    
    // Glovo
    glovoDelivery: 'Livrare Glovo',
    glovoDescription: 'Puteți comanda mâncarea din restaurantul nostru și prin Glovo',
    orderOnGlovo: 'Comandă pe Glovo',
    orderNow: 'Comandă',
    
    // Footer
    copyright: '© 2025 Gast Haus',
  },
  ru: {
    // Navigation
    home: 'Главная',
    menu: 'Меню',
    about: 'О нас',
    gallery: 'Галерея',
    call: 'Позвонить',
    
    // Hero & Home
    welcomeToGastHaus: 'Добро пожаловать в Gast Haus',
    heroTitle: 'Авторская кухня в сердце Кишинёва',
    experienceCulinary: 'Испытайте кулинарное совершенство в сердце Кишинёва',
    exploreGastHaus: 'Исследуйте Gast Haus',
    viewMenu: 'Посмотреть меню',
    learnMore: 'Узнать больше',
    
    // Menu
    menuIntro: 'Откройте для себя блюда, приготовленные с любовью и свежими ингредиентами.',
    menuDescription: 'Приготовьтесь к гастрономическому путешествию! В нашем меню – уникальные блюда, которые сочетает в себе традиции и современные вкусовые акценты. Здесь каждый найдет что-то по душе – от утончённых закусок до насыщенных основных блюд. Наслаждайтесь исключительными вкусовыми сочетаниями, создающими настоящие кулинарные шедевры.',
    callNowReservation: 'Звоните сейчас для бронирования или заказа',
    phone: '+373 78 076 073',
    
    // About
    aboutText: 'Gast Haus объединяет кухню Nikkei и современные европейские блюда. У нас тёплая и уютная атмосфера, живая музыка, терраса и бизнес-ланчи.',
    aboutWelcome: 'Добро пожаловать в Gast Haus – место, где встречаются традиции и современные вкусы. Мы стремимся предложить нашим гостям не только изысканные блюда, но и атмосферу уюта, где каждый момент станет особенным.',
    aboutChefs: 'Наши шеф-повара используют только лучшие ингредиенты, чтобы создать кулинарные шедевры, которые удовлетворят даже самых взыскательных гурманов.',
    aboutDiversity: 'Мы гордимся нашей разнообразной кухней, которая сочетает в себе европейские и локальные традиции, а также уникальные рецепты, способные удивить и вдохновить.',
    aboutJoinUs: 'Присоединяйтесь к нам, чтобы насладиться гастрономическим путешествием, которое мы создали специально для вас.',
    
    // Features
    culinaryExcellence: 'Кулинарное совершенство',
    nikkeiCuisine: 'Кухня Никкей',
    nikkeiCuisineDesc: 'Японо-перуанская фьюжн встречается с европейской элегантностью',
    liveMusic: 'Живая музыка',
    liveMusicDesc: 'Наслаждайтесь живыми выступлениями в нашей уютной атмосфере',
    terraceDining: 'Терраса',
    terraceDiningDesc: 'Красивые места на открытом воздухе для идеальных вечеров',
    hookah: 'Кальяны',
    hookahDesc: 'Премиальный выбор кальянов для расслабляющего отдыха',
    
    // Gallery
    gallery: 'Галерея',
    exploreAtmosphere: 'Исследуйте атмосферу, кухню и впечатления в Gast Haus',
    visualExperience: 'Визуальный опыт',
    
    // Glovo
    glovoDelivery: 'Доставка Glovo',
    glovoDescription: 'Вы также можете заказать еду из нашего ресторана в Glovo',
    orderOnGlovo: 'Заказать в Glovo',
    orderNow: 'Заказать',
    
    // Footer
    copyright: '© 2025 Gast Haus',
  },
  en: {
    // Navigation
    home: 'Home',
    menu: 'Menu',
    about: 'About',
    gallery: 'Gallery',
    call: 'Call',
    
    // Hero & Home
    welcomeToGastHaus: 'Welcome to Gast Haus',
    heroTitle: "Author's cuisine in the heart of Chișinău",
    experienceCulinary: 'Experience culinary excellence in the heart of Chișinău',
    exploreGastHaus: 'Explore Gast Haus',
    viewMenu: 'View Menu',
    learnMore: 'Learn More',
    
    // Menu
    menuIntro: 'Discover our dishes made with passion and fresh ingredients.',
    menuDescription: 'Get ready for a gastronomic journey! Our menu features unique dishes that combine tradition with modern flavor accents. Here, everyone will find something to their liking – from delicate appetizers to rich main courses. Enjoy the exceptional flavor combinations that create true culinary masterpieces.',
    callNowReservation: 'Call us now to make a reservation or place your order',
    phone: '+373 78 076 073',
    
    // About
    aboutText: 'Gast Haus blends Nikkei and contemporary European cuisine. We offer a warm, welcoming atmosphere, live music, a terrace, and business lunches.',
    aboutWelcome: 'Welcome to Gast Haus – a place where traditions meet modern tastes. We strive to offer our guests not only exquisite dishes, but also a cozy atmosphere where every moment becomes special.',
    aboutChefs: 'Our chefs use only the finest ingredients to create culinary masterpieces that will satisfy even the most discerning gourmets.',
    aboutDiversity: 'We pride ourselves on our diverse cuisine, which combines European and local traditions, as well as unique recipes capable of surprising and inspiring.',
    aboutJoinUs: 'Join us to enjoy the gastronomic journey we have created especially for you.',
    
    // Features
    culinaryExcellence: 'Culinary Excellence',
    nikkeiCuisine: 'Nikkei Cuisine',
    nikkeiCuisineDesc: 'Japanese-Peruvian fusion meets European elegance',
    liveMusic: 'Live Music',
    liveMusicDesc: 'Enjoy live performances in our cozy atmosphere',
    terraceDining: 'Terrace Dining',
    terraceDiningDesc: 'Beautiful outdoor seating for perfect evenings',
    hookah: 'Hookah',
    hookahDesc: 'Premium hookah selection for a relaxing experience',
    
    // Gallery
    gallery: 'Gallery',
    exploreAtmosphere: 'Explore the atmosphere, cuisine, and experiences at Gast Haus',
    visualExperience: 'Visual Experience',
    
    // Glovo
    glovoDelivery: 'Glovo Delivery',
    glovoDescription: 'You can also order food from our restaurant through Glovo',
    orderOnGlovo: 'Order on Glovo',
    orderNow: 'Order',
    
    // Footer
    copyright: '© 2025 Gast Haus',
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