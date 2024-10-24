import React from 'react';
import '../styles/spinner.css';  // Make sure to create the corresponding CSS file

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
