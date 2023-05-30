import { FunctionComponent } from "react";
import { useState } from "react";
// import { Interface } from "readline";
import { numberRatingProps } from "../utilities/types";

const NumberRating: FunctionComponent<numberRatingProps> = (props) => {
  const { index, label, value, onChange, increment, decrement } = props;

  return (
    <div className="container dayrating mx-auto px-6">
      <div className="grid grid-cols-3 mx-auto p-2">
        <div className="border-1 mx-auto">{label}</div>
        <div className="border-1 mx-auto">
          <div className="w-36 flex flex-row relative">
            <button
              data-action="decrement"
              className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              onClick={() => {
                decrement();
              }}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              name="inputNum"
              id={`input-number-${index}`}
              value={value}
              onChange={(e) => {
                onChange(e.target.valueAsNumber);
              }}
              // className="border-1 w-24 mx-auto num-input appearance-none background:white rounded-md m-0 text-center "
              className="appearance-none outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  "
            />
            <button
              data-action="increment"
              className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              onClick={() => {
                increment();
              }}
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div className="border-1 mx-auto">{label}</div>
      </div>
    </div>
  );
};

export default NumberRating;
