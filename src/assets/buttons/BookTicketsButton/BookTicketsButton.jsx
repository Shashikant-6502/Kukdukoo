import React from "react";
import "./BookTicketsButton.css";
import arrowImage from "../../../assets/images/arrow-button.png";

const BookTicketsButton = ({ isScrolled, isMobile, onClick, isActive, arrow = false }) => {
  return (
    <button
      className={`book-tickets-button ${isActive ? "active" : ""} ${arrow ? "with-arrow" : ""}`}
      onClick={onClick}
    >
      BOOK TICKETS
      {arrow && <img src={arrowImage} alt="arrow" className="button-arrow" />}
    </button>
  );
};

export default BookTicketsButton;
