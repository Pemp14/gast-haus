import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isAppVisible, setIsAppVisible] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Показываем приложение с небольшой задержкой для плавности
    setTimeout(() => {
      setIsAppVisible(true);
    }, 100);
  };

  // Анимация появления основного приложения
  useEffect(() => {
    if (!showSplash) {
      document.body.style.overflow = '';
    }
  }, [showSplash]);
  if (showSplash) {
    return (
      <LanguageProvider>
        <SplashScreen onComplete={handleSplashComplete} />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div 
          className={`min-h-screen flex flex-col transition-all duration-1000 ease-out ${
            isAppVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />           
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;