import React from "react";
import { IQuestion } from "../../redux/reducers/getQuestions";

const MainPdfDiv: React.FC<{
  questionsRef: React.MutableRefObject<HTMLDivElement | null>;
  divShow: boolean;
  questions: IQuestion[] | null;
}> = ({ questionsRef, divShow, questions }) => {
  return (
    <div
      ref={questionsRef}
      style={{
        position: "absolute",
        width: "100%", // Set width explicitly
        display: divShow ? "block" : "none", // Use "block" instead of "hidden" for conditional rendering
        top: divShow ? "0px" : "-10000px", // Ensure visibility within viewport
        left: divShow ? "0px" : "-10000px",
      }}
    >
      <p className="bg-blue-600 text-white px-3 inline-block rounded py-4 mb-1">
        Bu pdf - ithub saytından götürülmüşdür.{" "}
      </p>
      <div className="px-2 flex flex-col gap-4 mt-2">
        {questions?.length &&
          questions.map((question, index) => (
            <p key={index}>
              {index + 1}. {question.title}
            </p>
          ))}
      </div>
      <div className="px-2 flex flex-row mt-5">
        <a
          href="https://ithubaz.netlify.app/"
          target="blank"
          className="bg-blue-600 p-3 text-white rounded"
        >
          Sayta get
        </a>
      </div>
    </div>
  );
};

export default MainPdfDiv;
