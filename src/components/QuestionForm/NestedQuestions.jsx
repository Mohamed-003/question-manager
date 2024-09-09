import React from 'react';
import  Button  from '../UI/Button';
import QuestionForm from './QuestionForm';

const NestedQuestions = ({ options, onAdd, onRemove, onEdit }) => {
  return (
    <div className="mt-4 ">
      <h3 className="text-lg font-semibold mb-2">Nested Questions</h3>
      <div style={{display:'flex', padding:'1rem', gap:'1rem', flexWrap:'wrap'}}>
{options.map((option, index) => (
        <div key={index} className="border-l-2 border-gray-200 pl-4 mb-4">
          <h4 className="font-medium mb-2">For option: {option.optionText}</h4>
            <div  className="mb-4" >
              <QuestionForm
                question={option.subQuestions.questionText}
                // onAdd={onAdd}
                // onChange={(updatedQuestion) => onEdit(index, nIndex, updatedQuestion)}
              />
              <Button
                onClick={() => onRemove(index)}
                icon="remove"
                variant="danger"
                className="mt-2"
              >
                Remove Question
              </Button>
            </div>
          <Button
            onClick={() => onAdd(index)}
            icon="add"
            variant="success"
            className="mt-2"
          >
            Add Nested Question
          </Button>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default NestedQuestions;