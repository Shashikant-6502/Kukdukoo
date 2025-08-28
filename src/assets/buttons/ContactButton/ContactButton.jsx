import React from 'react';
import './ContactButton.css';
import contactIcon from '../../images/contact-icon.png';

const ContactButton = ({ isActive, isScrolled, isMobile, onClick }) => {
  return (
    <button 
      className={`nav-button contact-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <img src={contactIcon} alt="Contact" />
      <p>CONTACT</p>
    </button>
  );
};

export default ContactButton;
