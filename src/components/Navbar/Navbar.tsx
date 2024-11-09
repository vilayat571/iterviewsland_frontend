import Logo from "../../atoms/Navbar/Logo";
import {
  faArrowLeft,
  faBars,
  faCircleNodes,
  faDownload,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Popup from "../Main/Popup";
import Sidebar from "./Sidebar";
import { useAppDispatch, useAppSelector } from "../../redux/reducers/store";
import { removeQuestionFromCart } from "../../redux/reducers/addToCart";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import DivshowLoading from "../Allquestions/DivshowLoading";
import PDFIN from "./PDFIN";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(false);
  const [showCategories, setShowCategories] = useState(false);
  const dispatch = useAppDispatch();
  // Retrieve and parse questionsCart from localStorage
  const savedQuestionsCart: [] = JSON.parse(
    localStorage.getItem("categories") || "[]"
  );

  const myQuestionsRef = useRef<HTMLDivElement | null>(null); // Ref for capturing PDF content

  const [pdfLoading, setPdfLoading] = useState<boolean>(false);

  const generatePDF = async () => {
    setPdfLoading(true);

    const pdf = new jsPDF("p", "pt", "a4");
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (myQuestionsRef.current) {
      const canvas = await html2canvas(myQuestionsRef.current, { scale: 2 });
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
      pdf.save(`qarishiq_musahibe_suallari.pdf`);
    }
    setPdfLoading(false);
  };

  const { questionsCart } = useAppSelector((state) => state.addToCart);

  return (
    <div className="bg-[#0F1629] py-6 w-full flex items-center tracking-normal justify-center">
      <div
        ref={myQuestionsRef}
        style={{
          position: "absolute",
          width: "100%", // Set width explicitly
          display: pdfLoading ? "block" : "none", // Use "block" instead of "hidden" for conditional rendering
          top: pdfLoading ? "0px" : "-10000px", // Ensure visibility within viewport
          left: pdfLoading ? "0px" : "-10000px",
        }}
      >
        <p className="bg-blue-600 text-white px-3 inline-block rounded py-4 mb-1">
          Bu pdf - ithub saytından götürülmüşdür.{" "}
        </p>
        <div className="px-2 flex flex-col gap-4 mt-2">
          {questionsCart?.length &&
            questionsCart.map((question, index) => (
              <p key={index}>
                {index + 1}. {question.category}
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

      <div
        className="xl:w-4/5 lg:w-4/5 md:w-full sm:w-full xl:px-0 lg:px-0  md:px-2 sm:px-2 text-[#fff]
    flex justify-between items-center  "
      >
        <Logo />
        <Popup play={showPopup} setPlay={setShowPopup}>
          <div className="flex items-center justify-center z-50 bg-[#0e1527] fixed w-full h-screen">
            <FontAwesomeIcon
              onClick={() => setShowPopup(!showPopup)}
              icon={faArrowLeft}
              className="absolute top-6 right-6 border-[1px] px-4 py-3 hover:bg-red-600 hover:text-white transition duration-300 rounded cursor-pointer border-[rgb(30,41,60)]"
            />
            <iframe
              width="650"
              height="405"
              src="https://www.youtube.com/embed/1DcMeT_9jls?si=A7yMxK7XC2Lfk3Zm"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </Popup>
        <Popup play={showCategories} setPlay={setShowCategories}>
          <DivshowLoading divShow={pdfLoading} />

          <div className="w-full bg-[#0F1629]  h-screen fixed text-white xl:p-12 lg:p-12 md:p-12 sm:p-5 mt-8 overflow-y-hidden">
            <FontAwesomeIcon
              onClick={() => setShowCategories(!showCategories)}
              icon={faArrowLeft}
              className="absolute xl:top-6 lg:top-6 md:top-4 sm:top-4 xl:right-12 lg:right-12 md:right-6 sm:right-6 border-[1px] px-3 py-2 hover:bg-red-600 hover:text-white transition duration-300
               rounded cursor-pointer border-[rgb(30,41,60)]"
            />
            <div className="flex w-full items-center justify-between mt-6">
              <p className="text-3xl xl:inline lg:inline md:hidden sm:hidden">Seçilmiş sualların ₊✩‧₊</p>
              <div className="mt-3">
                <button
                  onClick={() => generatePDF()}
                  aria-label="Download Button"
                  className="bg-white text-black px-4 py-3 hover:bg-blue-800 hover:text-white transition duration-300 rounded"
                >
                  PDF-ini yüklə <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
            {/* Scrollable container for questions */}
            <div className="flex flex-col gap-10 mt-6 max-h-[85vh] w-full pb-6 overflow-y-auto">
              {questionsCart.map((item, index) => (
                <p
                  key={index}
                  className="flex border-t-0 border-l-0 border-r-0 border-b-[rgb(30,41,60)] border-[1px] items-center justify-between"
                >
                  {index + 1}. {item.category}
                  <FontAwesomeIcon
                    onClick={() => {
                      const survey = confirm("Sualı silmək istəyirsiniz?");
                      if (survey) {
                        dispatch(
                          removeQuestionFromCart({ category: item.category })
                        );
                      }
                    }}
                    className="p-2 px-3 mb-2 hover:bg-red-600 hover:border-red-600 cursor-pointer transition duration-300 rounded border-[1px] border-[rgb(30,41,60)]"
                    icon={faTimes}
                  />
                </p>
              ))}
            </div>

            {/* Button for PDF download */}
          </div>
        </Popup>

        <div className="xl:flex lg:flex md:hidden sm:hidden flex-row  items-center gap-0 text-base relative left-16 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-800 px-5 py-3 rounded text-white  "
                : "hover:bg-blue-800 px-5 py-3 rounded transition duration-300"
            }
            id="poppins"
            to="/tecrubeler"
          >
            Təcrübələr <sup className="bg-blue-600 p-[3px] rounded">tezliklə
            </sup>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white px-5 py-3 rounded text-black"
                : "hover:bg-blue-800 px-5 py-3 rounded transition duration-300"
            }
            id="poppins"
            to="/tecrubepaylash"
          >
            Təcrübəni bölüş
          </NavLink>
          <button
            aria-label="Show Video Button"
            onClick={() => setShowPopup(!showPopup)}
            className={
              "bg-transparent text-base px-4 py-3 border-[rgb(33,46,71)] border-[1px] rounded"
            }
            id="poppins"
          >
            Təlimat <FontAwesomeIcon icon={faCircleNodes} />
          </button>
        </div>

        <div className="xl:flex lg:flex md:hidden sm:hidden flex-row items-center gap-4 text-base">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-white px-5 py-4  rounded text-black"
                : "bg-transparent text-base px-4 py-3 border-[rgb(33,46,71)] border-[1px] rounded"
            }
            to={"/yazıtap"}
            id="poppins"
          >
            Yazını tap
          </NavLink>
          |
          <PDFIN
            showCategories={showCategories}
            savedQuestionsCart={savedQuestionsCart}
            setShowCategories={setShowCategories}
          />
        </div>

        <Sidebar
          setIsSidebarOpen={setDisplaySidebar}
          isSidebarOpen={displaySidebar}
          setShowPopup={setShowPopup}
          showPopup={showPopup}
          showCategories={showCategories}
          savedQuestionsCart={savedQuestionsCart}
          setShowCategories={setShowCategories}
        />

        <button
          className="xl:hidden lg:hidden"
          onClick={() => setDisplaySidebar(!displaySidebar)}
        >
          <FontAwesomeIcon
            className="bg-blue-700  text-whute text-lg px-4 py-3 rounded"
            icon={faBars}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
