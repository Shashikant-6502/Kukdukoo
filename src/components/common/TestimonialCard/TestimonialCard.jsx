import React from 'react';
import './TestimonialCard.css';
import quoteIcon from '../../../assets/images/inverted-comma-icon.png'

const TestimonialCard = ({ 
  brandName, 
  testimonialText, 
  image, 
  showHeader = true,
  className = ""
}) => {
  return (
    <section>
      
      
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
    <legend className='quote-legend'>
      <img src={quoteIcon} alt="quote" className="quote-icon" />
    </legend>
        <p className="quote-text">{testimonialText}</p>
      </div>
    </div>
    </section>
  );
};

export default TestimonialCard;
