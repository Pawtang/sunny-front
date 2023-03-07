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
  return `linear-gradient(
    rgb(${time * 5},${time * 5},${time * 5}),
    rgb(${time * 6},${time * 6}),${time * 6}))`;
};

export default BackgroundGradient;
