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
import authorImg from '../../../assets/images/author.jpg';
import dramaImg from '../../../assets/images/drama.jpg';
import danceImg from '../../../assets/images/dance.jpg';
import WaveDividerLayout from '../../layout/WaveDividerLayout';
import TestimonialCard from '../../common/TestimonialCard/TestimonialCard';

const cardsData = [
  { 
    id: 1, 
    brandName: "BRAND NAME", 
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.", 
    image: authorImg 
  },
  { 
    id: 2, 
    brandName: "FAMILY FUN", 
    text: "This festival brought our family together for an amazing experience filled with joy, laughter, and unforgettable memories.", 
    image: dramaImg 
  },
  { 
    id: 3, 
    brandName: "KIDS LOVE IT", 
    text: "My children had the time of their lives! The activities were engaging and perfectly suited for their age group.", 
    image: danceImg 
  },
  { 
    id: 4, 
    brandName: "AMAZING EVENT", 
    text: "The organization was flawless and the entertainment was top-notch. We can't wait for next year!", 
    image: authorImg 
  },
  { 
    id: 5, 
    brandName: "HIGHLY RECOMMEND", 
    text: "A perfect blend of fun and learning. The kids were entertained while we parents could relax and enjoy.", 
    image: dramaImg 
  },
  { 
    id: 6, 
    brandName: "WORTH EVERY PENNY", 
    text: "Great value for money with so many activities and shows. The whole family had an incredible time.", 
    image: danceImg 
  },
  { 
    id: 7, 
    brandName: "BEST FESTIVAL", 
    text: "This is hands down the best family festival we've ever attended. The atmosphere was magical!", 
    image: authorImg 
  }
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
                showHeader={true}
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
