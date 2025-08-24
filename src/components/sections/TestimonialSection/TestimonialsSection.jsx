import React, { useState, useEffect } from "react";
import "./TestimonialSection.css";
import leftLoveIcon from '../../../assets/images/left-love-icon.png';
import rightLoveIcon from '../../../assets/images/right-love-icon.png';
const cardsData = [
  { id: 1, title: "Card 1", desc: "This is card one" },
  { id: 2, title: "Card 2", desc: "This is card two" },
  { id: 3, title: "Card 3", desc: "This is card three" },
  { id: 4, title: "Card 4", desc: "This is card four" },
  { id: 5, title: "Card 5", desc: "This is card five" },
  { id: 6, title: "Card 6", desc: "This is card six" },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cardsData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back to start
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(cardsData.length - 3); // loop back to last
    }
  };

  // ✅ Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    
    <section className="card-section">
        
      <div className="wave-divider-family wave-top">
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
      <div className="heading-wrapper">
    <h2 className="curved-heading">
      <img src={leftLoveIcon} alt="left Love Icon" className="love-icon" />
      <span className="curved-text">WHY FAMiLiES LOVE US</span>
      <img src={rightLoveIcon} alt="right Love Icon" className="love-icon" />
    </h2>
  </div>
      <div className="slider-wrapper">
        
        {/* Left Arrow */}
        <button className="arrow left" onClick={handlePrev}>
          ◀
        </button>

        {/* Slider */}
        <div className="slider">
          <div
            className="cards-container"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
        
                  
            {cardsData.map((card) => (
              <div key={card.id} className="card">
                 <div className="card-content">
                   <h3>{card.title}</h3>
                 </div>
                 <div className="quote-box">
                   <span className="quote-icon">❝</span>
                    <p>{card.desc}</p>
                 </div>
                {/* Overlapping Button */}
            
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className="arrow right" onClick={handleNext}>
          ▶
        </button>
      </div>
       <div className="wave-divider-family wave-bottom">
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

export default TestimonialsSection;
