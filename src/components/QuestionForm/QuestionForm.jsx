import React, { memo } from 'react'; 
import QuestionOptions from './QuestionOptions';
import NestedQuestions from './NestedQuestions';
import Input from '../UI/Input';
import Select from '../UI/Select';
import '../../App.css'; 

const QuestionForm = memo(({
  question,
  handleInputChange,
  handleTypeChange,
  handleOptionAdd,
  handleOptionRemove,
  handleOptionEdit,
}) => {
  return (
    <div className="question-form-container">
      <div className='question-form-wrapper'>
        <div className="question-input-container">
          <Input
            id={question.id}
            label="1."
            value={question.questionText}
            onChange={(e) => handleInputChange(question.id, "questionText", e.target.value)}
            placeholder="Enter your question"
            className="question-input"
          />
        </div>

        <div className="question-form-actions">
          <div className="question-type-select">
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

          {['radio', 'dropdown'].includes(question.questionType) && (
            <div className="linked-questions-switch">
              <label className="switch">
                <input type="checkbox" checked={question.isLinked} onChange={(e) => handleInputChange(question.id, 'isLinked', e.target.checked)} />
                <span className="slider"></span>
              </label>
              <p className="linked-questions-text">Linked Questions</p>
            </div>
          )}

          {question.hasOwnProperty("isRecurring") && (
            <div className="recurring-question-switch">
              <label className="switch">
                <input type="checkbox" checked={question.isRecurring} onChange={(e) => handleInputChange(question.id,'isRecurring', e.target.checked)} />
                <span className="slider"></span>
              </label>
              <p className="recurring-question-text">Recurring Question</p>
            </div>
          )}

          {question.hasOwnProperty("isTimebound") && (
            <div className="timebound-question-switch">
              <label className="switch">
                <input type="checkbox" checked={question.isTimebound} onChange={(e) => handleInputChange(question.id,'isTimebound', e.target.checked)} />
                <span className="slider"></span>
              </label>
              <p className="timebound-question-text">Time Bound Question</p>
            </div>
          )}
        </div>

        {['text', 'number'].includes(question.questionType) && (
          <Input
            id={question.id}
            value={question.answer}
            onChange={(e) => handleInputChange(question.id, 'answer', e.target.value)}
            placeholder="Enter your answer"
            className="answer-input"
          />
        )}

        {['radio', 'dropdown'].includes(question.questionType) && (
          <QuestionOptions
            id={question.id}
            options={question.options}
            onAdd={handleOptionAdd}
            onRemove={handleOptionRemove}
            onEdit={handleOptionEdit}
            type={question.questionType}
          />
        )}

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
});

export default QuestionForm;
