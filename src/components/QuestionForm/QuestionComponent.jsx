import { useEffect, useState } from "react";
import useQuestionForm from "../hooks/useQuestionForm";
import Button from "../UI/Button";
import QuestionForm from "./QuestionForm";
import delete_icon from "../../assets/delete_icon.png";
import edit_icon from "../../assets/edit_icon.png";
import add_icon from "../../assets/add_icon.png";
import frame_icon from "../../assets/frame_icon.png";
import '../../App.css'; 

const QuestionComponent = ({ onSave, onDelete, defaultQuestion }) => {
  const {
    question,
    handleInputChange,
    handleTypeChange,
    handleOptionAdd,
    handleOptionRemove,
    handleOptionEdit,
    questionInitialization,
  } = useQuestionForm();
  const [displayQuestion, setDisplayQuestion] = useState(true);

  useEffect(() => {
    questionInitialization(defaultQuestion);
  }, []);

  const handleDisplayQuestion = () => {
    setDisplayQuestion(!displayQuestion);
  };

  return (
    <div>
      {displayQuestion ? (
        <div className="question-container">
          <div className="question-header">
            <img src={frame_icon} alt="frame_icon" />
            <div className="question-text">
              {`${question.questionId}.  ${question.questionText}`}
            </div>
          </div>
          <div className="question-actions">
            <button onClick={handleDisplayQuestion} className="question-action-btn">
              <img src={edit_icon} alt="Edit Question" className="action-icon" />
            </button>
            <button onClick={() => onDelete(question)} className="question-action-btn">
              <img src={delete_icon} alt="Delete Question" className="action-icon" />
            </button>
          </div>
        </div>
      ) : (
        <div className="question-form-container">
          <QuestionForm
            question={question}
            handleInputChange={handleInputChange}
            handleTypeChange={handleTypeChange}
            handleOptionAdd={handleOptionAdd}
            handleOptionRemove={handleOptionRemove}
            handleOptionEdit={handleOptionEdit}
          />
          <div className="question-buttons">
            <Button className="save-btn" onClick={() => {onSave(question); handleDisplayQuestion()}}>
              Save
            </Button>
            <Button className="cancel-btn" onClick={handleDisplayQuestion}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
