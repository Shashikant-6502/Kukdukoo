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
      <h2>
         <img src={leftArm} className='partner-icon'></img>
         OUR PARTNERS
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