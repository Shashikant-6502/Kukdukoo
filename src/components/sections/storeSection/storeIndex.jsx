import React, { useState } from "react";
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

export default function StoreSection() {
  const [activeTab, setActiveTab] = useState('on-stage');
  
  const cards = [
    { title: "Author interactions", image: author, icon: pen },
    { title: "Storytelling", image: drama, icon: book },
    { title: "Theatre", image: dance, icon: face },
    { title: "Puppetshows", image: folkDance, icon: tortoise },
    { title: "Mime & Clowning", image: dance, icon: joker },
    { title: "Superhero Cosplay", image: folkDance, icon: superman },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNavigation = (path) => {
    // Add navigation logic here
    console.log('Navigating to:', path);
  };

  return (
    <div className="store-header">
      {/* Heading */}
      <h1 className="store-title">
        WHAT'S IN STORE <span className="question-mark">?</span>
      </h1>

      {/* Stair Image with Tabs */}
      <div className="stair-wrapper">
        <img src={stairImage} alt="stair background" className="stair-image" />

        <div className="activities-tabs">
          <button 
            className={`tab ${activeTab === 'on-stage' ? 'active' : ''}`}
            onClick={() => handleTabClick('on-stage')}
          >
            ON STAGE <span>Activities</span>
          </button>
          <button 
            className={`tab ${activeTab === 'off-stage' ? 'active' : ''}`}
            onClick={() => handleTabClick('off-stage')}
          >
            OFF STAGE <span>Activities</span>
          </button>
        </div>
      </div>

      {/* Cards Grid Section */}
      <div className="cards-container">
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} className="card-img" />
              <div className="card-footer">
                <img src={card.icon} alt="icon" className="card-icon-img" />
                <span className="card-title">{card.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="logo-and-tickets-container">
        <button 
          className="book-tickets-button"
          onClick={() => handleNavigation('/tickets')}
        >
          BOOK TICKETS
        </button>
      </div>
    </div>
  );
}
