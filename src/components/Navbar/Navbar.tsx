import { Link } from "react-router-dom";
import Logo from "../../atoms/Navbar/Logo";

const Navbar = () => {
  return (
    <div
      className="xl:w-11/12 lg:w-11/12 md:w-full sm:w-full
    py-3 xl:my-8 lg:my-8 md:my-4 sm:my-4 rounded-full text-[#fff] xl:px-12 lg:px-12 md:px-3 sm:px-2 flex justify-between items-center  "
    >
      <Logo />
      <div className=" tracking-widest text-[#f1efef]
      xl:flex lg:flex md:hidden sm:hidden
      items-center gap-5 text-base relative r-4">
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
      <div className="xl:block md:hidden lg:block sm:hidden text-[#fff] bg-[#ff790bee]  px-6 py-3 rounded-sm">
        Daxil ol
      </div>
    </div>
  );
};

export default Navbar;
