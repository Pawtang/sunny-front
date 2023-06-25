import axios from "axios";
import { dummyUserID } from "../utilities/constants";

const USER_URL = "http://localhost:8000/user";

export const signup = async (body: object, successCallback: Function) => {
  console.log("FUCK YOU", body);
  try {
    await axios.post(USER_URL, body).then((response) => {
      successCallback && successCallback(response.data);
    });
  } catch (error) {
    console.error("error", error);
  }
};

export const login = async (body: object, successCallback: Function) => {
  try {
    await axios.post(`${USER_URL}/login`, body).then((response) => {
      console.log("RESPONSE", response);
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
