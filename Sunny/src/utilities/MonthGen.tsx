import dayjs, { Dayjs } from "dayjs";
import { IDay } from "./types";

const MonthGen = (days?: IDay[] | undefined) => {
  const dayqty = dayjs().daysInMonth();

  // Just an empty array, but in Typescript!
  const month: {
    id: number;
    quality?: number;
  }[] = [];

  for (let i = 1; i <= dayqty; i++) {
    month.push({
      id: i,
    });
  }

  if (days) {
    for (let i = 0; i < days.length; i++) {
      const daynumber = dayjs(days[i].date).date();
      // console.log(days[i]);
      month[daynumber].quality = days[i].quality;
    }
  }
  return month;
};

export default MonthGen;
