import React, { FunctionComponent } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { Interface } from "readline";
import { Link } from "react-router-dom";
import { prefixer } from "../utilities/Prefixer";

interface calendarDayProps {
  dayIndex: number;
  quality?: number;
  notes?: string;
}

const emojiLibrary = (quality: number | undefined) => {
  quality = quality ?? 10;
  if (quality < 2) return "😭";
  else if (quality < 3) return "🙁";
  else if (quality < 4) return "😐";
  else if (quality < 5) return "😊";
  else if (quality === 5) return "😊";
  else return "✏️";
};

const CalendarDay: FunctionComponent<calendarDayProps> = (props) => {
  {
    const { dayIndex, quality, notes } = props;
    const month = dayjs().format("MM");
    const year = dayjs().year();
    const day = prefixer(dayIndex);
    return (
      <Link to={`/Day?date=${year}${month}${day}`}>
        <div
          className={`dayBox relative w-16 hover:-translate-y-2 h-16 hover:h-15 bg-white/80 hover:bg-white transition-all m-4 rounded hover:drop-shadow-md`}
        >
          <h1 className="text-large text-center">{dayIndex}</h1>
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