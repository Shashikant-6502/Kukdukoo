import React from 'react';
import './HomeButton.css';
import homeIcon from '../../images/home-icon.png';

const HomeButton = ({ isActive, isScrolled, isMobile, onClick }) => {
  return (
    <button 
      className={`nav-button home-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <img src={homeIcon} alt="Home" />
      <p>HOME</p>
    </button>
  );
};

export default HomeButton;
