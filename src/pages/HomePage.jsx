import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import CitiesSection from '../components/sections/CitiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import PartnersSection from '../components/sections/PartnersSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CitiesSection />
      <TestimonialsSection />
      <AchievementsSection />
      <PartnersSection />
    </>
  );
}
export default HomePage;