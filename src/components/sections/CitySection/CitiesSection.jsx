import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import './CitySection.css';
import citiesData from '../../../data/citiesData.json';

import leftLocationIcon from '../../../assets/images/left-side-location-icon.png';
import rightLocationIcon from '../../../assets/images/right-side-location-icon.png';
import bengluru from '../../../assets/images/bengluru-icon.png';
import hyderabad from '../../../assets/images/Hyderabad-icon.png';
import mumbai from '../../../assets/images/mumbai-icon.png';
import pune from '../../../assets/images/pune-icon.png';
import noida from '../../../assets/images/noida-icon.png';
import citiesPaperPlane from '../../../assets/images/cities-paper-plane-icon.png';
import ArrowButton from "../../../assets/buttons/greenButton/greenButton";
import WaveDividerLayout from '../../layout/WaveDividerLayout';

function CitiesSection() {
  const cityIcon = {
    'bengluru-icon.png': bengluru,
    'hyderabad-icon.png': hyderabad,
    'mumbai-icon.png': mumbai,
    'pune-icon.png': pune,
    'noida-icon.png': noida,
  };

  const navigate = useNavigate();
  const handleExploreCities = () => {
    navigate('/AllCityPage');
  };

  return (
    <div className="city-section">
      <img src={citiesPaperPlane} alt="Paper Arrow" className="paper-arrow-plane" />
      <WaveDividerLayout position="top" hideWave={false} hideBoat={false} />
      <div className="section-content">
        <h2>
          <img src={leftLocationIcon} alt="Location" className="location-icon" />
          Cities We Are Going To
          <img src={rightLocationIcon} alt="Location" className="location-icon" />
        </h2>

        {/* ✅ Desktop/Tablet Grid */}
        <div className="cities-grid">
          {citiesData.cities.map((city, index) => (
            <div className="city-card" key={index}>
              <img src={cityIcon[city.icon]} alt={city.name} className="city-icon" />
              <div className="city-name">{city.name}</div>
              <div className="city-date">{city.date.replace("25", "25’")}</div>
            </div>
          ))}
        </div>

        {/* ✅ Mobile Swiper */}
        <div className="cities-swiper">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView="auto"
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {citiesData.cities.map((city, index) => (
              <SwiperSlide key={index}>
                <div className="city-card">
                  <img src={cityIcon[city.icon]} alt={city.name} className="city-icon" />
                  <div className="city-name">{city.name}</div>
                  <div className="city-date">{city.date.replace("25", "25’")}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ArrowButton
          label={"Explore Cities"}
          onClick={handleExploreCities}
          className="explore-btn"
        />
      </div>
      <WaveDividerLayout position="bottom" hideWave={false} hideBoat={true} />
    </div>
  );
}

export default CitiesSection;
