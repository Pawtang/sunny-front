import dayjs, { Dayjs } from "dayjs";

const DummyMonthGen = () => {
  const randomInteger = (n: number) => {
    return Math.floor(Math.random() * n + 1);
  };

  const days = dayjs().daysInMonth();

  const month: {
    id: number;
    quality: number;
    sleep: number;
    date: string;
    notes: string;
  }[] = [];

  const prefixer = (i: number) => {
    if (i > 9) {
      return i.toString();
    } else return `0${i}`;
  };

  for (let i = 1; i <= days; i++) {
    month.push({
      id: i,
      quality: randomInteger(5),
      sleep: randomInteger(12),
      date: `${dayjs().format("YYYY")}${dayjs().format("MM")}${prefixer(i)}`,
      notes: `today's date is ${dayjs().format("MMMM DD, YYYY")}`,
    });
  }
  return month;
};

export default DummyMonthGen;
