import { useState } from 'react';

const useQuestionForm = () => {
  const [question, setQuestion] = useState(
    {
      "id": "0",
      "questionText": '',
      "questionType": 'dropdown',
      "isLinked": true,
      "isRecurring": false,
      "isTimebound": false,
      "isDefault": false,
      "options": [

      ],

    });

  console.log("question : ", question)


  const handleInputChange = (id, field, value) => {
    const updatedObj = handleNestedOperation(String(id), { "type": "question-edit", "value": value, "field": field });
    setQuestion((prev) => ({ ...prev, ...updatedObj }));
  };

  const handleTypeChange = (id, questionType) => {
    const updatedObj = handleNestedOperation(String(id), { "type": "question-type", "value": questionType });
    setQuestion((prev) => ({ ...prev, ...updatedObj }));

  };

  const handleOptionAdd = (id) => {
    const updatedObj = handleNestedOperation(String(id), { "type": "add" });
    setQuestion((prev) => ({
      ...prev,
      ...updatedObj
    }));
  };

  const handleNestedOperation = (id, action) => {
    const input = id;
    const isOptionCondition = (["add", "remove", "question-edit", "question-type"]).includes(action.type);
    const obj = JSON.parse(JSON.stringify(question));




    let currentLevel = obj.options;
    let result = null;

    if (input.length < 2) {
      result = obj;
    } else {
      for (let i = 1; i < input.length; i++) {
        let index = Number(input[i]);

        if (currentLevel && currentLevel[index]) {
          result = currentLevel[index];

          if (i + 1 < input.length) {
            if (result.subQuestions) {
              currentLevel = result.subQuestions.options;
            } else if (result.options) {
              currentLevel = result.options;
            } else {
              console.log('No further sub-questions or options available.');
              break;
            }
          }
        } else {
          console.log('Invalid index or no data available.');
          return;
        }
      }
    }




    if (result.subQuestions && isOptionCondition) {
      result = result.subQuestions;
    }
    if (action.type === "remove") {
      result.options = result.options.filter((_, i) => i !== action.index);
    } else if (action.type === "add") {
      const nextId = result.options.length
      result.options = [...result.options, {
        optionText: '', subQuestions: {
          "id": `${input}${nextId}`,
          "questionText": '',
          "questionType": 'dropdown',
          "isLinked": false,
          "isDefault": false,
          "options": [

          ]
        }
      }];
    } else if (action.type === "edit") {
      result.optionText = action.value;
    } else if (action.type === "question-edit") {
      result[action.field] = action.value;
    } else if (action.type === "question-type") {
      if (action.value === 'text' || action.value === 'number') {

        result.questionType = action.value;
        result.options = [];
        result.isLinked = false;
        result.answer = "";
      } else {

        delete result.answer;
        result.questionType = action.value;
        result.isLinked = true;
      }
    }
    return obj;
  }


  const handleOptionRemove = (id, index) => {
    const removeParams = { "type": "remove", "index": index }
    const updatedObj = handleNestedOperation(String(id), removeParams);
    setQuestion((prev) => ({
      ...prev,
      ...updatedObj
    }));
  };

  const handleOptionEdit = (id, index, value) => {
    const updatedObj = handleNestedOperation(String(id), { "type": "edit", "value": value });
    setQuestion((prev) => ({
      ...prev, ...updatedObj
    }));
  };


  return {
    question,
    handleInputChange,
    handleTypeChange,
    handleOptionAdd,
    handleOptionRemove,
    handleOptionEdit,
  };
};

export default useQuestionForm;

