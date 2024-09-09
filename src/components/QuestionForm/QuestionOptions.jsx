import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import delete_icon from '../../assets/delete_icon.png';
import add_icon from '../../assets/add_icon.png';

const QuestionOptions = ({ id, options, onAdd, onRemove, onEdit }) => {
  return (
    <div className="mt-4 ">
      <h3 className="text-lg font-semibold mb-2">Options</h3>
      {Boolean(options.length) && <div style={{ display: 'flex', padding: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
        {options.map((option, index) => (
          <div key={index} style={{ display: 'flex' }}>
            <Input
              value={option.optionText}
              onChange={(e) => onEdit(`${id}${index}`, index, e.target.value)}
              placeholder={`Option ${index + 1}`}
              className="mr-2"
            />
            <div style={{ padding: '5px' }} onClick={() => onRemove(id, index)} >
              <img src={delete_icon} alt="Logo" />
            </div>
          </div>
        ))}
      </div>}

      <div style={{ padding: "1rem", display: 'flex', alignItems: 'center', gap: '1rem' }} onClick={() => onAdd(id)} >
        Add Option<img src={add_icon} alt="Logo" />
      </div>

    </div>
  );
};

export default QuestionOptions;