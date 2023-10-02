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
    <div className="absolute p-4 h-100 block">
      <nav>
        <LinkButton
          linkTo="/"
          buttonText=""
          buttonImagePath="/icons/home.png"
        ></LinkButton>

        {user && (
          <>
            <LinkButton
              linkTo="/setup"
              buttonText=""
              buttonImagePath="/icons/gear.png"
            ></LinkButton>
            <LinkButton
              linkTo="/correlationreport"
              buttonText=""
              buttonImagePath="/icons/chart.png"
            ></LinkButton>
          </>
        )}

        <p className="inline">{user ? user : "no user"}</p>
      </nav>
    </div>
  );
};

export default Navbar;
