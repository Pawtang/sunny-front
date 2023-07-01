import React, { useContext, FunctionComponent } from "react";
import { useState } from "react";
// import dayjs from "dayjs";
// import { Interface } from "readline";
import { Link } from "react-router-dom";
import LinkButton from "../elements/LinkButton";
import { UserContext } from "../contexts/userContext";

const Navbar: FunctionComponent = () => {
  const { token, user } = useContext(UserContext);
  return (
    <div className="bg-white/0 absolute p-4">
      <nav>
        <LinkButton linkTo="/" buttonText="🏠"></LinkButton>

        {user && (
          <>
            <LinkButton linkTo="/setup" buttonText="⚙️"></LinkButton>
            <LinkButton linkTo="/correlationreport" buttonText="𝛴"></LinkButton>
          </>
        )}
        <p className="inline">{user ? user : "no user"}</p>
      </nav>
    </div>
  );
};

export default Navbar;
