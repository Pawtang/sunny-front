import React, { FunctionComponent, FunctionComponentElement } from "react";
import { Interface } from "readline";
import { Link } from "react-router-dom";

interface buttonProps {
  buttonText: string;
  onClick: any;
  styleTags?: string;
  // stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActionButton: FunctionComponent<buttonProps> = (props) => {
  const { buttonText, onClick, styleTags } = props;
  return (
    <button
      className={`bg-white/70 transition-all hover:drop-shadow-md hover:bg-white active:outline-double text-black font-bold py-2 px-4 mx-2 rounded ${styleTags}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default ActionButton;
