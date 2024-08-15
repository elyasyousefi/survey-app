import React, { useCallback, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const QuestionDescriptiveType = ({ saveAnswer,setIsSaved }) => {
  const answerBoxRef = useRef(null);

  const registerData = useCallback(
    (event) => {
      event.preventDefault();
      saveAnswer(answerBoxRef.current.value);
      setIsSaved(true);
    },
    [saveAnswer]
  );

  return (
    <form onSubmit={registerData}>
      <Form.Control
        ref={answerBoxRef}
        onFocus={() => {
          setIsSaved(false);
        }}
        as="textarea"
        aria-label="With textarea"
      />
    </form>
  );
};

export default QuestionDescriptiveType;
