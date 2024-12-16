import React from 'react';

const About = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to our story! Every business has a unique journey, and ours is no different. 
        We believe in transparency, excellence, and creating meaningful connections with our customers.
        Whether you're here to learn about how we started, what drives us, or where we're headed, 
        we’re thrilled to share our passion with you.
      </p>
      <p style={paragraphStyle}>
        Some businesses choose to keep it simple with a short introduction, while others dive deep into their history and mission.
        We’re proud to offer you a glimpse into who we are, what we stand for, and how we strive to make a difference every day.
      </p>
    </div>
  );
};

// Styles
const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
  fontFamily: '"Arial", sans-serif',
  lineHeight: '1.6',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  fontSize: '2.5rem',
  color: '#333',
  marginBottom: '20px',
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  color: '#555',
  marginBottom: '15px',
};

export default About;
