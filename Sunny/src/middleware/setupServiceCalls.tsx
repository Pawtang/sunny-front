import axios from "axios";
import { attributeObject } from "../utilities/types";

const SETUP_URL = "http://localhost:8000/attributes";

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
