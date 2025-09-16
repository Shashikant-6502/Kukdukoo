import React, { useState,useEffect } from "react";
import "./AdvanceOurPartner.css";
import ArrowButton from "../../assets/buttons/greenButton/greenButton";
import educationIcon from "../../assets/images/education-button.png";
import educationActiveIcon from "../../assets/images/k12-button.png";
import leftArm from "../../assets/images/left-arm.png";
import rightArm from "../../assets/images/right-arm.png";
import leftArrowIcon from "../../assets/images/left-arrow-icon.png";
import rightArrowIcon from "../../assets/images/right-arrow-icon.png";
import partnerLogos from "../../assets/images/partner-logos.png"
import teamPic from "../../assets/images/team-pic.png"

import k12Icon from "../../assets/images/automobile-button.png";
import k12ActiveIcon from "../../assets/images/k12-button.png";

import healthIcon from "../../assets/images/health-button.png";
import healthActiveIcon from "../../assets/images/k12-button.png";

import foodIcon from "../../assets/images/food-button.png";
import foodActiveIcon from "../../assets/images/k12-button.png";

import entertainmentIcon from "../../assets/images/entertainment-button.png";
import entertainmentActiveIcon from "../../assets/images/k12-button.png";

import financeIcon from "../../assets/images/finance-button.png";
import financeActiveIcon from "../../assets/images/k12-button.png";

import fmcgIcon from "../../assets/images/fmcg-button.png";
import fmcgActiveIcon from "../../assets/images/k12-button.png";

import hospitalIcon from "../../assets/images/hospital-button.png";
import hospitalActiveIcon from "../../assets/images/k12-button.png";

import hospitalityIcon from "../../assets/images/hospitality-button.png";
import hospitalityActiveIcon from "../../assets/images/k12-button.png";

import insurenceIcon from "../../assets/images/insurance-button.png";
import insurenceActiveIcon from "../../assets/images/k12-button.png";

import jewelleryIcon from "../../assets/images/jewellery-button.png";
import jewelleryActiveIcon from "../../assets/images/k12-button.png";

import lifeStyleIcon from "../../assets/images/life-style-button.png";
import lifestyleActiveIcon from "../../assets/images/k12-button.png";

import mallsIcon from "../../assets/images/malls-button.png";
import mallsActiveIcon from "../../assets/images/k12-button.png";

import preSchoolIcon from "../../assets/images/pre-school-button.png";
import preSchoolActiveIcon from "../../assets/images/k12-button.png";

import publicationIcon from "../../assets/images/publication-button.png";
import publicationActiveIcon from "../../assets/images/k12-button.png";

import stationaryIcon from "../../assets/images/stationary-button.png";
import stationaryActiveIcon from "../../assets/images/stationary-button.png";
const categories = [
  { id: "education", label: "Education", defaultImg: educationIcon, activeImg: educationActiveIcon },
  { id: "k12", label: "K-12", defaultImg: k12Icon, activeImg: k12ActiveIcon },
  { id: "health", label: "Health & Nutrition", defaultImg: healthIcon, activeImg: healthActiveIcon },
  { id: "food", label: "Food", defaultImg: foodIcon, activeImg: foodActiveIcon },
  { id: "entertainment", label: "Entertainment", defaultImg: entertainmentIcon, activeImg: entertainmentActiveIcon },
  { id: "finance", label: "Finance", defaultImg: financeIcon, activeImg: financeActiveIcon },
  { id: "fmcg", label: "FMCG", defaultImg: fmcgIcon, activeImg: fmcgActiveIcon },
  { id: "hospital", label: "Hospital", defaultImg: hospitalIcon, activeImg: hospitalActiveIcon },
  { id: "stationary", label: "stationary", defaultImg: stationaryIcon, activeImg: stationaryActiveIcon },
  { id: "publication", label: "publication", defaultImg: publicationIcon, activeImg: publicationActiveIcon },
  { id: "preSchool", label: "preSchool", defaultImg: preSchoolIcon, activeImg: preSchoolActiveIcon },
  { id: "malls", label: "malls", defaultImg: mallsIcon, activeImg: mallsActiveIcon },
  { id: "liifestyle", label: "lifestyle", defaultImg: lifeStyleIcon, activeImg: lifestyleActiveIcon },
  { id: "jewellery", label: "jewellery", defaultImg: jewelleryIcon, activeImg: jewelleryActiveIcon },
  { id: "insurence", label: "insurence", defaultImg: insurenceIcon, activeImg: insurenceActiveIcon },
  { id: "hospitality", label: "Hospitality", defaultImg: hospitalityIcon, activeImg: hospitalityActiveIcon },
];

