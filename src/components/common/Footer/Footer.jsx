import React from 'react';
import './Footer.css';
import footerBg from '../../../assets/images/footer-background.png';
import kukdukooLogo from '../../../assets/images/kukdukoo-logo.png';

function Footer() {
  return (
    <footer className="footer-container" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-content">
        {/* Left Column - Navigation Links */}
        <div className="footer-section footer-links">
          <ul>
            <li>→ CONTACT US</li>
            <li>→ FAQ</li>
            <li>→ INFO</li>
            <li>→ TERMS & CONDITIONS</li>
            <li>→ PRIVACY POLICY</li>
          </ul>
        </div>
        
        {/* Center Column - Logo and Book Tickets Button */}
        <div className="footer-section footer-center">
          <img src={kukdukooLogo} alt="Kukdukoo Fest Logo" className="footer-logo" />
          <a href="/tickets" className="footer-btn-link">
            <button className="footer-button book-tickets-btn">BOOK TICKETS →</button>
          </a>
        </div>
        
        {/* Right Column - Social Media and Contact Button */}
        <div className="footer-section footer-social">
          <h3>OUR SOCIAL</h3>
          <div className="social-icons-container">
            <div className="social-icon"></div> 
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
          </div>
          <a href="/contact" className="footer-btn-link">
            <button className="footer-button contact-us-btn">CONTACT US →</button>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;