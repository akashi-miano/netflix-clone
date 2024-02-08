import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  return (
    <section className="min-h-screen  bg-signUpBg bg-cover bg-no-repeat flex justify-center items-center">
      <div className="absolute insert-0 bg-gradient-to-b from-black/50 to-black/50 h-full w-full"></div>
      <form
        action=""
        className="relative z-[1] flow-content--m bg-[#000000b2] min-w-[450px] p-6 min-h-[450px] px-[2rem] py-[2.5rem] text-white"
        onSubmit={handleSubmit}
      >
        <div className="container">
          <header className="mb-8">
            <h1 className="text-white text-4xl capitalize font-bold">
              sing in
            </h1>
          </header>
          <div className="input-wrapper flow-content--m">
            <input
              type="email"
              className="w-full  inline-block rounded-md bg-[#222] placeholder:text-zinc-200 p-2"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full inline-block rounded-md bg  bg-[#222] placeholder:text-zinc-200 p-2"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              href=""
              className="btn bg-red-600 text-white capitalize text-lg w-full text-center"
              type="submit"
            >
              sign in
            </button>
            {error && <p className="text-md text-red-600">{error}</p>}
            <div className="main-wrapper flex justify-between items-center">
              <div className="input-wrapper flex items-center gap-4">
                <input type="checkbox" id="remember" />
                <label
                  className="text-zinc-400 hover:text-white focus:text-white duration-300 cursor-pointer"
                  htmlFor="remember  "
                >
                  Remember Me
                </label>
              </div>
              <a
                href=""
                className="help text-zinc-400 hover:text-white focus:text-white duration-300"
              >
                Need help?
              </a>
            </div>
            <div className="wrapper mt-6">
              <span className="text-zinc-400 text-md">
                New to Netflix?
                <Link className="text-white inline-block ml-2" to="/signup">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
