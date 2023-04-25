import dayjs, { Dayjs } from "dayjs";
import { IDay } from "./types";

const MonthGen = (days?: IDay[] | undefined) => {
  const dayqty = dayjs().daysInMonth();

  // Just an empty array, but in Typescript!
  const month: {
    id: number;
    dayRating?: number;
  }[] = [];

  for (let i = 1; i <= dayqty; i++) {
    month.push({
      id: i,
    });
  }

  if (days) {
    for (let i = 1; i <= days.length; i++) {
      // -1 to deal with indexing differences
      const daynumber = dayjs(days[i - 1].date).date() - 1;
      month[daynumber].dayRating = days[i - 1].dayRating;
    }
  }
  return month;
};

export default MonthGen;
