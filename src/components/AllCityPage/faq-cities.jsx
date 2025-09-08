import React, { useState, useEffect } from "react";
import "../cityPageSections/FAQ/faq.css";
import faqsData from "../cityPageSections/FAQ/faq.json"; // JSON file
import leftArrowIcon from "../../assets/images/left-arrow-icon.png";
import rightArrowIcon from "../../assets/images/right-arrow-icon.png";

export default function FaqCities() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [page, setPage] = useState(0); // track current page
  const faqsPerPage = 8;

  useEffect(() => {
    setFaqs(faqsData); // load from JSON
  }, []);

  const toggleFAQ = (index) => {
    // fix index: make it relative to the whole list, not just current page
    const globalIndex = page * faqsPerPage + index;
    setOpenIndex(openIndex === globalIndex ? null : globalIndex);
  };

  // Pagination logic
  const totalPages = Math.ceil(faqs.length / faqsPerPage);
  const startIndex = page * faqsPerPage;
  const currentFaqs = faqs.slice(startIndex, startIndex + faqsPerPage);

  // ✅ Add missing pagination handlers
  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
      setOpenIndex(null); // close all FAQs when page changes
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
      setOpenIndex(null);
    }
  };

  const goToPage = (i) => {
    setPage(i);
    setOpenIndex(null);
  };

return (
  <section className="faq-section">
    <h2 className="faq-title">
      <span className="question-mark">?</span>
      Frequently Asked Questions
      <span className="question-mark">?</span>
</h2>
    {/* Container with Arrows + FAQ */}
    <div className="faq-container">
      {/* Left Arrow */}
      <button
        className="faq-arrow left"
        onClick={handlePrev}
        disabled={page === 0}
      >
        <img src={leftArrowIcon} alt="Left" />
      </button>

      {/* FAQ List */}
      <div className="faq-list">
        {currentFaqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.id}. {faq.question}
              <span>
                {openIndex === page * faqsPerPage + index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === page * faqsPerPage + index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}

        {/* Dots inside FAQ box (centered below) */}
        <div className="dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === page ? "active" : ""}`}
              onClick={() => goToPage(i)}
              style={{ cursor: i === page ? "default" : "pointer" }}
            ></span>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="faq-arrow right"
        onClick={handleNext}
        disabled={page === totalPages - 1}
      >
        <img src={rightArrowIcon} alt="Right" />
      </button>
    </div>
  </section>
);
}
