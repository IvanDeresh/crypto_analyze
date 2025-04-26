import { Link } from "react-router-dom";
import { logo } from "../../../assets/img";

const TheHeader = () => {
  return (
    <div className="flex w-full px-2 py-5 items-center">
      <div className="w-3/10 flex justify-center">
        <Link to="/" className="w-10 h-10">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </Link>
      </div>
      <ul className="flex justify-between w-4/10">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/stats">Stats</Link>
        </li>
      </ul>
      <div className="flex justify-center w-3/10 ">
        <Link
          className="w-36 flex justify-center items-center h-10 rounded-md hover:text-[#535bf2] transition-all duration-200 hover:bg-[#1f1f1f] active:scale-95 hover:scale-105 text-white font-bold bg-[#646cff]"
          to="/sign-in"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default TheHeader;
