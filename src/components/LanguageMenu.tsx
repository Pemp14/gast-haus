import React from 'react';
import { MenuItem, MenuContainer } from './ui/fluid-menu';
import { useLanguage, Language } from '../contexts/LanguageContext';

export function LanguageMenu() {
  const { currentLanguage, setLanguage } = useLanguage();

  const languages = [
    { code: 'ro' as Language, label: 'RO', flag: '/images/flags/MD.png' },
    { code: 'en' as Language, label: 'EN', flag: '/images/flags/US.png' },
    { code: 'ru' as Language, label: 'RU', flag: '/images/flags/RU.png' },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  const handleItemClick = (onClick?: () => void) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/5 blur-2xl -z-10 rounded-full scale-150" />
      <MenuContainer>
        <MenuItem>
          <div className="flex items-center justify-center w-full h-full">
            <span className="font-bold text-lg tracking-wider font-sans hover:scale-110 transition-all duration-200 flex items-center space-x-2 text-white">
              <img src={currentLang.flag} alt={`${currentLang.label} flag`} className="w-6 h-6" />
              <span>{currentLang.label}</span>
            </span>
          </div>
        </MenuItem>

        {languages.filter(lang => lang.code !== currentLanguage).map((lang) => (
          <MenuItem 
            key={lang.code}
            onClick={() => handleItemClick(() => setLanguage(lang.code))}
            isActive={lang.code === currentLanguage}
          >
            <div className="flex items-center justify-center w-full h-full cursor-pointer">
              <span className="text-white hover:text-gray-200 font-semibold text-base tracking-wider font-sans hover:scale-110 transition-all duration-200 flex items-center space-x-2">
                <img src={lang.flag} alt={`${lang.label} flag`} className="w-6 h-6" />
                <span>{lang.label}</span>
              </span>
            </div>
          </MenuItem>
        ))}
      </MenuContainer>
    </div>
  );
}
