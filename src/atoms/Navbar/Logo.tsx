import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      id="ocean"
      className="text-[#fff] font-black flex items-center tracking-wider"
    >
      <span id="poppinsbold2" className="text-blue-800 font-extrabold text-4xl">
        it
      </span>
      <span className="text-3xl">hub</span>
    </Link>
  );
};

export default Logo;
