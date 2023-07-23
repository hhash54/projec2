// SignUpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupImage from '../images/signup.jpg'; 
import { Link } from 'react-router-dom';


const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/confirmation', { state: { name: fullName } });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${signupImage})`,
    backgroundSize: 'cover',
    fontFamily: "'Open Sans', sans-serif",
    color: '#333',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255,255,255,0.9)', 
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
  };

  const buttonStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: 'none',
    background: 'linear-gradient(to right, #ff758c, #ff7eb3)',
    color: 'white',
    cursor: 'pointer',
  };

  const linkStyle = {
    color: '#ff758c',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ color: '#ff758c', textAlign: 'center' }}>Sign Up</h2>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} style={inputStyle} />
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={inputStyle} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />
        </label>
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} style={inputStyle} />
        </label>
        <input type="submit" value="Sign Up" style={buttonStyle} />
        <p>Already have an account? <a href="/signin" style={linkStyle}>Sign In</a></p>
      </form>
    </div>
  );
};

export default SignUpPage;
