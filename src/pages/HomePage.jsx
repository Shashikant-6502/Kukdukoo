import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import CitiesSection from '../components/sections/CitiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import PartnersSection from '../components/sections/PartnersSection';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function HomePage() {
  return (
    <>
    <Header />
      <HeroSection />
      <AboutSection />
      <CitiesSection />
      <TestimonialsSection />
      <AchievementsSection />
      <PartnersSection />
      <Footer />
    </>
  );
}
export default HomePage;