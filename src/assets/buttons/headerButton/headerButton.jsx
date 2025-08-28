import React from "react";
import "./HeaderButton.css";

const HeaderButton = ({ icon, activeIcon, label, onClick, isActive }) => {
  const displayIcon = isActive && activeIcon ? activeIcon : icon;

  return (
    <button 
      className={`header-button ${isActive ? "active" : ""}`} 
      onClick={onClick}
    >
      {displayIcon && typeof displayIcon === "string" && (
        <img src={displayIcon} alt={label} className="header-button-icon" />
      )}
      {label && <p>{label}</p>}
    </button>
  );
};

export default HeaderButton;
