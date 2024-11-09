import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/Quil.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllQuestions from "./pages/Questions/AllQuestions";
import Found from "./pages/Notfound/Found";
import { Provider } from "react-redux";
import { store } from "./redux/reducers/store";
import Share from "./pages/Questions/Share";
import Findtext from "./pages/Questions/Findtext";
// import UserExperiences from "./pages/Experiences/UserExperiences";
import { HelmetProvider } from "react-helmet-async";
import Soon from "./pages/Experiences/Soon";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllQuestions />} />
            <Route path="/tecrubepaylash" element={<Share />} />
            <Route path="/tecrubeler" element={<Soon />} />
            <Route path="*" element={<Found />} />
            <Route path="/yazıtap" element={<Findtext />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
