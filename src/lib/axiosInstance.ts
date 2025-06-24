import axios from "axios";
import { redirect } from "next/navigation";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://panda-market-api.vercel.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  withCredentials: true,
});

// Request Interceptor - 토큰 자동 추가
axiosInstance.interceptors.request.use(
  (config) => {
    // 로컬스토리지나 쿠키에서 토큰 가져오기
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor - 에러 핸들링 및 토큰 갱신
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 401 에러 시 토큰 갱신 시도
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken =
          typeof window !== "undefined"
            ? localStorage.getItem("refreshToken")
            : null;
        if (refreshToken) {
          const response = await axios.post(
            `${axiosInstance.defaults.baseURL}/auth/refresh-token`,
            { refreshToken }
          );

          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;

          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // 리프레시 실패 시 로그아웃
        if (typeof window !== "undefined") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          redirect("/login");
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
