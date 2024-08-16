import React, { useEffect } from "react";
const ThanksPage = () => {
  useEffect(() => {
    localStorage.setItem("finishsurvey", "finished");
  }, []);
  return (
    <>
    <div className="thanks-page">
      <h2>اتمام نظرسنجی</h2>
      <p> ممنون از وقتی که برای پاسخگویی به سوالات نظرسنجی گذاشتید</p>
    </div>
    </>
  );
};

export default ThanksPage;
