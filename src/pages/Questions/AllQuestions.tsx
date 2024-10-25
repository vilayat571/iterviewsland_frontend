import { useEffect, useRef, useState } from "react";
import Layout from "../../Layout/Layout";
import { url } from "../../constants/Apiurl";
import Introtext from "../../atoms/Questions/Introtext";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/store";
import { fetchQuestions } from "../../redux/reducers/getQuestions";
import Loading from "../../Layout/Loading";
import { socialMediaIcons } from "../../constants/socialMedia";
import Popup from "../../components/Main/Popup";

export interface ICategory {
  categoryname: string;
}

const AllQuestions = () => {
  const [categories, setCategories] = useState<ICategory[] | null>(null);
  const [sCategory, setSCategory] = useState<string | null>("Javascript");
  const [display, setDisplay] = useState(false);
  const [unsupportedShare, setUnsupportedShare] = useState(false); // New state for unsupported sharing
  const dispatch = useAppDispatch();

  const { questions, loading } = useAppSelector((state) => ({
    questions: state.getQuestions.questions,
    loading: state.getQuestions.loading,
  }));

  const scrollDown = (
    category: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setSCategory(category);
    setDisplay(true);
  };

  useEffect(() => {
    if (!loading && display) {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 0); // Optional: Small delay if needed
    }
  }, [loading, display]);

  useEffect(() => {
    const urlApp = `${url}/categories`;
    fetch(urlApp)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));

    if (sCategory) {
      dispatch(fetchQuestions({ sCategory }));
    }
  }, [dispatch, sCategory]);

  const [content, setContent] = useState<{
    title: string;
    text: string;
    url: string;
  } | null>(null);

  const shareUrl = "https://buldum.netlify.app/";

  const handleShare = async (
    category: string,
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const shareData: { title: string; text: string; url: string } = {
      title: `${category}-ilə bağlı m`,
      text: "ded",
      url: shareUrl,
    };

    setContent(shareData);
    setUnsupportedShare(true); // Set unsupported share state
  };

  const questionsRef = useRef<HTMLDivElement | null>(null); // Ref for capturing PDF content

  const [divShow, setDivShow] = useState(false);

  const generatePDF = async () => {
    const pdf = new jsPDF("p", "pt", "a4");
    setDivShow(true);
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (questionsRef.current) {
      const canvas = await html2canvas(questionsRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add pages as needed
      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;

        if (heightLeft > 0) pdf.addPage();
      }
      pdf.save(`${sCategory?.toLocaleLowerCase()}_musahibe_suallari.pdf`);
    }
    setDivShow(false);
  };

  const ShareComponent = (content: {
    title: string;
    text: string;
    url: string;
  }) => {
    return (
      <Popup play={unsupportedShare} setPlay={setUnsupportedShare}>
        <div className="bg-[#0E1527] text-white w-1/3 h-auto py-6 px-6 rounded">
          <div
            id="ocean"
            className="w-full justify-between flex items-center pb-1"
          >
            <p className="text-2xl"> Bizi paylaşmağı unutma 🤗</p>
            <FontAwesomeIcon
              className="px-3 py-2 rounded border-[1px] text-lg border-[rgb(30,41,60)]"
              onClick={() => setUnsupportedShare(false)}
              icon={faTimes}
            />
          </div>
          {socialMediaIcons.map((icon: any) => {
            const completeUrl =
              icon.text === "WhatsApp"
                ? icon.url + encodeURIComponent(content?.title || "")
                : icon.text === "LinkedIn"
                ? `${icon.url}${encodeURIComponent(
                    shareUrl
                  )}&title=${encodeURIComponent(content?.title || "")}`
                : icon.url + encodeURIComponent(shareUrl);

            return (
              <a
                href={completeUrl}
                className="flex gap-2 justify-between items-center border-[rgb(31,40,60)] border-[1px] my-3 p-3 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                key={icon.text}
              >
                <p className="flex items-center justify-center gap-2">
                  <span className="text-lg">{icon.text} </span>
                </p>
                <FontAwesomeIcon className="px-1 ml-1 text-xl" icon={faShare} />
              </a>
            );
          })}
        </div>
      </Popup>
    );
  };

  return (
    <>
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
            href="http://localhost:5173/"
            target="blank"
            className="bg-blue-600 p-3 text-white rounded"
          >
            Sayta get
          </a>
        </div>
      </div>

      {divShow ? (
        <div className="w-full h-screen fixed z-50 flex items-center justify-center top-0 left-0 bg-[#0e1527] text-white ">
          <div className="text-xl flex flex-col text-center ">
            <span className="text-8xl mb-2 animate-custom-spin">◌</span>
            <span>pdf hazırlanır..</span>
          </div>
        </div>
      ) : (
        ""
      )}

      {loading ? (
        <Loading />
      ) : (
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
                  onClick={(e) => scrollDown(category.categoryname, e)}
                  key={category.categoryname} // Use category name as key (ensure it's unique)
                  className={`px-4 py-4 ${
                    sCategory === category.categoryname
                      ? "text-white border-[#363636]"
                      : "text-slate-200 border-[rgb(30,41,60)]"
                  } bg-[#10172A] border-[1px] flex items-center justify-between col-span-1 rounded `}
                >
                  <span id="poppins">{category.categoryname}</span>
                  {/* Render not supported sharing UI */}
                  <FontAwesomeIcon
                    onClick={(e) => handleShare(category.categoryname, e)}
                    className={`text-white border-[rgb(31,40,60)] px-2 text-lg py-1 rounded border-[1px] `}
                    icon={faShare}
                  />
                </button>
              ))}
            </div>
          </div>

          {unsupportedShare && <ShareComponent content={content} />}

          {/* Suallar */}
          <div className="w-full px-3 flex justify-center items-center rounded-md mt-0">
            <div className="text-slate-400 bg-[#10172A] mt-6 border-[rgb(30,41,60)] w-full border-[1px] px-8 rounded mx-auto relative">
              <>
                {questions?.length ? (
                  <div className="flex flex-col px-2 py-8">
                    <div className="grid grid-cols-1 gap-3 ">
                      {questions.map((question, index) => (
                        <p
                          key={index} // Use index as key if there's no unique id
                          className="px-0 py-3 flex justify-between items-start relative bottom-2 col-span-1 text-slate-400 rounded"
                        >
                          <span id="poppins" className="text-slate-200">
                            {index + 1}. {question.title}
                          </span>
                        </p>
                      ))}
                    </div>
                    <div id="cavablar" className="flex items-center gap-4">
                      <button
                        id="poppins"
                        className="mt-6 bg-[#E7EFFE] inline w-44 rounded px-4 py-3 text-[#000]"
                        onClick={() => generatePDF()}
                      >
                        PDF kimi yüklə
                      </button>
                      <button
                        id="poppins"
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
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default AllQuestions;
