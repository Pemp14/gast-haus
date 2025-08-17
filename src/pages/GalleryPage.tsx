import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const GalleryPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant interior',
      category: 'Interior'
    },
    {
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dining area',
      category: 'Interior'
    },
    {
      src: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Sushi platter',
      category: 'Food'
    },
    {
      src: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Steak dish',
      category: 'Food'
    },
    {
      src: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fresh salad',
      category: 'Food'
    },
    {
      src: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant terrace',
      category: 'Terrace'
    },
    {
      src: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Live music setup',
      category: 'Events'
    },
    {
      src: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Dessert presentation',
      category: 'Food'
    },
    {
      src: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Coffee and drinks',
      category: 'Drinks'
    },
    {
      src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Evening atmosphere',
      category: 'Interior'
    },
    {
      src: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Chef preparing food',
      category: 'Kitchen'
    },
    {
      src: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wine selection',
      category: 'Drinks'
    }
  ];

  const categories = ['All', 'Interior', 'Food', 'Terrace', 'Events', 'Drinks', 'Kitchen'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'All': return t('all');
      case 'Interior': return t('interior');
      case 'Food': return t('food');
      case 'Terrace': return t('terrace');
      case 'Events': return t('events');
      case 'Drinks': return t('drinks');
      case 'Kitchen': return t('kitchen');
      default: return category;
    }
  };

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <div className="pt-16 sm:pt-18 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-warm-white to-cream overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 border border-gold/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-gold/30 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="elegant-border mb-8">
            <p className="text-gold font-medium text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4">
              {t('visualExperience')}
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 sm:mb-8 font-serif">
            {t('gallery')}
          </h1>
          <div className="section-divider"></div>
          <p className="text-lg lg:text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed font-light">
            {t('exploreAtmosphere')}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 lg:py-12 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? 'gold-gradient text-white shadow-lg'
                    : 'bg-white text-charcoal hover:bg-gold hover:text-white'
                }`}
              >
                {getCategoryName(category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gradient-to-b from-cream to-warm-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl lg:rounded-3xl luxury-shadow cursor-pointer hover-lift"
                onClick={() => openModal(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4">
                  <div className="text-white">
                    <p className="text-sm font-semibold">{image.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-gold text-3xl lg:text-4xl font-light">+</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:p-6">
          <div className="relative max-w-6xl max-h-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-xl lg:rounded-2xl luxury-shadow"
            />
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-gold hover:text-white transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-4 text-white hover:bg-gold hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-4 text-white hover:bg-gold hover:text-white transition-all duration-300"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image info */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-medium">
              <span className="text-gold">{selectedImage + 1}</span> / {filteredImages.length}
              <span className="mx-2">•</span>
              <span>{filteredImages[selectedImage].category}</span>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default GalleryPage;