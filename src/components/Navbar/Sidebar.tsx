import React from "react";
import Logo from "../../atoms/Navbar/Logo";
import { faPlayCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC<{
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isSidebarOpen, setIsSidebarOpen, showPopup, setShowPopup }) => {
  return (
    <div
      className={`fixed z-50 bg-[#0e1527] w-screen left-0 top-0 h-screen transform py-6 px-12 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FontAwesomeIcon
            className="bg-blue-700 z-50 text-white text-lg px-4 py-3 rounded"
            icon={faTimes}
          />
        </button>
      </div>
      <div className="flex flex-col text-left mt-6 gap-4">
        <NavLink id="poppins" to="/">
          Suallar
        </NavLink>
        <NavLink id="poppins" to="/tecrubeler">
          Təcrübələr
        </NavLink>
        <NavLink id="poppins" to="/tecrubepaylash">
          Təcrübəni bölüş
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white px-5 py-4 rounded text-black"
              : "bg-transparent text-base text-center px-4 py-3 border-[rgb(33,46,71)] border-[1px] rounded"
          }
          to={"/yazıtap"}
          id="poppins"
        >
          Yazını tap
        </NavLink>
        <button
          onClick={() => {
            setShowPopup(!showPopup);
            setIsSidebarOpen(!isSidebarOpen);
          }}
          className={
            "bg-blue-800 px-4 py-3 border-[rgb(33,46,71)] text-base border-[1px] rounded"
          }
          id="poppins"
        >
          Necə çalşır <FontAwesomeIcon icon={faPlayCircle} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
