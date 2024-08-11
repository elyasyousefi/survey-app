import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Survey from "./Survey/Survey";

function App() {
  return (
    <BrowserRouter basename="/">
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
