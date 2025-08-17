import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'menu', path: '/menu' },
    { key: 'about', path: '/about' },
    { key: 'gallery', path: '/gallery' },
  ];

  return (
    <footer className="bg-gradient-to-br from-soft-black to-charcoal text-white py-16 lg:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div>
            <Link to="/">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-serif text-gold">Gast Haus</h3>
            </Link>
            <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              {t('aboutText').substring(0, 100)}...
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/gasthaus.md"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full text-white hover:bg-gold hover:text-white transition-all duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/gasthaus.md"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full text-white hover:bg-gold hover:text-white transition-all duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gold">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-gold transition-colors text-sm sm:text-base font-medium"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-white/70 text-sm sm:text-base">
            {t('copyright')} | {t('followUs')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;