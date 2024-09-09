import React from 'react';
import QuestionForm from './components/QuestionForm/QuestionForm';
import Button from './components/UI/Button';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <QuestionForm />
        <div className="mt-6 flex justify-between">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default App;