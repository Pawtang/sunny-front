import axios from "axios";

const DAY_URL = "http://localhost:8000/day";
const DAYS_URL = "http://localhost:8000/days";
const MONTH_URL = "http://localhost:8000/month";

export const submitDay = async (body: object, successCallback: Function) => {
  console.log("body", body);
  try {
    await axios.post(DAY_URL, body).then((response) => {
      successCallback && successCallback(response.data);
    });
  } catch (error) {
    console.error("error", error);
  }
};

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
