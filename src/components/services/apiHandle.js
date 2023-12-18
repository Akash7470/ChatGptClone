import axios from "axios";
import { BASE_URL } from "./base";

const apiHandle = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});
apiHandle.interceptors.request.use(
  async (config) => {
    config.headers = {
      Accept: "*/*",
      "Content-Type": "application/Json",
      "Access-Control-Allow-Origin": "*",
      ["ngrok-skip-browser-warning"]: "skip-browser-warning",
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
apiHandle.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default apiHandle;
