import React, { FunctionComponent } from "react";
import { useState } from "react";
import { Interface } from "readline";

const evaluateRating = (value: string, rating: number) => {
  switch (rating) {
    case 0:
      return "Miserable day...";
    case 1:
      return "Bad day...";
    case 2:
      return "Decent day...";
    case 3:
      return "Good day!";
    case 4:
      return "Amazing day!";
    default:
      return "Rate your day!";
  }
};

interface ratingProps {
  value: string;
}

const RangeRating: FunctionComponent<ratingProps> = (props) => {
  const { value } = props;
  const [rating, setRating] = useState(0);

  return (
    <div className="container dayrating mx-auto px-6">
      <div className="grid grid-cols-3 mx-auto p-2">
        <div className="border-1 mx-auto">{value}</div>
        <div className="border-1 mx-auto">
          <input
            type="range"
            name="day-quality"
            id="day-quality"
            min={0}
            max={4}
            value={rating}
            onChange={(e) => {
              setRating(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="border-1 mx-auto">{evaluateRating(value, rating)}</div>
      </div>
    </div>
  );
};

export default RangeRating;
