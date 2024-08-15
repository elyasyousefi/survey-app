import React, { useState } from "react";
import { Button, FormCheck } from "react-bootstrap";

const QuestionTestType = ({options, saveAnswer,setIsSaved }) => {
  const [checkedAnswer,setCheckedAnswer]=useState(false)
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionChange = (index) => {
    setIsSaved(false);
    setSelectedOption(selectedOption === index ? null : index);
  };

  const registerData = (event) => {
    event.preventDefault();
    setIsSaved(true);
    // save answer for results
    saveAnswer(options[selectedOption]);
  };

  return (
    <form onSubmit={registerData}>
      <div>
        {options.map((option, index) => (
          <div key={index} className="option-box">
            <FormCheck
              type="checkbox"
              checked={selectedOption === index}
              onChange={() => handleOptionChange(index)}
            />
            <span>{index + 1})</span>
            <span>{option}</span>
          </div>
        ))}
      </div>
    </form>
  );
}

export default QuestionTestType;
