import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

const Popup: React.FC<{
  children: ReactNode;
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ children, play, setPlay }) => {
  return (
    <div
      className={` z-50 popup ${play ? "open " : "close"}  
 `}
    >
      <div className=" text-red-500 absolute top-0 left-0 w-full h-screen  bg-[#9b9b9b] opacity-50 "></div>
      <div className="text-black  p-6 rounded w-auto items-center justify-center absolute flex flex-col z-100 ">
        {children}
      </div>
      <button onClick={() => setPlay(false)}>
        <FontAwesomeIcon
          className=" hover:bg-red-600 top-6 right-6 absolute rounded tranisiton 
              duration-300 text-black hover:text-white bg-white px-4 py-3 text-lg"
          icon={faTimes}
        />
      </button>
    </div>
  );
};

export default Popup;
