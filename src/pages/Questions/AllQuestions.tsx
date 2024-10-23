import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { url } from "../../constants/Apiurl";
import Introtext from "../../atoms/Questions/Introtext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export interface ICategory {
  categoryName: string;
}

export interface IQuestions {
  title: string;
  category: string;
  number: number;
}

const AllQuestions = () => {
  const generatePDF = () => {
    const input = document.getElementById("someId") as HTMLElement | null;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(
          imgData as string,
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
  const [sCategory, setSCategory] = useState<string | null>("Javascript");
  const [loading, setLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<IQuestions[] | null>(null);
  const [loadingQ, setLoadingQ] = useState<boolean>(true);

  useEffect(() => {
    const urlApp = `${url}/categories`;
    const urlQuestions = `${url}/questions/${sCategory}`;
    fetch(urlApp)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .then(() => setLoading(false));

    fetch(urlQuestions)
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions))
      .then(() => setLoadingQ(false));
  }, [sCategory]);

  return (
    <Layout>
      <div
        className={`flex flex-col z-1
          xl:w-4/5 lg:w-5/6  md:w-full sm:w-full 
          xl:px-20 lg:px-20 md:px-8 sm:px-4 pb-12 mt-10 
          ${loading && "h-screen flex justify-center items-center"}`}
      >
        {loading ? (
          <div className="text-[#000] text-center text-3xl">Yüklənir...</div>
        ) : (
          <>
            <Introtext />
            <div className="flex flex-col mt-12">
              <p className="text-2xl text-[#000]">
                {categories?.length} müxtəlif sahə!
              </p>
              <div
                className="text-[#000]  w-full mx-auto relative gap-3 grid 
            xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-5"
              >
                {categories?.map((category: ICategory) => {
                  return (
                    <a
                      key={Math.random()}
                      onClick={() => setSCategory(category.categoryName)}
                      href={`#cavablar`}
                      className="px-4 py-3 border-[#2d2d2d] border-[1px] col-span-1  text-[#2d2d2d]
            rounded"
                    >
                      {category.categoryName}
                    </a>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* suallar */}
      <div className="w-full  flex justify-center items-center  p-20 mt-12 ">
        <div
          id="cavablar"
          className={`text-black bg-[#FBFBFB] ${
            loadingQ && "h-screen flex justify-center items-center"
          } px-12
           xl:w-4/5 lg:w-5/6  md:w-full sm:w-full 
           
        mx-auto relative  `}
        >
          {loadingQ ? (
            <div className="text-center text-black text-3xl">Yüklənir..</div>
          ) : (
            <>
              {questions?.length ? (
                <div className="flex flex-col  px-8 py-8">
                  <p
                    className="
                xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl
                text-black mb-8
                xl:text-center lg:text-center md:text-left sm:text-left"
                  >
                    {questions.length} {sCategory} müsahibə sualı
                  </p>
                  <div id="questions" className="grid grid-cols-1 gap-3 ">
                    {questions?.map((question: IQuestions, index) => {
                      return (
                        <p
                          key={Math.random()}
                          className="px-0 py-3 flex justify-between items-start relative bottom-2 border-b
                      col-span-1  text-black
            rounded"
                        >
                          <span className="text-black">
                            {index + 1}. {question.title}
                          </span>
                          <button
                            onClick={() => {
                              alert(
                                "Sualların cavabları sonrakı yeniləmələr ilə əlavə ediləcək. Üzür istəyirik!"
                              );
                            }}
                            className="text-lg text-nowrap cursor-pointer"
                          >
                            <FontAwesomeIcon icon={faBookmark} />
                          </button>
                        </p>
                      );
                    })}
                  </div>
                  <button
                    className="mt-6 bg-[#E7EFFE] inline w-44 rounded px-4 py-3 text-[#000]"
                    onClick={generatePDF}
                  >
                    PDF kimi yüklə
                  </button>
                </div>
              ) : (
                <div className="w-full text-2xl h-[400px]  flex justify-center items-center">
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
