import { useEffect, useState } from "react";
import useQuestionForm from "../hooks/useQuestionForm";
import Button from "../UI/Button";
import QuestionForm from "./QuestionForm";
import delete_icon from "../../assets/delete_icon.png";
import edit_icon from "../../assets/edit_icon.png";
import add_icon from "../../assets/add_icon.png"
import frame_icon from "../../assets/frame_icon.png"




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
  }

  return (
    <div >
      {displayQuestion ?
        (
          <div className="d-flex align-items-center" style={{ display: "flex", justifyContent: "space-between",width:"90%", padding: "1rem", backgroundColor:"#f7f7f7" }}>
            <div style={{ display: "flex", gap: "1rem" }}><img src={frame_icon} alt="frame_icon"   />
            <div className="font-work-sans text-lg font-normal leading-5 text-left" style={{fontSize: "16px",fontWeight: "500"}}>{`${question.questionId}.  ${question.questionText}`}</div>
            </div>
            <div className="d-flex" style={{ display: "flex", gap: "1rem" }}>
              <button onClick={handleDisplayQuestion}  className="d-flex  items-center gap-2 text-sm">
                <img src={edit_icon} alt="Edit Question" width={"65%"} />
              </button>
              <button onClick={() => { onDelete(question) }} className="d-flex  items-center gap-2 text-sm">
                <img src={delete_icon} alt="Delete Question" width={"65%"} />
              </button>
            </div>
          </div> ) :

        <div  style={{ display: "flex" }}>
          <QuestionForm
            question={question}
            handleInputChange={handleInputChange}
            handleTypeChange={handleTypeChange}
            handleOptionAdd={handleOptionAdd}
            handleOptionRemove={handleOptionRemove}
            handleOptionEdit={handleOptionEdit}
          />
          <div  style={{    display: "flex",flexDirection: "column",alignItems: "center"}}>
            <Button style={{    backgroundColor: "rgb(2, 150, 58)",padding: "0.5rem 2rem",color: "white",margin: "1rem",borderRadius: "0.2rem"}} onClick={() => { onSave(question) }}>Save</Button>
            <Button  style={{padding: "0.5rem 1rem",color: "#a5a5a5"}} onClick={handleDisplayQuestion}>Cancel</Button>
          </div>
        </div>
      }
    </div>
  )
};

export default QuestionComponent;

