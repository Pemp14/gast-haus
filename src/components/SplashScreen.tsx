import React, { useState, useEffect } from 'react';
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
    <div className="splash-screen">
      <div className="click-hint">
        click to enter
      </div>
      <div>
        <label className="sprite" htmlFor="select" onClick={handleBurgerClick}></label>
        <input type="checkbox" id="select" checked={isClicked} readOnly />
      </div>
    </div>
  );
};

export default SplashScreen;