import Navbar from "./Navbar";
import ActionButton from "../elements/ActionButton";
import { useState } from "react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <>
      <Navbar></Navbar>
      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center text-lg`}
      >
        <form className="bg-white/50 hover:bg-white/60 transition-all p-6 rounded-lg shadow-md max-w-md hover:-translate-y-1 duration-200 ease-linear">
          <h2 className="text-3xl font-bold mb-6 text-center">Log In</h2>

          <div className="mb-6">
            <label htmlFor="password" className="block font-semibold 0 mb-2">
              Current Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="🔑 Enter your password"
              autoComplete="password"
              value={currentPassword}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setCurrentPassword(e.currentTarget.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-semibold 0 mb-2">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="rounded-lg px-4 py-2 w-full focus:outline-blue-500 focus:outline-2"
              placeholder="🔑 Enter your password"
              autoComplete="password"
              value={newPassword}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setNewPassword(e.currentTarget.value);
              }}
            />
          </div>
          <div className="flex justify-center">
            <ActionButton
              onClick={() => {}}
              buttonText="Save"
              styleTags="w-96 mt-4"
            ></ActionButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
