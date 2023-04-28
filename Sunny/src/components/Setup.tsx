import Navbar from "./Navbar";
import ActionButton from "../elements/ActionButton";

const Setup = () => {
  return (
    <>
      <Navbar></Navbar>
      <div
        className={`bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center`}
      >
        <form className="bg-white/20 hover:bg-white/30 transition-all p-6 rounded-lg shadow-md max-w-md hover:-translate-y-1 duration-200 ease-linear">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Set Up Your Tracking
          </h2>

          <div className="grid grid-cols-2 gap-4" id="setup">
            <div className="flex items-center">
              <h2 className="text-l">Attribute 1:</h2>
            </div>

            <div className="flex items-center">
              <div>
                <label htmlFor="yes-no-checkbox" className="mr-4 font-bold">
                  Yes/No:
                </label>
                <input
                  id="yes-no-checkbox"
                  type="checkbox"
                  className="form-checkbox"
                />
              </div>
              <div>
                <label htmlFor="yes-no-checkbox" className="mr-4 font-bold">
                  Yes/No:
                </label>
                <input
                  id="yes-no-checkbox"
                  type="checkbox"
                  className="form-checkbox"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ActionButton
              onClick={() => {}}
              buttonText="Add Another"
              styleTags="w-96 mt-4"
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

export default Setup;
