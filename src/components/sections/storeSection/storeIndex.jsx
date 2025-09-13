import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import "./storestyling.css";
import stairImage from "../../../assets/images/Union.png";
import author from "../../../assets/images/author.jpg";
import dance from "../../../assets/images/dance.jpg";
import drama from "../../../assets/images/drama.jpg";
import folkDance from "../../../assets/images/folkDance.jpg";
import book from "../../../assets/images/book.png";
import joker from "../../../assets/images/joker.png";
import superman from "../../../assets/images/superman.png";
import face from "../../../assets/images/face.png";
import tortoise from "../../../assets/images/tortoise.png";
import pen from "../../../assets/images/pen.png";
import paperArrowStore from "../../../assets/images/store-paper-plane-icon.png";
import BookTicketsButton from "../../../assets/buttons/BookTicketsButton/BookTicketsButton";
import leftArrowIcon from '../../../assets/images/left-arrow-icon.png';
import rightArrowIcon from '../../../assets/images/right-arrow-icon.png';
import kukdukoo2 from "../../../assets/images/kukdukoo-2.png";

export default function StoreSection() {
  const [activeTab, setActiveTab] = useState("on-stage");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [desktopCurrentSlide, setDesktopCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const onStageCards = [
    { title: "Author interactions", image: author, icon: pen },
    { title: "Storytelling", image: drama, icon: book },
    { title: "Theatre", image: dance, icon: face },
    { title: "Puppetshows", image: folkDance, icon: tortoise },
    { title: "Mime & Clowning", image: dance, icon: joker },
    { title: "Superhero Cosplay", image: folkDance, icon: superman },
  ];

  const offStageCards = [
    { title: "Art & Craft", image: author, icon: pen },
    { title: "Science Experiments", image: drama, icon: book },
    { title: "Music & Dance", image: dance, icon: face },
    { title: "Games & Activities", image: folkDance, icon: tortoise },
    { title: "Workshops", image: dance, icon: joker },
    { title: "Interactive Sessions", image: folkDance, icon: superman },
  ];

  const currentCards = activeTab === "on-stage" ? onStageCards : offStageCards;

  const handleNavigation = () => navigate("/tickets");

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
    setDesktopCurrentSlide(prev => prev === 0 ? currentCards.length - 1 : prev - 1);
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
    setDesktopCurrentSlide(prev => (prev + 1) % currentCards.length);
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const getVisibleCards = () => {
    const cards = [...currentCards, ...currentCards];
    const startIndex = desktopCurrentSlide;
    return cards.slice(startIndex, startIndex + 6);
  };

  return (
    <div className="store-header">
      <img src={paperArrowStore} alt="Paper Arrow" className="paper-arrow-store" />

      <h1 className="store-title">
        WHAT'S IN STORE <span className="question-mark">?</span>
      </h1>

      {/* Stair Image with Kukdukoo above */}
      <div className="stair-wrapper">
        <img src={stairImage} alt="stair background" className="stair-image" />
        <img src={kukdukoo2} alt="Kukdukoo" className="kukdukoo2" />

        <div className="activities-tabs">
          <button
            className={`tab ${activeTab === "on-stage" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("on-stage");
              setDesktopCurrentSlide(0);
            }}
          >
            ON STAGE <span>Activities</span>
          </button>
          <button
            className={`tab ${activeTab === "off-stage" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("off-stage");
              setDesktopCurrentSlide(0);
            }}
          >
            OFF STAGE <span>Activities</span>
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="cards-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={handlePrevSlide}>
          <img src={leftArrowIcon} alt="Previous" />
        </button>

        <div className="cards-wrapper">
          {getVisibleCards().map((card, index) => (
            <div key={`${card.title}-${index}`} className="card">
              <img src={card.image} alt={card.title} className="card-img" />
              <div className="card-footer">
                <img src={card.icon} alt="icon" className="card-icon-img" />
                <span className="card-title">{card.title}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow carousel-arrow-right" onClick={handleNextSlide}>
          <img src={rightArrowIcon} alt="Next" />
        </button>
      </div>

      {/* Mobile Swiper */}
      <div className="store-swiper">
        <button className="mobile-carousel-arrow mobile-carousel-arrow-left" onClick={handlePrevSlide}>
          <img src={leftArrowIcon} alt="Previous" />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSlideChange={handleSlideChange}
        >
          {currentCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <img src={card.image} alt={card.title} className="card-img" />
                <div className="card-footer">
                  <img src={card.icon} alt="icon" className="card-icon-img" />
                  <span className="card-title">{card.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="mobile-carousel-arrow mobile-carousel-arrow-right" onClick={handleNextSlide}>
          <img src={rightArrowIcon} alt="Next" />
        </button>
      </div>
      <div className="tickets-btn-container">
        <BookTicketsButton onClick={handleNavigation} arrow={true} />
      </div>
    </div>
  );
}
