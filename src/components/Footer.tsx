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
    <footer className="bg-gradient-to-r from-soft-black to-charcoal text-white py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/" className="flex items-center">
              <h3 className="text-xl font-bold text-green-400" style={{ fontFamily: 'Fredoka One, cursive' }}>Gast Haus</h3>
            </Link>
            <p className="text-white/60 text-sm">
              {t('copyright')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6">
            {quickLinks.map((link) => (
              <Link
                key={link.key}
                to={link.path}
                className="text-white/70 hover:text-green-400 transition-colors text-sm font-medium"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com/gasthaus.md"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full text-white hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com/gasthaus.md"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full text-white hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;