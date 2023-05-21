import { FunctionComponent } from "react";
import { useState } from "react";
// import { Interface } from "readline";
import { numberRatingProps } from "../utilities/types";

const NumberRating: FunctionComponent<numberRatingProps> = (props) => {
  const { label, value, onChange } = props;

  return (
    <div className="container dayrating mx-auto px-6">
      <div className="grid grid-cols-3 mx-auto p-2">
        <div className="border-1 mx-auto">{label}</div>
        <div className="border-1 mx-auto">
          <div className="w-24">
            <input
              type="number"
              name="inputNum"
              id="inputNum"
              value={value}
              onChange={(e) => {
                onChange(e.target.valueAsNumber);
              }}
              className="border-1 w-24 mx-auto num-input appearance-none background:white rounded-md m-0 text-center "
            />
          </div>
        </div>
        <div className="border-1 mx-auto">{label}</div>
      </div>
    </div>
  );
};

export default NumberRating;
