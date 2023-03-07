// const BackgroundGradient = (time: number) => {
//   if (time < 6) {
//     return " bg-gradient-to-b from-sky-200 via-rose-200 to-indigo-400";
//   } else if (time < 10) {
//     return "bg-gradient-to-b from-violet-200 via-rose-200 to-orange-300";
//   } else if (time < 14) {
//     return "bg-gradient-to-b from-blue-300 to-light-blue-300";
//   } else if (time < 20) {
//     return "bg-gradient-to-b from-pink-300 via-orange-300 to-yellow-200";
//   } else return "bg-gradient-to-b from-blue-300 to-violet-500";
// };

const BackgroundGradient = (time: number) => {
  const divisor: number = 4;
  return `linear-gradient(
    rgb(${
      (-6.253 * time ** 3 + 49.964 * time ** 2 - 114.36 * time + 265) / divisor
    },${
    (-6.3426 * time ** 3 + 57.829 * time ** 2 - 168.26 * time + 353.33) /
    divisor
  },
  ${
    (-4.1574 * time ** 3 + 35.492 * time ** 2 - 93.636 * time + 320.67) /
    divisor
  }),
    rgb(100,100,100)`;
};

export default BackgroundGradient;
