import { FunctionComponent } from "react";
import { radioProps } from "../utilities/types";

const RadioItem: FunctionComponent<radioProps> = (props) => {
  const { name, value, label, onChange, isChecked } = props;
  return (
    <>
      <label className="text-md">
        <input
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={(e) => {
            onChange(e);
          }}
          className="mx-2 w-4 h-4 "
        />
        {label}
      </label>
    </>
  );
};

export default RadioItem;
