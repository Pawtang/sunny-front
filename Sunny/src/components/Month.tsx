import React, { FunctionComponent } from "react";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import CalendarDay from "./CalendarDay";
import ActionButton from "../elements/ActionButton";
import LinkButton from "../elements/LinkButton";
import MonthGen from "../utilities/MonthGen";
import BackgroundGradient from "../utilities/BackgroundGradient";
import { getMonth } from "../middleware/dayServiceCalls";
import { IDay } from "../utilities/types";
import MonthPicker from "./MonthPicker";
import generateGradient from "../utilities/PolynomialGradientsUtil";
import Modal from "./Modal";

const Month: FunctionComponent = () => {
  const today = dayjs();
  const monthCount = today.daysInMonth();
  const containerStyle = () => {
    return "grid-cols-7";
  };

  const [month, setMonth] = useState<IDay[] | undefined>([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const loadMonth = async () => {
    try {
      setMonth(MonthGen());
      await getMonth(today.month() + 1, today.year(), (days: IDay[]) => {
        setMonth(MonthGen(days));
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMonth();
    // console.log(time);
    // console.log(grad);
  }, []);

  // useEffect(() => {
  //   generateGradient(dayjs().second());
  // }, [dayjs().second()]);

  const [time, setTime] = useState(12);
  const grad = generateGradient(time);

  return (
    <div className={`mt-0`} style={{ background: grad }}>
      <div className="container nav z-50">
        <LinkButton linkTo="/" buttonText="Home" styleTags="mt-4"></LinkButton>
        <ActionButton
          onClick={() => {
            setModalVisibility(!modalVisibility);
          }}
          buttonText="📅"
          styleTags="z-50"
        ></ActionButton>
      </div>

      <div className="mx-4 inline">
        <input
          type="range"
          value={time}
          min={0}
          max={23}
          onChange={(e) => {
            setTime(e.target.valueAsNumber);
          }}
        />
      </div>

      <Modal
        onClick={() => {
          setModalVisibility(!modalVisibility);
        }}
        visible={modalVisibility}
        content={<MonthPicker onClick={() => {}}></MonthPicker>}
      ></Modal>

      <div className="container justify-content mx-auto mt-4 h-screen">
        <div className="container justify-content mx-auto max-w-lg">
          <h1 className="text-2xl mx-auto text-center">
            <b>Today is {today.format("MMMM DD, YYYY")}</b>
          </h1>
          <h1 className="text-xl text-center">
            {`There are ${monthCount} days in ${today.format("MMMM")}.`}
            <br />
            One box represents each day:
          </h1>
        </div>
        <div
          className={`mx-auto shadow-lg mt-10 container grid place-content-center rounded bg-white/50 p-4 max-w-2xl ${containerStyle()}`}
        >
          {month &&
            month.map((day) => (
              <div id={day.id.toString()} key={day.id}>
                <CalendarDay
                  dayIndex={day.id}
                  dayRating={day.dayRating}
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
