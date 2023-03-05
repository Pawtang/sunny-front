import axios from "axios";

export const submitDay = async (body: any, successCallback : any) => {
    try {
        const response = await axios.post("http://localhost:8000/day", body)
        .then((response) => {successCallback && successCallback(response.data)})
    } catch (e) {
        console.log("error", e);
    }
}
