import React, { useEffect, useState } from "react";
import Questions from "../data/questions";
import QuestionTestType from "../components/QuestionTestType";
import QuestionDescriptiveType from "../components/QuestionDescriptiveType";
import QuestionBlankType from "../components/QuestionBlankType";
import "./Survey.css";
import SurveyHeader from "../components/SurveyHeader";
import SurveyFooter from "../components/SurveyFooter";

const Survey = () => {
  const [questionType, setQuestionType] = useState("descriptive");
  const [title, setTitle] = useState("سوال تستی");
  const [main, setMain] = useState("");
  const [questionOptions, setQuestionOptions] = useState([""]);
  let Question = Questions.find(({ type }) => type === questionType);
  let options = [""];
  useEffect(() => {
    console.log("Question:", Question.contents.main);
    if (questionType === "test") {
      setTitle("سوال تستی");
      options = [
        Question.contents.option1,
        Question.contents.option2,
        Question.contents.option3,
        Question.contents.option4,
      ];
    }
    setQuestionOptions(options);
    if (questionType === "descriptive") {
      setTitle("سوال تشریحی");
    }
    if (questionType === "blank") {
      setTitle("سوال جای خالی");
      options = [
        Question.contents.option1,
        Question.contents.option2,
        Question.contents.option3,
        Question.contents.option4,
      ];
      setQuestionOptions(options);
    }
  }, [questionType, Question]);

  console.log("Options are:", options);
  return (
    <div>
      <SurveyHeader />
      <div className="question-content">
      <h3>{title}:</h3>
      <p>{Question.contents.main}</p>
      {questionType === "test" && (
        <QuestionTestType options={questionOptions} />
      )}
      {questionType === "descriptive" && <QuestionDescriptiveType />}
      {questionType === "blank" && (
        <QuestionBlankType options={questionOptions} />
      )}
      </div>
      <SurveyFooter />
    </div>
  );
};

export default Survey;
