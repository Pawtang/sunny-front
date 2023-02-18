import React from "react";
import { useState } from "react";
import { Interface } from "readline";

const evaluateRating = (value: string, type: string, rating: number) => {
  if ((value = "quality")) {
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
  }
};

interface ratingProps {
  type: string;
  value: string;
}

const Rating = (props: object) => {
  const { type, value } = props;
  const [rating, setRating] = useState(0);
  return (
    <div className="container dayrating mx-auto p-4">
      <div className="grid grid-cols-3 mx-auto border-2">
        <div className="border-1 mx-auto">Overall</div>
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
        <div className="border-1 mx-auto">
          {evaluateRating(value, type, rating)}
        </div>
      </div>
    </div>
  );
};

export default Rating;
