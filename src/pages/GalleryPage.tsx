import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import InteractiveBentoGallery from '../components/ui/interactive-bento-gallery';

const GalleryPage: React.FC = () => {
  const { t } = useLanguage();

  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "Интерьер ресторана",
      desc: "Уютная атмосфера нашего зала",
      url: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "Суши и роллы",
      desc: "Свежие суши от наших мастеров",
      url: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Обеденная зона",
      desc: "Элегантная обстановка для ужина",
      url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Стейк",
      desc: "Сочный стейк с овощами",
      url: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 5,
      type: "image",
      title: "Свежий салат",
      desc: "Салат из свежих ингредиентов",
      url: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 6,
      type: "image",
      title: "Терраса",
      desc: "Открытая терраса для летних вечеров",
      url: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 7,
      type: "image",
      title: "Десерт",
      desc: "Изысканные десерты от шеф-повара",
      url: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 8,
      type: "image",
      title: "Кофе и напитки",
      desc: "Ароматный кофе и авторские напитки",
      url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
    },
    {
      id: 9,
      type: "image",
      title: "Вечерняя атмосфера",
      desc: "Романтическая обстановка вечером",
      url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
    },
    {
      id: 10,
      type: "image",
      title: "Кухня",
      desc: "Наши повара за работой",
      url: "https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800",
      span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
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