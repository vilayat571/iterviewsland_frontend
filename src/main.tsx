import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/Main/App";
import Question from "./pages/Questions/Question";
import AllQuestions from "./pages/Questions/AllQuestions";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/suallar/:category" element={<Question />} />
        <Route path="/suallar" element={<AllQuestions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
