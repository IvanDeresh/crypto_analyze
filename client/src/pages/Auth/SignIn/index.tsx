import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../../components/shared/Button";
import { useState } from "react";
import { login } from "../../../utils/api/auth";

const SignIn = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log("Logged in user:", data);
      navigate("/profile");
    } catch (error: any) {
      console.error(error.message);
      setError(error.message || "Failed to login");
    }
  }
  return (
    <section className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-4 uppercase">
          Sign In
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-300 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-300 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter your password"
          />
        </div>

        <Button
          label="Sign In"
          type="submit"
          styles="hover:text-[#535bf2] py-3 rounded-md transition-all duration-200 hover:bg-[#1f1f1f] active:scale-95 hover:scale-105 text-white font-bold bg-[#646cff] bg-[#646cff]"
        />

        <div className="flex justify-center gap-2">
          <Link
            to="/sign-in"
            className={`${
              location.pathname === "/sign-in"
                ? "text-transparent bg-gradient-to-br from-purple-500 via-[#581acc] to-[#2522e6] bg-clip-text"
                : "text-white"
            }`}
          >
            Sign in
          </Link>
          <span className="font-bold ">/</span>
          <Link
            className={`${
              location.pathname === "/sign-up"
                ? "text-transparent bg-gradient-to-br from-purple-500 via-[#581acc] to-[#2522e6] bg-clip-text"
                : "text-white"
            }`}
            to="/sign-up"
          >
            Sign up
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
