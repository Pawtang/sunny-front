import dayjs, { Dayjs } from "dayjs";
import { IDay } from "./types";

const MonthGen = (month: number, year: number, days?: IDay[] | undefined) => {
  const dateString = `${year}-${month}-${1}`;
  const dayqty = dayjs(dateString).daysInMonth(); // fix this
  const firstOfMonth = new Date(year, month - 1, 1);
  const padding = firstOfMonth.getDay();

  const monthArray: {
    id: number;
    dayRating?: number;
  }[] = [];

  for (let i = 1; i <= dayqty; i++) {
    monthArray.push({
      id: i,
    });
  }

  if (days) {
    for (let i = 1; i <= days.length; i++) {
      // -1 to deal with indexing differences
      const daynumber = dayjs(days[i - 1].date).date() - 1;
      monthArray[daynumber].dayRating = days[i - 1].dayRating;
    }
  }
  const paddingArray = Array(padding).fill({ id: 0 });
  const paddedMonth = paddingArray.concat(monthArray);
  console.log(paddedMonth);
  return paddedMonth;
};

export default MonthGen;
