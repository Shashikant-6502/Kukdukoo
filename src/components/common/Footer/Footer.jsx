import React from 'react';
import './Footer.css';
import footerBg from '../../../assets/images/footer-background.png';
import kukdukooLogo from '../../../assets/images/kukdukoo-logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

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
          <a  className="footer-btn-link">
            <button className="footer-button book-tickets-btn">BOOK TICKETS →</button>
          </a>
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
          <a href="/contact" className="footer-btn-link">
            <button className="footer-button contact-us-btn">CONTACT US →</button>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;