import { FunctionComponent } from "react";
import { checkProps } from "../utilities/types";

const CheckItem: FunctionComponent<checkProps> = (props) => {
  const { name, id, label } = props;
  return (
    <>
      <input type="checkbox" name={name} id={id} className="mx-4 w-4 h-4 " />
      <label className="text-lg" htmlFor={name}>
        {label}
      </label>
      <br />
    </>
  );
};

export default CheckItem;
