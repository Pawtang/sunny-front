import React, { FunctionComponent } from "react";
import { useState } from "react";
import { Interface } from "readline";

const evaluateRating = (value: string, rating: boolean) => {
  if (rating === true) {
    return "Yes";
  } else return "No";
};

interface ratingProps {
  value: string;
}

const BooleanRating: FunctionComponent<ratingProps> = (props) => {
  const { value } = props;
  const [rating, setRating] = useState(false);

  return (
    <div className="container dayrating mx-auto px-6">
      <div className="grid grid-cols-3 mx-auto p-2">
        <div className="border-1 mx-auto">{value}</div>
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
        <div className="border-1 mx-auto">{evaluateRating(value, rating)}</div>
      </div>
    </div>
  );
};

export default BooleanRating;
