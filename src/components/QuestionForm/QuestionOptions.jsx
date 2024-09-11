import React, { memo } from 'react'; 
import Input from '../UI/Input';
import cancel_icon from '../../assets/cancel_icon.png';
import add_icon from '../../assets/add_icon.png';
import '../../App.css';

const QuestionOptions = memo(({ id, options, onAdd, onRemove, onEdit, type }) => {
  return (
    <div className="question-options-container">
      {Boolean(type) && (
        <div className="question-options-list">
          {options.map((option, index) => (
            <div key={index} className="question-option-item">
              <div className="question-option-header">
                <p>{`Option ${index + 1}`}</p>
                <div className="question-option-remove" onClick={() => onRemove(id, index)}>
                  <img src={cancel_icon} alt="cancel" className="question-option-cancel-icon" />
                </div>
              </div>

              <Input
                value={option.optionText}
                placeholder={`Enter Option`}
                onChange={(e) => onEdit(`${id}${index}`, index, e.target.value)}
                className="question-option-input"
              />
            </div>
          ))}
          <div className="question-option-add" onClick={() => onAdd(id)}>
            Add Option
            <img src={add_icon} alt="Add Option" className="question-option-add-icon" />
          </div>
        </div>
      )}
    </div>
  );
});

export default QuestionOptions;
