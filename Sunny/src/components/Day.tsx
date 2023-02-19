import React, { FunctionComponent } from "react";
import { useState } from "react";
import Rating from "../elements/Rating";

const Day: FunctionComponent = () => {
  // const [dailyRating, setDailyRating] = useState(0);

  return (
    <div className="Day border-2">
      <div className="container mx-auto p-4 mt-4 border-2">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold underline">Hello Name</h1>
          <h2>Today is Month Day, Year</h2>
          <h2>How was your day today?</h2>
        </div>
        {/* <h2>{dailyRating}</h2> */}
      </div>
      <div className="container mx-auto mt-4 max-w-md border-2">
        <Rating type="range" value="Quality"></Rating>
        <Rating type="bool" value="Exercise"></Rating>
        <Rating type="num" value="Sleep"></Rating>
      </div>
    </div>
  );
};

export default Day;
