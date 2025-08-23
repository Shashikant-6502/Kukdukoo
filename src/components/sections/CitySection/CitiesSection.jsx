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
    <section className="cities-section">
      <h2>
      <img src={leftLocationIcon} alt="left Location Icon" className='location-icon'></img>
      CITIES WE ARE GOING TO
       <img src={rightLocationIcon} alt="right Location Icon" className='location-icon'></img>
     </h2>
      {/* <div className="cities-grid">
        {citiesData.cities.map((city, index) => (
          <div key={index} className="city-card">
            <p>{city.name}</p>
            <p>{city.date}</p>
          </div>
        ))}
      </div> */}
      <button className='explore-city-button' onClick={handleExploreCities}>Explore Cities</button>
    </section>
  );
}
export default CitiesSection;