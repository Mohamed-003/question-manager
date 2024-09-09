import React from 'react';
import QuestionForm from './components/QuestionForm/QuestionForm';
import Button from './components/UI/Button';
import useQuestionForm from './components/hooks/useQuestionForm';

const App = () => {
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
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl" style={{display:"flex"}}>
        <QuestionForm
          question={question}
          handleInputChange={handleInputChange}
          handleTypeChange={handleTypeChange}
          handleOptionAdd={handleOptionAdd}
          handleOptionRemove={handleOptionRemove}
          handleOptionEdit={handleOptionEdit}
          handleNestedQuestionAdd={handleNestedQuestionAdd}
          handleNestedQuestionRemove={handleNestedQuestionRemove}
        />
        <div className="mt-6 flex justify-between">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>
        <Button variant="primary">Add Question</Button>
    </div>
  );
};

export default App;