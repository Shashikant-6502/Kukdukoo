import React from 'react';
import './SponsorButton.css';
import sponsorIcon from '../../images/sponsor-icon.png';

const SponsorButton = ({ isActive, isScrolled, isMobile, onClick }) => {
  return (
    <button 
      className={`nav-button sponsor-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <img src={sponsorIcon} alt="Sponsor" />
      <p>SPONSOR</p>
    </button>
  );
};

export default SponsorButton;
