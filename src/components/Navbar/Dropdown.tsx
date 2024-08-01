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
            className=" hover:bg-orange-500 px-4 w-full rounded text-left  whitespace-nowrap py-3 hover:text-white"
            to="/"
          >
            Müsahibə sualları
          </Link>
          <button
            onClick={() => alert("Bu hissə tam hazır deyil. Üzür istəyirik!")}
            className=" hover:bg-orange-500 px-4 w-full rounded text-left  whitespace-nowrap py-3 hover:text-white"
          >
            Təcrübəni paylaş
          </button>
          <button
            onClick={() => alert("Bu hissə tam hazır deyil. Üzür istəyirik!")}
            className=" hover:bg-orange-500 px-4 w-full rounded text-left  whitespace-nowrap py-3 hover:text-white"
          >
            Təcrübə oxu
          </button>
          <button
            onClick={() => alert("Bu hissə tam hazır deyil. Üzür istəyirik!")}
            className=" hover:bg-orange-500 px-4 w-full rounded text-left  whitespace-nowrap py-3 hover:text-white"
          >
            Özünü sına
          </button>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
