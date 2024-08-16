import React, { useCallback, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const QuestionBlankType = ({options}) => {
  const [isSaved, setIsSaved] = useState(false);

  const blank1Ref = useRef(null);
  const blank2Ref = useRef(null);
  const blank3Ref = useRef(null);
  const blank4Ref = useRef(null);

  const registerData = useCallback(() => {
    //load existing results
    const existingResults = localStorage.getItem("Results");
    const parsedResults = existingResults ? JSON.parse(existingResults) : {};
    let updatedResults = { ...parsedResults };
    //set blank answer
    updatedResults.blank = {
      blank1: blank1Ref.current.value,
      blank2: blank2Ref.current.value,
      blank3: blank3Ref.current.value,
      blank4: blank4Ref.current.value,
    };
    localStorage.setItem("Results", JSON.stringify(updatedResults));
    console.log("allAnswers are:", updatedResults);
    setIsSaved(true);
  }, []);

  return (
    <>
      <div>
        {options.map((option, index) => (
          <div key={index} className="option-box">
            <ul>
              <li>{option}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="blank-answer-box">
        <div className="blank-answer-1">
          <span>اولویت اول : ... </span>
          <Form.Select
            onChange={() => setIsSaved(false)}
            ref={blank1Ref}
            aria-label="انتخاب کنید"
          >
            <option>انتخاب کنید</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="blank-answer-2">
          <span>اولویت دوم: ... </span>
          <Form.Select
            onChange={() => setIsSaved(false)}
            ref={blank2Ref}
            aria-label="انتخاب کنید"
          >
            <option>انتخاب کنید</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="blank-answer-3">
          <span>اولویت سوم: ...</span>
          <Form.Select
            onChange={() => setIsSaved(false)}
            ref={blank3Ref}
            aria-label="انتخاب کنید"
          >
            <option>انتخاب کنید</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="blank-answer-4">
          <span>اولویت چهارم: ...</span>
          <Form.Select
            onChange={() => setIsSaved(false)}
            ref={blank4Ref}
            aria-label="انتخاب کنید"
          >
            <option>انتخاب کنید</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>
      <Button type="submit" onClick={registerData}>
        ثبت پاسخ
      </Button>
      {isSaved && <span>پاسخ شما ثبت شد.</span>}
    </>
  );
};

export default QuestionBlankType;
