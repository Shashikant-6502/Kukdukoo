import React from "react";
import AllCitiesIcon from "../components/AllCityPage/AllCitiesIcon";
import FaqCities from "../components/AllCityPage/faq-cities.jsx";
import HeroSection from "../components/AllCityPage/hero-section-cities.jsx";
export default function AllCities(){
  return (
    <section className="all-cities-icon-section" 
    style={{backgroundColor: '#c8f0ff'}}>
     <HeroSection/>
     <AllCitiesIcon/>
     <FaqCities/>
    </section>
  );
}