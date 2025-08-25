import React from 'react';
import './BookTicketsButton.css';

const BookTicketsButton = ({ isScrolled, isMobile, onClick }) => {
  return (
    <button 
      className="book-tickets-button"
      onClick={onClick}
    >
      BOOK TICKETS
    </button>
  );
};

export default BookTicketsButton;
