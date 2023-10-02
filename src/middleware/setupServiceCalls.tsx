import axios from "axios";
import { attributeObject } from "../utilities/types";

const API_URL: string =
  process.env.REACT_APP_URL || "sunny-back-production.up.railway.app";
// const DAY_URL = API_URL.concat("day");
// const DAYS_URL = API_URL.concat("days");
// const MONTH_URL = API_URL.concat("month");
const SETUP_URL = API_URL.concat("attributes");

// const attributesList = (attributes: attributeObject) => {
//     return attributes && Object.entries(attributes);
//   };

export const submitAttributes = async (
  body: object,
  successCallback: Function
) => {
  try {
    const response = await axios.post(SETUP_URL, body).then((response) => {
      successCallback && successCallback(response.data);
    });
  } catch (error) {
    console.error("error", error);
  }
};

export const getAttributesForUser = async (
  userid: string,
  successCallback: Function
) => {
  try {
    const response = await axios
      .get(`${SETUP_URL}?userid=${userid}`)
      .then((response) => {
        successCallback && successCallback(response.data);
      });
  } catch (error) {
    console.error(error);
  }
};
