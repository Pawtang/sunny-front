import { attributeObject, dayObject } from "./types";
import { attributeLibrary } from "./types";
import { scores } from "./types";

const pearsonCorrelation = (x: Array<number>, y: Array<number>) => {
  if (x.length < 1 || y.length < 1) return "empty arrays!";
  if (x.length !== y.length) return "must be equal lengths!";
  const xSum = x.reduce((sum, score) => sum + score);
  const ySum = y.reduce((sum, score) => sum + score);
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
  return (A / Math.sqrt(B * C)).toFixed(2);
};

export const Correlation = (
  days: Array<dayObject>,
  attributes: Array<attributeObject>
) => {
  console.log(days, attributes);

  // Create a library to store attribute values for each attribute name
  const attributeLibrary: Record<string, number[]> = {};
  const dayRatings: number[] = [];

  // Initialize attribute library with empty arrays for each attribute name
  attributes.forEach((attr) => {
    if (attr.name) {
      attributeLibrary[attr.name] = [];
    }
  });

  // Populate dayRatings and attributeLibrary
  days.forEach((day) => {
    if (day.dayRating !== undefined) {
      dayRatings.push(day.dayRating);
    }

    attributes.forEach((attr) => {
      if (attr.name) {
        // Check if the day has the attribute and add the value or default to 0
        const attributeValue =
          day.attributes?.find((dayAttr) => dayAttr.name === attr.name)
            ?.value || 0;
        attributeLibrary[attr.name].push(attributeValue);
      }
    });
  });

  // Function to calculate correlations
  const calculateCorrelations = (library: Record<string, number[]>) => {
    const results: Array<{ name: string; score: string }> = [];
    for (const [name, attrValues] of Object.entries(library)) {
      // Calculate the correlation score for each attribute
      const score = pearsonCorrelation(attrValues, dayRatings);
      results.push({ name, score });
    }
    return results;
  };

  return calculateCorrelations(attributeLibrary);
};
// export const Correlation = (
//   days: Array<dayObject>,
//   attributes: Array<attributeObject>
// ) => {
//   console.log(days, attributes);
//   const attributeLibrary: attributeLibrary = {};
//   const dayRatings: Array<number> = [];

//   attributes.forEach((attr) => {
//     if (attr.name) {
//       attributeLibrary[attr.name] = [];
//     }
//   });

//   days.forEach((day) => {
//     day.dayRating && dayRatings.push(day.dayRating);
//     day.attributes &&
//       day.attributes?.forEach((attr) => {
//         if (attr.name) {
//           if (!attributeLibrary[attr.name]) {
//             attributeLibrary[attr.name] = [];
//           }
//           attributeLibrary[attr.name].push(attr.value || 0);
//         }
//       });
//   });

//   console.log(attributeLibrary, dayRatings);

//   const calculateCorrelations = (library: attributeLibrary) => {
//     const results: scores[] = [];
//     for (const [name, attr] of Object.entries(library)) {
//       const attrArray = attr;
//       results.push({
//         name: name,
//         score: pearsonCorrelation(attrArray, dayRatings),
//       });
//     }
//     return results;
//   };

//   return calculateCorrelations(attributeLibrary);
// };

// Assumptions:
// 1. Attributes will always have a numeric score
// 2. The default score for an attribute will be 0
// 3. If an attribute is added at a later time than initial setup, all previous days will be populated with a default score for that attribute such that assumption 1 remains true
// 4. If an attribute is "deleted" from the front-end, it is archived in the back-end by changing the property "active" from true to false. It can be reinstated at a later date.
