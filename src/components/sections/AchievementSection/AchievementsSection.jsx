import React from 'react';
import achievementsData from '../../../data/achievementsData.json';
import star from '../../../assets/images/star-header-icon.png';
import starMedalIcon from '../../../assets/images/star-medal-icon.png';
import cupIcon from '../../../assets/images/cup-icon.png';
import medalIcon from '../../../assets/images/medal-icon.png';
import attendeesIcon from '../../../assets/images/attendees-icon.png';
import sponsorsAchievementIcon from '../../../assets/images/sponsors-achievement-icon.png';
import trophyIcon from '../../../assets/images/trophy-icon.png';
import paperArrow from '../../../assets/images/paper-arrow-icon.png';
import './AchievementsSection.css';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function AchievementsSection() {
  const iconMap = {
    'star-medal-icon.png': starMedalIcon,
    'cup-icon.png': cupIcon,
    'medal-icon.png': medalIcon,
    'attendees-icon.png': attendeesIcon,
    'sponsors-achievement-icon.png': sponsorsAchievementIcon,
    'trophy-icon.png': trophyIcon
  };

  return (
    <section className="achievements-section">
      <img src={paperArrow} alt="Paper Arrow" className="paper-arrow" />
      <h2 className='curved-heading'>
        <img src={star} alt="Star Icon" className='star-icon' />
        <span className='curved-text'>FESTIVALS ACHIEVEMENTS</span>
        <img src={star} alt="Star Icon" className='star-icon' />
      </h2>

      {/* ==== WEB/TABLET GRID ==== */}
      <div className="achievements-grid achievements-desktop">
        {achievementsData.achievements.map((item, index) => (
          <div key={index} className="achievement-item">
            {item.icon && iconMap[item.icon] && (
              <img src={iconMap[item.icon]} alt={item.label} className="achievement-icon" />
            )}
            <p className='achievement-value'>{item.value}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* ==== MOBILE SWIPER ==== */}
      <div className="achievements-swiper">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={'auto'}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
        >
          {achievementsData.achievements.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "160px" }}>
              <div className="achievement-item">
                {item.icon && iconMap[item.icon] && (
                  <img src={iconMap[item.icon]} alt={item.label} className="achievement-icon" />
                )}
                <p className='achievement-value'>{item.value}</p>
                <p>{item.label}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default AchievementsSection;
