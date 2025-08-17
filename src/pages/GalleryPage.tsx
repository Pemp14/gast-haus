import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import InteractiveBentoGallery from '../components/ui/interactive-bento-gallery';

const GalleryPage: React.FC = () => {
  const { t } = useLanguage();

  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "Интерьер",
      desc: "",
      url: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-1 row-span-2 md:col-span-1 md:row-span-3",
    },
    {
      id: 2,
      type: "image",
      title: "Суши",
      desc: "",
      url: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Зал",
      desc: "",
      url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-1 row-span-3 md:col-span-1 md:row-span-3",
    },
    {
      id: 4,
      type: "image",
      title: "Стейк",
      desc: "",
      url: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "Салат",
      desc: "",
      url: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-1 row-span-2 md:col-span-1 md:row-span-3",
    },
    {
      id: 6,
      type: "image",
      title: "Терраса",
      desc: "",
      url: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
    },
    {
      id: 7,
      type: "image",
      title: "Десерт",
      desc: "",
      url: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-2 row-span-2 md:col-span-1 md:row-span-3",
    },
    {
      id: 8,
      type: "image",
      title: "Кофе",
      desc: "",
      url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
    },
    {
      id: 9,
      type: "image",
      title: "Атмосфера",
      desc: "",
      url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-1 row-span-3 md:col-span-1 md:row-span-2",
    },
    {
      id: 10,
      type: "image",
      title: "Кухня",
      desc: "",
      url: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "col-span-2 row-span-2 md:col-span-1 md:row-span-2",
    }
  ];

  return (
    <div className="pt-16 sm:pt-18 lg:pt-20 bg-gradient-to-b from-warm-white to-cream min-h-screen">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title={t('gallery')}
        description={t('exploreAtmosphere')}
      />
    </div>
  );
};

export default GalleryPage;