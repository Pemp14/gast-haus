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
    <footer className="bg-gradient-to-br from-soft-black to-charcoal text-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div>
            <Link to="/">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-serif text-green-400">Gast Haus</h3>
            </Link>
            <p className="text-white/70 mb-6 text-sm sm:text-base leading-relaxed">
              {t('aboutText').substring(0, 100)}...
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/gasthaus.md"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full text-white hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/gasthaus.md"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full text-white hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-400">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-green-400 transition-colors text-sm sm:text-base font-medium"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/70 text-sm sm:text-base">
            {t('copyright')} | {t('followUs')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;