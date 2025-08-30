import React from 'react';
import { useNavigate } from 'react-router-dom';
import partnersData from '../../../data/partnersData.json';
import leftArm from '../../../assets/images/left-arm.png';
import rightArm from '../../../assets/images/right-arm.png';
import './PartnerSection.css';
import arrowButton from '../../../assets/images/black-arrow-button.png';
import WaveDividerLayout from '../../layout/WaveDividerLayout';
import ArrowButton from '../../../assets/buttons/greenButton/greenButton';
function PartnersSection() {
  const navigate = useNavigate();

  const handlePartnerWithUs = () => {
    navigate('/sponsor');
  };

  return (
    <section className="partners-section">
      <WaveDividerLayout position="top" boatPosition="left-boat"/>
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
      <ArrowButton label={"PARTNER WITH US"}  />
    </section>
  );
}
export default PartnersSection;