import { FunctionComponent } from "react";
import { confirmActionModalProps } from "../utilities/types";
import ActionButton from "../elements/ActionButton";
import { Fragment } from "react";

const ConfirmActionModal: FunctionComponent<confirmActionModalProps> = (
  props
) => {
  const { onClickConfirm, onClickCancel, modalText, buttonText } = props;
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
          buttonText={buttonText}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            onClickConfirm(e);
          }}
          styleTags="bg-red-400 hover:bg-red-300"
        />
        <ActionButton
          buttonText="Cancel"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            onClickCancel(e);
          }}
          styleTags=""
        />
      </div>
    </div>
  );
};

export default ConfirmActionModal;
