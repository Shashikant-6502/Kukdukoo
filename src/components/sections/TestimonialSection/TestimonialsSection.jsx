import React, { useState, useEffect } from "react";
import "./TestimonialSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import leftLoveIcon from '../../../assets/images/left-love-icon.png';
import rightLoveIcon from '../../../assets/images/right-love-icon.png';
import leftArrowIcon from '../../../assets/images/left-arrow-icon.png';
import rightArrowIcon from '../../../assets/images/right-arrow-icon.png';
import quoteIcon from '../../../assets/images/inverted-comma-icon.png';
import authorImg from '../../../assets/images/author.jpg';
import dramaImg from '../../../assets/images/drama.jpg';
import danceImg from '../../../assets/images/dance.jpg';
import WaveDividerLayout from '../../layout/WaveDividerLayout';

const cardsData = [
  { id: 1, text: "card-1 testimonial text goes here...", image: authorImg },
  { id: 2, text: "card-2 testimonial text goes here...", image: dramaImg },
  { id: 3, text: "card-3 testimonial example...", image: danceImg },
  { id: 4, text: "card-4 lorem ipsum...", image: authorImg },
  { id: 5, text: "card-5 lorem ipsum...", image: dramaImg },
  { id: 6, text: "card-6 lorem ipsum...", image: danceImg },
  { id: 7, text: "card-7 written by tanujain...", image: authorImg }
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 490);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 490);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <WaveDividerLayout position="top" boatPosition="right-boat" />
      <div className="heading-wrapper">
        <h2 className="curved-heading">
          <img src={leftLoveIcon} alt="left Love Icon" className="love-icon" />
          <span className="curved-text">WHY FAMILIES LOVE US</span>
          <img src={rightLoveIcon} alt="right Love Icon" className="love-icon" />
        </h2>
      </div>

      {/* ✅ Desktop View (3 cards + arrows) */}
      {!isMobile && (
        <div className="testimonial-content">
          <button className="arrow-btn left" onClick={handlePrev}>
            <img src={leftArrowIcon} alt="Left" />
          </button>
          {Array.from({ length: 3 }).map((_, i) => {
            const idx = (currentIndex + i) % cardsData.length;
            const card = cardsData[idx];
            return (
              <div className="testimonial-card" key={card.id}>
                <div className="card-image">
                  <img src={card.image} alt={`testimonial ${card.id}`} />
                </div>
                <div className="testimonial-card-content" style={{ transform: "scaleX(1.09)" }}>
                  <div className="card-text">
                    <div className="quote-icon-overlap">
                      <img src={quoteIcon} alt="quote" className="quote-icon" />
                    </div>
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
      )}

      {/* ✅ Mobile View (Swiper autoplay + dots) */}
      {isMobile && (
        <div className="testimonial-swiper">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {cardsData.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="testimonial-card">
                  <div className="card-image">
                    <img src={card.image} alt={`testimonial ${card.id}`} />
                  </div>
                  <div className="testimonial-card-content">
                    <div className="card-text">
                      <div className="quote-icon-overlap">
                        <img src={quoteIcon} alt="quote" className="quote-icon" />
                      </div>
                      <div className="testimonial-text-wrapper">
                        <p>{card.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <WaveDividerLayout position="bottom" hideBoat="true" />
    </section>
  );
}

export default TestimonialsSection;
