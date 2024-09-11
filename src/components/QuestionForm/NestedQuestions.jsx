import React from 'react';
import Button from '../UI/Button';
import QuestionForm from './QuestionForm';

const NestedQuestions = ({
  options,
  question,
  handleInputChange,
  handleTypeChange,
  handleOptionAdd,
  handleOptionRemove,
  handleOptionEdit,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <div className="mt-10">
      <div style={{ display: 'flex', gap: '1rem',borderBottom:"2px solid rgb(228 224 224)",justifyContent: "space-between" }}>
        <div style={{ display: 'flex',  gap: '0.5rem',width:"85%" }}>
        {options.map((option,index)=>{
          const borderBottomValue = selectedIndex==index?"2px solid #02963a":"none";
          const style ={borderBottom: borderBottomValue,    borderBottom: "2px solid rgb(2, 150, 58)",    marginTop: "1rem",position: "relative",top: "2px", color:"#a5a5a5" };
          return (<div style={{...style}} onClick={()=>setSelectedIndex(index)}>
            {`Option ${index+1}`}
          </div>)
        })}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem",marginTop: "1.5rem",marginBottom: "1rem" }}>
            <label class="switch">

              <input type="checkbox"  onChange={(e) => handleInputChange('isDefault', e.target.checked)} />
              <span class="slider"></span>
            </label>
            <p style={{ color: "#02963a" }}> Only Default</p>
          </div>
      </div>
      <div style={{ display: 'flex', padding: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
        {options.map((option, index) => (
          <div key={index} style={{display: index!==selectedIndex ? "none" : "block",width:"100%"}} >
            <div style={{marginTop:"3rem"}} >
              <QuestionForm
                question={option.subQuestions}
                handleInputChange={handleInputChange}
                handleTypeChange={handleTypeChange}
                handleOptionAdd={handleOptionAdd}
                handleOptionRemove={handleOptionRemove}
                handleOptionEdit={handleOptionEdit}
                selectedIndex={selectedIndex}
              />
             
            </div>
          
          </div>
        ))}
      </div>

    </div>
  );
};

export default NestedQuestions;