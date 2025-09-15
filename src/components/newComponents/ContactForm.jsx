import React from "react";
import "./ContactForm.css";
import location from "../../assets/images/location-icon.png";
import phone from "../../assets/images/call-icon.png";
import email from "../../assets/images/mail-icon.png"; 
import inkIcon from '../../assets/images/ink-icon.png';
export default function ContactForm() {
  return (
    <div className="contact-container">
      <h2 className="title">WRITE TO US
        <img src={inkIcon} className="icon"></img>
      </h2>
      <div className="form-box">
        {/* Left Side - Form */}
        <div className="form-left">
          <label>Select Query type</label>
          <select className="dropdown">
            <option>SPONSORSHIP</option>
            <option>EXHIBIT</option>
            <option>HOST</option>
            <option>KUKDUKOO FEST</option>
            <option>PERFORMANCE</option>
          </select>

          <label>Name</label>
          <input type="text" placeholder="Your full name" />

          <label>E-mail</label>
          <input type="email" placeholder="e.g. yourname@mail.com" />

          <label>Mobile</label>
          <div className="mobile-box">
            <span className="prefix">+91</span>
            <input type="text" placeholder="10 digit mobile number" />
          </div>

          <label>Enquiry</label>
          <textarea placeholder="Write your enquiry here..."></textarea>

          <button className="submit-btn">ENQUIRE NOW</button>
        </div>

        {/* Right Side - Contact Info */}
      <div className="form-right">
  <div className="info-box">
    <img src={location} alt="Location" className="icon" />
    <p>H-65, BK Tower, Sector 63,<br />Noida - 201301</p>
  </div>
  <div className="info-box">
    <img src={phone} alt="Phone" className="icon" />
    <p>+91 8595684432</p>
  </div>
  <div className="info-box">
    <img src={email} alt="Email" className="icon" />
    <p>fest@kukdukoo.com</p>
  </div>
  <div className="info-row">
    <div className="small-box"></div>
    <div className="small-box"></div>
    <div className="small-box"></div>
  </div>
  <div className="large-box">
    <p>Some big content goes here (like a map or message)</p>
  </div>
</div>

      </div>
    </div>
  );
}