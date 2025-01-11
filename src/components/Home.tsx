import { Link } from "react-router-dom";
import React, { useContext, FunctionComponent } from "react";
import { Fragment } from "react";
import LinkButton from "../elements/LinkButton";
import Navbar from "./Navbar";
import dayjs from "dayjs";
import { prefixer } from "../utilities/Prefixer";
import { UserContext } from "../contexts/userContext";
// import Month from "./Month";
// import Day from "./Day";

const date = `${dayjs().year()}-${prefixer(dayjs().month() + 1)}-${prefixer(
  dayjs().date()
)}`;

const Home: FunctionComponent = () => {
  const { token, user } = useContext(UserContext);
  console.log(date);
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 container-fluid h-screen w-screen p-4">
        <div className="flex items-center w-100 h-screen container-fluid">
          <div className="container flex justify-center mx-auto max-w-xl">
            <div className="container mx-auto text-white">
              <h2 className="text-xl">
                <b>Welcome to Sunny!</b>
              </h2>
              <p>A daily journal and habit tracker</p>
              <nav>
                {user?.name ? (
                  <div className="">
                    <LinkButton
                      linkTo="/Month"
                      buttonText="My Calendar"
                      styleTags="mx-auto"
                    ></LinkButton>
                    <LinkButton
                      linkTo={`/Day?date=${date}`}
                      buttonText="Today's journal"
                      styleTags="ml-4"
                    ></LinkButton>
                  </div>
                ) : (
                  <div className="">
                    <LinkButton
                      linkTo="/Login"
                      buttonText="Login"
                      styleTags="mx-auto"
                    ></LinkButton>
                    <LinkButton
                      linkTo={`/Signup`}
                      buttonText="Sign up"
                      styleTags="ml-4"
                    ></LinkButton>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
