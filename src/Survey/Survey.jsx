import React, { useEffect, useState } from "react";
import Questions from "../data/questions";
import QuestionTestType from "../components/QuestionTestType";
import QuestionDescriptiveType from "../components/QuestionDescriptiveType";
import QuestionBlankType from "../components/QuestionBlankType";
import "./Survey.css";
import SurveyHeader from "../components/SurveyHeader";
import SurveyFooter from "../components/SurveyFooter";

const Survey = () => {
  const [questionType, setQuestionType] = useState("test");
  const [title, setTitle] = useState("سوال تستی");
  const [questionOptions, setQuestionOptions] = useState([]);
  const [newAnswerChange, setNewAnswerChange] = useState(false);

  const Question = Questions.find(({ type }) => type === questionType);

  useEffect(() => {
    if (Question) {
      if (questionType === "test") {
        setTitle("سوال تستی");
        setQuestionOptions([
          Question.contents.option1,
          Question.contents.option2,
          Question.contents.option3,
          Question.contents.option4,
        ]);
      } else if (questionType === "descriptive") {
        setTitle("سوال تشریحی");
        setQuestionOptions([]);
      } else if (questionType === "blank") {
        setTitle("سوال جای خالی");
        setQuestionOptions([
          Question.contents.option1,
          Question.contents.option2,
          Question.contents.option3,
          Question.contents.option4,
        ]);
      }
    }
  }, [questionType, Question]);

  return (
    <>
      <SurveyHeader
        questionType={questionType}
        newAnswerChange={newAnswerChange}
      />
      <div className="question-content animation">
        <h3>{title}:</h3>
        {Question && <p>{Question.contents.main}</p>}
        {questionType === "test" && (
          <QuestionTestType
            options={questionOptions}
            setNewAnswerChange={setNewAnswerChange}
          />
        )}
        {questionType === "descriptive" && <QuestionDescriptiveType />}
        {questionType === "blank" && (
          <QuestionBlankType options={questionOptions} />
        )}
      </div>
      <SurveyFooter
        questionType={questionType}
        setQuestionType={setQuestionType}
      />
    </>
  );
};

export default Survey;
