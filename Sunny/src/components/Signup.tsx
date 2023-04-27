import ActionButton from "../elements/ActionButton";
import Navbar from "./Navbar";

const Signup = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 container-fluid h-screen w-screen p-4">
        <div className="flex items-center w-100 h-screen container-fluid">
          <div className="container flex justify-center mx-auto max-w-xl">
            <div className="container mx-auto text-white">
              <form action="">
                <label htmlFor="email">email</label>
                <input type="text" id="email" />
                <label htmlFor="password">password</label>
                <input type="text" id="password" />
                <ActionButton
                  onClick={() => {}}
                  buttonText="Sign Up"
                ></ActionButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
