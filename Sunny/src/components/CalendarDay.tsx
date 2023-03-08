import React, { FunctionComponent } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { Interface } from "readline";
import { Link } from "react-router-dom";

interface calendarDayProps {
  dayIndex: number;
  quality: number;
}

// const color = (quality: number) => {
//   switch (quality) {
//     case 1:
//       return "bg-red-300";
//     case 2:
//       return "bg-orange-300";
//     case 3:
//       return "bg-amber-300";
//     case 4:
//       return "bg-lime-300";
//     case 5:
//       return "bg-green-400";
//   }
// };

const emojiLibrary = (quality: number) => {
  if (quality < 2) return "😭";
  else if (quality < 3) return "🙁";
  else if (quality < 4) return "😐";
  else if (quality < 5) return "😊";
  else return "😄";
};

const CalendarDay: FunctionComponent<calendarDayProps> = (props) => {
  {
    const { dayIndex, quality } = props;
    // const divStyle = {
    //   backgroundColor: `rgb(${dayIndex * 0.6 + 50}, ${255 - dayIndex * 0.25}, ${
    //     255 - dayIndex * 0.5 + 30
    //   })`,
    // };
    return (
      <Link to={`/Day?date=${"03042020"}`} state={{ quality: quality }}>
        <div
          className={`dayBox relative w-16 hover:-translate-y-2 h-16 hover:h-15 bg-white/80 hover:bg-white transition-all m-4 rounded hover:drop-shadow-md`}
          // style={divStyle}
        >
          <h1 className="text-large text-center">{dayIndex + 1}</h1>
          {/* <h2 className="text-medium text-center">{quality}</h2> */}
          <div className={`absolute w-10 h-8 bottom-1 right-1 rounded-full}`}>
            <span className="text-xl">{emojiLibrary(quality)}</span>
          </div>
        </div>
      </Link>
    );
  }
};

export default CalendarDay;
