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
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-0 w-screen h-[100dvh] bg-soft-black text-white shadow-xl
            pt-[calc(20px+env(safe-area-inset-top))] pb-[env(safe-area-inset-bottom)] px-6
            overflow-y-auto overscroll-contain flex flex-col justify-center"

            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 max-w-sm mx-auto w-full">
              <nav className="space-y-4 text-center w-full">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-4 px-4 rounded-xl hover:bg-white/5 text-xl font-medium transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 w-full">
                <button
                  onClick={handleCall}
                  className="w-full bg-green-600 hover:bg-green-700 px-6 py-4 rounded-xl font-semibold text-lg transition-colors duration-200"
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
