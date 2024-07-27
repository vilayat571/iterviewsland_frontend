import { Link } from "react-router-dom";

interface IDropdown {
  text: string;
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: React.FC<IDropdown> = ({ text, mode, setMode }) => {
  return (
    <>
      <div className="flex flex-col items-start  ">
        <button onClick={() => setMode(!mode)}>
          {text}
          <i className="ml-1 fa fa-caret-down" aria-hidden="true"></i>
        </button>
        <div
          className={` text-black text-[15px] rounded text-left
               absolute mt-8 z-1 bg-[#fff]  flex-col items-start gap-2 ${
                 mode ? "flex" : "hidden"
               }`}
        >
          <Link
            className=" hover:bg-orange-500 px-4 w-full rounded   whitespace-nowrap py-3 hover:text-white"
            to="/suallar"
          >
            Müsahibə sualları
          </Link>
          <Link
            className=" hover:bg-orange-500 px-4 w-full rounded   whitespace-nowrap py-3 hover:text-white"
            to="/"
          >
            Təcrübəni paylaş
          </Link>
          <Link
            className=" hover:bg-orange-500 px-4 w-full rounded   whitespace-nowrap py-3 hover:text-white"
            to="/"
          >
            Təcrübə oxu
          </Link>
          <Link
            className=" hover:bg-orange-500 px-4 w-full rounded   whitespace-nowrap py-3 hover:text-white"
            to="/"
          >
            Özünü sına
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
