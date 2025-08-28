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
import paperArrow from '../../../assets/images/paper-arrow-icon.png';

function AchievementsSection() {
  // Create a mapping object for icons
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
        <img src={star} alt="Star Icon" className='star-icon'></img>
        <span className='curved-text'>FESTIVALS ACHIEVEMENTS</span>
        <img src={star} alt=" Icon" className='star-icon'></img>
        </h2>
      <div className="achievements-grid">
        {achievementsData.achievements.map((item, index) => (
          <div key={index} className="achievement-item">
             {item.icon && iconMap[item.icon] && (
              <img
                src={iconMap[item.icon]}
                alt={item.label}
                className="achievement-icon"
              />
            )}
            <p className='achievement-value'>{item.value}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default AchievementsSection;