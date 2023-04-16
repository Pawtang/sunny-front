import axios from "axios";

const DAY_URL = "http://localhost:8000/day";
const MONTH_URL = "http://localhost:8000/month";

export const submitDay = async (body: object, successCallback: Function) => {
  try {
    const response = await axios.post(DAY_URL, body).then((response) => {
      successCallback && successCallback(response.data);
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getDayData = async (dayId: string, successCallback: Function) => {
  try {
    const response = await axios
      .get(`${DAY_URL}?date=${dayId}`)
      .then((response) => {
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
    const response = await axios
      .get(`${MONTH_URL}?month=${month}&year=${year}`)
      .then((response) => {
        successCallback && successCallback(response.data);
      });
  } catch (error) {
    console.error(error);
  }
};
