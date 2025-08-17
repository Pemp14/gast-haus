import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant interior'
    },
    {
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dining area'
    },
    {
      src: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Sushi platter'
    },
    {
      src: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Steak dish'
    },
    {
      src: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fresh salad'
    },
    {
      src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant terrace'
    },
    {
      src: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Live music setup'
    },
    {
      src: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dessert presentation'
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-warm-white to-cream">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="elegant-border mb-8">
            <p className="text-gold font-medium text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
              {t('visualExperience')}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-6 sm:mb-8 font-serif px-4">
            {t('gallery')}
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl luxury-shadow cursor-pointer hover-lift"
              onClick={() => openModal(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-green-400 text-2xl sm:text-3xl lg:text-4xl font-light">
                  +
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="relative max-w-6xl max-h-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl luxury-shadow"
              />
              
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-gold hover:text-white transition-all duration-300"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute -left-4 sm:-left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4 text-white hover:bg-gold hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute -right-4 sm:-right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 sm:p-4 text-white hover:bg-gold hover:text-white transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>

              {/* Image counter */}
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base">
                {selectedImage + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;