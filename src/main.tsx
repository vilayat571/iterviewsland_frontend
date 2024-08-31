import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/Main/App";
import AllQuestions from "./pages/Questions/AllQuestions";
import Found from "./pages/Notfound/Found";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllQuestions />} />
        <Route path="/mission" element={<App />} />
        <Route path="*" element={<Found />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
