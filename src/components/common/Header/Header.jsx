import React from 'react';
import './Header.css';

// Import your icon images here
import homeIcon from '../../../assets/images/home-icon.png';
import aboutIcon from '../../../assets/images/about-icon.png';
import sponsorIcon from '../../../assets/images/sponsor-icon.png';
import contactIcon from '../../../assets/images/contact-icon.png';
import roosterLogo from '../../../assets/images/kukdukoo-logo.png';

const Navigation = () => {
  return (
    <div className="nav-container">
      <button className="nav-button home-button">
        <img src={homeIcon} alt="Home" />
        <p>HOME</p>
      </button>
      <button className="nav-button about-button">
        <img src={aboutIcon} alt="About" />
        <p>ABOUT</p>
      </button>
      <div className="logo-and-tickets-container">
        <img src={roosterLogo} alt="Kuk Du Koo Fest Logo" className="rooster-logo" />
        <button className="book-tickets-button">BOOK TICKETS</button>
      </div>
      <button className="nav-button sponsor-button">
        <img src={sponsorIcon} alt="Sponsor" />
        <p>SPONSOR</p>
      </button>
      <button className="nav-button contact-button">
        <img src={contactIcon} alt="Contact" />
        <p>CONTACT</p>
      </button>
    </div>
  );
};

export default Navigation;