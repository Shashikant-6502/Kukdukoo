import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import homeIcon from '../../../assets/images/home-icon.png';
import aboutIcon from '../../../assets/images/about-icon.png';
import sponsorIcon from '../../../assets/images/sponsor-icon.png';
import contactIcon from '../../../assets/images/contact-icon.png';
import roosterLogo from '../../../assets/images/kukdukoo-logo.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className={`nav-container ${isScrolled ? 'nav-shrunk' : ''}`}>
      <button 
        className={`nav-button home-button ${location.pathname === '/' ? 'active' : ''}`}
        onClick={() => handleNavigation('/')}
      >
        <img src={homeIcon} alt="Home" />
        <p>HOME</p>
      </button>
      <button 
        className={`nav-button about-button ${location.pathname === '/about' ? 'active' : ''}`}
        onClick={() => handleNavigation('/about')}
      >
        <img src={aboutIcon} alt="About" />
        <p>ABOUT</p>
      </button>
      <div className="logo-and-tickets-container">
        {!isScrolled && (
          <img 
            src={roosterLogo} 
            alt="Kuk Du Koo Fest Logo" 
            className="rooster-logo" 
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        )}
        <button 
          className="book-tickets-button"
          onClick={() => handleNavigation('/tickets')}
        >
          BOOK TICKETS
        </button>
      </div>
      <button 
        className={`nav-button sponsor-button ${location.pathname === '/sponsor' ? 'active' : ''}`}
        onClick={() => handleNavigation('/sponsor')}
      >
        <img src={sponsorIcon} alt="Sponsor" />
        <p>SPONSOR</p>
      </button>
      <button 
        className={`nav-button contact-button ${location.pathname === '/contact' ? 'active' : ''}`}
        onClick={() => handleNavigation('/contact')}
      >
        <img src={contactIcon} alt="Contact" />
        <p>CONTACT</p>
      </button>
    </div>
  );
};

export default Navigation;