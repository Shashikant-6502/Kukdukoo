import React, { useState } from "react";
import "./TestimonialSection.css";
import leftLoveIcon from '../../../assets/images/left-love-icon.png';
import rightLoveIcon from '../../../assets/images/right-love-icon.png';
import leftArrowIcon from '../../../assets/images/left-arrow-icon.png';
import rightArrowIcon from '../../../assets/images/right-arrow-icon.png';
import quoteIcon from '../../../assets/images/inverted-comma-icon.png';
import authorImg from '../../../assets/images/author.jpg';
import dramaImg from '../../../assets/images/drama.jpg';
import danceImg from '../../../assets/images/dance.jpg';

const cardsData = [
  {
    id: 1,
    text: "card-1.Another testimonial text goes here. It shows how cycling through works perfectly.",
    image: authorImg
  },
  {
    id: 2,
    text: "card-2.Another testimonial text goes here. It shows how cycling through works perfectly.",
    image: dramaImg
  },
  {
    id: 3,
    text: "card-3.Final testimonial example for the carousel effect. Clicking next goes back to the first one.",
    image: danceImg
  },
  {
    id: 4,
    text: "card-4.Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    image: authorImg
  },
  {
    id: 5,
    text: "card-5.Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    image: dramaImg
  },
  {
    id: 6,
    text: "card-6.Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    image: danceImg
  },
  {
    id: 7,
    text: "card-7.writeen by tanujain.Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    image: authorImg
  }
];
function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonial-section">
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
          <span className="curved-text">WHY FAMILIES LOVE US</span>
          <img src={rightLoveIcon} alt="right Love Icon" className="love-icon" />
        </h2>
      </div>
      <div className="testimonial-content">
        <button className="arrow-btn left" onClick={handlePrev}>
          <img src={leftArrowIcon} alt="Left" />
        </button>
        {/* Render 3 cards at a time */}
        {Array.from({ length: 3 }).map((_, i) => {
          const idx = (currentIndex + i) % cardsData.length;
          const card = cardsData[idx];
          return (
            <div className="testimonial-card" key={card.id}>
              <div className="card-image">
                <img src={card.image} alt={`testimonial ${card.id}`} />
              </div>
              <div className="testimonial-card-content">
              <div className="card-text">
                <img src={quoteIcon} alt="quote" className="quote-icon" />
                <div className="testimonial-text-wrapper">
                  <p>{card.text}</p>
                </div>
              </div>
              </div>
            </div>
          );
        })}
        <button className="arrow-btn right" onClick={handleNext}>
          <img src={rightArrowIcon} alt="Right" />
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