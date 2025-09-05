import React from "react";
import AllCitiesIcon from "../components/AllCityPage/AllCitiesIcon";
import Faq from "../components/cityPageSections/FAQ/Faq.jsx";
import HeroSection from "../components/sections/HeroSection/HeroSection.jsx";
export default function AllCities(){
  return (
    <section className="all-cities-icon-section">
      <h2>All Cities</h2>
      {/* <HeroSection/> */}
     <AllCitiesIcon/>
     <Faq/>
    </section>
  );
}