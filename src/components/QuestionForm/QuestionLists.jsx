import { useState,memo } from "react";
import QuestionComponent from "./QuestionComponent";
import add_icon from "../../assets/add_icon.png";
import '../../App.css'; 

const QuestionLists = memo(() => {
  const [questions, setQuestions] = useState([]);

  const handleOnSave = (question) => {
    setQuestions(questions.map((q) => (q.questionId === question.questionId ? question : q)));
  };

  const handleOnDelete = (q) => {
    setQuestions((prev) => prev.filter((question) => question.questionId !== q.questionId));
  };

  const handleOnAdd = () => {
    setQuestions((prev) => [
      ...prev,
      {
        questionId: prev.length + 1,
        id: "0",
        questionText: '',
        questionType: 'dropdown',
        isLinked: true,
        isRecurring: false,
        isTimebound: false,
        isDefault: false,
        options: []
      },
    ]);
  };

  return (
    <div className="question-lists-container">
      <p className="question-lists-title">Questions</p>

      {questions.map((question) => (
        <QuestionComponent
          key={question.questionId}
          onSave={handleOnSave}
          onDelete={handleOnDelete}
          defaultQuestion={question}
        />
      ))}

      <button onClick={handleOnAdd} className="question-lists-add-button">
        <img src={add_icon} alt="Add Question" className="question-lists-add-icon" />
        <p className="question-lists-add-text">Add Question</p>
      </button>
    </div>
  );
});

export default QuestionLists;