const partnerData = {
  education: [
    { id: 1, name: "Edu Partner 1", img: partnerLogos },
  ],
  k12: [
    { id: 1, name: "K12 Partner 1", img: partnerLogos },
  ],
  health: [
    { id: 1, name: "Health Partner 1", img:teamPic},
  ],
  food: [
    { id: 1, name: "Food Partner 1", img: partnerLogos},
  ],
  entertainment: [
    { id: 1, name: "Entertainment Partner 1", img: partnerLogos },
  ],
  finance: [
    { id: 1, name: "Finance Partner 1", img:teamPic },
  ],
  fmcg: [
    { id: 1, name: "FMCG Partner 1", img:partnerLogos },
  ],
  hospital: [
    { id: 1, name: "Hospital Partner 1", img:teamPic},
  ],
  stationary: [
    { id: 1, name: "Stationary Partner 1", img: partnerLogos },
  ],
  publication: [
    { id: 1, name: "Publication Partner 1", img:teamPic },
  ],
  preSchool: [
    { id: 1, name: "PreSchool Partner 1", img:partnerLogos },
  ],
  malls: [
    { id: 1, name: "Mall Partner 1", img: teamPic},
  ],
  lifestyle: [
    { id: 1, name: "Lifestyle Partner 1", img: partnerLogos },
  ],
  jewellery: [
    { id: 1, name: "Jewellery Partner 1", img:teamPic},
  ],
  insurance: [
    { id: 1, name: "Insurance Partner 1", img:partnerLogos },
  ],
  hospitality: [
    { id: 1, name: "Hospitality Partner 1", img:teamPic },
  ],
};


export default function OurPartnerAdvance() {
  const [active, setActive] = useState("education");
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 8;
const [isMobile, setIsMobile] = useState(() =>
  typeof window !== "undefined" ? window.innerWidth <= 768 : false
);

useEffect(() => {
  const onResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);

// Decide what to render
const itemsToRender = isMobile
  ? categories              // show all 16 in one line (mobile)
  : categories.slice(startIndex, startIndex + visibleCount); 
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + visibleCount, categories.length - visibleCount));
  };
  

  return (
    <section className="partners-section">
      <h2 className="curved-heading">
        <img src={leftArm} className="partner-icon" alt="left" />
        <span className="curved-text"> OUR PARTNERS</span>
        <img src={rightArm} className="partner-icon" alt="right" />
      </h2>

      {/* Categories Row */}
      <div className="categories-wrapper">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`arrow-btn-partner ${startIndex === 0 ? "disabled" : ""}`}
        >
          <img src={leftArrowIcon} alt="Previous" />
        </button>

        {/* Categories */}
        <div className="categories-container">
{itemsToRender.map((cat) => (
            <div
              key={cat.id}
              className={`category-btn ${active === cat.id ? "active" : ""}`}
              onClick={() => setActive(cat.id)}
            >
              <img
                src={active === cat.id ? cat.activeImg : cat.defaultImg}
                alt={cat.label}
                className="category-icon"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex >= categories.length - visibleCount}
          className={`arrow-btn-partner ${startIndex >= categories.length - visibleCount ? "disabled" : ""}`}
        >
          <img src={rightArrowIcon} alt="Next" />
        </button>
      </div>

      {/* Partners Grid */}
      <div className="partners-grid">
        <div className="partner-box large">
          {partnerData[active]?.map((partner) => (
            <div key={partner.id} className="partner-item">
              <img src={partner.img} className="partner-logo" alt={partner.name} />
            </div>
          ))}
        </div>
      </div>

      <ArrowButton label={"PARTNER WITH US"} />
    </section>
  );
}