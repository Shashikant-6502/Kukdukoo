import React from "react";
import arrowImage from "../../../assets/images/black-arrow-button.png"; // adjust path as needed
import "./greenButton.css";

function greenButton({ label, onClick }) {
  return (
    <button className="arrow-button" onClick={onClick}>
      {label}
      <img src={arrowImage} alt="arrow" className="arrow-icon" />
    </button>
  );
}

export default greenButton;
