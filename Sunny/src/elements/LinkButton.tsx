import React, { FunctionComponent, FunctionComponentElement } from "react";
import { Interface } from "readline";
import { Link } from "react-router-dom";
import { linkButtonProps } from "../utilities/types";
import { buttonStyle } from "../utilities/buttonStyle";

const LinkButton: FunctionComponent<linkButtonProps> = (props) => {
  const { buttonText, linkTo, styleTags, buttonType } = props;
  const typeStyle = buttonStyle(buttonType);
  return (
    <Link to={linkTo}>
      <button className={`${typeStyle} ${styleTags}`}>{buttonText}</button>
    </Link>
  );
};

export default LinkButton;
