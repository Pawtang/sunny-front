import React, { FunctionComponent } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import CalendarDay from "./CalendarDay";

const Month: FunctionComponent = () => {
  const today = dayjs();
  const monthCount = today.daysInMonth();
  const yearCount = 365;
  const [isMonth, setIsMonth] = useState(true);
  const containerStyle = () => {
    return isMonth ? "grid-cols-7" : "grid-cols-16";
  };

  return (
    <div className="Month h-screen">
      <div className="container mx-auto mt-24">
        <h1 className="text-2xl">Today is {today.format("MMMM DD, YYYY")}</h1>

        <h1 className="text-xl">
          There are {today.daysInMonth()} days in {today.format("MMMM")}
          .<br />
          One box represents each day:
        </h1>
        <div
          className={` container grid place-content-center ${containerStyle()}`}
        >
          {/* <div className={`dayContainer grid grid-cols-7`}> */}
          {[...Array(isMonth ? monthCount : 365)].map((value, index) => (
            <div id={(index + 1).toString()} key={index}>
              <CalendarDay dayIndex={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Month;
