import { attributeObject, dayObject } from "./types";
import { useEffect, useState } from "react";

export const Correlation = (days: Array<dayObject>) => {
  const dayRatingArray = days.map((day, index) => {
    return day.dayRating;
  });

  const attributeArray = days.map((day, index) => {
    return day.attributes
      ? day.attributes.map((attribute, attrIndex) => {
          return attribute.value;
        })
      : //   return {
        //     day: day._id,
        //     name: attribute.name,
        //     type: attribute.type,
        //     value: attribute.value,
        //   };
        // })
        [];
  });

  const pearsonCorrelation = (x: Array<number>, y: Array<number>) => {
    // if (x.length !== y.length) throw new Error("unequal lengths");
    if (x.length !== y.length) return "must be equal lengths!";
    const xSum = x.reduce((sum, value) => sum + value);
    const ySum = y.reduce((sum, value) => sum + value);
    const xMean = xSum / x.length;
    const yMean = ySum / y.length;
    let A = 0;
    let B = 0;
    let C = 0;
    for (let i = 0; i < x.length; i++) {
      const xdiff = x[i] - xMean;
      const ydiff = y[i] - yMean;
      A += xdiff * ydiff;
      B += xdiff ** 2;
      C += ydiff ** 2;
    }
    return A / Math.sqrt(B * C);
  };

  useEffect(() => {
    console.log("days,", days);
    console.log(dayRatingArray);
    console.log(attributeArray);
    console.log(
      "pearson",
      pearsonCorrelation([2, 3, 1, 0, 5, 5, 5, 5], [1, 7, 7, 4, 5, 5, 5, 6])
    );
  }, [dayRatingArray, attributeArray]);

  // console.log(days);

  return "some score for each";
};
