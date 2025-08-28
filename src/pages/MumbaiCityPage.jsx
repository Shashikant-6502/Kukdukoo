import React from "react";
import VideoHighlight from '../components/cityPageSections/VideoHighlight/VideoHighlight';
import StoreSection from '../components/cityPageSections/StoreSection/StoreSection';
import BookTickets from '../components/cityPageSections/BookTickets/BookTickets';
import OurPartners from '../components/cityPageSections/OurPartners/OurPartners';
import FestivalSchedule from '../components/cityPageSections/FestivalSchedule/FestivalSchedule';
import Faq from '../components/cityPageSections/FAQ/FAQ';
import UpcomingCities from '../components/cityPageSections/UpcomingCities/UpcomingCities';
import CityInfo from '../components/cityPageSections/CityInfo/CityInfo';

export default function MumbaiCityPage() {
  return (
    <div className="mumbai-page">
      {/* Header Section */}
      <header className="mumbai-header">
        <div className="header-icons">
          {/* Add logo and social icons here */}
        </div>
        <h1 className="city-title">MUMBAI!</h1>
        <div className="city-details">
          <span>Date: 21st - 22nd Oct '23</span>
          <span>Venue: Jio Convention Centre</span>
        </div>
      </header>

  {/* City Info Section */}
  <CityInfo />

  {/* Video Highlight Section */}
  <VideoHighlight />

  {/* What's In Store Section */}
  <StoreSection />

  {/* Book Tickets Section */}
  <BookTickets />

  {/* Partners Section */}
  <OurPartners />

  {/* Festival Schedule Section */}
  <FestivalSchedule />

  {/* FAQ Section */}
  <Faq />

  {/* Upcoming Cities Section */}
  <UpcomingCities />
      {/* Footer Section */}
      <footer className="mumbai-footer">
        {/* Add footer content here */}
      </footer>
    </div>
  );
}
