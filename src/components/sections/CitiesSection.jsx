import React from 'react';
import { useNavigate } from 'react-router-dom';
import citiesData from '../../data/citiesData.json';

function CitiesSection() {
  const navigate = useNavigate();

  const handleExploreCities = () => {
    // For now, navigate to home page since there's no specific cities page
    navigate('/');
  };

  return (
    <section className="cities-section">
      <h2>CITIES WE ARE GOING TO</h2>
      {/* <div className="cities-grid">
        {citiesData.cities.map((city, index) => (
          <div key={index} className="city-card">
            <p>{city.name}</p>
            <p>{city.date}</p>
          </div>
        ))}
      </div> */}
      <button onClick={handleExploreCities}>Explore Cities</button>
    </section>
  );
}
export default CitiesSection;