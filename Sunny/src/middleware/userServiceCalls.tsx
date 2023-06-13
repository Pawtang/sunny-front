import axios from "axios";
const USER_URL = "http://localhost:8000/user";
import { dummyUserID } from "../utilities/constants";

export const signup = async (body: object, successCallback: Function) => {
  try {
    const response = await axios.post(USER_URL, body).then((response) => {
      successCallback && successCallback(response.data);
    });
  } catch (error) {
    console.error("error", error);
  }
};

export const login = async (body: object, successCallback: Function) => {
  try {
    const response = await axios.post(USER_URL, body).then((response) => {
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
    await axios.get(`${USER_URL}?id=${dummyUserID}`).then((response) => {
      successCallback && successCallback(response.data);
    });
  } catch (error) {
    console.error(error);
  }
};
