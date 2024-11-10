import React from "react";
import Logo from "../../atoms/Navbar/Logo";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import PDFIN from "./PDFIN";

const Sidebar: React.FC<{
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  savedQuestionsCart: [];
  showCategories: boolean;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  isSidebarOpen,
  setIsSidebarOpen,

  savedQuestionsCart,
  showCategories,
  setShowCategories,
}) => {
  return (
    <div
      className={`fixed z-20 bg-[#0e1527] w-screen left-0 top-0 h-screen transform py-6 px-2 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <button
          aria-label="Open Sidebar Button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FontAwesomeIcon
            className="bg-blue-700 z-50 text-white text-lg px-4 py-3 rounded"
            icon={faTimes}
          />
        </button>
      </div>
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="flex flex-col text-left mt-6 gap-4"
      >
        <NavLink
          className={" hover:text-blue-300 transition duration-100"}
          id="poppins"
          to="/"
        >
          Suallar
        </NavLink>
        <NavLink
          className={" hover:text-blue-300 transition duration-100"}
          id="poppins"
          to="/tecrubeler"
        >
          Təcrübələr
        </NavLink>
        <NavLink
          className={" hover:text-blue-300 transition duration-100"}
          id="poppins"
          to="/tecrubepaylash"
        >
          Təcrübəni bölüş
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-4 rounded text-black"
              : "bg-transparent text-base text-center px-4 py-4 hover:bg-blue-800 transition duration-200 border-[rgb(33,46,71)] border-[1px] rounded"
          }
          to={"/yazıtap"}
          id="poppins"
        >
          Yazını tap
        </NavLink>
        <PDFIN
          showCategories={showCategories}
          savedQuestionsCart={savedQuestionsCart}
          setShowCategories={setShowCategories}
        />
      </div>
    </div>
  );
};

export default Sidebar;
