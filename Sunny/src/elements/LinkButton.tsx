import React, { FunctionComponent, FunctionComponentElement } from "react";
import { Interface } from "readline";
import { Link } from "react-router-dom";

interface buttonProps {
  buttonText: string;
  linkTo: string;
  styleTags?: string;
}

const LinkButton: FunctionComponent<buttonProps> = (props) => {
  const { buttonText, linkTo, styleTags } = props;
  return (
    <Link to={linkTo}>
      <button
        className={`bg-white/70 transition-all hover:bg-white hover:drop-shadow-md active:outline-double text-black font-bold py-2 px-4 mx-2 rounded ${styleTags}`}
      >
        {buttonText}
      </button>
    </Link>
  );
};

export default LinkButton;
