import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="  bg-[#303030]  text-[#fff] text-xl px-3 pb-1 pt-[10px] font-black rounded-sm  "
    >
      it.lab
    </Link>
  );
};

export default Logo;
