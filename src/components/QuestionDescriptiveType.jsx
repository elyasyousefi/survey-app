import React, { useCallback, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const QuestionDescriptiveType = () => {
  const answerBoxRef = useRef(null);
  const [isSaved, setIsSaved] = useState(false);
  const registerData = useCallback(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const ParsedsavedUser = JSON.parse(savedUser);
      let parsedResults = { ...ParsedsavedUser};
      parsedResults.answers.descriptive = { descriptive: answerBoxRef.current.value };
      let updatedResults = { ...parsedResults };
      localStorage.setItem("user", JSON.stringify(updatedResults));
      setIsSaved(true);
      console.log("allAnswers are:", updatedResults);
    }
  }, []);

  return (
    <div className="animation">
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
      {isSaved && <span className="message-span">پاسخ شما ثبت شد.</span>}
    </div>
  );
};

export default QuestionDescriptiveType;
