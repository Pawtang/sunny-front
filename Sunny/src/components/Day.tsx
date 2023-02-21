import React, { FunctionComponent } from "react";
// import { useState } from "react";
import BooleanRating from "../elements/BooleanRating";
import NumberRating from "../elements/NumberRating";
import RangeRating from "../elements/RangeRating";
import dayjs from "dayjs";
const today = dayjs();

const Day: FunctionComponent = () => {
  // const [dailyRating, setDailyRating] = useState(0);

  return (
    <div className="Day h-screen">
      <div className="container h-96 spacer"></div>
      <div className="journal max-w-lg mx-auto">
        <div className="container mx-auto p-4 mt-4 ">
          <div className="mx-auto ">
            <h1 className="text-3xl font-bold underline center ">
              Hello, Name
            </h1>
            <h2 className="center ">
              Today is <i>{today.format("MMMM DD, YYYY")}</i>
            </h2>
            <h2 className="center">
              <b> How was your day today?</b>
            </h2>
          </div>
          {/* <h2>{dailyRating}</h2> */}
        </div>
        <div className="rating-inputs container mx-auto mt-4 max-w-lg">
          <RangeRating value="Quality"></RangeRating>
          <BooleanRating value="Exercise"></BooleanRating>
          <NumberRating value="Sleep"></NumberRating>
          <NumberRating value="Drinks"></NumberRating>
          <NumberRating value="Miles Run"></NumberRating>
        </div>
      </div>
      <div className="container submit mx-auto flex flex-col items-center m-10">
        <button className=" btn-submit">Submit</button>
      </div>
    </div>
  );
};

export default Day;
