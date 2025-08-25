import React, { useState, useEffect } from 'react';
import { MorphingText } from './ui/morphing-text';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleBurgerClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      // Показываем текст через 2 секунды после клика
      setTimeout(() => {
        setShowText(true);
      }, 2000);
      // Через 6.5 секунд начинаем анимацию выхода (2 + 1.5 + 1 + 2)
      setTimeout(() => {
        setIsExiting(true);
        // Через 1 секунду полностью закрываем
        setTimeout(() => {
          onComplete();
        }, 1000);
      }, 6500);
    }
  };

  return (
    <div className={`splash-screen ${isExiting ? 'exiting' : ''}`}>
      <div className="click-hint">
        click the burger to enter
      </div>
      <div 
        className="sprite-container"
        style={{
          transform: isClicked ? 'translateY(180px)' : 'translateY(0)',
          transition: 'transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        <label className="sprite" htmlFor="select" onClick={handleBurgerClick}></label>
        <input type="checkbox" id="select" checked={isClicked} readOnly />
      </div>
      {showText && (
        <div className="morphing-text-container">
          <MorphingText 
            texts={["Welcome", "to", "Gast Haus"]} 
            className="text-white font-serif"
          />
        </div>
      )}
    </div>
  );
};

export default SplashScreen;