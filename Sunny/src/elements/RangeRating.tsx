import React, { FunctionComponent } from "react";

const evaluateRating = (label: string, rating: number) => {
  if (label === "Quality") {
    switch (rating) {
      case 1:
        return "Miserable day...";
      case 2:
        return "Bad day...";
      case 3:
        return "Decent day...";
      case 4:
        return "Good day!";
      case 5:
        return "Amazing day!";
      default:
        return "Rate your day!";
    }
  } else if (label === "Sleep") {
    return `${(rating).toString()} hours`;
  }
  
  return (rating).toString();
};

interface ratingProps {
  label: string;
  value: number;
  maximum: number;
  onChange: Function;
}

const RangeRating: FunctionComponent<ratingProps> = (props) => {
  const { label, value, maximum, onChange } = props;

  return (
    <div className="container dayrating mx-auto px-6">
      <div className="grid grid-cols-3 mx-auto p-2">
        <div className="border-1 mx-auto">{label}</div>
        <div className="border-1 mx-auto">
          <input
            type="range"
            name="day-quality"
            id="day-quality"
            min={1}
            max={maximum}
            value={value}
            onChange={(e) => {
              onChange(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="border-1 mx-auto">{evaluateRating(label, value)}</div>
      </div>
    </div>
  );
};

export default RangeRating;
