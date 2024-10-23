import Logo from "../../atoms/Navbar/Logo";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className="bg-[#FFFFFF] py-4  w-full flex items-center justify-center">
      <div
        className="w-4/5 px-20 rounded-full text-[#000]
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

        <div>
          <span
            id="ocean"
            className="px-6 rounded py-3 border-[#4079DA] border-[1px]  text-[#4079DA]"
          >
            paylaş ✨
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
