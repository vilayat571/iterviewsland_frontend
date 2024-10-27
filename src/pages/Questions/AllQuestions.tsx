import { useEffect, useRef, useState } from "react";
import Layout from "../../Layout/Layout";
import { url } from "../../constants/Apiurl";
import Introtext from "../../atoms/Questions/Introtext";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/store";
import { fetchQuestions } from "../../redux/reducers/getQuestions";
import Loading from "../../Layout/Loading";
import { socialMediaIcons } from "../../constants/socialMedia";
import Popup from "../../components/Main/Popup";
import { ToastContainer } from "react-toastify";
import DivshowLoading from "../../components/Allquestions/DivshowLoading";
import MainPdfDiv from "../../components/Allquestions/MainPdfDiv";
import Questions from "../../components/Allquestions/Questions";
import Categories from "../../components/Allquestions/Categories";

export interface ICategory {
  categoryname: string;
}

const AllQuestions = () => {
  const [suggest, setSuggest] = useState(false);
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
        <div className="bg-[#0E1527] text-white w-full h-screen fixed flex items-center justify-center rounded">
          <FontAwesomeIcon
            className="px-4 cursor-pointer py-3 rounded border-[1px] hover:bg-red-600 hover:text-white  absolute top-6 right-6 text-lg border-[rgb(30,41,60)]"
            onClick={() => setUnsupportedShare(false)}
            icon={faArrowLeft}
          />
          <div className="w-1/3 h-auto p-6">
            <div
              id="ocean"
              className="w-full border-[1px] border-[rgb(30,41,60)] p-3 py-5 rounded justify-between flex items-center"
            >
              <p className="text-2xl"> Bizi paylaşmağı unutma 🤗</p>
            </div>
            <div className="border-[rgb(31,40,60)] border-[1px] p-6 px-3 flex flex-col gap-5 rounded border-t-0">
              {socialMediaIcons.map((icon) => {
                const completeUrl = `${icon.url}${icon.queryParams(
                  encodeURIComponent(shareUrl),
                  encodeURIComponent(content?.title || "")
                )}`;

                return (
                  <a
                    href={completeUrl}
                    className="flex gap-2 justify-between items-center rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={icon.text}
                  >
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-lg">{icon.text}</span>
                    </p>
                    <FontAwesomeIcon
                      className="px-1 ml-1 text-xl"
                      icon={faShare}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Popup>
    );
  };

  return (
    <>
      <MainPdfDiv
        questions={questions}
        questionsRef={questionsRef}
        divShow={divShow}
      />

      <DivshowLoading divShow={divShow} />

      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <Popup play={suggest} setPlay={setSuggest}>
            <div>dree</div>
          </Popup>
          <Introtext />

          <Categories
            sCategory={sCategory}
            categories={categories}
            handleShare={handleShare}
            scrollDown={scrollDown}
          />

          {unsupportedShare && content && (
            <ShareComponent
              title={content.title}
              text={content.text}
              url={content.url}
            />
          )}

          <ToastContainer />
          <Questions
            questions={questions}
            setSuggest={setSuggest}
            generatePDF={generatePDF}
          />
        </Layout>
      )}
    </>
  );
};

export default AllQuestions;
