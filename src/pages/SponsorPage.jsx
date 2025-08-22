import React from 'react';
import PartnersSection from '../components/sections/PartnersSection';

function SponsorPage() {
  return (
    <>
      <div style={{ 
        paddingTop: '50px', 
        textAlign: 'center', 
        backgroundColor: '#b7e4f7',
        minHeight: 'calc(100vh - 200px - 300px)'
      }}>
        <h1 style={{ 
          fontSize: '3em', 
          fontWeight: '800', 
          color: '#333',
          marginBottom: '30px'
        }}>
          Welcome to Sponsor Section
        </h1>
        <h2 style={{ 
          fontSize: '2.5em', 
          fontWeight: '700', 
          color: '#666',
          marginBottom: '20px'
        }}>
          Sponsor Opportunities
        </h2>
        <p style={{ 
          fontSize: '1.2em', 
          maxWidth: '800px', 
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Join us as a sponsor and be part of the most exciting festival experience.
        </p>
        <div style={{
          backgroundColor: '#fff',
          border: '3px solid #000',
          borderRadius: '20px',
          padding: '30px',
          margin: '20px auto',
          maxWidth: '600px',
          boxShadow: '6px 6px 0px #000'
        }}>
          <h2 style={{ color: '#ff6b6b', marginBottom: '20px' }}>Become a Sponsor</h2>
          <p style={{ marginBottom: '20px' }}>
            Partner with us to create an unforgettable experience for thousands of attendees.
          </p>
          <button style={{
            backgroundColor: '#ff5c5c',
            color: 'white',
            border: '3px solid #000',
            borderRadius: '25px',
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '4px 4px 0px #000',
            transition: 'all 0.2s ease'
          }}>
            Contact Us
          </button>
        </div>
      </div>
      <PartnersSection />
    </>
  );
}

export default SponsorPage;
