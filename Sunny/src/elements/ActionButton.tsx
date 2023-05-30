import React, { FunctionComponent, FunctionComponentElement } from "react";
import { Interface } from "readline";
import { Link } from "react-router-dom";
import { buttonProps } from "../utilities/types";
import { buttonStyle } from "../utilities/buttonStyle";

const ActionButton: FunctionComponent<buttonProps> = (props) => {
  const { buttonText, onClick, styleTags, buttonType } = props;
  const typeStyle = buttonStyle(buttonType);
  return (
    <button className={`${typeStyle} ${styleTags}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default ActionButton;
