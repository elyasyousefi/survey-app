import React, { useEffect, useState } from "react";

const Timer = () => {
  const surveyTime = { minute: 2, second: 0 };
  const [minute, setMinute] = useState(surveyTime.minute);
  const [second, setSecond] = useState(surveyTime.second);
  const [finishTime, setFinishTime] = useState(false);

  useEffect(() => {
    const savedTime = localStorage.getItem("surveyTime");
    if (savedTime) {
      const parsedSavedTime = new Date(savedTime);
      const currentTime = new Date();
      const timeDifference = Math.floor((currentTime - parsedSavedTime) / 1000);
      const remainingTime = surveyTime.minute * 60 + surveyTime.second - timeDifference;

      if (remainingTime <= 0) {
        setFinishTime(true);
        localStorage.setItem("finishsurvey","finished");
        window.location.href = '/thanks'
        return;
      }

      setMinute(Math.floor(remainingTime / 60));
      setSecond(remainingTime % 60);
    }

    const timer = setInterval(() => {
      if (second > 0) {
        setSecond((prevSecond) => prevSecond - 1);
      } else if (minute > 0) {
        setMinute((prevMinute) => prevMinute - 1);
        setSecond(59);
      } else {
        setFinishTime(true);
        clearInterval(timer);
      }
    }, 1000);

    if (!savedTime) {
      const startSurvey = new Date();
      localStorage.setItem("surveyTime", startSurvey.toString());
    }

    return () => clearInterval(timer);
  }, [minute, second]);

  return (
    <div>
      <div>
        <span>{minute.toString().padStart(2, "0")}</span>
        <span>{":"}</span>
        <span>{second.toString().padStart(2, "0")}</span>
      </div>
      {finishTime && <div>Time is up!</div>}
    </div>
  );
};

export default Timer;
