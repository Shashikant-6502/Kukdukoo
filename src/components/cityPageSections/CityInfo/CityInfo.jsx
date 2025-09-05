import React from "react";
import "./CityInfo.css";

import cloudBackground from "../../../assets/images/cloud-background.png";
import mumbaiIcon from "../../../assets/images/mumbai-icon.png";
import clockIcon from "../../../assets/images/clock-icon.png";
import calenderIcon from "../../../assets/images/calender-icon.png";
import locationIcon from "../../../assets/images/left-side-location-icon.png";
import WaveDividerLayout from "../../layout/WaveDividerLayout";
import grass1 from "../../../assets/images/grass1.png";
import grass2 from "../../../assets/images/grass2.png";
import grass3 from "../../../assets/images/grass3.png";
import grass4 from "../../../assets/images/grass4.png";

export default function CityInfo() {
  return (
    <section
      className="city-info-section"
    >
      <div className="city-info-container">
        {/* Heading */}
        <h2 className="city-name-title">MUMBAI</h2>
        <p className="city-subtitle">India's Biggest Children's Festival</p>

        {/* Limited passes banner */}
        <div className="passes-banner">
          LIMITED PASSES BOOK YOURS NOW!
        </div>

        {/* City image */}
        <div className="city-icon">
          <img src={mumbaiIcon} alt="Mumbai" />
        </div>

        {/* Event Details */}
        <div className="event-details">
          <div className="event-item">
            <img src={calenderIcon} alt="Calendar" />
            <span>11<sup>th</sup> - 12<sup>th</sup> OCT '25</span>
          </div>
          <div className="event-item">
            <img src={clockIcon} alt="Clock" />
            <span>11 AM ONWARDS</span>
          </div>
          <div className="event-item">
            <img src={locationIcon} alt="Location" />
            <span>
              CIDCO EXHIBITION CENTER <br /> (INDOOR) NAVI MUMBAI
            </span>
          </div>
        </div>
      </div>
      <img src={grass1} alt="grass" class="grass grass1" />
      <img src={grass2} alt="grass" class="grass grass2" />
      <img src={grass3} alt="grass" class="grass grass3" />
      <img src={grass4} alt="grass" class="grass grass4" />
      <WaveDividerLayout position="bottom" hideWave={false} hideBoat={true}/>
    </section>
  );
}
