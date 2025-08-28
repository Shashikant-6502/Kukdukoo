import React from 'react';
import { useNavigate } from 'react-router-dom';
import partnersData from '../../../data/partnersData.json';
import leftArm from '../../../assets/images/left-arm.png';
import rightArm from '../../../assets/images/right-arm.png';
import './PartnerSection.css';
import arrowButton from '../../../assets/images/black-arrow-button.png';

function PartnersSection() {
  const navigate = useNavigate();

  const handlePartnerWithUs = () => {
    navigate('/sponsor');
  };

  return (
    <section className="partners-section">
      <div className="wave-divider-partner wave-top">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="
              M0,160 
              C 120,80 240,240 360,160
              C 480,80 600,240 720,160
              C 840,80 960,240 1080,160
              C 1200,80 1320,240 1440,160
              L1440,320 L0,320 Z"
          />
        </svg>
      </div>
      <h2 className='curved-heading'>
         <img src={leftArm} className='partner-icon'></img>
        <span className='curved-text'> OUR PARTNERS</span>
          <img src={rightArm}  className='partner-icon'></img>
      </h2>
      <div className="partners-grid">
        {partnersData.partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
      
      <button className="partner-btn" onClick={handlePartnerWithUs}>
        <span>PARTNER WITH US </span>
         <img src={arrowButton} alt="Arrow" className="btn-icon" />
      </button>
    </section>
  );
}
export default PartnersSection;