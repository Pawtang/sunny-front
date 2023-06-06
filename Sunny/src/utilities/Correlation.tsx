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


const pearsonCorrelation = (x: Array<number>, y: Array<number>)

  useEffect(() => {
    console.log("days,", days);
    console.log(dayRatingArray);
    console.log(attributeArray);
    // writeArrays();
    // writeArrays();
  }, [dayRatingArray, attributeArray]);

  // console.log(days);

  return "some score for each";
};
