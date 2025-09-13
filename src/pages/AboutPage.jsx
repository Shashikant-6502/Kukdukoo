import React from 'react';
import AboutSection from '../components/sections/AboutSection/AboutSection';
import AchievementsSection from '../components/sections/AchievementSection/AchievementsSection';
import TestimonialsSection from '../components/sections/TestimonialSection/TestimonialsSection';
import ContactForm from '../components/newComponents/ContactForm';
import inkIcon from '../assets/images/ink-icon.png';
import Partners from '../components/newComponents/ourPartners';
import AdvancePartners from '../components/newComponents/AdvanceOurPartner.jsx'
import FestivalSchedule from '../components/cityPageSections/FestivalSchedule/FestivalSchedule.jsx'
function AboutPage() {
  return (
    <>
      <div style={{ 
        textAlign: 'center', 
        backgroundColor: '#f7fffb',
        minHeight: 'calc(100vh - 200px - 300px)',
        margin: '20px'
      }}>
        <ContactForm/>
        <Partners/>
        <FestivalSchedule/>
        <AdvancePartners/>
        <h1 style={{ 
          fontSize: '3em', 
          fontWeight: '800', 
          color: '#333',
          marginBottom: '30px'
        }}>
          Welcome to About Section
        </h1>
        <h2 style={{ 
          fontSize: '2.5em', 
          fontWeight: '700', 
          color: '#666',
          marginBottom: '20px'
        }}>
          About Kuk Du Koo Fest
        </h2>
        <p style={{ 
          fontSize: '1.2em', 
          maxWidth: '800px', 
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Learn more about our festival, its history, and what makes it special.
        </p>
      </div>
    </>
  );
}

export default AboutPage;
