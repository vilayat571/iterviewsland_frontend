import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { url } from "../../constants/Apiurl";
import Introtext from "../../atoms/Questions/Introtext";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/store";
import { fetchQuestions } from "../../redux/reducers/getQuestions";

export interface ICategory {
  categoryname: string;
}

const AllQuestions = () => {
  const generatePDF = () => {
    const input = document.getElementById("someId") as HTMLElement | null;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          canvas.width,
          canvas.height,
          undefined,
          "FAST"
        );
        pdf.save("interview-questions.pdf");
      });
    }
  };

  const [categories, setCategories] = useState<ICategory[] | null>(null);
  const [sCategory, setSCategory] = useState<string | null>("QA");

  const dispatch = useAppDispatch();

  const { questions, loading } = useAppSelector((state) => ({
    questions: state.getQuestions.questions,
    loading: state.getQuestions.loading,
  }));

  useEffect(() => {
    const urlApp = `${url}/categories`;
    fetch(urlApp)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));

    if (sCategory) {
      dispatch(fetchQuestions({ sCategory }));
    }
  }, [dispatch, sCategory]);

  const scrollDown = (category: string) => {
    setSCategory(category);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Optional: Adds smooth scrolling
    });
  };

  return (
    <Layout>
      <Introtext />
      <div className="flex flex-col px-3 mt-0">
        <div className="w-full flex justify-between items-center">
          <span className="w-full border-b-[1px] border-[rgb(30,41,60)]"></span>
          <p className="text-base border-[1px] border-[rgb(30,41,60)] px-5 py-3 rounded text-nowrap text-slate-100">
            Bütün sahələr
          </p>
          <span className="w-full border-b-[1px] border-[rgb(30,41,60)]"></span>
        </div>

        <div
          className="text-[#000]  w-full mx-auto relative gap-3 grid 
            xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-6"
        >
          {categories?.map((category: ICategory) => (
            <button
              key={category.categoryname} // Use category name as key (ensure it's unique)
              onClick={() => scrollDown(category.categoryname)}
              className={`px-4 py-4 ${
                sCategory === category.categoryname
                  ? "text-white border-[#363636]"
                  : "text-slate-200 border-[rgb(30,41,60)]"
              } bg-[#10172A] border-[1px] flex justify-between col-span-1 rounded`}
            >
              <span id="poppins"> {category.categoryname}</span>
              <FontAwesomeIcon
                className={`${
                  sCategory === category.categoryname
                    ? "text-[#fff]"
                    : "text-slate-200 "
                }`}
                icon={faShare}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Suallar */}
      <div className="w-full px-3 flex justify-center items-center rounded-md mt-0">
        <div
          className={`text-slate-400 bg-[#10172A] mt-6 border-[rgb(30,41,60)] w-full border-[1px] px-8 rounded
       mx-auto relative`}
        >
          {loading ? (
            "dedde"
          ) : (
            <>
              {questions?.length ? (
                <div className="flex flex-col px-2 py-8">
                  <div className="grid grid-cols-1 gap-3 ">
                    {questions.map((question, index) => (
                      <NavLink
                        key={index} // Use index as key if there's no unique id
                        className="px-0 py-3 flex justify-between items-start relative bottom-2 
          col-span-1 text-slate-400 rounded"
                      >
                        <span id="poppins" className="text-slate-200">
                          {index + 1}. {question.title}
                        </span>
                      </NavLink>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      id="poppins"
                      className="mt-6 bg-[#E7EFFE] inline w-44 rounded px-4 py-3 text-[#000]"
                      onClick={generatePDF}
                    >
                      PDF kimi yüklə
                    </button>
                    <button
                      id={`poppins`}
                      className="mt-6 bg-[#E7EFFE] inline w-44 rounded px-4 py-3 text-[#000]"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Kateqoriyalar
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
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllQuestions;
