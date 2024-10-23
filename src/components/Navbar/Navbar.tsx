import Logo from "../../atoms/Navbar/Logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className="bg-[#0F1629] py-4  w-full flex items-center justify-center">
      <div
        className="w-4/5 px-20 rounded-full text-[#fff]
    flex justify-between items-center  "
      >
        <Logo />
        <button
          className="cursor-pointer
      xl:hidden sm:block md:block lg:hidden"
          onClick={() => setIsSidebar(!isSidebar)}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl text-[#000] px-2 rounded-[3px] py-[6px] relative right-2"
          />
        </button>

        <div className="flex flex-row items-center gap-8 text-base">
          <span id="poppins">Təcrübələr</span>
          <Link
            to={"/elanpaylash"}
            id="poppins"
            className="bg-blue-600 text-[#fff] px-6 py-3 rounded"
          >
            Paylaş
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
