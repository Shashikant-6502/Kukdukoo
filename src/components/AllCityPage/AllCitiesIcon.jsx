import React from "react";
import "./AllCitiesIcon.css";

import mumbaiIcon from "../../assets/images/mumbai-icon.png";
import puneIcon from "../../assets/images/pune-icon.png";
import bengaluruIcon from "../../assets/images/bengluru-icon.png";
import noidaIcon from "../../assets/images/noida-icon.png";
import hyderabadIcon from "../../assets/images/Hyderabad-icon.png";
import backgroundPath from "../../assets/images/explore-cities-background-location-icon.png";

const pathOneCities = [
  {
    id: 1,
    name: "Mumbai",
    date: "11th & 12th Oct'25",
    venue: "CIDCO Exhibition Center",
    icon: mumbaiIcon,
  },
  {
    id: 2,
    name: "Pune",
    date: "8th & 9th Nov'25",
    venue: "Mahalakshmi Lawns",
    icon: puneIcon,
  },
  {
    id: 3,
    name: "Bengaluru",
    date: "29th & 30th Nov'25",
    venue: "Oakridge International School",
    icon: bengaluruIcon,
  },
  {
    id: 4,
    name: "Noida",
    date: "20th & 21st Dec'25",
    venue: "To Be Announced",
    icon: noidaIcon,
  },
    {
    id: 5,
    name: "Jaipur",
    date: "20th & 21st Dec'25",
    venue: "To Be Announced",
    icon: noidaIcon,
  },
  {
    id: 6,
    name: "Hyderabad",
    date: "24th & 25th Jan'25",
    venue: "To Be Announced",
    icon: hyderabadIcon,
  },

];

// City class names for positioning (match CSS)
const pathOneClassNames = ["mumbai", "pune", "bengaluru","noida","hyderabad","Jaipur"];

export default function AllCitiesIcon() {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <section className="all-cities-icon-section">
      <img src={backgroundPath} alt="Path" className="background-path" />
      {/* First path */}
      <div className="path-wrapper">
        <div className="cities-on-path">
          {pathOneCities.map((city, idx) => {
            return (
              <div
                key={city.id}
                className={`event-city-card ${pathOneClassNames[idx]}`}
              >
                <div className="event-city-row"> 
                                   <div className="event-city-details">
                    <h3 className="event-city-name">{city.name}</h3>
                    <p className="event-city-date">{city.date}</p>
                    <p className="event-city-venue">{city.venue}</p>
                  </div>
                  <div className="event-city-icon-col">
                    <img src={city.icon} alt={city.name} className="city-icon" />
                    <button
                      className="book-tickets-button-cities"
                      onClick={() => handleNavigation("/tickets")}
                    >
                      BOOK TICKETS
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
