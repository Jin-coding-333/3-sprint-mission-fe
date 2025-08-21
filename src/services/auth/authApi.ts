import axiosInstance from "@/lib/axiosInstance";

// Auth 타입 정의
interface LogInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
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
export const postSignIn = async (credentials: LogInCredentials) => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/signin",
    credentials
  );
  return response.data;
};

export const postSignUp = async (credentials: SignUpCredentials) => {
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
  LogInCredentials,
  SignUpCredentials,
  AuthResponse,
  RefreshTokenResponse,
};
