import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Timer = () => {
  const surveyTime = { minute: 2, second: 0 };
  const [minute, setMinute] = useState(surveyTime.minute);
  const [second, setSecond] = useState(surveyTime.second);
  const [finishTime, setFinishTime] = useState(false);
  const [startTime, setStartTime] = useState(false);

  useEffect(() => {
    if (!startTime) return;

    const timer = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      } else if (minute > 0) {
        setMinute(minute - 1);
        setSecond(59);
      } else {
        setFinishTime(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer); // Clear interval on component unmount
  }, [minute, second, startTime]);

  return (
    <div>
      <div>
        <span>{minute.toString().padStart(2, '0')}</span>
        <span>{":"}</span>
        <span>{second.toString().padStart(2, '0')}</span>
      </div>
      <Button onClick={() => setStartTime(true)} variant="primary">
        {"شروع نظرسنجی"}
      </Button>
    </div>
  );
};

export default Timer;
