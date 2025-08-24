import React from 'react';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import AboutSection from '../components/sections/AboutSection/AboutSection';
import CitiesSection from '../components/sections/CitySection/CitiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AchievementsSection from '../components/sections/AchievementSection/AchievementsSection';
import PartnersSection from '../components/sections/PartnerSection/PartnersSection.jsx';
import StoreSection from '../components/sections/storeSection/storeIndex.jsx';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CitiesSection />
      <StoreSection />
      <TestimonialsSection />
      <AchievementsSection />
      <PartnersSection />
    </>
  );
}
export default HomePage;