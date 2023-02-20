import React, { FunctionComponent } from "react";
import { useState } from "react";
import dayjs from "dayjs";

const Month: FunctionComponent = () => {
  const today = dayjs();
  const monthCount = today.daysInMonth();
  const yearCount = 365;
  const [isMonth, setIsMonth] = useState(true);
  const containerStyle = () => {
    return isMonth
      ? { gridTemplateColumns: "repeat(7, 50px)" }
      : { gridTemplateColumns: "repeat(31, 50px)" };
  };

  return (
    <div className="Month">
      <h1>
        Today is <i>{today.format("MMMM DD, YYYY")}</i>
      </h1>
      <p>
        There are {today.daysInMonth()} days in {today.format("MMMM")}
        .<br />
        One box represents each day:
      </p>
    </div>
  );
};

export default Month;
