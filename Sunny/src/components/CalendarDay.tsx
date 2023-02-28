import React, { FunctionComponent } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { Interface } from "readline";
import { Link } from "react-router-dom";

interface calendarDayProps {
  dayIndex: number;
}
const CalendarDay: FunctionComponent<calendarDayProps> = (props) => {
  {
    const { dayIndex } = props;
    const divStyle = {
      backgroundColor: `rgb(${dayIndex * 0.6 + 50}, ${255 - dayIndex * 0.25}, ${
        255 - dayIndex * 0.5 + 30
      })`,
    };
    return (
      <Link to="/Day">
        <div
          className="dayBox w-12 h-12 m-2 rounded bg-white/60 hover:bg-white hover:drop-shadow-md "
          // style={divStyle}
        >
          <h1 className="text-large text-center">{dayIndex}</h1>
        </div>
      </Link>
    );
  }
};

export default CalendarDay;
