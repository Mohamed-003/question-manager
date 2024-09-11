import React from 'react';

const Select = ({ label, options, ...props }) => {

  return (
    <div className="mb-4">
      {label && <label style={{marginBottom: "0.5rem"}} >{label}</label>}
      <div style={{backgroundColor: "rgb(247, 247, 247)",display: "flex",justifyContent: "center",padding: "0.5rem", fontWeight:"500",marginTop: "1rem"}}>
        <select
        style={{backgroundColor: "rgb(247, 247, 247)"}}
        id={props.id}
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