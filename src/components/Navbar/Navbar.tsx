import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="w-11/12
    py-3 my-8 rounded-full text-[#fff] px-12 flex justify-between items-center  "
    >
      <div className="flex items-center">
        <Link to="/" className=" text-2xl  text-[#fff] px-2 font-black rounded-sm py-1 ">
          <span className="text-[19px]  text-[#ff790bee] my-[0px]">ı</span>
          <span className="text-[21px]  text-[#ff790bee] ml-[1px]">ı</span>
          <span className="text-[24px]  text-[#ff790bee] ml-[1px]">ı</span>
          <span className="text-3xl  text-[#ff790bee] ml-[1px]">I</span>
          nterviewsland
        </Link>
      </div>
      <div className="flex tracking-widest text-[#f1efef] items-center gap-5 text-base relative r-4">
        <Link
          onClick={() => alert("Bu hissə tam hazır deyil. Üzür istəyirik!")}
          to="/"
        >
          Yol xəritələri
        </Link>
        <Link
          onClick={() => alert("Bu hissə tam hazır deyil. Üzür istəyirik!")}
          to="/"
        >
          Bloqlar
        </Link>
        <Link
          onClick={() => alert("Bu hissə tam hazır deyil. Üzür istəyirik!")}
          to="/"
        >
          Müsahibələr
        </Link>
        <Link
          onClick={() => alert("Bu hissə tam hazır deyil. Üzür istəyirik!")}
          to="/"
        >
          Dokumentasiyalar
        </Link>
        <Link to="/suallar">Suallar</Link>
      </div>
      <div className="b text-[#fff] bg-[#ff790bee]  px-6 py-3 rounded-sm">Daxil ol</div>
    </div>
  );
};

export default Navbar;
