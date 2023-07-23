// Confirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div>
      <h1>Confirmation</h1>
      <p>Thank you, {name}! Your registration is successful.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Confirmation;
