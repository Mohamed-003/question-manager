import React from 'react';
import QuestionForm from './components/QuestionForm/QuestionForm';
import Button from './components/UI/Button';
import useQuestionForm from './components/hooks/useQuestionForm';
import QuestionLists from './components/QuestionForm/QuestionLists';

const App = () => {
  
  return (
    <div className='m-12' >
      <QuestionLists />
    </div>
  );
};

export default App;