import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  withCredentials: true,
});

export default axiosInstance;