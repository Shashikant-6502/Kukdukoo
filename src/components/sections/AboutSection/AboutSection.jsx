import React from 'react';
import './AboutSection.css'; // Keep this if you have styles

function AboutSection() {
  return (
    <section className="about-section">
      <h2>WHAT IS KUKDUKOO?</h2>
      <div className="about-kukdukoo">
        <p>
          Kukdukoo Fest is <strong>India’s biggest celebration of childhood</strong>—a vibrant, multi-city festival that brings the magic of storytelling, theatre, music, and art to life for <strong>children aged 3–13</strong>.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Born from the belief that every child deserves the joy of creative discovery,
          <br/>Kukdukoo offers a <strong>screen-free, immersive experience</strong> where kids, parents, and even
          grandparents come together to make memories that last a lifetime.
        </p>
        <p>
          <strong>Since 2018, over 21 festivals</strong> across the country have echoed with laughter,
          learning, and boundless imagination.
        </p>
      </div>
      <button>Read full story</button>
    </section>
  );
}

export default AboutSection;
