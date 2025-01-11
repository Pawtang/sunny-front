import axios from "axios";

const API_URL: string =
  process.env.REACT_APP_URL || "sunny-back-production.up.railway.app";
const DAY_URL = API_URL.concat("day");
const DAYS_URL = API_URL.concat("days");
const MONTH_URL = API_URL.concat("month");

// export const submitDay = async (body: object, successCallback: Function) => {
//   console.log("body", body);
//   try {
//     await axios
//       .post(DAY_URL, body, {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDk4ODA3OTg3NWE0OTEyNGY0NTNhZTciLCJpYXQiOjE2ODc3MTY0OTJ9.X2OyJvXiCFTao4FEWHiuaifn4QdDGEBRLik2u6W0yxY",
//         },
//       })
//       .then((response) => {
//         successCallback && successCallback(response.data);
//       });
//   } catch (error) {
//     console.error("error", error);
//     return error;
//   }
// };

export const deleteDay = async (date: string, successCallback: Function) => {
  try {
    await axios.delete(`${DAY_URL}?date=${date}`).then((response) => {
      successCallback && successCallback(response.data);
    });
  } catch (error) {
    console.error(error);
  }
};

export const getDayData = async (date: string, successCallback: Function) => {
  try {
    await axios.get(`${DAY_URL}?date=${date}`).then((response) => {
      successCallback && successCallback(response.data);
    });
  } catch (error) {
    console.error(error);
  }
};

export const getMonth = async (
  month: number,
  year: number,
  successCallback: Function
) => {
  try {
    await axios
      .get(`${MONTH_URL}?month=${month}&year=${year}`)
      .then((response) => {
        successCallback && successCallback(response.data);
      });
  } catch (error) {
    console.error(error);
  }
};

export const getAllDaysForUser = async (
  successCallback: Function,
  userid?: string
) => {
  try {
    await axios.get(`${DAYS_URL}?userid=${userid}`).then((response) => {
      successCallback && successCallback(response.data);
    });
  } catch (error) {
    console.error(error);
  }
};
