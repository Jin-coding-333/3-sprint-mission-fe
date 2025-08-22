"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
export function useSignIn() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<AuthResponse, Error, LogInCredentials>({
    mutationKey: ["signIn"],
    mutationFn: postSignIn,
    onSuccess: (data) => {
      queryClient.setQueryData(["auth"], data);
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
}

// 2. 회원가입
export function useSignUp() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<AuthResponse, Error, SignUpCredentials>({
    mutationKey: ["signUp"],
    mutationFn: postSignUp,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
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
