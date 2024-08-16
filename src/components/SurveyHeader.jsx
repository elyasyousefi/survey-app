import React, { useEffect, useRef, useState } from "react";
import Timer from "./Timer";

const SurveyHeader = ({ questionType, newAnswerChange }) => {
  const question1 = useRef(null);
  const question2 = useRef(null);
  const question3 = useRef(null);
  const [startTime, setStartTime] = useState(false);

  useEffect(() => {
    setStartTime(true);

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedSavedUser = JSON.parse(savedUser);
      const answers = parsedSavedUser.answers;
      [question1, question2, question3].forEach((ref, index) => {
        const answerType = ["test", "descriptive", "blank"][index];
        if (answers[answerType]) {
          ref.current.classList.add("registerQuestion");
        } else {
          ref.current.classList.remove("registerQuestion");
        }
      });
    }

    [question1, question2, question3].forEach((ref, index) => {
      const currentQuestionType = ["test", "descriptive", "blank"][index];
      if (questionType === currentQuestionType) {
        ref.current.classList.add("activeQuestion");
      } else {
        ref.current.classList.remove("activeQuestion");
      }
    });
  }, [questionType]);

  return (
    <div className="survey-header">
      <div className="question-box">
        <span ref={question1} className="circleSymbol">
          1
        </span>
        <span ref={question2} className="circleSymbol">
          2
        </span>
        <span ref={question3} className="circleSymbol">
          3
        </span>
        <span className="lineSymbol"></span>
      </div>
      <div className="timer-box">
        <Timer startTime={startTime} />
      </div>
    </div>
  );
};

export default SurveyHeader;