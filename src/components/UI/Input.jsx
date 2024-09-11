import React from 'react';

const Input = ({ label, ...props }) => {
  return (
    <div  style={{display: "flex",alignItems: "center"}}>
      {label && <label style={{width: "1rem"}} >{label}</label>}
      <input
        style={{display: "flex",alignItems: "center", backgroundColor: "rgb(247, 247, 247)"}}
        {...props}
        
      />
    </div>
  );
};

export default Input;