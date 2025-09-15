import React, { useState, useEffect } from "react";
import "./TestimonialSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import leftLoveIcon from "../../../assets/images/left-love-icon.png";
import rightLoveIcon from "../../../assets/images/right-love-icon.png";
import leftArrowIcon from "../../../assets/images/left-arrow-icon.png";
import rightArrowIcon from "../../../assets/images/right-arrow-icon.png";
import authorImg from "../../../assets/images/author.jpg";
import dramaImg from "../../../assets/images/drama.jpg";
import danceImg from "../../../assets/images/dance.jpg";

import WaveDividerLayout from "../../layout/WaveDividerLayout";
import TestimonialCard from "../../common/TestimonialCard/TestimonialCard";

import cardsJson from "../../../data/cardsData.json";

const imageMap = {
  authorImg,
  dramaImg,
  danceImg,
};

const cardsData = cardsJson.cardsData.map((card) => ({
  ...card,
  image: imageMap[card.image],
}));

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

      {!isMobile && (
        <div className="testimonial-content">
          <button className="arrow-btn left" onClick={handlePrev}>
            <img src={leftArrowIcon} alt="Left" />
          </button>
          {Array.from({ length: 3 }).map((_, i) => {
            const idx = (currentIndex + i) % cardsData.length;
            const card = cardsData[idx];
            return (
              <TestimonialCard
                key={card.id}
                brandName={card.brandName}
                testimonialText={card.text}
                image={card.image}
                showHeader={false}
              />
            );
          })}
          <button className="arrow-btn right" onClick={handleNext}>
            <img src={rightArrowIcon} alt="Right" />
          </button>
        </div>
      )}

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
                <TestimonialCard
                  brandName={card.brandName}
                  testimonialText={card.text}
                  image={card.image}
                  showHeader={false}
                />
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
