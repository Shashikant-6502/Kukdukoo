import React from 'react';

function TicketsPage() {
  return (
    <div style={{ 
      paddingTop: '50px', 
      textAlign: 'center', 
      backgroundColor: '#fff5f5',
      minHeight: 'calc(100vh - 200px - 300px)'
    }}>
      <h1 style={{ 
        fontSize: '3em', 
        fontWeight: '800', 
        color: '#333',
        marginBottom: '30px'
      }}>
        Welcome to Tickets Section
      </h1>
      <h2 style={{ 
        fontSize: '2.5em', 
        fontWeight: '700', 
        color: '#666',
        marginBottom: '20px'
      }}>
        Book Your Tickets
      </h2>
      <p style={{ 
        fontSize: '1.2em', 
        maxWidth: '800px', 
        margin: '0 auto 40px',
        lineHeight: '1.6'
      }}>
        Secure your spot at the most exciting festival of the year!
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <div style={{
          backgroundColor: '#fff',
          border: '3px solid #000',
          borderRadius: '20px',
          padding: '30px',
          flex: '1',
          minWidth: '280px',
          boxShadow: '6px 6px 0px #000'
        }}>
          <h2 style={{ color: '#ff6b6b', marginBottom: '20px' }}>General Admission</h2>
          <p style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>$49</p>
          <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
            <li>Access to all main stages</li>
            <li>Food court access</li>
            <li>General seating areas</li>
            <li>Festival merchandise discount</li>
          </ul>
          <button style={{
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: '3px solid #000',
            borderRadius: '25px',
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '4px 4px 0px #000',
            transition: 'all 0.2s ease',
            width: '100%'
          }}>
            Buy Now
          </button>
        </div>
        
        <div style={{
          backgroundColor: '#fff',
          border: '3px solid #000',
          borderRadius: '20px',
          padding: '30px',
          flex: '1',
          minWidth: '280px',
          boxShadow: '6px 6px 0px #000',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            backgroundColor: '#ffd700',
            color: '#000',
            padding: '5px 15px',
            borderRadius: '15px',
            fontWeight: 'bold',
            fontSize: '14px'
          }}>
            POPULAR
          </div>
          <h2 style={{ color: '#00b7ff', marginBottom: '20px' }}>VIP Experience</h2>
          <p style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>$149</p>
          <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
            <li>All General Admission benefits</li>
            <li>VIP seating areas</li>
            <li>Exclusive VIP lounge access</li>
            <li>Meet & greet with artists</li>
            <li>Complimentary food & drinks</li>
            <li>Priority parking</li>
          </ul>
          <button style={{
            backgroundColor: '#00b7ff',
            color: 'white',
            border: '3px solid #000',
            borderRadius: '25px',
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '4px 4px 0px #000',
            transition: 'all 0.2s ease',
            width: '100%'
          }}>
            Buy Now
          </button>
        </div>
        
        <div style={{
          backgroundColor: '#fff',
          border: '3px solid #000',
          borderRadius: '20px',
          padding: '30px',
          flex: '1',
          minWidth: '280px',
          boxShadow: '6px 6px 0px #000'
        }}>
          <h2 style={{ color: '#a0d4b1', marginBottom: '20px' }}>Premium Package</h2>
          <p style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>$299</p>
          <ul style={{ textAlign: 'left', marginBottom: '20px' }}>
            <li>All VIP benefits</li>
            <li>Backstage tour</li>
            <li>Artist meet & greet</li>
            <li>Exclusive merchandise</li>
            <li>Hotel accommodation</li>
            <li>Transportation to venue</li>
          </ul>
          <button style={{
            backgroundColor: '#a0d4b1',
            color: 'white',
            border: '3px solid #000',
            borderRadius: '25px',
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '4px 4px 0px #000',
            transition: 'all 0.2s ease',
            width: '100%'
          }}>
            Buy Now
          </button>
        </div>
      </div>
      
      <div style={{
        backgroundColor: '#fff',
        border: '3px solid #000',
        borderRadius: '20px',
        padding: '30px',
        margin: '40px auto',
        maxWidth: '600px',
        boxShadow: '6px 6px 0px #000'
      }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Group Bookings</h2>
        <p style={{ marginBottom: '20px' }}>
          Planning to attend with a group? Contact us for special group rates and packages.
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
          Contact for Group Rates
        </button>
      </div>
    </div>
  );
}

export default TicketsPage;
