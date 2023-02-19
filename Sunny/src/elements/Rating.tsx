import React, { FunctionComponent } from "react";
import { useState } from "react";
import { Interface } from "readline";

const evaluateRating = (value: string, type: string, rating?: number) => {
  if (type === "range" && value === "Quality") {
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
  } else if (type === "num") {
    if (value === "Sleep") {
      return `${rating} hours`;
    }
    return value;
  } else if (type === "bool") {
    if (rating === 0) {
      return "Yes";
    } else return "No";
  }
};

interface ratingProps {
  type: string;
  value: string;
}

const Rating: FunctionComponent<ratingProps> = (props) => {
  const { type, value } = props;
  const [rating, setRating] = useState(0);

  return (
    <div className="container dayrating mx-auto p-6">
      <h2>{rating}</h2>
      <div className="grid grid-cols-3 mx-auto border-2">
        <div className="border-1 mx-auto">{value}</div>
        <div className="border-1 mx-auto">
          {type === "range" && (
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
          )}
          {type === "bool" && (
            <input
              type="checkbox"
              name="inputBool"
              id="inputBool"
              value={rating}
              onChange={(e) => {
                setRating(e.target.valueAsNumber);
              }}
            />
          )}
          {type === "num" && (
            <input
              type="number"
              name="inputNum"
              id="inputNum"
              value={rating}
              onChange={(e) => {
                setRating(e.target.valueAsNumber);
              }}
              className="border-1"
            />
          )}
        </div>
        <div className="border-1 mx-auto">
          {evaluateRating(value, type, rating)}
        </div>
      </div>
    </div>
  );
};

export default Rating;
