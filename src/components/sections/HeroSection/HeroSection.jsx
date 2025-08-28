import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';
import playButton from '../../../assets/images/play-button.png';
import arrowButton from '../../../assets/images/arrow-button.png';
import WaveDividerLayout from '../../layout/WaveDividerLayout';
function HeroSection() {
  const navigate = useNavigate();

  const handleWatchHighlights = () => {
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

       <WaveDividerLayout position="bottom" hideBoat="true"/>
    </section>
  );
}

export default HeroSection;
