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


  const handleInputChange = (id,field, value) => {
    const updatedObj = handleNestedOperation(String(id),{"type":"question-edit","value":value,"field":field});
    setQuestion((prev) => ({ ...prev, ...updatedObj }));
  };

  const handleTypeChange = (id,questionType) => {
    const updatedObj = handleNestedOperation(String(id),{"type":"question-type","value":questionType});
    setQuestion((prev) => ({ ...prev, ...updatedObj }));
  
  };

  const handleOptionAdd = (id) => {   
    const updatedObj = handleNestedOperation(String(id),{"type":"add"});
    setQuestion((prev) => ({
      ...prev,
      ...updatedObj
    }));
  };

  const handleNestedOperation =(id,action)=>{
    const input = id;
    const isOptionCondition = (["add","remove","question-edit","question-type"]).includes(action.type);
     const obj = JSON.parse(JSON.stringify(question));
     let currentLevel = obj.options;  // Start with the options array
     let result = null;
     console.log(input.length)
     if (input.length < 2 && isOptionCondition) {
          result = obj;

     } else {
          for (let i = isOptionCondition?1:0; i < input.length; i++) {
               let index = Number(input[i]);

               // Access the current level (options or subQuestions)
               if (currentLevel && currentLevel[index]) {
                    result = currentLevel[index];

                    // Check if there are subQuestions or options for the next level
                    if (i + 1 < input.length) {
                         if (result.subQuestions && result.subQuestions.length > 0) {
                              currentLevel = result.subQuestions;
                         } else if (result.options && result.options.length > 0) {
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
     };
     if(result.subQuestions&&isOptionCondition){
      result = result.subQuestions;
     }
     if(action.type ==="remove"){
       result.options = result.options.filter((_, i) => i !== action.index );
     }else if(action.type ==="add"){
        const nextId = result.options.length
        result.options = [...result.options, {
        optionText: '', subQuestions: {
          // "id": Math.round(Math.random() * 1000),
          "id":`${input}${nextId}`,
          "questionText": '',
          "questionType": 'dropdown',
          "isLinked": false,
          "isRecurring": false,
          "isTimebound": false,
          "isDefault": false,
          "options": [

          ]
        }
      }];
     }else if(action.type ==="edit"){
       result.optionText = action.value;
     }else if(action.type ==="question-edit"){
       result[action.field]= action.value;
     }else if(action.type ==="question-type"){
       if (action.value === 'text' || action.value === 'number') {
         result = {
           ...result,
           "questionType": action.value,
           options: [],
           "isLinked": false,
           "answer": "",
         }
         return result
       } else {
         delete result["answer"];
         result = {
           ...result,
           options: result.options,
           "questionType": action.value,
           "isLinked": true
         };
         return result
       }
     }
     return obj;
  }


  const handleOptionRemove = (id,index) => {
    const removeParams ={"type":"remove", "index":index}
    const updatedObj = handleNestedOperation(String(id),removeParams);
    setQuestion((prev) => ({
      ...prev,
      ...updatedObj
    }));
  };

  const handleOptionEdit = (id, index, value) => {
    const updatedObj = handleNestedOperation(String(id),{"type":"edit", "value":value});
    setQuestion((prev) => ({
      ...prev, ...updatedObj
    }));
  };

  const handleNestedQuestionAdd = (optionIndex) => {
    setQuestion((prev) => ({
      ...prev,
      options: prev.options.map((option, i) =>
        i === optionIndex
          ? {
            ...option,
            nestedQuestions: [
              ...option.nestedQuestions,
              { "questionText": '', questionType: 'text', options: [], isLinked: false },
            ],
          }
          : option
      ),
    }));
  };

  const handleNestedQuestionRemove = (optionIndex, questionIndex) => {
    setQuestion((prev) => ({
      ...prev,
      options: prev.options.map((option, i) =>
        i === optionIndex
          ? {
            ...option,
            nestedQuestions: option.nestedQuestions.filter((_, j) => j !== questionIndex),
          }
          : option
      ),
    }));
  };

  return {
    question,
    handleInputChange,
    handleTypeChange,
    handleOptionAdd,
    handleOptionRemove,
    handleOptionEdit,
    handleNestedQuestionAdd,
    handleNestedQuestionRemove,
  };
};

export default useQuestionForm;

//   {
//   "id": "",
//   "questionText": 'What is your favorite color?',
//   "questionType": 'dropdown',
//   "isLinked": true,
//   "isRecurring": false,
//   "isTimebound": false,
//   "isDefault": false,
//   "options": [{
//     "optionText": "Red",
//     "subQuestions": [
//       {
//         "id": "nested-question-1",
//         "questionText": "What is your favorite food?",
//         "questionType": "radio",
//         "isLinked": false,
//         "isRecurring": false,
//         "isTimebound": false,
//         "isDefault": true,
//         "options": [
//           {
//             "id": "nested-sub-question-1",
//             "questionText": "What is your second favorite food?",
//             "questionType": "text",
//             "answer": "",
//             "isLinked": false,
//             "isRecurring": false,
//             "isTimebound": false,
//             "isDefault": false,
//             "options": []
//           }
//         ]
//       }
//     ]
//   },
//   {
//     "optionText": "Blue",
//     "subQuestions": [
//       {
//         "id": "nested-question-2",
//         "questionText": "What is your  favorite pet?",
//         "questionType": "text",
//         "answer": "",
//         "isLinked": false,
//         "isRecurring": false,
//         "isTimebound": false,
//         "isDefault": false,
//         "options": []
//       }
//     ]
//   },
//   {
//     "optionText": "Green",
//     "subQuestions": [
//       {
//         "id": "nested-question-3",
//         "questionText": "What is your  favorite place?",
//         "questionType": "text",
//         "answer": "",
//         "isLinked": false,
//         "isRecurring": false,
//         "isTimebound": false,
//         "isDefault": false,
//         "options": []
//       }
//     ]
//   }

//   ],

// }