import React, { FunctionComponent } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { Interface } from "readline";

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
    return <div className="dayBox w-6 h-6 bg-black m-2" style={divStyle}></div>;
  }
};

export default CalendarDay;
