import React from "react";
import { FormCheck } from "react-bootstrap";

const QuestionTestType = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="option-box">
          <FormCheck />
          <span>{index + 1})</span>
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default QuestionTestType;
