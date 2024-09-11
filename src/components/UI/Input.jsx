import React from 'react';
import '../../App.css'; // Assuming the CSS file is in the same directory

const Input = ({ label, ...props }) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input className="input-field" {...props} />
    </div>
  );
};

export default Input;
