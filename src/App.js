import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Survey from "./Survey/Survey";
import ThanksPage from "./components/thanksPage";
import { useState, useEffect } from "react";

function App() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setFinished(false);
    const registerData = localStorage.getItem("user");
    const finishSurvey = localStorage.getItem("finishsurvey");
    const parsedUserData = JSON.parse(registerData);
    if (finishSurvey) {
      setFinished(true);
      console.log("UserData:",parsedUserData);
    }
  }, []);

  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route path="/" element={finished ? <ThanksPage /> : <Home />} />
          <Route
            path="/survey"
            element={finished ? <ThanksPage /> : <Survey />}
          />
          <Route path="/thanks" element={<ThanksPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;