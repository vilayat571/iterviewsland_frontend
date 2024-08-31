import { Link } from "react-router-dom";
import Logo from "../../atoms/Navbar/Logo";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { hrefsData, INavData } from "../../constants/NavData";
import { useState } from "react";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div
      className="xl:w-1/2 lg:w-11/12 md:w-full sm:w-full
    py-3 xl:my-8 lg:my-8 md:my-4 sm:my-4 rounded-full text-[#fff] xl:px-12 lg:px-20 md:px-3 sm:px-2 
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
          className="text-xl text-[#fff] px-2 rounded-[3px] py-[6px] bg-[#ff790bee] relative right-2"
        />
      </button>

      {isSidebar && (
        <div className=" fixed gap-3 flex flex-col px-4 py-4 top-0 w-full h-screen z-10 left-0 bg-[#02050A]">
          <div className="flex items-center my-4 justify-between px-0">
            <Logo />
            <button
              className="cursor-pointer
      xl:hidden sm:block md:block lg:hidden"
              onClick={() => setIsSidebar(!isSidebar)}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="text-xl text-[#fff] px-2 rounded-[3px] py-[6px] bg-[#ff790bee] relative "
              />
            </button>
          </div>
          {hrefsData.map((item: INavData) => {
            return (
              <Link
                className="text-lg tracking-wider"
                key={item.id}
                onClick={() =>
                  !item.isActive &&
                  alert("Bu hissə tam hazır deyil. Üzür istəyirik!")
                }
                to={item.link}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      )}

      <div
        className="  text-[#f1efef]
      xl:flex lg:flex md:hidden sm:hidden
      items-center gap-5 text-base relative right-3"
      >
        {hrefsData.map((item: INavData) => {
          return (
            <Link
              className="text-lg tracking-wider"
              key={item.id}
              onClick={() =>
                !item.isActive &&
                alert("Bu hissə tam hazır deyil. Üzür istəyirik!")
              }
              to={item.link}
            >
              {item.text}
            </Link>
          );
        })}
      </div>

      <div className=" gap-2 px-5 py-3 bg-white items-center justify-center flex text-base rounded">
        <img
          src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png"
          className="w-6"
          alt="The icon of google"
        />
         <span className="relative top-[2px] text-[#263040]"> Daxil ol</span>
      </div>
    </div>
  );
};

export default Navbar;
