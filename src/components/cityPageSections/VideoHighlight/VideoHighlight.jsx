import React,{ useState } from "react";
import "./VideoHighlight.css";

export default function VideoHighlight() {
   const [iframeLoaded, setIframeLoaded] = useState(false);
  
    const handleWatchHighlights = () => {
      window.open('https://www.youtube.com/watch?v=_6pwOsou9ms', '_blank');
    };
  
  return (
    <section className="video-highlight-section">
      <div className="video-frame">
        <div className="video-content">
        <div className="video-box">
          {/* You can replace this div with an actual video <iframe> or <video> */}
          <div className="video-placeholder">
            <iframe
          src="https://www.youtube.com/embed/_6pwOsou9ms?autoplay=1&mute=1&loop=1&playlist=_6pwOsou9ms&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Kukdukoo Fest Video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          allowFullScreen={false}
          onLoad={() => setIframeLoaded(true)} // 👈 hide fallback once loaded
        ></iframe>
          </div>
        </div>
        <div className="video-actions">
          <button className="btn highlight-btn" onClick={handleWatchHighlights}>WATCH HIGHLIGHTS </button>
         <div className="logo-and-tickets-container">
        <button 
          className="book-tickets-button"
          onClick={() => handleNavigation('/tickets')}
        >
          BOOK TICKETS
        </button>
      </div>
        </div>
      </div>
      </div>
    </section>
  );
}
