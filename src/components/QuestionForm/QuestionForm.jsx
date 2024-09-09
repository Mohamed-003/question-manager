import React from 'react';
import QuestionOptions from './QuestionOptions';
import NestedQuestions from './NestedQuestions';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import useQuestionForm from '../hooks/useQuestionForm.js';

const QuestionForm = ({
  question,
  handleInputChange,
  handleTypeChange,
  handleOptionAdd,
  handleOptionRemove,
  handleOptionEdit,
}) => {

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Questions</h2>

      <div>
        <div className="mb-4">
          <Input
            id={question.id}
            label="1."
            value={question.questionText}
            onChange={(e) => handleInputChange(question.id, "questionText", e.target.value)}
            placeholder="Enter your question"
          />
        </div>
        <div className="mb-4">
          <Select
            label="Question Type"
            value={question.questionType}
            onChange={handleTypeChange}
            id={question.id}
            options={[
              { value: 'dropdown', label: 'Drop Down' },
              { value: 'radio', label: 'Radio Button' },
              { value: 'text', label: 'Text' },
              { value: 'number', label: 'Number' },
            ]}
          />
        </div>
        {['text', 'number'].includes(question.questionType) && (
          <Input
            id={question.id}
            label="Answer : "
            value={question.answer}
            onChange={(e) => handleInputChange(question.id, 'answer', e.target.value)}
            placeholder="Enter your answer"
          />
        )

        }

        {['radio', 'dropdown'].includes(question.questionType) && (
          <QuestionOptions
            id={question.id}
            options={question.options}
            onAdd={handleOptionAdd}
            onRemove={handleOptionRemove}
            onEdit={handleOptionEdit}
          />
        )}
        <div className="mt-4 flex items-center space-x-4">
          {['radio', 'dropdown'].includes(question.questionType) && (
            <label className="inline-flex items-center">
              <input
                id={question.id}
                type="checkbox"
                checked={question.isLinked}
                onChange={(e) => handleInputChange(question.id, 'isLinked', e.target.checked)}
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2 text-gray-700">Linked Question</span>
            </label>
          )}
          {question.isRecurring&&<label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={question.isRecurring}
              onChange={(e) => handleInputChange('isRecurring', e.target.checked)}
              className="form-checkbox h-5 w-5 text-green-600"
            />
            <span className="ml-2 text-gray-700">Recurring Question</span>
          </label>}
          {question.isTimebound&&<label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={question.isTimebound}
              onChange={(e) => handleInputChange('isTimeBound', e.target.checked)}
              className="form-checkbox h-5 w-5 text-green-600"
            />
            <span className="ml-2 text-gray-700">Time Bound Question</span>
          </label>}
         <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={question.isDefault}
              onChange={(e) => handleInputChange('isDefault', e.target.checked)}
              className="form-checkbox h-5 w-5 text-green-600"
            />
            <span className="ml-2 text-gray-700">Only Default</span>
          </label>
          
        </div>
        {question.isLinked && (
          <NestedQuestions
            options={question.options}
            question={question}
            handleInputChange={handleInputChange}
            handleTypeChange={handleTypeChange}
            handleOptionAdd={handleOptionAdd}
            handleOptionRemove={handleOptionRemove}
            handleOptionEdit={handleOptionEdit}
          />
        )}


      </div>


    </div>
  );
};

export default QuestionForm;