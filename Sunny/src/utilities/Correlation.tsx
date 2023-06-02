import { dayObject } from "./types";

export const Correlation = (days: Array<dayObject>) => {
  const ratingArray = [];
  const attributeArray = [];
  days.map((day) => {
    day.dayRating && ratingArray.push(day.dayRating);
    day.attributes &&
      day.attributes.map((attribute) => {
        const name = attribute.name;
        const type = attribute.type;
        const value = attribute.value && attribute.value;
      });
  });

  return "";
};
