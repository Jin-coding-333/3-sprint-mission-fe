import axiosInstance from "@/lib/axiosInstance";

// Auth 타입 정의
interface LoginCredentials {
  email: string;
  password: string;
}

interface SignupCredentials {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
    image?: string;
  };
}

interface RefreshTokenResponse {
  accessToken: string;
}

// Auth 함수들
export const postSignin = async (credentials: LoginCredentials) => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/signin",
    credentials
  );
  return response.data;
};

export const postSignup = async (credentials: SignupCredentials) => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/signup",
    credentials
  );
  return response.data;
};

export const postRefreshToken = async (refreshToken: string) => {
  const response = await axiosInstance.post<RefreshTokenResponse>(
    "/auth/refresh-token",
    {
      refreshToken,
    }
  );
  return response.data;
};

// 타입 export
export type {
  LoginCredentials,
  SignupCredentials,
  AuthResponse,
  RefreshTokenResponse,
};
