import React, { useState, useEffect } from 'react';
import { MorphingText } from './ui/morphing-text';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleBurgerClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      // Через 5 секунд закрываем splash screen
      setTimeout(() => {
        onComplete();
      }, 5000);
    }
  };

  return (
    <div className={`splash-screen ${isClicked ? 'clicked' : ''}`}>
      <div className="click-hint">
        click the burger to enter
      </div>
      <div>
        <label className="sprite" htmlFor="select" onClick={handleBurgerClick}></label>
        <input type="checkbox" id="select" checked={isClicked} readOnly />
      </div>
      {isClicked && (
        <div className="morphing-text-container">
          <MorphingText 
            texts={["Welcome", "to", "Gast Haus"]} 
            className="text-white"
          />
        </div>
      )}
    </div>
  );
};

export default SplashScreen;