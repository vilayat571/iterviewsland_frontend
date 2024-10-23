import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllQuestions from "./pages/Questions/AllQuestions";
import Found from "./pages/Notfound/Found";
import { Provider } from "react-redux";
import { store } from "./redux/reducers/store";
import Share from "./pages/Share";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllQuestions />} />
          <Route path="/elanpaylash" element={<Share />} />
          <Route path="*" element={<Found />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
