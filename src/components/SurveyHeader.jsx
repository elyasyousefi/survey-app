import React from "react";
import Timer from "./Timer";

const SurveyHeader = () => {
  return (
    <div className="survey-header">
      <div className="question-box">
        <h3>شماره سوال :</h3>
        <span>1</span>
      </div>
      <div className="timer-box">
        <Timer/>
      </div>
    </div>
  );
};

export default SurveyHeader;
