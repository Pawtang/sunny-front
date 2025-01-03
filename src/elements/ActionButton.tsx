import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { buttonProps } from "../utilities/types";
import { buttonStyle } from "../utilities/buttonStyle";

const ActionButton: FunctionComponent<buttonProps> = (props) => {
  const {
    buttonText,
    onClick,
    styleTags,
    buttonType,
    buttonImagePath,
    imageStyle,
  } = props;

  const typeStyle = buttonStyle(buttonType);
  return (
    <button className={`${typeStyle} ${styleTags}`} onClick={onClick}>
      {buttonImagePath && (
        <img
          src={buttonImagePath}
          className={`w-5 inline ${buttonText ? "mr-2" : ""} ${
            imageStyle || ""
          }`}
          alt=""
        />
      )}
      {buttonText}
    </button>
  );
};

export default ActionButton;
