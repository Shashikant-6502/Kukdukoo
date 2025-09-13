import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ 
  brandName, 
  testimonialText, 
  image, 
  showHeader = true,
  className = ""
}) => {
  return (
    <div className={`testimonial-card ${!showHeader ? "no-header" : ""} ${className}`}>
      {showHeader && (
        <div className="card-header">
          <span className="brand-name">{brandName}</span>
        </div>
      )}
      
      <div className="card-content">
        {image && (
          <img src={image} alt="Testimonial" className="content-image" />
        )}
      </div>
      
      <div className="card-quote">
        <div className="quote-marks">"</div>
        <p className="quote-text">{testimonialText}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
