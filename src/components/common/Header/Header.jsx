import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import roosterLogo from '../../../assets/images/kukdukoo-logo.png';
import { HomeButton, AboutButton, SponsorButton, ContactButton, BookTicketsButton } from '../../../assets/buttons/index';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); 
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`nav-container ${isScrolled ? 'nav-shrunk' : ''} ${isMobile ? 'mobile' : ''}`}>
      <HomeButton 
        isActive={location.pathname === '/'}
        isScrolled={isScrolled}
        isMobile={isMobile}
        onClick={() => handleNavigation('/')}
      />
      <AboutButton 
        isActive={location.pathname === '/about'}
        isScrolled={isScrolled}
        isMobile={isMobile}
        onClick={() => handleNavigation('/about')}
      />
      <div className="logo-and-tickets-container">
        {!isScrolled && !isMobile && (
          <img 
            src={roosterLogo} 
            alt="Kuk Du Koo Fest Logo" 
            className="rooster-logo" 
            style={{ cursor: 'pointer' }}
          />
        )}
        <BookTicketsButton 
          isScrolled={isScrolled}
          isMobile={isMobile}
          onClick={() => handleNavigation('/tickets')}
        />
      </div>
      <SponsorButton 
        isActive={location.pathname === '/sponsor'}
        isScrolled={isScrolled}
        isMobile={isMobile}
        onClick={() => handleNavigation('/sponsor')}
      />
      <ContactButton 
        isActive={location.pathname === '/contact'}
        isScrolled={isScrolled}
        isMobile={isMobile}
        onClick={() => handleNavigation('/contact')}
      />
    </div>
  );
};

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${isShrunk ? ' shrunk' : ''}`}>
      <Navigation />
    </header>
  );
};

export default Header;