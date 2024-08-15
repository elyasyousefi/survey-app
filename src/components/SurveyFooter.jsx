import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const SurveyFooter = ({ questionType, setQuestionType, setFinish }) => {
  const preButton = useRef(null);
  const [preButtonName, setPreButtonName] = useState('');
  const [nextButtonName, setNextButtonName] = useState('');

  useEffect(() => {
    if (questionType === 'test') {
      preButton.current.classList.add('hideButton');
      setPreButtonName('');
      setNextButtonName('سوالات تشریحی');
    } else if (questionType === 'descriptive') {
      preButton.current.classList.remove('hideButton');
      setPreButtonName('سوالات تستی');
      setNextButtonName('سوالات جای خالی');
    } else if (questionType === 'blank') {
      preButton.current.classList.remove('hideButton');
      setPreButtonName('سوالات تشریحی');
      setNextButtonName('پایان آزمون');
    }
  }, [questionType]);

  const actionPreButton = useCallback(() => {
    if (questionType === 'descriptive') {
      setQuestionType("test");
    } else if (questionType === 'blank') {
      setQuestionType("descriptive");
    }
  }, [questionType, setQuestionType]);

  const actionNextButton = useCallback(() => {
    if (questionType === 'test') {
      setQuestionType("descriptive");
    } else if (questionType === 'descriptive') {
      setQuestionType("blank");
    } else if (questionType === 'blank') {
      setFinish(true);
    }
  }, [questionType, setQuestionType, setFinish]);

  return (
    <div className="survey-footer">
      <Button ref={preButton} onClick={actionPreButton} variant="primary">
        <span>{preButtonName}</span>
      </Button>
      <Button onClick={actionNextButton} variant="primary">
        <span>{nextButtonName}</span>
      </Button>
    </div>
  );
};

export default SurveyFooter;