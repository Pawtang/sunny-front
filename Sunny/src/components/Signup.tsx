import ActionButton from "../elements/ActionButton";
import Navbar from "./Navbar";
// import { signup } from "../middleware/userServiceCalls";
import { useState } from "react";

// import { useState } from "react";

// const [bg, setBg] = useState(0);

// const Gradients = (select: number) => {
//   if ((select = 0)) {
//     return `from-cyan-500 to-blue-500`;
//   } else return ``;
// };

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="🔑 Enter your password"
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$"
            />
            <div className="w-full h-2 mt-2 rounded-lg  bg-gray-200">
              <div className="h-full bg-green-500 w-6/12"></div>
            </div>
            Weak
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
              id="password"
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="🔑 Confirm password"
              autoComplete="new-password"
            />
          </div>
          <div className="flex justify-center">
            <ActionButton
              onClick={() => {}}
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
