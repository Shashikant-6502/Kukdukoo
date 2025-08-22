import React from 'react';

function ContactPage() {
  return (
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
        Contact Us
      </h1>
      <p style={{ 
        fontSize: '1.2em', 
        maxWidth: '800px', 
        margin: '0 auto 40px',
        lineHeight: '1.6'
      }}>
        Get in touch with us for any questions about the festival.
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
          minWidth: '300px',
          boxShadow: '6px 6px 0px #000'
        }}>
          <h2 style={{ color: '#00b7ff', marginBottom: '20px' }}>Email Us</h2>
          <p style={{ marginBottom: '15px' }}>info@kukdukoofest.com</p>
          <p style={{ marginBottom: '15px' }}>tickets@kukdukoofest.com</p>
          <p>sponsor@kukdukoofest.com</p>
        </div>
        
        <div style={{
          backgroundColor: '#fff',
          border: '3px solid #000',
          borderRadius: '20px',
          padding: '30px',
          flex: '1',
          minWidth: '300px',
          boxShadow: '6px 6px 0px #000'
        }}>
          <h2 style={{ color: '#ff6b6b', marginBottom: '20px' }}>Call Us</h2>
          <p style={{ marginBottom: '15px' }}>+1 (555) 123-4567</p>
          <p style={{ marginBottom: '15px' }}>Monday - Friday: 9AM - 6PM</p>
          <p>Saturday: 10AM - 4PM</p>
        </div>
        
        <div style={{
          backgroundColor: '#fff',
          border: '3px solid #000',
          borderRadius: '20px',
          padding: '30px',
          flex: '1',
          minWidth: '300px',
          boxShadow: '6px 6px 0px #000'
        }}>
          <h2 style={{ color: '#a0d4b1', marginBottom: '20px' }}>Visit Us</h2>
          <p style={{ marginBottom: '15px' }}>123 Festival Street</p>
          <p style={{ marginBottom: '15px' }}>Event City, EC 12345</p>
          <p>United States</p>
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
        <h2 style={{ color: '#333', marginBottom: '20px' }}>Send us a Message</h2>
        <form style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
            <input 
              type="text" 
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #000',
                borderRadius: '10px',
                fontSize: '16px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
            <input 
              type="email" 
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #000',
                borderRadius: '10px',
                fontSize: '16px'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message:</label>
            <textarea 
              rows="5"
              style={{
                width: '100%',
                padding: '10px',
                border: '2px solid #000',
                borderRadius: '10px',
                fontSize: '16px',
                resize: 'vertical'
              }}
            ></textarea>
          </div>
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
            transition: 'all 0.2s ease'
          }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
