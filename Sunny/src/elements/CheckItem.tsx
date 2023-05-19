import { FunctionComponent } from "react";
import { checkProps } from "../utilities/types";

const CheckItem: FunctionComponent<checkProps> = (props) => {
  const { label, checked, onClick } = props;
  return (
    <>
      <input type="checkbox" className="mx-4 w-4 h-4" checked={checked} onClick={(e: React.MouseEvent<HTMLElement>) => {onClick(e)}}/>
      <label className="text-lg">
        {label}
      </label>
      <br />
    </>
  );
};

export default CheckItem;
