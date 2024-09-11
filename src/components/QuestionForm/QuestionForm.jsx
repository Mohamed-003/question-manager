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
    <div style={{ width: "100%" }} >

      <div>
        <div style={{ padding: "1rem", backgroundColor: "#f7f7f7", marginBottom: "1rem", fontWeight: "500" }}>
          <Input
            id={question.id}
            label="1."
            value={question.questionText}
            onChange={(e) => handleInputChange(question.id, "questionText", e.target.value)}
            placeholder="Enter your question"
            style={{ backgroundColor: "#f7f7f7 !important" }}
          />
        </div>



        <div className="mt-4 flex items-center space-x-4" style={{gap:"1rem"}}>
          <div style={{ display: "flex", flexDirection: "column", width: "15rem"}}>
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
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <label class="switch">

                <input type="checkbox" checked={question.isLinked} onChange={(e) => handleInputChange(question.id, 'isLinked', e.target.checked)} />
                <span class="slider"></span>
              </label>
              <p style={{ color: "#02963a" }}> Linked Questions</p>
            </div>

          )}

          {
            question.isRecurring &&
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <label class="switch">

                <input type="checkbox" checked={question.isRecurring} onChange={(e) => handleInputChange('isRecurring', e.target.checked)} />
                <span class="slider"></span>
              </label>
              <p style={{ color: "#02963a" }}> Recurring Question</p>
            </div>
          }

          {
            question.isTimebound &&
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <label class="switch">

                <input type="checkbox" checked={question.isTimebound} onChange={(e) => handleInputChange('isTimeBound', e.target.checked)} />
                <span class="slider"></span>
              </label>
              <p style={{ color: "#02963a" }}> Time Bound Question</p>
            </div>
          }

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <label class="switch">

              <input type="checkbox" checked={question.isDefault} onChange={(e) => handleInputChange('isDefault', e.target.checked)} />
              <span class="slider"></span>
            </label>
            <p style={{ color: "#02963a" }}> Only Default</p>
          </div>

        </div>
         {['text', 'number'].includes(question.questionType) && (
            <Input
              id={question.id}
             
              value={question.answer}
              onChange={(e) => handleInputChange(question.id, 'answer', e.target.value)}
              placeholder="Enter your answer"
              style={{padding: "0.6rem 1rem", backgroundColor: "rgb(247, 247, 247) !important"}}
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
};

export default QuestionForm;