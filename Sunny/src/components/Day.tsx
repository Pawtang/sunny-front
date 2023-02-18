import React from "react";
import { useState } from "react";
import Rating from "../elements/Rating";

const Day = () => {
  const [dailyRating, setDailyRating] = useState(0);

  return (
    <div className="Day border-2">
      <div className="container mx-auto p-4 mt-4 border-2">
        <h1 className="text-3xl font-bold underline">Hello Name</h1>
        <h2>Today is Month Day, Year</h2>
        <h2>How was your day today?</h2>
        <h2>{dailyRating}</h2>
      </div>

      <Rating type="range" value="quality"></Rating>
      <Rating type="bool" value="exercise"></Rating>
      <Rating type="num" value="sleep"></Rating>
    </div>
  );
};

export default Day;
