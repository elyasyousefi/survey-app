import React from "react";

const QuestionBlankType = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="option-box">
          <span>{index + 1})</span>
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default QuestionBlankType;
