import { Link } from "react-router-dom";
import React, { FunctionComponent } from "react";
import { Fragment } from "react";
import LinkButton from "../elements/LinkButton";
import Navbar from "./Navbar";
// import Month from "./Month";
// import Day from "./Day";

const Home: FunctionComponent = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 container-fluid h-screen w-screen">
        <div className="flex items-center w-100 h-screen border container-fluid">
          <div className="container flex justify-center mx-auto max-w-xl">
            <div className="container mx-auto text-white">
              <h2 className="text-xl">
                <b>Welcome to Sunny!</b>
              </h2>
              <p>A daily journal and habit tracker</p>
              <nav>
                <LinkButton
                  linkTo="/Month"
                  buttonText="My Calendar"
                  styleTags="mx-auto"
                ></LinkButton>
                <LinkButton
                  linkTo="/Day"
                  buttonText="Today's journal"
                  styleTags="ml-4"
                ></LinkButton>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
