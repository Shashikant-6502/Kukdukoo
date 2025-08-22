import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

function AboutPage() {
  return (
    <>
      <div style={{ 
        paddingTop: '50px', 
        textAlign: 'center', 
        backgroundColor: '#f7fffb',
        minHeight: 'calc(100vh - 200px - 300px)'
      }}>
        <h1 style={{ 
          fontSize: '3em', 
          fontWeight: '800', 
          color: '#333',
          marginBottom: '30px'
        }}>
          About Kuk Du Koo Fest
        </h1>
        <p style={{ 
          fontSize: '1.2em', 
          maxWidth: '800px', 
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Learn more about our festival, its history, and what makes it special.
        </p>
      </div>
      <AboutSection />
      <AchievementsSection />
      <TestimonialsSection />
    </>
  );
}

export default AboutPage;
