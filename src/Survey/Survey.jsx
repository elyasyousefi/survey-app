import React, { useCallback, useEffect, useState } from "react";
import Questions from "../data/questions";
import QuestionTestType from "../components/QuestionTestType";
import QuestionDescriptiveType from "../components/QuestionDescriptiveType";
import QuestionBlankType from "../components/QuestionBlankType";
import "./Survey.css";
import SurveyHeader from "../components/SurveyHeader";
import SurveyFooter from "../components/SurveyFooter";

const Survey = () => {
  const [questionType, setQuestionType] = useState("test");
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("سوال تستی");
  const [questionOptions, setQuestionOptions] = useState([]);
  const [finish, setFinish] = useState(false);

  const Question = Questions.find(({ type }) => type === questionType);

  useEffect(() => {
    // const StorageResults = localStorage.getItem("Results");
    // const PreResults = StorageResults ? JSON.parse(StorageResults) : [];
    // setPreStorageResults(Array.isArray(PreResults) ? PreResults : []);

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
      <SurveyHeader />
      <div className="question-content">
        <h3>{title}:</h3>
        {Question && <p>{Question.contents.main}</p>}
        {questionType === "test" && (
          <QuestionTestType
            options={questionOptions}
          />
        )}
        {questionType === "descriptive" && (
          <QuestionDescriptiveType/>
        )}
        {questionType === "blank" && (
          <QuestionBlankType
            options={questionOptions}
          />
        )}
      </div>
      <SurveyFooter
        questionType={questionType}
        setQuestionType={setQuestionType}
        setFinish={setFinish}
      />
    </>
  );
};

export default Survey;
