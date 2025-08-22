import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import footerBg from '../../../assets/images/footer-background.png';
import kukdukooLogo from '../../../assets/images/kukdukoo-logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact');
  };

  const handleBookTickets = () => {
    navigate('/tickets');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <footer className="footer-container" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-content">
        {/* Left Column - Navigation Links */}
        <div className="footer-section footer-links">
          <ul>
            <li onClick={handleContactUs} style={{ cursor: 'pointer' }}>→ CONTACT US</li>
            <li style={{ cursor: 'pointer' }}>→ FAQ</li>
            <li style={{ cursor: 'pointer' }}>→ INFO</li>
            <li style={{ cursor: 'pointer' }}>→ TERMS & CONDITIONS</li>
            <li style={{ cursor: 'pointer' }}>→ PRIVACY POLICY</li>
          </ul>
        </div>
        
        {/* Center Column - Logo and Book Tickets Button */}
        <div className="footer-section footer-center">
          <img 
            src={kukdukooLogo} 
            alt="Kukdukoo Fest Logo" 
            className="footer-logo" 
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
          <button 
            className="footer-button book-tickets-btn"
            onClick={handleBookTickets}
          >
            BOOK TICKETS →
          </button>
        </div>
        
        {/* Right Column - Social Media and Contact Button */}
        <div className="footer-section footer-social">
          <h3>OUR SOCIAL</h3>
          <div className="social-icons-container">
            <a href="https://www.facebook.com" className="social-link" aria-label="Facebook">
              <FaFacebook size={40} />
            </a>
            <a href="https://www.twitter.com" className="social-link" aria-label="Twitter">
              <FaTwitter size={40} />
            </a>
            <a href="https://www.instagram.com/kukdukoofest/?hl=en" className="social-link" aria-label="Instagram">
              <FaInstagram size={40} />
            </a>
            <a href="https://www.youtube.com/@Kukdukoo" className="social-link" aria-label="YouTube">
              <FaYoutube size={40} />
            </a>
          </div>
          <button 
            className="footer-button contact-us-btn"
            onClick={handleContactUs}
          >
            CONTACT US →
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;