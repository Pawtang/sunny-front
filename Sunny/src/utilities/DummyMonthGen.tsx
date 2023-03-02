import dayjs, { Dayjs } from "dayjs";

const DummyMonthGen = () => {
  const randomInteger = (n: number) => {
    return Math.floor(Math.random() * n + 1);
  };

  const days = dayjs().daysInMonth();

  const month: { id: number; quality: number; sleep: number; date: Dayjs }[] =
    [];

  for (let i = 0; i < days; i++) {
    month.push({
      id: i,
      quality: randomInteger(5),
      sleep: randomInteger(12),
      date: dayjs(`${dayjs().year()}-${dayjs().month()}-${i + 1}`),
    });
  }
  return month;
};

export default DummyMonthGen;
