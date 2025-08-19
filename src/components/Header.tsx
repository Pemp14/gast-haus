import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageMenu } from './LanguageMenu';
import NavMenu from './ui/menu-hover-effects';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+37378076073';
  };

  // Блокируем прокрутку страницы, когда мобильное меню открыто
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Пункты меню в одном месте, чтобы не дублировать
  const links = [
    { to: '/', label: t('home') },
    { to: '/menu', label: t('menu') },
    { to: '/about', label: t('about') },
    { to: '/gallery', label: t('gallery') },
    
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-soft-black to-charcoal backdrop-blur-sm border-b border-white/10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" aria-label="Home">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif tracking-wider text-white text-shadow hover:text-green-400 transition-colors duration-300">
                Gast Haus
              </h1>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <NavMenu />
          </div>

          {/* Right controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <LanguageMenu />

            <button
              onClick={handleCall}
              className="bg-green-600 hover:bg-green-700 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full flex items-center space-x-2 font-semibold text-xs sm:text-sm uppercase tracking-wide text-white transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{t('call')}</span>
            </button>

            {/* Mobile toggler */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center rounded-full h-10 w-10 border border-white/20 text-white"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-0 w-screen h-[100dvh] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white
            pt-[calc(20px+env(safe-area-inset-top))] pb-[env(safe-area-inset-bottom)] px-8
            overflow-y-auto overscroll-contain flex flex-col justify-center relative backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Enhanced decorative elements */}
            <div className="absolute top-20 right-10 w-32 h-32 border border-green-400/20 rounded-full animate-float"></div>
            <div className="absolute bottom-32 left-10 w-24 h-24 border border-green-400/10 rounded-full animate-float animation-delay-1000"></div>
            <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-green-400/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-green-400/40 rounded-full animate-pulse animation-delay-500"></div>
            
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
            
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 max-w-xs mx-auto w-full">
              {/* Logo */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold font-serif text-green-400 tracking-wider">
                  Gast Haus
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-3"></div>
              </div>
              
              <nav className="space-y-2 text-center w-full mb-12">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="group block py-4 px-6 rounded-2xl hover:bg-white/10 text-lg font-medium transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 tracking-wide">{l.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
              </nav>

              <div className="w-full">
                <button
                  onClick={handleCall}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {t('call')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
