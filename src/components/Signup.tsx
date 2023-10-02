import ActionButton from "../elements/ActionButton";
import Navbar from "./Navbar";
import { signup } from "../middleware/userServiceCalls";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  numberRegex,
  symbolRegex,
  lowercaseRegex,
  uppercaseRegex,
} from "../utilities/regexStrings";
import { UserContext } from "../contexts/userContext";

const Signup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigate = useNavigate();

  const { setTokenAndUser } = useContext(UserContext);
  const { APIPost } = useContext(UserContext);
  const API_URL: string =
    process.env.REACT_APP_URL || "sunny-back-production.up.railway.app";

  const USER_URL = API_URL.concat("user");

  useEffect(() => {
    // console.log("pwStrength", pwStrength(password));
    console.log(symbolRegex.test(password));
  }, [password, confirmPassword]);

  return (
    <>
      <Navbar></Navbar>
      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center text-lg`}
      >
        <form className="bg-white/50 hover:bg-white/60 transition-all p-6 rounded-lg shadow-md max-w-md hover:-translate-y-1 duration-200 ease-linear">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block font-semibold text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              type="name"
              id="firstname"
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="😎 First name"
              value={firstName}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setFirstName(e.currentTarget.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block font-semibold text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              type="name"
              id="lastname"
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="😍 Last name"
              value={lastName}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setLastName(e.currentTarget.value);
              }}
            />
          </div>
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

          <div className="mb-2">
            <label htmlFor="password" className="block font-semibold 0 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2`}
              placeholder="🔑 Enter your password"
              autoComplete="new-password"
              // pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$"
              value={password}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setPassword(e.currentTarget.value);
              }}
            />
            <p className="mt-1">
              <span
                id="uppercase"
                className={`text-sm p-1 rounded-md mx-1 ${
                  uppercaseRegex.test(password) ? "bg-green-200" : "bg-red-200"
                }`}
              >
                Capital
              </span>
              <span
                id="lowercase"
                className={`text-sm p-1 rounded-md mx-1 ${
                  lowercaseRegex.test(password) ? "bg-green-200" : "bg-red-200"
                }`}
              >
                Lowercase
              </span>

              <span
                id="number"
                className={`text-sm p-1 rounded-md mx-1 ${
                  numberRegex.test(password) ? "bg-green-200" : "bg-red-200"
                }`}
              >
                Number
              </span>
              <span
                id="symbol"
                className={`text-sm p-1 rounded-md mx-1 ${
                  symbolRegex.test(password) ? "bg-green-200" : "bg-red-200"
                }`}
              >
                Symbol
              </span>
              <span
                id="length"
                className={`text-sm p-1 rounded-md mx-1 ${
                  password.length > 7 ? "bg-green-200" : "bg-red-200"
                }`}
              >
                Length
              </span>
            </p>
            {/* <div className="w-full h-2 mt-2 rounded-lg  bg-gray-200">
              <div className={`h-full bg-green-500 ${pwStyle}`}></div>
            </div> */}
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block font-semibold 0 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className={`rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2 ${
                password === confirmPassword
                  ? "!outline-green-400 outline-4"
                  : confirmPassword.length > 0 && "!outline-red-400 !outline-4"
              }`}
              placeholder="🔑 Confirm password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setConfirmPassword(e.currentTarget.value);
              }}
            />
          </div>
          <div className="flex justify-center">
            <ActionButton
              onClick={(e: any) => {
                e.preventDefault();
                APIPost(
                  `${USER_URL}`,
                  { email, name: `${firstName} ${lastName}`, password },
                  (data: any) => {
                    setTokenAndUser(data.token, data.user.name);
                    navigate("/");
                  }
                );
                // signup(
                //   {
                //     email,
                //     name: `${firstName} ${lastName}`,
                //     password,
                //   },
                //   (data: any) => {
                //     setTokenAndUser(data.token, data.user.name);
                //     navigate("/");
                //   }
                // );
              }}
              buttonText="Submit"
              styleTags="w-96"
            ></ActionButton>
          </div>
          {/* <div className="flex justify-center">
            <ActionButton
              onClick={() => {}}
              buttonText="Log In"
              styleTags="w-96 mt-4"
            ></ActionButton>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default Signup;
