import { useMutation } from "@tanstack/react-query";
import {
  postSignin,
  postSignup,
  postRefreshToken,
  LoginCredentials,
  SignupCredentials,
  AuthResponse,
  RefreshTokenResponse,
} from "@/services/auth/authApi";

// 1. 로그인
export function useSignIn(options?: {
  onSuccess?: (data: AuthResponse) => void;
  onError?: (error: Error) => void;
}) {
  return useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: postSignin,
    ...options,
  });
}

// 2. 회원가입
export function useSignUp(options?: {
  onSuccess?: (data: AuthResponse) => void;
  onError?: (error: Error) => void;
}) {
  return useMutation<AuthResponse, Error, SignupCredentials>({
    mutationFn: postSignup,
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
