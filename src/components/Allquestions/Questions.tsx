import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/store";
import { addQuestionToCart } from "../../redux/reducers/addToCart";
import { IQuestion } from "../../redux/reducers/getQuestions";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

interface IAuthor {
  name: string;
  linkedin: string;
  _id: string;
}

const Questions: React.FC<{
  questions: IQuestion[] | null;
  setSuggest: React.Dispatch<React.SetStateAction<boolean>>;
  generatePDF: () => Promise<void>;
}> = ({ questions, setSuggest, generatePDF }) => {
  const dispatch = useAppDispatch();

  // Default authors to an empty array in the Redux state
  const authors: IAuthor[] | string[] = useAppSelector(
    (state) => state.getAuthors.authors ?? []
  );

  return (
    <div className="w-full xl:px-3 lg:px-3 md:px-2 sm:px-3 flex justify-center items-center rounded-md sm:mt-0 md:mt-0 xl:mt-6 lg:mt-6">
      <div
        className="text-slate-400 bg-[#10172A]  border-[rgb(30,41,60)] w-full border-[1px] xl:px-8  lg:px-8 md:px-0 sm:px-2 
    rounded mx-auto relative"
      >
        <>
          {questions?.length ? (
            <div className="flex flex-col px-2 py-8">
              <div className="grid grid-cols-1 gap-3 ">
                {questions.map((question, index) => (
                  <p
                    onClick={() => {
                      dispatch(addQuestionToCart({ category: question.title }));
                    }}
                    key={index} // Use index as key if there's no unique id
                    className="px-0 py-3 flex border-[1px] border-r-0 border-l-0 border-t-0 border-b-[rgb(30,41,60)]
                   justify-between items-start relative bottom-2 col-span-1 cursor-pointer text-slate-400 rounded"
                  >
                    <span id="poppins" className="text-slate-200">
                      {index + 1}. {question.title}
                    </span>

                    <FontAwesomeIcon
                      className="text-white cursor-pointer"
                      icon={faFileCirclePlus}
                    />
                  </p>
                ))}
              </div>
              {authors.length > 0 && (
                <div className="flex gap-1 items-center mt-6">
                  <p className="text-white text-xl">Müəlliflər : </p>
                  <div id="author" className="flex gap-2">
                    {authors.map((item: IAuthor | any) => {
                      return (
                        <NavLink 
                          target="blank"
                          to={item.linkedin} 
                          className="border-[1px] text-sm flex items-center gap-3 border-[rgb(30,41,60)] px-5 py-3 rounded text-white"
                          key={item._id}
                        >
                          <span> {item.name}</span>{" "}
                          <FontAwesomeIcon
                            className="text-xl"
                            icon={faLinkedin}
                          />
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              )}
              <div
                id="cavablar"
                className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:items-center lg:items-center md:items-start sm:items-start
               mt-6  gap-4"
              >
                <button
                  aria-label="Download Button"
                  id="poppins"
                  className=" bg-blue-600  inline xl:w-auto lg:w-auto md:w-full sm:w-full rounded px-4 py-3 text-[#fff]"
                  onClick={() => generatePDF()}
                >
                  PDF kimi yüklə 📥
                </button>
                <button
                  id="poppins"
                  aria-label="Go to categories Button"
                  className=" bg-blue-600  inline xl:w-auto lg:w-auto md:w-full sm:w-full rounded px-4 py-3 text-[#fff]"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Kateqoriyalar ✔
                </button>
                <button
                  aria-label="Suggest a question Button"
                  id="poppins"
                  className=" bg-blue-600  inline xl:w-auto lg:w-auto md:w-full sm:w-full  rounded px-4 py-3 text-[#fff]"
                  onClick={() => setSuggest(true)}
                >
                  Sual tövsiyyə et 💭
                </button>
              </div>
            </div>
          ) : (
            <div
              id="poppins"
              className="w-full text-2xl h-[400px] flex justify-center items-center"
            >
              Bu kateqoriya üzrə suallar hələ əlavə edilməyib!
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Questions;
