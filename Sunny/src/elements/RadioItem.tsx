import { FunctionComponent } from "react";
import { radioProps } from "../utilities/types";

const RadioItem: FunctionComponent<radioProps> = (props) => {
  const { name, value, label, onChange, attributeType } = props;
  return (
    <>
      <label className="text-xl">
        <input
          type="radio"
          name={name}
          value={value}
          checked={attributeType === "number"}
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
