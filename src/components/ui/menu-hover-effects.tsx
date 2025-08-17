import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function NavMenu() {
  const { t } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const items = [
    { key: 'home', path: '/' },
    { key: 'menu', path: '/menu' },
    { key: 'about', path: '/about' },
    { key: 'gallery', path: '/gallery' },

  ];

  // Desktop список с hover-анимацией
  const Desktop = (
    <ul className="hidden md:flex items-center space-x-4 lg:space-x-8">
      {items.map(item => (
        <li key={item.key} className="list-none">
          <Link to={item.path} className="relative inline-block group">
            <span
              className={`relative z-10 block uppercase font-sans font-semibold transition-colors duration-300
                          text-sm px-3 py-2
                          ${location.pathname === item.path ? 'text-green-400'
                                                            : 'text-white group-hover:text-black'}`}
            >
              {t(item.key)}
            </span>
            <span className="pointer-events-none absolute inset-0 border-t-2 border-b-2 border-white
                              transform scale-y-[2] opacity-0 transition-all duration-300 origin-center
                              group-hover:scale-y-100 group-hover:opacity-100" />
            <span className="pointer-events-none absolute top-[2px] left-0 w-full h-full bg-white
                              transform scale-0 opacity-0 transition-all duration-300 origin-top
                              group-hover:scale-100 group-hover:opacity-100" />
          </Link>
        </li>
      ))}
    </ul>
  );
  


  // Кнопка‑бургер
  const Burger = (
    <button
      onClick={() => setOpen(true)}
      className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
      aria-label="Open menu" aria-expanded={open}
    >
      <Menu className="h-5 w-5" />
    </button>
  );

  // Мобильный оверлей через portal
  const MobileOverlay = open && createPortal(
    <div
      className="fixed inset-0 z-[999] w-screen h-[100dvh] bg-black/80 backdrop-blur-sm"
      onClick={() => setOpen(false)} role="dialog" aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-soft-black text-white w-screen h-[100dvh]
                   pt-[calc(20px+env(safe-area-inset-top))] pb-[env(safe-area-inset-bottom)]
                   overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4">
          <span className="text-lg font-semibold">{t('menu')}</span>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {items.map(i => (
              <li key={i.key}>
                <Link
                  to={i.path}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-xl px-4 py-4 text-2xl uppercase hover:bg-white/5"
                >
                  {t(i.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      {Desktop}
      {Burger}
      {MobileOverlay}
    </>
  );
}
