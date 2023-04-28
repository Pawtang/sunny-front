import ActionButton from "../elements/ActionButton";
import Navbar from "./Navbar";
// import { useState } from "react";

// const [bg, setBg] = useState(0);

// const Gradients = (select: number) => {
//   if ((select = 0)) {
//     return `from-cyan-500 to-blue-500`;
//   } else return ``;
// };

const Signup = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center`}
      >
        <form className="bg-white/20 hover:bg-white/30 transition-all p-6 rounded-lg shadow-md max-w-md hover:-translate-y-1 duration-200 ease-linear">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <div className="p-4">
            <p>Sunny is totes free to use.</p>
            <br />
            <p>
              We love security, and we respect yours. We'll never share your
              email, and we'll only reach out if its super important, like a
              security thing.
            </p>
            <br />
            <p>Take care of yourself! We hope this app helps you do so.</p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="Enter your email address"
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
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <ActionButton
              onClick={() => {}}
              buttonText="Submit"
              styleTags="w-96"
            ></ActionButton>
          </div>
          <div className="flex justify-center">
            <ActionButton
              onClick={() => {}}
              buttonText="Log In"
              styleTags="w-96 mt-4"
            ></ActionButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
