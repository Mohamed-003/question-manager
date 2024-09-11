import React from 'react';

const Button = ({ label, ...props }) => {
  return (
    <span className="mb-4">
      {label && <label >{label}</label>}
      <button
        {...props}
        
      />
    </span>
  );
};

export default Button;