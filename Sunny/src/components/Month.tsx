import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import CalendarDay from "./CalendarDay";
import ActionButton from "../elements/ActionButton";
import LinkButton from "../elements/LinkButton";
import DummyMonthGen from "../utilities/DummyMonthGen";
import BackgroundGradient from "../utilities/BackgroundGradient";

interface IDay {
  id: number;
  quality: number;
  sleep: number;
  date: Dayjs;
  notes: string;
}

const Month: FunctionComponent = () => {
  const today = dayjs();
  const monthCount = today.daysInMonth();
  const yearCount = 365;
  const [isMonth, setIsMonth] = useState(true);
  const containerStyle = () => {
    return isMonth ? "grid-cols-7" : "grid-cols-16 ";
  };

  const [time, setTime] = useState(12);
  const [month, setMonth] = useState<IDay[] | undefined>([]);

  // Useffect to run DummyMonthGen only on mount
  // let month: { id: number; quality: number; sleep: number; date: Dayjs }[] = [];

  useEffect(() => {
    setMonth(DummyMonthGen());
  }, []);

  return (
    <div className={`mt-0`} style={{ background: BackgroundGradient(time) }}>
      <div className="container nav">
        {/* <ActionButton
          // stateSetter={setIsMonth}
          onClick={() => (isMonth ? setIsMonth(false) : setIsMonth(true))}
          buttonText={isMonth ? "Switch to Year" : "Switch to Month"}
          styleTags="mt-4"
        ></ActionButton> */}
        <LinkButton linkTo="/" buttonText="Home" styleTags="mt-4"></LinkButton>
        <div className="mx-4 inline">
          <input
            type="range"
            value={time}
            min={0}
            max={24}
            onChange={(e) => {
              setTime(e.target.valueAsNumber);
            }}
          />
          <p className="text-white inline mx-4 bold">{time}</p>
          {/* <p className="text-black inline mx-4 bold">
            {BackgroundGradient(time)}
          </p> */}
        </div>
      </div>

      <div className="container justify-content mx-auto mt-4 h-screen">
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
          className={`mx-auto shadow-lg mt-2 container grid place-content-center rounded bg-white/50 p-4 max-w-2xl ${containerStyle()}`}
        >
          {month &&
            month.map((day) => (
              <div id={day.id.toString()} key={day.id}>
                <CalendarDay
                  dayIndex={day.id}
                  quality={day.quality}
                  notes={day.notes}
                ></CalendarDay>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Month;
