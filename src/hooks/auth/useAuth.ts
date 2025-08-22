import { useMutation } from "@tanstack/react-query";
import {
  postSignIn,
  postSignUp,
  postRefreshToken,
  LogInCredentials,
  SignUpCredentials,
  AuthResponse,
  RefreshTokenResponse,
} from "@/services/auth/authApi";

// 1. 로그인
export function useSignIn(options?: {
  onSuccess?: (data: AuthResponse) => void;
  onError?: (error: Error) => void;
}) {
  return useMutation<AuthResponse, Error, LogInCredentials>({
    mutationFn: postSignIn,
    ...options,
  });
}

// 2. 회원가입
export function useSignUp(options?: {
  onSuccess?: (data: AuthResponse) => void;
  onError?: (error: Error) => void;
}) {
  return useMutation<AuthResponse, Error, SignUpCredentials>({
    mutationFn: postSignUp,
    ...options,
  });
}

// 3. 리프레시 토큰
export function useRefreshToken(options?: {
  onSuccess?: (data: RefreshTokenResponse) => void;
  onError?: (error: Error) => void;
}) {
  return useMutation<RefreshTokenResponse, Error, string>({
    mutationFn: (refreshToken) => postRefreshToken(refreshToken),
    ...options,
  });
}
