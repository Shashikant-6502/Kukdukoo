import React from 'react';
import './CitySection.css';
import { useNavigate } from 'react-router-dom';
import citiesData from '../../../data/citiesData.json';
import leftLocationIcon from '../../../assets/images/left-side-location-icon.png';
import rightLocationIcon from '../../../assets/images/right-side-location-icon.png';

function CitiesSection() {
  const navigate = useNavigate();

  const handleExploreCities = () => {
    // For now, navigate to home page since there's no specific cities page
    navigate('/');
  };

  return (
    <section className="city-section">
      {/* Top Wave */}
      <div className="wave-divider-city wave-top">
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

      {/* Section Content */}
      <div className="section-content">
        <h2>
          <img src={leftLocationIcon} alt="left Location Icon" className="location-icon" />
          CITIES WE ARE GOING TO
          <img src={rightLocationIcon} alt="right Location Icon" className="location-icon" />
        </h2>

        <div className="cities-grid">
          {citiesData.cities.map((city, index) => (
            <div key={index} className="city-card">
              <p>{city.name}</p>
              <p>{city.date}</p>
            </div>
          ))}
        </div>

        <button className="explore-btn" onClick={handleExploreCities}>
          Explore Cities ➝
        </button>
      </div>

      {/* Bottom Wave */}
      <div className="wave-divider-city wave-bottom">
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
    </section>
  );
}

export default CitiesSection;
