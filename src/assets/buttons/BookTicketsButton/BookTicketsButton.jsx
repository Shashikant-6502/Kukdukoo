import React from "react";
import "./BookTicketsButton.css";

const BookTicketsButton = ({ isScrolled, isMobile, onClick, isActive }) => {
  return (
    <button
      className={`book-tickets-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      BOOK TICKETS
    </button>
  );
};

export default BookTicketsButton;
