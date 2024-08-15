import React, { useCallback, useEffect, useState } from "react";
import Questions from "../data/questions";
import QuestionTestType from "../components/QuestionTestType";
import QuestionDescriptiveType from "../components/QuestionDescriptiveType";
import QuestionBlankType from "../components/QuestionBlankType";
import "./Survey.css";
import SurveyHeader from "../components/SurveyHeader";
import SurveyFooter from "../components/SurveyFooter";
import { Button } from "react-bootstrap";

const Survey = () => {
  const [questionType, setQuestionType] = useState("test");
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("سوال تستی");
  const [questionOptions, setQuestionOptions] = useState([]);
  const [testAnswers, setTestAnswers] = useState([]);
  const [descriptiveAnswers, setDescriptiveAnswer] = useState([]);
  const [blankAnswers, setBlankAnswer] = useState([]);
  const [preStorageResults, setPreStorageResults] = useState([]);
  const [allAnswers, setAllAnswers] = useState({});
  const [isSaved, setIsSaved] = useState(false);
  const [finish, setFinish] = useState(false);

  const Question = Questions.find(({ type }) => type === questionType);

  useEffect(() => {
    const StorageResults = localStorage.getItem("Results");
    const PreResults = StorageResults ? JSON.parse(StorageResults) : [];
    setPreStorageResults(Array.isArray(PreResults) ? PreResults : []);

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

  const saveResults = useCallback(() => {
    setIsSaved(false);
    const existingResults = localStorage.getItem("Results");
    const parsedResults = existingResults ? JSON.parse(existingResults) : {};

    let updatedResults = { ...parsedResults };

    if (questionType === "test") {
      updatedResults.test = testAnswers;
    } else if (questionType === "blank") {
      updatedResults.blank = blankAnswers;
    } else if (questionType === "descriptive") {
      updatedResults.descriptive = descriptiveAnswers;
    }

    localStorage.setItem("Results", JSON.stringify(updatedResults));
    setAllAnswers(updatedResults);
    setIsSaved(true);
    console.log("allAnswers are:", updatedResults);
  }, [testAnswers, descriptiveAnswers, blankAnswers, questionType]);
  return (
    <>
      <SurveyHeader />
      <div className="question-content">
        <h3>{title}:</h3>
        {Question && <p>{Question.contents.main}</p>}
        {questionType === "test" && (
          <QuestionTestType
            saveAnswer={setTestAnswers}
            options={questionOptions}
            setIsSaved={setIsSaved}
          />
        )}
        {questionType === "descriptive" && (
          <QuestionDescriptiveType saveAnswer={setDescriptiveAnswer} setIsSaved={setIsSaved} />
        )}
        {questionType === "blank" && (
          <QuestionBlankType
            saveAnswer={setBlankAnswer}
            setIsSaved={setIsSaved}
            options={questionOptions}
          />
        )}
      </div>
      <Button type="submit" onClick={saveResults}>
         ثبت پاسخ
      </Button>
      {isSaved && <span>پاسخ های شما ثبت شد.</span>}
      <SurveyFooter
        questionType={questionType}
        setQuestionType={setQuestionType}
        setFinish={setFinish}
      />
    </>
  );
};

export default Survey;
