import React from 'react';
import './AboutButton.css';
import aboutIcon from '../../images/about-icon.png';

const AboutButton = ({ isActive, isScrolled, isMobile, onClick }) => {
  return (
    <button 
      className={`nav-button about-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <img src={aboutIcon} alt="About" />
      <p>ABOUT</p>
    </button>
  );
};

export default AboutButton;
