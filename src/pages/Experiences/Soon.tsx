import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Soon = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center flex-col w-full h-screen text-white">
      <p className=" text-5xl teext-center" id="poppinsbold">
        Tezliklə sizinləyik 🔥
      </p>
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition duration-300 px-5 py-3 text-lg mt-3 rounded border-[rgb(30,41,60)] border-[1px] block"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};

export default Soon;
