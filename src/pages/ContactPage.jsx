import React from 'react';
import ContactForm from '../components/newComponents/ContactForm.jsx'
import AchievementsSection from '../components/sections/AchievementSection/AchievementsSection.jsx'
import CitiesSection from '../components/sections/CitySection/CitiesSection.jsx'
import TestimonialsSection from '../components/sections/TestimonialSection/TestimonialsSection.jsx'
function ContactPage() {
  return (
         <section>
          <ContactForm/>
          {/* <TestimonialsSection/> */}
          <AchievementsSection/>
          <CitiesSection/>
         </section>
  );
}

export default ContactPage;
