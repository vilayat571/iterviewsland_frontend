import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="w-full bg-[#10172A]
     mt-24 flex justify-center h-auto
     pb-20 pt-16 flex-col
     items-center"
    >
      <div className="flex flex-row items-center gap-5 mb-16">
        <NavLink className={"text-slate-300"} id="poppins" to="/tecrubeler">
          Təcrübələr
        </NavLink>
        <NavLink className={"text-slate-300"} id="poppins" to="/tecrubepaylash">
          Təcrübəni bölüş
        </NavLink>

        <NavLink className={"text-slate-300"} to={"/yazıtap"} id="poppins">
          Yazını tap
        </NavLink>

        <button
                  aria-label="Watch a video Button"

          className={
            "text-slate-300 border-[1px] border-[rgb(30,41,60)] text-base px-4 py-3 rounded"
          }
          id="poppins"
        >
          Video təlimat <FontAwesomeIcon icon={faPlayCircle} />
        </button>
      </div>

      <div className="text-center flex items-center justify-center text-white w-full">
        <span id="poppinsbold" className="text-white text-4xl ">
          it.hub
        </span>{" "}
        <p>
          {" "}
          <span className="ml-2 mr-1"> by </span>
          <span className="bg-blue-600 px-1 py-1 rounded text-white">
            vilayat
          </span>
        </p>
      </div>

      <p className="text-slate-400 text-sm text-center mt-5 ">
        <span className="text-white"> Copyright © 2024. IT HUB</span>{" "}
        informasiya texnalogiyaları sahəsində olan <br /> mütəxəssislərə yardım
        edilməsi üçün ərsəyə gətirilmiş bir icma layihəsidir.
      </p>
      <div className="flex items-center gap-3 justify-center mt-5 w-full">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="px-3 py-3 text-slate-300 bg-[#10172A] rounded-full text-base border-[1px] border-[rgb(30,41,60)]"
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className="px-3 py-3 text-slate-300 bg-[#10172A] rounded-full text-base border-[1px] border-[rgb(30,41,60)]"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="px-3 py-3 text-slate-300 bg-[#10172A] rounded-full text-base border-[1px] border-[rgb(30,41,60)]"
        />
      </div>
    </div>
  );
};

export default Footer;
