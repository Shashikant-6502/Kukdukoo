import React, { useState } from "react";
import manchFrame from "../../../assets/images/manch-frame.png";
import akkadFrame from "../../../assets/images/akkad-frame.png";
import "./festivalSchedule.css";
import leftArrowIcon from "../../../assets/images/left-arrow-icon.png";
import rightArrowIcon from "../../../assets/images/right-arrow-icon.png";
import clockIcon from "../../../assets/images/clock-icon.png";
import calenderIcon from "../../../assets/images/calender-icon.png";

export default function FestivalSchedule() {
  const frames = [manchFrame, akkadFrame, manchFrame, akkadFrame]; 
  const [startIndex, setStartIndex] = useState(0);

  const visibleFrames = frames.slice(startIndex, startIndex + 2);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < frames.length - 2) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="festival-schedule-section">
      {/* Title */}
      <h2 className="festival-title ">
        <img src={calenderIcon} alt="calender-icon" />
         FESTIVAL SCHEDULE 
        <img src={clockIcon} alt="clock-icon" />
      </h2>

      <div className="schedule-container">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`arrow-btn ${startIndex === 0 ? "disabled" : ""}`}
        >
          <img src={leftArrowIcon} alt="Previous" />
        </button>

        {/* Visible Frames */}
        <div className="frames">
          {visibleFrames.map((frame, index) => (
            <img
              key={index}
              src={frame}
              alt={`Festival Schedule ${index}`}
              className="schedule-image"
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex >= frames.length - 2}
          className={`arrow-btn ${startIndex >= frames.length - 2 ? "disabled" : ""}`}
        >
          <img src={rightArrowIcon} alt="Next" />
        </button>
      </div>

      {/* Book Tickets Button */}
       <div className="logo-and-tickets-container">
        <button 
          className="book-tickets-button"
          onClick={() => handleNavigation('/tickets')}
        >
          BOOK TICKETS
        </button>
      </div>
    </section>
  );
}
