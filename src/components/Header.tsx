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
        <div className="fixed inset-0 z-[100] backdrop-blur-3xl bg-black/20" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-0 w-screen h-[100dvh] bg-gradient-to-br from-black/60 via-black/50 to-black/70 text-white shadow-2xl
            pt-[calc(20px+env(safe-area-inset-top))] pb-[env(safe-area-inset-bottom)] px-6
            overflow-y-auto overscroll-contain flex flex-col justify-center backdrop-blur-2xl border border-white/20"

            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 max-w-sm mx-auto w-full relative">
              {/* Decorative elements */}
              <div className="absolute top-10 left-4 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 right-6 w-16 h-16 border border-green-400/30 rounded-full animate-float"></div>
              
              <nav className="space-y-6 text-center w-full relative z-10">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-4 px-6 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/25 hover:bg-white/25 hover:border-green-400/50 text-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-10 w-full relative z-10">
                <button
                  onClick={handleCall}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-green-500/30"
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
