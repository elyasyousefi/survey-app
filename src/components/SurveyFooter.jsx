import React from "react";
import { Button } from "react-bootstrap";

const SurveyFooter = ({ setQuestionType }) => {
  return (
    <div className="survey-footer">
      <Button onClick={() => setQuestionType("test")} variant="primary">
        <span>سوال 1</span>
      </Button>
      <Button onClick={() => setQuestionType("descriptive")} variant="primary">
        <span>سوال 2</span>
      </Button>
      <Button onClick={() => setQuestionType("blank")} variant="primary">
        <span>سوال 3 </span>
      </Button>
      <Button href="/thanks" variant="primary">
        <span>پایان </span>
      </Button>
    </div>
  );
};

export default SurveyFooter;
