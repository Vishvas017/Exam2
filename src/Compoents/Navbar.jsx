import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/Home">Home</Link>
      <Link style={linkStyle} to="/About">About Us</Link>
      <Link style={linkStyle} to="/Product">Product</Link>
      {/* <Link style={linkStyle} to="/Allproduct">All Products</Link> */}
      <Link style={linkStyle} to="/Login">Login</Link>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#333',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  fontSize: '18px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px 15px',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
};

linkStyle[':hover'] = {
  backgroundColor: '#555',
  color: '#fff',
};

export default Navbar;
