import React, { FunctionComponent } from "react";
// import { useState } from "react";
import BooleanRating from "../elements/BooleanRating";
import NumberRating from "../elements/NumberRating";
import RangeRating from "../elements/RangeRating";
import dayjs, { Dayjs } from "dayjs";
import LinkButton from "../elements/LinkButton";
import { Interface } from "readline";
const today = dayjs();

interface dayProps {
  // id: number;
}

const Day: FunctionComponent<dayProps> = (props) => {
  // const { id } = props;
  // const [dailyRating, setDailyRating] = useState(0);

  const time = today.format("h:mm A");

  // const daytimeGradient = (timestamp: Dayjs) => {
  //   switch (timestamp) {
  //     case (dawn) {
  //       return('bg-gradient-to-b from-sky-200 via-rose-300 to-indigo-900')
  //     }
  //     case (sunrise) {
  //       return('bg-gradient-to-b from-sky-200 via-rose-300 to-indigo-900')
  //     }
  //     case (noon) {
  //       return('bg-gradient-to-b from-sky-200 via-rose-300 to-indigo-900')
  //     }
  //     case (sunset) {
  //       return('bg-gradient-to-b from-sky-200 via-rose-300 to-indigo-900')
  //     }
  //     case (dusk) {
  //       return('bg-gradient-to-b from-sky-200 via-rose-300 to-indigo-900')
  //     }

  //   }
  // }

  return (
    <div
      className={`Day h-screen w-screen flex items-center bg-gradient-to-b from-sky-200 via-rose-300 to-indigo-900 `}
    >
      <div className="container mx-auto">
        <div className="journal max-w-lg mx-auto">
          <div className="container mx-auto p-4 mt-4 ">
            <div className="mx-auto">
              <h1 className="text-3xl font-bold underline center ">
                Hello, Ben
              </h1>
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
            {/* 
            Need to get values from child components, so need to pass a state setter from THIS scope 
            However, also need to map both the inputs and the states based on the trackers the user has set up
            
            */}
            <RangeRating value="Quality" maximum={4}></RangeRating>
            <RangeRating value="Sleep" maximum={12}></RangeRating>
            <BooleanRating value="Exercise"></BooleanRating>
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
        <div className="container submit mx-auto m-10 mx-auto flex justify-center max-w-sm">
          <LinkButton
            linkTo="/Month"
            buttonText="Back"
            styleTags="text-center"
          ></LinkButton>
          <LinkButton
            linkTo=""
            buttonText="Submit"
            styleTags="text-center"
          ></LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Day;
