export const prefixer = (i: number) => {
  if (i > 9) {
    return i.toString();
  } else return `0${i}`;
};
