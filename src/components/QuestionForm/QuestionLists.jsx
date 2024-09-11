import { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import add_icon from "../../assets/add_icon.png"

const QuestionLists = () => {
  const [questions, setQuestions] = useState([]);



  const handleOnSave = (question) => {
    setQuestions(questions.map((q) => q.questionId === question.questionId ? question : q));
  };
  const handleOnDelete = (q) => {
    setQuestions((prev) => prev.filter((question) => question.questionId !== q.questionId));
  };
  console.log(questions)
  const handleOnAdd = () => {
    setQuestions((prev) => [...prev, {
      "questionId": prev.length + 1,
      "id": "0",
      "questionText": '',
      "questionType": 'dropdown',
      "isLinked": true,
      "isRecurring": false,
      "isTimebound": false,
      "isDefault": false,
      "options": []
    }]);
  }

  return (
    <div >
      <p className="font-work-sans text-lg font-semibold leading-6 text-left mb-4">Questions</p>
      
        {questions.map((question) => (
          <QuestionComponent onSave={handleOnSave} onDelete={handleOnDelete} defaultQuestion={question} />
        ))}
      
      <button onClick={handleOnAdd} className="flex w-26 items-center gap-2 text-sm" style={{margin:"1rem"}}>
        <img src={add_icon} alt="Add Question"  />
        <p style={{ color: "#02963A" }}>Add Question</p>

      </button>
    </div>

  )

};

export default QuestionLists;
