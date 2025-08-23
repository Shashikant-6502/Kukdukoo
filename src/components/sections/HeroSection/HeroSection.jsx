import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import playButton from '../../../assets/images/play-button.png';
import arrowButton from '../../../assets/images/arrow-button.png';

function HeroSection() {
  const navigate = useNavigate();

  const handleWatchHighlights = () => {
    // Open YouTube video in a new tab
    window.open('https://www.youtube.com/watch?v=_6pwOsou9ms', '_blank');
  };

  const handleBookTickets = () => {
    navigate('/tickets');
  };

  return (
    <section className="hero-section">
      <div className="video-iframe-wrapper">
        <iframe
          src="https://www.youtube.com/embed/_6pwOsou9ms?autoplay=1&mute=1&loop=1&playlist=_6pwOsou9ms&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Kukdukoo Fest Video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        ></iframe>
      </div>

      <div className="hero-content">
      <div className="hero-buttons">
  <button className="watch-btn" onClick={handleWatchHighlights}>
    <span>WATCH<br />HIGHLIGHTS</span>
    <img src={playButton} alt="Play" className="btn-icon" />
  </button>
  <button className="book-btn" onClick={handleBookTickets}>
    <span>BOOK<br />TICKETS</span>
    <img src={arrowButton} alt="Arrow" className="btn-icon" />
  </button>
</div>

      </div>
      <div className="wave-divider">
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
      L1440,320 L0,320 Z">

      </path>
  </svg>
</div>

    </section>
  );
}

export default HeroSection;
