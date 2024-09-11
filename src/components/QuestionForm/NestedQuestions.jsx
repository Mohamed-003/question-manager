import React from 'react';
import QuestionForm from './QuestionForm';
import '../../App.css';

const NestedQuestions = ({
  options,
  question,
  handleInputChange,
  handleTypeChange,
  handleOptionAdd,
  handleOptionRemove,
  handleOptionEdit,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <div className="nested-questions-container">
      <div className="header-container">
        <div className="options-container">
          {options.map((option, index) => {
            const isSelected = selectedIndex === index ? 'selected' : '';
            return (
              <div 
                className={`option ${isSelected}`} 
                onClick={() => setSelectedIndex(index)} 
                key={index}
              >
                {`Option ${index + 1}`}
              </div>
            );
          })}
        </div>
        <div className="switch-container">
          <label className="switch">
            <input 
              type="checkbox" 
              onChange={(e) => handleInputChange('isDefault', e.target.checked)} 
            />
            <span className="slider"></span>
          </label>
          <p className="default-label"> Only Default</p>
        </div>
      </div>
      <div className="questions-container">
        {options.map((option, index) => (
          <div 
            key={index} 
            className={`question-form-container ${index !== selectedIndex ? 'hidden' : ''}`}
          >
            <div className="question-form-wrapper">
              <QuestionForm
                question={option.subQuestions}
                handleInputChange={handleInputChange}
                handleTypeChange={handleTypeChange}
                handleOptionAdd={handleOptionAdd}
                handleOptionRemove={handleOptionRemove}
                handleOptionEdit={handleOptionEdit}
                selectedIndex={selectedIndex}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedQuestions;
