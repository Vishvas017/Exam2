import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    axios.post("https://reqres.in/api/login", userData)
      .then((response) => {
        let token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        alert("Login Successful!");
      })
      .catch(() => {
        alert("Invalid login credentials!");
      });
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Login</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f9',
  padding: '20px',
};

const headerStyle = {
  fontSize: '2.5rem',
  color: '#333',
  marginBottom: '20px',
  fontFamily: 'Arial, sans-serif',
};

const formStyle = {
  width: '100%',
  maxWidth: '400px',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const inputGroupStyle = {
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '5px',
  fontSize: '1rem',
  color: '#555',
};

const inputStyle = {
  padding: '10px',
  fontSize: '1rem',
  border: '1px solid #ddd',
  borderRadius: '5px',
  outline: 'none',
  transition: 'border-color 0.3s',
};

inputStyle[':focus'] = {
  borderColor: '#007BFF',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  width: '100%',
  transition: 'background-color 0.3s',
};

buttonStyle[':hover'] = {
  backgroundColor: '#0056b3',
};

export default Login;
