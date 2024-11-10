import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";import {
  faGithub,
  faGoogle,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="w-full bg-[#10172A]
     mt-24 flex justify-center h-auto
     py-16 flex-col px-4
     items-center"
    >


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
        <NavLink 
        target="blank"
        to={'https://www.linkedin.com/company/interviewsland'}>

        <FontAwesomeIcon
          icon={faLinkedin}
          className="p-3 text-white hover:bg-blue-600 transition duration-150  bg-[#10172A] rounded-full text-lg border-[1px] border-[rgb(30,41,60)]"
        />
        </NavLink>
        <NavLink 
        target="blank"
        to={'https://interviews-land.info'}>

        <FontAwesomeIcon
          icon={faGoogle}
          className="p-3 text-white hover:bg-blue-600 transition duration-150  bg-[#10172A] rounded-full text-lg border-[1px] border-[rgb(30,41,60)]"
        />
        </NavLink>

        <NavLink 
        target="blank"
        to={'https://github.com/vilayat571/iterviewsland_frontend'}>

        <FontAwesomeIcon
          icon={faGithub}
          className="p-3 text-white hover:bg-blue-600 transition duration-150  bg-[#10172A] rounded-full text-lg border-[1px] border-[rgb(30,41,60)]"
        />
        </NavLink>
        <NavLink 
        target="blank"
        to={'https://www.youtube.com/channel/UCEbybz8tUiXY7SOmy5BZPqw'}>

        <FontAwesomeIcon
          icon={faYoutube}
          className="p-3 text-white hover:bg-blue-600 transition duration-150  bg-[#10172A] rounded-full text-lg border-[1px] border-[rgb(30,41,60)]"
        />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
