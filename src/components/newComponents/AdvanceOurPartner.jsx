import React, { useState } from "react";
import "./AdvanceOurPartner.css";

import educationIcon from "../../assets/images/education-button.png";
import educationActiveIcon from "../../assets/images/k12-button.png";

import k12Icon from "../../assets/images/education-button.png";
import k12ActiveIcon from "../../assets/images/k12-button.png";

import healthIcon from "../../assets/images/education-button.png";
import healthActiveIcon from "../../assets/images/k12-button.png";

import foodIcon from "../../assets/images/education-button.png";
import foodActiveIcon from "../../assets/images/k12-button.png";

import entertainmentIcon from "../../assets/images/education-button.png";
import entertainmentActiveIcon from "../../assets/images/k12-button.png";
import financeIcon from "../../assets/images/education-button.png";
import financeActiveIcon from "../../assets/images/k12-button.png";

import fmcgIcon from "../../assets/images/education-button.png";
import fmcgActiveIcon from "../../assets/images/k12-button.png";

import hospitalIcon from "../../assets/images/education-button.png";
import hospitalActiveIcon from "../../assets/images/k12-button.png";

const categories = [
  {
    id: "education",
    label: "Education",
    defaultImg: educationIcon,
    activeImg: educationActiveIcon,
  },
  {
    id: "k12",
    label: "K-12",
    defaultImg: k12Icon,
    activeImg: k12ActiveIcon,
  },
  {
    id: "health",
    label: "Health & Nutrition",
    defaultImg: healthIcon,
    activeImg: healthActiveIcon,
  },
  {
    id: "food",
    label: "Food",
    defaultImg: foodIcon,
    activeImg: foodActiveIcon,
  },
  {
    id: "entertainment",
    label: "Entertainment",
    defaultImg: entertainmentIcon,
    activeImg: entertainmentActiveIcon,
  },
  {
    id: "finance",
    label: "Finance",
    defaultImg: financeIcon,
    activeImg: financeActiveIcon,
  },
  {
    id: "fmcg",
    label: "FMCG",
    defaultImg: fmcgIcon,
    activeImg: fmcgActiveIcon,
  },
   {
    id: "hospital",
    label: "HOSPITAL",
    defaultImg: hospitalIcon,
    activeImg: hospitalActiveIcon,
  },
];
const partnerData = {
  education: [
    { id: 1, name: "Edu Partner 1" },
    { id: 2, name: "Edu Partner 2" },
    { id: 3, name: "Edu Partner 3" },
    { id: 4, name: "Edu Partner 4" },
    { id: 5, name: "Edu Partner 5" },
    { id: 6, name: "Edu Partner 6" },
    { id: 3, name: "FMCG Partner 3" },
    { id: 4, name: "FMCG Partner 4" },
    { id: 5, name: "FMCG Partner 5" },
    { id: 6, name: "FMCG Partner 6" },
    
  ],
  k12: [
    { id: 1, name: "K-12 Partner 1" },
    { id: 2, name: "K-12 Partner 2" },
    { id: 3, name: "K-12 Partner 3" },
    { id: 4, name: "K-12 Partner 4" },
    { id: 5, name: "K-12 Partner 5" },
    { id: 6, name: "K-12 Partner 6" },
    { id: 3, name: "FMCG Partner 3" },
    { id: 4, name: "FMCG Partner 4" },
    { id: 5, name: "FMCG Partner 5" },
    { id: 6, name: "FMCG Partner 6" },
   
  ],
  health: [
    { id: 1, name: "Health Partner 1" },
    { id: 2, name: "Health Partner 2" },
    { id: 3, name: "Health Partner 3" },
    { id: 4, name: "Health Partner 4" },
    { id: 5, name: "Health Partner 5" },
    { id: 6, name: "Health Partner 6" },
    { id: 3, name: "FMCG Partner 3" },
    { id: 4, name: "FMCG Partner 4" },
    { id: 5, name: "FMCG Partner 5" },
    { id: 6, name: "FMCG Partner 6" },
   
  ],
  food: [
    { id: 1, name: "Food Partner 1" },
    { id: 2, name: "Food Partner 2" },
    { id: 3, name: "Food Partner 3" },
    { id: 4, name: "Food Partner 4" },
    { id: 5, name: "Food Partner 5" },
    { id: 6, name: "Food Partner 6" },
    { id: 3, name: "FMCG Partner 3" },
    { id: 4, name: "FMCG Partner 4" },
    { id: 5, name: "FMCG Partner 5" },
    { id: 6, name: "FMCG Partner 6" },
   
  ],
  entertainment: [
    { id: 1, name: "Entert1" },
    { id: 2, name: "Enter 2" },
    { id: 3, name: "Enter3" },
    { id: 4, name: "Enterta4" },
    { id: 5, name: "Entert 5" },
    { id: 6, name: "Entert 6" },
    { id: 3, name: "FMCG Partner 3" },
    { id: 4, name: "FMCG Partner 4" },
    { id: 5, name: "FMCG Partner 5" },
    { id: 6, name: "FMCG Partner 6" },
    
  ],
  finance: [
    { id: 1, name: "Finance Partner 1" },
    { id: 2, name: "Finance Partner 2" },
    { id: 3, name: "Finance Partner 3" },
    { id: 4, name: "Finance Partner 4" },
    { id: 5, name: "Finance Partner 5" },
    { id: 6, name: "Finance Partner 6" },
    { id: 3, name: "FMCG Partner 3" },
    { id: 4, name: "FMCG Partner 4" },
    { id: 5, name: "FMCG Partner 5" },
    { id: 6, name: "FMCG Partner 6" },
   
  ],
  fmcg: [
    { id: 1, name: "FMCG Partner 1" },
    { id: 2, name: "FMCG Partner 2" },
    { id: 3, name: "FMCG Partner 3" },
    { id: 4, name: "FMCG Partner 4" },
    { id: 5, name: "FMCG Partner 5" },
    { id: 6, name: "FMCG Partner 6" },
    { id: 3, name: "FMCG Partner 3" },
    { id: 4, name: "FMCG Partner 4" },
    { id: 5, name: "FMCG Partner 5" },
    { id: 6, name: "FMCG Partner 6" },
    
  ],
  hospital: [
    { id: 1, name: "Hospital Partner 1" },
    { id: 2, name: "Hospital Partner 2" },
    { id: 3, name: "Hospital Partner 3" },
    { id: 4, name: "Hospital Partner 4" },
    { id: 5, name: "Hospital Partner 5" },
    { id: 6, name: "Hospital Partner 6" },
    { id: 3, name: "FMCG Partner 3" },
    { id: 4, name: "FMCG Partner 4" },
    { id: 5, name: "FMCG Partner 5" },
    { id: 6, name: "FMCG Partner 6" },
   
  ],
};



export default function OurPartnerAdvance() {
  const [active, setActive] = useState("education");

    return (
      
        <section className="partners-section">
    <div className="categories-container">
      {categories.map((cat) => (
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
   <div className="partners-grid">
  {partnerData[active]?.map((partner) => (
    <div key={partner.id} className="partner-box">
      {partner.name}
    </div>
  ))}
</div>
    </section>
  );
}