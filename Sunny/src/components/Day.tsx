import React, { FunctionComponent } from "react";
// import { useState } from "react";
import BooleanRating from "../elements/BooleanRating";
import NumberRating from "../elements/NumberRating";
import RangeRating from "../elements/RangeRating";
import dayjs from "dayjs";
const today = dayjs();

const Day: FunctionComponent = () => {
  // const [dailyRating, setDailyRating] = useState(0);

  const time = today.format("h:mm A");

  return (
    <div className="Day h-screen">
      <div className="journal align-middle max-w-lg mx-auto">
        <div className="container mx-auto p-4 mt-4 ">
          <div className="mx-auto ">
            <h1 className="text-3xl font-bold underline center ">Hello, Ben</h1>
            <h2 className="center text-2xl">
              Today is <i>{today.format("MMMM DD, YYYY")}</i>
            </h2>
            <h2 className="center text-2xl">{time}</h2>
            <h2 className="center mt-2">
              <b> How was your day today?</b>
            </h2>
          </div>
        </div>
        <div className="rating-inputs container mx-auto mt-4 max-w-lg">
          <RangeRating value="Quality"></RangeRating>
          <BooleanRating value="Exercise"></BooleanRating>
          <NumberRating value="Sleep"></NumberRating>
          <NumberRating value="Miles Run"></NumberRating>
          <NumberRating value="Minutes Read"></NumberRating>
        </div>
        <div className="freetext center mt-4">
          <label htmlFor="journal-entry">
            <b>Anything you want to talk about today?</b>
          </label>
          <textarea
            className="mt-2 bg-white/50 peer block min-h-3  w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
            id="journal-entry"
            rows={3}
            placeholder="Tell me about your day"
          ></textarea>
        </div>
      </div>
      <div className="container submit mx-auto flex flex-col items-center m-10">
        <button className=" btn-submit">Submit</button>
      </div>
    </div>
  );
};

export default Day;
