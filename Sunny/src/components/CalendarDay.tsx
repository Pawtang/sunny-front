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
    const date = `${year}-${month}-${day}`;

    const compare = (date: string) => {
      if (dayjs(date).isSame(dayjs(), "day")) return "same";
      else if (dayjs(date).isAfter(dayjs(), "day")) return "after";
      else return "before";
    };

    const conditionalStyling = () => {
      if (compare(date) === "same") {
        return "outline outline-2 outline-blue-400 outline-offset-4 bg-white/80 hover:bg-white hover:h-15 hover:-translate-y-2 hover:drop-shadow-md";
      } else if (compare(date) === "after") {
        return "bg-gray-200 cursor-default";
      } else
        return "bg-white/80 hover:bg-white hover:h-15 hover:-translate-y-2 hover:drop-shadow-md";
    };

    return (
      <Link
        to={
          compare(date) === "before" || compare(date) === "same"
            ? `/Day?date=${date}`
            : ""
        }
      >
        <div
          className={` relative w-16  h-16 transition-all m-4 rounded  ${conditionalStyling()} outline outline-1`}
        >
          <h1 className="text-large text-center">{dayIndex}</h1>
          {/* <h2 className="text-medium text-center">{dayRating}</h2> */}
          <div className={`absolute w-10 h-8 bottom-1 right-1 rounded-full}`}>
            <span className="text-xl">
              {compare(date) === "before" || compare(date) === "same"
                ? CalendarEmoji(dayRating)
                : ""}
            </span>
          </div>
        </div>
      </Link>
    );
  }
};

export default CalendarDay;
