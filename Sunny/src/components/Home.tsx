import { Link } from "react-router-dom";
import React, { FunctionComponent } from "react";
import Button from "../elements/Button";
// import Month from "./Month";
// import Day from "./Day";

const Home: FunctionComponent = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 container-fluid h-screen w-screen flex items-center">
      <div className="container flex justify-center mx-auto">
        <div className="container border mx-auto">
          <h2>Welcome to the homepage!</h2>
          <p>Landing page and call-to-action</p>
          <nav>
            <Button linkTo="/Month" buttonText="Daily Quality Tracker"></Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
