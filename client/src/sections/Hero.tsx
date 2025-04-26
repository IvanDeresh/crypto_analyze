import { Link } from "react-router-dom";
import Cube from "../pages/Home/components/Cube";

const Hero = () => {
  return (
    <section className="relative text-white">
      <div className="h-screen flex items-center justify-center gap-20 px-10">
        <div className="relative flex flex-col items-center w-1/2">
          <Cube />
          {/* <p className="font-bold text-2xl absolute -bottom-40 min-w-max text-center text-transparent bg-clip-text bg-gradient-to-r from-[#646cff] to-[#b958fa]">
            Powered by Ethereum
          </p> */}
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start text-left">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Unlock the Future of Decentralized Finance
          </h1>
          <p className="text-lg mb-6 opacity-80">
            Connect your accounts from multiple exchanges, analyze real-time
            data, and optimize your trading strategy.
          </p>
          <Link
            to="/connect"
            className="text-lg font-semibold hover:text-white bg-[#646cff] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#535bf2] transition"
          >
            Connect Your Accounts
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#242424] via-transparent to-transparent"></div>
    </section>
  );
};

export default Hero;
