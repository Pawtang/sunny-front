import React, { FunctionComponent } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import CalendarDay from "./CalendarDay";
import ActionButton from "../elements/ActionButton";
import LinkButton from "../elements/LinkButton";

const Month: FunctionComponent = () => {
  const today = dayjs();
  const monthCount = today.daysInMonth();
  const yearCount = 365;
  const [isMonth, setIsMonth] = useState(true);
  const containerStyle = () => {
    return isMonth ? "grid-cols-7 max-w-sm" : "grid-cols-16 max-w-xxl";
  };

  return (
    <div className="mt-0 h-screen bg-gradient-to-b from-sky-400 to-rose-200">
      <div className="container nav">
        <ActionButton
          // stateSetter={setIsMonth}
          onClick={() => (isMonth ? setIsMonth(false) : setIsMonth(true))}
          buttonText={isMonth ? "Switch to Year" : "Switch to Month"}
          styleTags="mt-4"
        ></ActionButton>
        <LinkButton linkTo="/" buttonText="Home"></LinkButton>
      </div>

      <div className="container justify-content mx-auto mt-24">
        <div className="container justify-content mx-auto max-w-lg">
          <h1 className="text-2xl mx-auto text-center">
            <b>Today is {today.format("MMMM DD, YYYY")}</b>
          </h1>
          <h1 className="text-xl text-center">
            {isMonth
              ? `There are ${monthCount} days in ${today.format("MMMM")}`
              : `There are 365 days in most years`}
            .<br />
            One box represents each day:
          </h1>
        </div>
        <div
          className={`mx-auto container grid place-content-center ${containerStyle()}`}
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
