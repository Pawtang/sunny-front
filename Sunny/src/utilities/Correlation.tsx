import { attributeObject, dayObject } from "./types";

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
  return (A / Math.sqrt(B * C)).toFixed(3);
};

export const Correlation = (
  days: Array<dayObject>,
  attrs: Array<attributeObject>
) => {
  // Initialize with dayRating since that is always known
  // Initialize with dates if you care i guess. For my suggestion it makes sense to
  const attributeLibrary: { [key: string]: (number | null)[] } = {
    dayRating: [],
    // date: []
  };

  // For padding days
  const attributeCounter: { [key: string]: number } = {
    day: 0,
    date: 0,
  };

  // Populate library with ALL other attr values
  attrs.forEach((attr) => {
    attributeLibrary[attr.name] = [];
    attributeCounter[attr.name] = 0;
  });

  // Attributes will be inserted here. I kept dates so that we could use null values as placeholders
  // Commented out date for now since it isn't part of your day object and may not be necessary
  days.forEach((day, dayCount) => {
    attributeLibrary.dayRating.push(day.dayRating || null);
    // attributeLibrary.date.push(day.date)

    day.attributes &&
      day.attributes.forEach((attr) => {
        attributeLibrary[attr.name].push(attr.value || null);

        // Increment counter for each
        attr.value && attributeCounter[attr.name]++;
      });

    // Additional - if you want to use null placeholders for missings, you have to do so here for each element
    // Suggestion:
    // Object.entries(attributeCounter).forEach([key: string, count: number] => {
    //   if count does not equal dayCount, add a null to that attribute and increment the counter by 1
    //   Basically, although this is space inefficient, it allows us O(1) access to the length of each array by simply
    //   holding its value separately and updating it. Updates are O(1) ops as well, so it loses nothing to scale;

    //   This is used by the javascript library itself, where they store the length of an array in the .length field. That is a
    //   constant field and not calculated by the length of the array at the time if I'm understanding it correctly. Basically, for
    //   the cost of space, we reduce time complexity and a bit of code complexity.
    // })
  });

  // THE RESULT => an object that has a key for each attribute, attached to an array of its values (with nulls if you so please)
  // to convert to an array, use Object.entries(attributeLibrary) to convert it to an array of 2 entry arrays where entry 0 is key
  // and entry 1 is value
  // EXAMPLE:
  const sample = {
    a: [0, 1, 2, 3],
    b: [4, 5, 6, 7],
  };

  const sampleAsList = Object.entries(sample); // => [["a", [0, 1, 2, 3]], ["b", [4, 5, 6, 7]]]
  const sampleSize = sampleAsList.length; // => Get the size. Sadly I don't think objects have a size field like arrays have a length field

  // const array1 = [2, 3, 1, 0, 5, 5, 5, 5];
  // const array2 = [1, 7, 7, 4, 5, 5, 5, 6];

  // useEffect(() => {
  //   console.log("days,", days);
  //   console.log(dayRatingArray);
  //   console.log(attributeArray);
  // }, [dayRatingArray, attributeArray]);

  // console.log(days);

  return `something`;
};
