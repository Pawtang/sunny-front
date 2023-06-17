import { FunctionComponent } from "react";
import { booleanToggleProps } from "../utilities/types";

const evaluateRating = (checked: number) => {
  if (checked === 1) {
    return "Yes";
  } else return "No";
};

const BooleanRating: FunctionComponent<booleanToggleProps> = (props) => {
  const { index, label, checked, onChange } = props;

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 mx-auto p-2">
        <div className="mx-auto">{label}</div>
        <div className="mx-auto">
          <label
            htmlFor={`input-bool-${index}`}
            className="relative inline-flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              name="inputBool"
              id={`input-bool-${index}`}
              checked={checked === 1}
              onChange={() => {
                onChange();
              }}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>
        {/* <div className="mx-auto">{evaluateRating(checked)}</div> */}
      </div>
    </div>
  );
};

export default BooleanRating;
