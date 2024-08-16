import React, { useCallback, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const QuestionDescriptiveType = () => {
  const answerBoxRef = useRef(null);
  const [isSaved, setIsSaved] = useState(false);
  const registerData = useCallback(() => {
    const existingResults = localStorage.getItem("Results");
    const parsedResults = existingResults ? JSON.parse(existingResults) : {};
    let updatedResults = { ...parsedResults };
    //set descriptive answer
    updatedResults.descriptive = answerBoxRef.current.value;
    localStorage.setItem("Results", JSON.stringify(updatedResults));
    console.log("allAnswers are:", updatedResults);
    setIsSaved(true);
  }, []);

  return (
    <>
      <Form.Control
        ref={answerBoxRef}
        onFocus={() => {
          setIsSaved(false);
        }}
        as="textarea"
        aria-label="With textarea"
      />
      <Button type="submit" onClick={registerData}>
        ثبت پاسخ
      </Button>
      {isSaved && <span>پاسخ شما ثبت شد.</span>}
    </>
  );
};

export default QuestionDescriptiveType;
