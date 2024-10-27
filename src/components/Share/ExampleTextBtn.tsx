import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ExampleTextBtn: React.FC<{
  showPopup: boolean;
  length: number;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showPopup, length, setShowPopup }) => {
  return (
    <>
      {!showPopup && length == 0 && (
        <button
        aria-label="Open popup Button"

          onClick={() => setShowPopup(!showPopup)}
          className="absolute top-6 z-20 right-6 border-[rgba(30,41,60)] border-[1px] text-base text-white bg-transparent 
            hover:bg-blue-700
            hover:text-white
            transition duration-300 px-5 py-4 rounded"
        >
          Örnək mətn
          <FontAwesomeIcon
            className="text-white ml-2 text-sm"
            icon={faExpand}
          />
        </button>
      )}
    </>
  );
};

export default ExampleTextBtn;
