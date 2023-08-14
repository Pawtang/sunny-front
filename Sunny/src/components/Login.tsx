import Navbar from "./Navbar";
import ActionButton from "../elements/ActionButton";
import { login } from "../middleware/userServiceCalls";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

const Login = () => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("ABC123abc!");

  const navigate = useNavigate();
  const { setTokenAndUser } = useContext(UserContext);
  const { APIPost } = useContext(UserContext);
  const API_URL: string =
    process.env.REACT_APP_URL || "sunny-back-production.up.railway.app/";

  const USER_URL = API_URL.concat("user");

  return (
    <>
      <Navbar></Navbar>
      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center text-lg`}
      >
        <form className="bg-white/50 hover:bg-white/60 transition-all p-6 rounded-lg shadow-md max-w-md hover:-translate-y-1 duration-200 ease-linear">
          <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="📧 Enter your email address"
              autoComplete="email"
              value={email}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-semibold 0 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="🔑 Enter your password"
              autoComplete="password"
              value={password}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
          <div className="flex justify-center">
            <ActionButton
              onClick={(e: any) => {
                e.preventDefault();
                APIPost(
                  `${USER_URL}/login`,
                  { email, password },
                  (data: any) => {
                    console.log(data);
                    setTokenAndUser(data.token, data.user.name);
                    navigate("/");
                  }
                );

                // login({ email, password }, (data: any) => {
                //   setTokenAndUser(data.token, data.user.name);
                //   navigate("/");
                // });
              }}
              buttonText="Log In"
              styleTags="w-96 mt-4"
            ></ActionButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
