import React, { FunctionComponent, FunctionComponentElement } from "react";
import { Interface } from "readline";
import { Link } from "react-router-dom";
import { buttonProps } from "../utilities/types";
import { buttonStyle } from "../utilities/buttonStyle";

const ActionButton: FunctionComponent<buttonProps> = (props) => {
  const { buttonText, onClick, styleTags, buttonType, buttonImagePath } = props;
  const typeStyle = buttonStyle(buttonType);
  return (
    <button className={`${typeStyle} ${styleTags}`} onClick={onClick}>
      {buttonImagePath && (
        <img
          src={buttonImagePath}
          className={`w-6 inline ${buttonText && "mr - 2"}`}
        />
      )}
      {buttonText}
    </button>
  );
};

export default ActionButton;
