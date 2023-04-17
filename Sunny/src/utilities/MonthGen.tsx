import dayjs, { Dayjs } from "dayjs";
import { IDay } from "./types";

const MonthGen = (days?: IDay[] | undefined) => {
  // const randomInteger = (n: number) => {
  //   return Math.floor(Math.random() * n + 1);
  // };

  const dayqty = dayjs().daysInMonth();

  const month: {
    id: number;
  }[] = [];

  for (let i = 1; i <= dayqty; i++) {
    month.push({
      id: i,
    });
  }
  return month;
};

export default MonthGen;
