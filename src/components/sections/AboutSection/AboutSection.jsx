import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowButton from "../../../assets/buttons/greenButton/greenButton"
import "./AboutSection.css";
import citiesPaperPlane from "../../../assets/images/cities-paper-plane-icon.png";
import kukdukoo1 from "../../../assets/images/kukdukoo1.png";

function AboutSection() {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/about");
  };

  return (
    <section className="about-section">
      <img src={citiesPaperPlane} alt="Paper Arrow" className="paper-arrow-plane" />
      <h2 className="about-section-heading">
        <span className="curved-text">WHAT IS KUKDUKOO?</span>
        <img src={kukdukoo1} alt="Kukdukoo" className="kukdukoo1" />
      </h2>
      <div className="about-kukdukoo">
        <p>
          Kukdukoo Fest is <span className="highlight">India's biggest celebration of childhood</span> — 
          a vibrant, multi-city festival that brings the magic of storytelling, theatre, music, 
          and art to life for children aged 3–13.
        </p>
        <p>
          Born from the belief that every child deserves the joy of creative discovery,
          Kukdukoo offers a <span className="highlight">screen-free, immersive experience</span> 
          where kids, parents, and even grandparents come together to make memories that last a lifetime.
        </p>
        <p>
          Since 2018, over 21 festivals across the country have echoed with laughter,
          learning, and boundless imagination.
        </p>
      </div>

      <ArrowButton label="Read full story" onClick={handleReadMore} />
    </section>
  );
}

export default AboutSection;
