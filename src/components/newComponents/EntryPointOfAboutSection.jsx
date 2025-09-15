import './AboutSectionEntryPoint.css';
import React from 'react';
import aboutBackground from "../../assets/images/AboutUs-HeroSection.png";

const AboutUsSection = () => {
  return (
    <section 
      className="about-page-hero-section" 
      style={{ backgroundImage: `url(${aboutBackground})`, height:1200, width:2000 }}
    >
      <div className="about-overlay">
        <div className="about-text-container">
          <p className="about-paragraph">
            <strong>Kukdukoo</strong> started as an initiative by a team of enthusiastic people who believe <strong>every child deserves an equal opportunity to immerse themselves in a universe of art, literature, culture and theatre.</strong>
          </p>
          
          <p className="about-paragraph">
            As young minds are raw and innocent, tapping into and developing their natural creativity is easy. With an idea to spread the love of reading & stories, nurture young art enthusiasts, and engage kids in various fun and educational activities, including theatre, mime, clowning, ventriloquism and more—all on one platform, <strong>Kukdukoo came into being in the year 2018.</strong>
          </p>
          
          <p className="about-paragraph">
            In an era where screentime is ever-increasing among kids, <strong>Kukdukoo transports these kids back to the real celebration of childhood through the themes of art, literature, theatre, and more.</strong>
          </p>
          
          <p className="about-paragraph">
            Kukdukoo has made a deep connection with kids and parents alike in every city it has travelled, creating long-lasting memories and allowing children to experience the true joy of a meaningful childhood.
          </p>
          
          <p className="about-paragraph">
            With <strong>10 grand festivals across the length and breadth of the country</strong>, Kukdukoo has become synonymous with the grand and unique celebration of childhood, where children are all smiles the minute they step inside.
          </p>
          
          <p className="about-paragraph">
            The happiness doesn't stop there; it's infectious. We witness kids of all ages, including parents and even grandparents, singing, dancing, and experiencing a nostalgic rush as they revisit their childhood.
          </p>
          
          <p className="about-highlight">
            <strong>TODAY, KUKDUKOO IS HAPPILY THE BIGGEST FESTIVAL FOR KIDS IN INDIA.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
