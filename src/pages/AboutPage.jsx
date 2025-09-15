import React from 'react';
import AboutSection from '../components/sections/AboutSection/AboutSection';
import AchievementsSection from '../components/sections/AchievementSection/AchievementsSection';
import TestimonialsSection from '../components/sections/TestimonialSection/TestimonialsSection';
import CitySection from '../components/sections/CitySection/CitiesSection.jsx'
import ContactForm from '../components/newComponents/ContactForm';
import inkIcon from '../assets/images/ink-icon.png';
import Partners from '../components/newComponents/ourPartners';
import TeamSection from '../components/newComponents/TeamSection.jsx';
import AdvancePartners from '../components/newComponents/AdvanceOurPartner.jsx'
import AboutUsSection from '../components/newComponents/EntryPointOfAboutSection.jsx'
import ValuesAndMission from '../components/newComponents/ValuesAndVision.jsx'
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
        <AboutUsSection/>
        <ValuesAndMission/>
        <TeamSection/>
         <AchievementsSection/>
         {/* <FestivalSchedule/> */}
        {/* <Partners/> */}
        <AdvancePartners/>
        <CitySection/>
      
       
      </div>
    </>
  );
}

export default AboutPage;
