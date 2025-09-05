import React from "react";
import CitiesSection from '../../sections/CitySection/CitiesSection';
import './UpcomingCities.css';
import WaveDividerLayout from "../../layout/WaveDividerLayout";
export default function UpcomingCities() {
  return (
    <section className="upcoming-cities-section">
      <WaveDividerLayout position="top" hideWave={true} hideBoat={true}/>
      <CitiesSection exploreLabel="Upcoming Cities" />
    </section>
  );
}
