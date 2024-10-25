import Logo from "../../atoms/Navbar/Logo";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Popup from "../Main/Popup";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-[#0F1629] py-6 w-full flex items-center tracking-normal justify-center">
      <div
        className="w-4/5 text-[#fff]
    flex justify-between items-center  "
      >
        <Logo />

        <Popup play={showPopup} setPlay={setShowPopup}>
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
        </Popup>

        <div className="flex flex-row  items-center gap-0 text-base relative left-28 ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-blue-800 px-5 py-3 rounded text-white  " : "hover:bg-blue-800 px-5 py-3 rounded transition duration-300"
            }
            id="poppins"
            to="/tecrubeler"
          >
            Təcrübələr
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-white px-5 py-3 rounded text-black" : "hover:bg-blue-800 px-5 py-3 rounded transition duration-300"
            }
            id="poppins"
            to="/tecrubepaylash"
          >
            Təcrübəni bölüş
          </NavLink>
          <button
            className="hover:bg-blue-800 px-5 py-3 rounded transition duration-300"
  onClick={()=>alert('Yaxında hazır olacaq!')}
            id="poppins"
          >
            Cavablar
          </button>
        </div>

        <div className="flex flex-row items-center gap-4 text-base">
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
          <button
            onClick={() => setShowPopup(!showPopup)}
            className={
              "bg-blue-800 px-4 py-3 border-[rgb(33,46,71)] text-base border-[1px] rounded"
            }
            id="poppins"
          >
            Necə çalşır <FontAwesomeIcon icon={faPlayCircle} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
