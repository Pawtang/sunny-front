import { FunctionComponent } from "react";
import { modalProps } from "../utilities/types";

const Modal: FunctionComponent<modalProps> = (props) => {
  const { id, visible, onClick, content } = props;
  if (!visible) return null;
  return (
    <div
      id={id}
      onClick={(e) => {
        if ((e.target as HTMLInputElement).id === id) {
          onClick(e);
        }
      }}
      className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded w-100 ">{content}</div>
    </div>
  );
};

export default Modal;
