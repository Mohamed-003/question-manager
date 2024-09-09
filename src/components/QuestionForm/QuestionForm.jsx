import React from 'react';
import QuestionOptions from './QuestionOptions';
import NestedQuestions from './NestedQuestions';
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import useQuestionForm from '../hooks/useQuestionForm.js';

const QuestionForm = () => {
  const {
    question,
    handleInputChange,
    handleTypeChange,
    handleOptionAdd,
    handleOptionRemove,
    handleOptionEdit,
    handleNestedQuestionAdd,
    handleNestedQuestionRemove
  } = useQuestionForm();
  // console.log("question : ", question)
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Questions</h2>

      <div>
        <div className="mb-4">
          <Input
            label="1."
            value={question.questionText}
            onChange={(e) => handleInputChange("1","questionText", e.target.value)}
            placeholder="Enter your question"
          />
        </div>
        <div className="mb-4">
          <Select
            label="Question Type"
            value={question.questionType}
            onChange={handleTypeChange}
            id="1"
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
            label="Answer : "
            value={question.answer}
            onChange={(e) => handleInputChange("1",'answer', e.target.value)}
            placeholder="Enter your answer"
          />
        )

        }

        {['radio', 'dropdown'].includes(question.questionType) && (
          <QuestionOptions
            options={question.options}
            onAdd={handleOptionAdd}
            onRemove={handleOptionRemove}
            onEdit={handleOptionEdit}
            optionsHierarchy={0}
          />
        )}
        <div className="mt-4 flex items-center space-x-4">
          {['radio', 'dropdown'].includes(question.questionType) && (
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={question.isLinked}
                onChange={(e) => handleInputChange('1','isLinked', e.target.checked)}
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2 text-gray-700">Linked Question</span>
            </label>
          )}
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={question.isRecurring}
              onChange={(e) => handleInputChange('isRecurring', e.target.checked)}
              className="form-checkbox h-5 w-5 text-green-600"
            />
            <span className="ml-2 text-gray-700">Recurring Question</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={question.isTimebound}
              onChange={(e) => handleInputChange('isTimeBound', e.target.checked)}
              className="form-checkbox h-5 w-5 text-green-600"
            />
            <span className="ml-2 text-gray-700">Time Bound Question</span>
          </label>
        </div>
        {question.isLinked && (
          <NestedQuestions
             options={question.options}
            onAdd={handleOptionAdd}
            onRemove={handleOptionRemove}
            onEdit={handleOptionEdit}
            optionsHierarchy={0}
            // onAdd={handleNestedQuestionAdd}
            // onRemove={handleNestedQuestionRemove}
          />
        )}
        

      </div>


    </div>
  );
};

export default QuestionForm;