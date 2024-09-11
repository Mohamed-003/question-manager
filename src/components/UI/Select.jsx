import React from 'react';
import '../../App.css'; 

const Select = ({ label, options, ...props }) => {

  return (
    <div className="select-wrapper">
      {label && <label className="select-label">{label}</label>}
      <div className="select-container">
        <select
          id={props.id}
          className="select-field"
          onChange={(e) => props.onChange(props.id, e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
