import React, { useState, useEffect } from "react";
import "./Faq.css";
import faqsData from "./faq.json"; // JSON file
import WaveDividerLayout from "../../layout/WaveDividerLayout";

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [page, setPage] = useState(0); // track current page
  const faqsPerPage = 7;

  useEffect(() => {
    setFaqs(faqsData); // load from JSON
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Pagination logic
  const totalPages = Math.ceil(faqs.length / faqsPerPage);
  const startIndex = page * faqsPerPage;
  const currentFaqs = faqs.slice(startIndex, startIndex + faqsPerPage);

  const goToPage = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
      setOpenIndex(null); // close all when switching page
    }
  };

  return (
    <section className="faq-section">
      <WaveDividerLayout position="top" boatPosition="left-boat"/>

      <h2 className="faq-title">Frequently Asked Questions</h2>

      {/* FAQ List */}
      <div className="faq-list">
        {currentFaqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.id}. {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="faq-pagination">
        <button
          className="arrow-btn"
          onClick={() => goToPage(page - 1)}
          disabled={page <= 0}
          style={{ opacity: page <= 0 ? 0.5 : 1, cursor: page <= 0 ? 'not-allowed' : 'pointer' }}
        >
          ◀
        </button>

        <div className="dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === page ? "active" : ""}`}
              onClick={() => goToPage(i)}
              style={{ cursor: i === page ? 'default' : 'pointer' }}
            ></span>
          ))}
        </div>

        <button
          className="arrow-btn"
          onClick={() => goToPage(page + 1)}
          disabled={page >= totalPages - 1}
          style={{ opacity: page >= totalPages - 1 ? 0.5 : 1, cursor: page >= totalPages - 1 ? 'not-allowed' : 'pointer' }}
        >
          ▶
        </button>
      </div>

      <WaveDividerLayout position="bottom" hideBoat={true} />
    </section>
  );
}
