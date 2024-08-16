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
    const existingResults = localStorage.getItem("Results");
    const parsedResults = existingResults ? JSON.parse(existingResults) : {};
    let updatedResults = { ...parsedResults };
    updatedResults.test = options[selectedOption];
    localStorage.setItem("Results", JSON.stringify(updatedResults));
    console.log("allAnswers are:", updatedResults);
    setIsSaved(true);
  }, [options, selectedOption]);

  return (
    <>
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
      <Button type="submit" onClick={registerData}>
        ثبت پاسخ
      </Button>
      {isSaved && <span>پاسخ شما ثبت شد.</span>}
    </>
  );
};

export default QuestionTestType;
