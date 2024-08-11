import React from "react";
import { Button } from "react-bootstrap";

const SurveyFooter = () => {
  return (
    <div className="survey-footer">
      <Button variant="primary">
        <span>{"<"}</span> <p>ثبت و قبلی</p>
      </Button>
      <Button variant="primary">
        <p>ثبت و بعدی</p> <span>{">"}</span>
      </Button>
    </div>
  );
};

export default SurveyFooter;
