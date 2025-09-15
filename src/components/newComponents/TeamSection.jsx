import React, { useState, useEffect } from "react";
import "./TeamSection.css";
import leftArrowIcon from "../../assets/images/left-arrow-icon.png";
import rightArrowIcon from "../../assets/images/right-arrow-icon.png";
import image from "../../assets/images/team-pic.png"
import WaveDividerLayout from "../layout/WaveDividerLayout";
import teamIcon from "../../assets/images/team-icon.png"
import textOutline from "../../assets/images/text-Outline.png"

const teamData = [
  {
    id: 1,
    year: "2018",
    text: "We are a diverse team of art, culture, and literature enthusiasts, including parents who understand the needs of families...",
    image:image
  },
  {
    id: 2,
    year: "2019",
    text: "With more volunteers and creative minds, we expanded our reach, delivering unforgettable events...",
    image:image
  },
  {
    id: 3,
    year: "2020",
    text: "Even during challenges, our team thrived with virtual events, keeping families engaged and connected...",
    image:image
  },
];

function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 490);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 490);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSlide = teamData[currentIndex];

  return (
    <section className="team-section">
      <WaveDividerLayout position="top" />

      {/* Heading */}
      <div className="heading-wrapper">
        <h2 className="team-heading">
          <span className="team-icon">
            <img src={teamIcon} className="team-icon"></img>
          </span>
          <span className="curved-text">THE TEAM</span>
          <span className="team-icon">
            <img src={teamIcon} className="team-icon"></img>
          </span>
        </h2>
      </div>

      {/* Slider */}
      <div className="team-slider">
        <button className="arrow-btn left" onClick={handlePrev}>
          <img src={leftArrowIcon} alt="Left" />
        </button>

        <div className="team-card">
  {/* Image Section */}
  <div className="team-card-image">
    <img src={currentSlide.image} alt="Team" className="team-image" />
  </div>

  {/* Text Section */}
  <div className="team-card-info">
    <img src={textOutline} className="text-outline"></img>
    <h3 className="team-year">{currentSlide.year}</h3>
    <p className="text">{currentSlide.text}</p>
  </div>
</div>

        <button className="arrow-btn right" onClick={handleNext}>
          <img src={rightArrowIcon} alt="Right" />
        </button>
      </div>

      <WaveDividerLayout position="bottom" hideBoat="true" />
    </section>
  );
}

export default TeamSection;
