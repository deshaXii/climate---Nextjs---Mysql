import axios from "axios";
const instance = axios.create({ baseURL: process.env.baseURL });
import Cookies from "js-cookies";

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.data.message === "Unauthorized") {
      Cookies.setItem("userToken", null, {
        path: "/",
        httpOnly: false,
      });
      location.reload();
    }
    return Promise.reject(error);
  }
);

export default instance;
