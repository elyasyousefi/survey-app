import React, { useCallback, useState } from "react";
import { Button, FormCheck } from "react-bootstrap";

const QuestionTestType = ({ options}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleOptionChange = (index) => {
    setIsSaved(false);
    setSelectedOption(selectedOption === index ? null : index);
  };

  const registerData = useCallback(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const ParsedsavedUser = JSON.parse(savedUser);
      let parsedResults = { ...ParsedsavedUser };
      parsedResults.answers.test = { test: options[selectedOption] };
      let updatedResults = { ...parsedResults };
      localStorage.setItem("user", JSON.stringify(updatedResults));
      setIsSaved(true);
      console.log("allAnswers are:", updatedResults);
    }
  }, [options, selectedOption]);

  return (
    <div className="animation">
      <div className="test-box">
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
      <Button type="submit" onClick={registerData}>
        ثبت پاسخ
      </Button>
      {isSaved && <span className="message-span" >پاسخ شما ثبت شد.</span>}
    </div>
  );
};

export default QuestionTestType;
