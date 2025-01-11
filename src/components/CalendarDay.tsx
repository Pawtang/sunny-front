import React, { FunctionComponent } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { prefixer } from "../utilities/Prefixer";
import { EmojiLibrary } from "../utilities/EmojiLibrary";

interface calendarDayProps {
  dayIndex: number;
  dayRating?: number;
  notes?: string;
  selectedMonth: number;
  selectedYear: number;
}

const today = dayjs();

const CalendarEmoji = (dayRating: number | undefined) => {
  dayRating = dayRating ?? 0;
  // if (dayRating === 1) return "😭";
  if (dayRating === 1) return "/icons/faces/crying.png";
  else if (dayRating === 2) return "./icons/faces/sad.png";
  // else if (dayRating === 2) return "🙁";
  // else if (dayRating === 3) return "😐";
  else if (dayRating === 3) return "/icons/faces/neutral.png";
  // else if (dayRating === 4) return "😊";
  else if (dayRating === 4) return "/icons/faces/smiling.png";
  // else if (dayRating === 5) return "😄";
  else if (dayRating === 5) return "/icons/faces/beaming.png";
  else return "/icons/faces/pencil.png";
};

const CalendarDay: FunctionComponent<calendarDayProps> = (props) => {
  {
    const { dayIndex, dayRating, notes, selectedMonth, selectedYear } = props;
    const month = prefixer(selectedMonth);
    const year = selectedYear;
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
          className={`relative sm:w-16 sm:h-16 h-12 transition-all m-4 rounded ${conditionalStyling()} outline outline-1`}
        >
          <h1 className="absolute text-large left-1 ">{dayIndex}</h1>
          {/* <div className="h-6 bg-red-300"> */}
          <div className="flex justify-center mx-auto  h-full">
            {(compare(date) === "before" || compare(date) === "same") && (
              <img
                className="mx-auto mt-1 sm:mt-4 w-10  object-contain"
                src={CalendarEmoji(dayRating)}
                alt=""
              />
            )}
          </div>
          {/* <span className="text-xl">
              {compare(date) === "before" || compare(date) === "same"
                ? CalendarEmoji(dayRating)
                : ""}
            </span> */}
          {/* </div> */}
        </div>
      </Link>
    );
  }
};

export default CalendarDay;
