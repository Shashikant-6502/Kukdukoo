import React from "react";
import "./ValuesAndVision.css";

import InkIcon from "../../assets/images/ink-icon.png";
import visionIcon from "../../assets/images/vision-icon.png";

const ValuesAndMission = () => {
  return (
    <section className="values-mission">
      <div className="container">
        {/* Our Values */}
        <div className="section-block">
          <h2 className="section-title">
            <span className="curved-text">OUR VALUES</span>
            <span className="ink-icon-values">
              <img src={InkIcon} alt="pen icon" />
            </span>
          </h2>
          <p>
            Our festival <strong>embraces the power of creativity and self-expression</strong>, showcasing
            diverse literary and artistic mediums.
          </p>
          <p>
            We foster an <strong>inclusive environment</strong> that values different cultures, perspectives,
            and backgrounds.
          </p>
          <p>
            <strong>Collaboration</strong> is at the heart of our community, as we encourage artists and
            participants to come together and create enriching experiences.
          </p>
        </div>

        {/* Our Vision */}
        <div className="section-block">
          <h2 className="section-title">
            <span className="vision-icon">
              <img src={visionIcon} alt="red plane" /></span>
               <span className="curved-text">OUR VISSION</span>
          </h2>
          <p>
            We aspire to create a world full of <strong>avid readers, talented writers, extraordinary
            performers, and artists.</strong>
          </p>
          <p>
            Meanwhile, creating a space where families can gather and celebrate the precious childhood
            moments of their little ones and create memories that will last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesAndMission;
