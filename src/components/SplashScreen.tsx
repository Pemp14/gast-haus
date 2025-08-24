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
      <div className="splash-container">
        <h1 className="splash-title">
          Welcome to <span className="highlight">Gast Haus</span>
        </h1>

        <div className="sprite-container">
          <div className="additional left">
            <span>hover</span>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path d="M19.54,3.1,3.62,10.31A1.17,1.17,0,0,0,4,12.5l6.23,1.26L11.5,20a1.17,1.17,0,0,0,2.19.39L20.9,4.46A1,1,0,0,0,19.54,3.1Z" fill="none" strokeWidth="2"></path>
            </svg>
          </div>

          <div>
            <label className="sprite" htmlFor="select" onClick={handleBurgerClick}></label>
            <input type="checkbox" id="select" checked={isClicked} readOnly />
          </div>

          <div className="additional right">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13L4 14.0607M13 5.06066L14.0607 4M3.5 9H2M15.8645 16.1896L13.3727 20.817C13.0881 21.3457 12.9457 21.61 12.7745 21.6769C12.6259 21.7349 12.4585 21.7185 12.324 21.6328C12.1689 21.534 12.0806 21.2471 11.9038 20.6733L8.44519 9.44525C8.3008 8.97651 8.2286 8.74213 8.28669 8.58383C8.33729 8.44595 8.44595 8.33729 8.58383 8.2867C8.74213 8.22861 8.9765 8.3008 9.44525 8.44519L20.6732 11.9038C21.247 12.0806 21.5339 12.169 21.6327 12.324C21.7185 12.4586 21.7348 12.6259 21.6768 12.7745C21.61 12.9458 21.3456 13.0881 20.817 13.3728L16.1896 15.8645C16.111 15.9068 16.0717 15.9279 16.0374 15.9551C16.0068 15.9792 15.9792 16.0068 15.9551 16.0374C15.9279 16.0717 15.9068 16.111 15.8645 16.1896Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>click</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;