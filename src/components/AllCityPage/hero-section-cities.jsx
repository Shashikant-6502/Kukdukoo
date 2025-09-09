import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../sections/HeroSection/HeroSection.css';
import staticImage from '../../assets/images/staticImage.png';
import text from '../../assets/images/cities-we-are-going-to.png';
import citiesArrow from '../../assets/images/cities-arrow.png';
import WaveDividerLayout from '../layout/WaveDividerLayout';
function HeroSection() {
  const navigate = useNavigate();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleWatchHighlights = () => {
    window.open('https://www.youtube.com/watch?v=_6pwOsou9ms', '_blank');
  };

  const handleBookTickets = () => {
    navigate('/tickets');
  };

  return (
    <section className="hero-section"
    style={{height: '350px'}}>
      <div className="video-iframe-wrapper">
        {/* Static fallback image */}
        <img 
          src={staticImage} 
          alt="Kukdukoo Fest Preview" 
          className={`video-fallback ${iframeLoaded ? 'hidden' : ''}`} 
        />

        {/* YouTube iframe */}
        <iframe
          src="https://www.youtube.com/embed/_6pwOsou9ms?autoplay=1&mute=1&loop=1&playlist=_6pwOsou9ms&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Kukdukoo Fest Video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen={false}
          onLoad={() => setIframeLoaded(true)} // 👈 hide fallback once loaded
        ></iframe>
      </div>

      <div className="hero-content">
        <div className="hero-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={text}
            style={{ width: '50%', height: 'auto', marginBottom: '15px' }}
            alt="Cities We Are Going To"
          />
          <img src={citiesArrow}
            style={{ width: '60px', height: 'auto', marginTop: '-10px' }}
            alt="Cities Arrow"
          />
        </div>
         <WaveDividerLayout position="bottom" hideBoat="true"/>
      </div>
    </section>)
}

export default HeroSection;
