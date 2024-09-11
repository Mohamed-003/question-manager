import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import cancel_icon from '../../assets/cancel_icon.png';
import add_icon from '../../assets/add_icon.png';

const QuestionOptions = ({ id, options, onAdd, onRemove, onEdit,type }) => {
  return (
    <div className="mt-4 ">
      {Boolean(type) && <div style={{ display: 'flex',  gap: '1rem', flexWrap: 'wrap' }}>
        {options.map((option, index) => (
          <div key={index} style={{    backgroundColor: "rgb(247, 247, 247)",padding: "0.7rem"}}  >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p>{`Option ${index + 1}`}</p>
              <div style={{ padding: '5px' }} onClick={() => onRemove(id, index)} >
              <img src={cancel_icon} alt="cancel" style={{cursor:"pointer"}} />
            </div>
            </div>
            
            <Input
              value={option.optionText}
              onChange={(e) => onEdit(`${id}${index}`, index, e.target.value)}
              className="mr-2"
              style={{ backgroundColor: "#f7f7f7 !important",paddingTop: "0.5rem", cursor: "pointer" }}
            />
            
          </div>
          
        ))}
        <div style={{ padding: "1rem", display: 'flex', alignItems: 'center', gap: '1rem',    width: "10rem" }} onClick={() => onAdd(id)} >
        Add Option<img src={add_icon} alt="Logo" />
      </div>
      </div>}
      
      

    </div>
  );
};

export default QuestionOptions;