import React, { useContext, FunctionComponent } from "react";
import { useState } from "react";
// import dayjs from "dayjs";
// import { Interface } from "readline";
import { Link } from "react-router-dom";
import LinkButton from "../elements/LinkButton";
import ActionButton from "../elements/ActionButton";
import { UserContext } from "../contexts/userContext";

const Navbar: FunctionComponent = () => {
  const { token, user, clearTokenAndUser } = useContext(UserContext);
  return (
    <div className="absolute p-4 h-100 w-full flex">
      <nav className="flex w-full mx-4 md:mx-auto min-w-300 p-2 rounded-md bg-white/20">
        <LinkButton
          linkTo="/"
          buttonText=""
          buttonImagePath="/icons/home.png"
          styleTags="h-12"
        ></LinkButton>

        {user && (
          <>
            <LinkButton
              linkTo="/setup"
              buttonText=""
              buttonImagePath="/icons/gear.png"
              styleTags="h-12"
            ></LinkButton>
            <LinkButton
              linkTo="/correlationreport"
              buttonText=""
              buttonImagePath="/icons/chart.png"
              styleTags="h-12"
            ></LinkButton>
            <ActionButton
              buttonText="Log Out"
              onClick={(e: Event) => {
                e.preventDefault();
                clearTokenAndUser();
              }}
              styleTags="h-12 ml-auto w-30"
            ></ActionButton>
          </>
        )}
      </nav>
      {/* <p className="">{user?.name || "no user"}</p> */}
    </div>
  );
};

export default Navbar;
