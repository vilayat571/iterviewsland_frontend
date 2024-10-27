import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-[#fff] font-black  "
    >
      <span id="poppinsbold" className="text-2xl px-2 py-1 text-[#fff] rounded">.ithub</span>
    </Link>
  );
};

export default Logo;
