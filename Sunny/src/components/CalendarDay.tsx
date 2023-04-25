import React, { FunctionComponent } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { Interface } from "readline";
import { Link } from "react-router-dom";
import { prefixer } from "../utilities/Prefixer";

interface calendarDayProps {
  dayIndex: number;
  dayRating?: number;
  notes?: string;
}

const today = dayjs();

const CalendarEmoji = (dayRating: number | undefined) => {
  dayRating = dayRating ?? 0;
  if (dayRating === 1) return "😭";
  else if (dayRating === 2) return "🙁";
  else if (dayRating === 3) return "😐";
  else if (dayRating === 4) return "😊";
  else if (dayRating === 5) return "😄";
  else return "✏️";
};

const CalendarDay: FunctionComponent<calendarDayProps> = (props) => {
  {
    const { dayIndex, dayRating, notes } = props;
    const month = dayjs().format("MM");
    const year = dayjs().year();
    const day = prefixer(dayIndex);
    console
      .log
      // dayjs.isSame()
      // dayjs(`${today.year()}-${today.month()}-${today.date()}`, "YYYY-MM-DD"),
      // dayjs(`${year}-${month}-${day}`, "YYYY-MM-DD")
      ();
    const outlineDetermine = () => {
      if (dayjs(`${year}-${month}-${day}`).isSame(dayjs(), "day")) {
        return "outline outline-2 outline-blue-400 outline-offset-4";
      }
    };
    return (
      <Link to={`/Day?date=${year}${month}${day}`}>
        <div
          className={`dayBox relative w-16 hover:-translate-y-2 h-16 hover:h-15 bg-white/80 hover:bg-white transition-all m-4 rounded hover:drop-shadow-md ${outlineDetermine()}`}
        >
          <h1 className="text-large text-center">{dayIndex}</h1>
          {/* <h2 className="text-medium text-center">{dayRating}</h2> */}
          <div className={`absolute w-10 h-8 bottom-1 right-1 rounded-full}`}>
            <span className="text-xl">{CalendarEmoji(dayRating)}</span>
          </div>
        </div>
      </Link>
    );
  }
};

export default CalendarDay;
