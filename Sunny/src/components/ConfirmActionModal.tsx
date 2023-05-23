import { FunctionComponent } from "react";
import { confirmActionModalProps } from "../utilities/types";
import ActionButton from "../elements/ActionButton";
import { Fragment } from "react";

const ConfirmActionModal: FunctionComponent<confirmActionModalProps> = (
  props
) => {
  const { onClickConfirm, onClickCancel, modalText } = props;
  return (
    <div className="p-4">
      <h2 className="text-xl">
        <b>Confirm</b>
      </h2>
      <div className="text-center flex my-4 p-4">
        <p>{modalText}</p>
      </div>
      <div className="flex justify-center">
        <ActionButton
          buttonText="Confirm"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            onClickConfirm(e);
          }}
          styleTags="outline outline-2 outline-black-400 outline-offset-2 text-black-400 hover:outline-offset-0 hover:outline-green-400 transition-all "
        />
        <ActionButton
          buttonText="Cancel"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            onClickCancel(e);
          }}
          styleTags="outline outline-2 outline-black-400 outline-offset-2 text-black-400 hover:outline-offset-0 hover:outline-red-400 transition-all  "
        />
      </div>
    </div>
  );
};

export default ConfirmActionModal;
