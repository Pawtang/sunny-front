import React, { FunctionComponent } from "react";
import { useState } from "react";
// import dayjs from "dayjs";
// import { Interface } from "readline";
import { Link } from "react-router-dom";
import LinkButton from "../elements/LinkButton";

const Navbar: FunctionComponent = () => {
  return (
    <div className="bg-white/0 absolute p-4">
      <nav>
        <LinkButton linkTo="/" buttonText="🏠"></LinkButton>
        <LinkButton linkTo="/login" buttonText="Login"></LinkButton>
        <LinkButton linkTo="/signup" buttonText="Signup"></LinkButton>
        <LinkButton linkTo="/setup" buttonText="Setup"></LinkButton>
      </nav>
    </div>
  );
};

export default Navbar;
