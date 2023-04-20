import React, { FunctionComponent } from "react";
import { useState } from "react";
import { Interface } from "readline";

const evaluateRating = (value: string, rating: boolean) => {
  if (rating === true) {
    return "Yes";
  } else return "No";
};

interface ratingProps {
  label: string;
}

const BooleanRating: FunctionComponent<ratingProps> = (props) => {
  const { label } = props;
  const [rating, setRating] = useState(false);

  return (
    // Change to a nice toggle pill component
    <div className="container dayrating mx-auto px-6">
      <div className="grid grid-cols-3 mx-auto p-2">
        <div className="border-1 mx-auto">{label}</div>
        <div className="border-1 mx-auto">
          <input
            type="checkbox"
            name="inputBool"
            id="inputBool"
            checked={rating}
            onChange={(e) => {
              setRating(e.target.checked);
            }}
          />
        </div>
        <div className="border-1 mx-auto">{evaluateRating(label, rating)}</div>
      </div>
    </div>
  );
};

export default BooleanRating;