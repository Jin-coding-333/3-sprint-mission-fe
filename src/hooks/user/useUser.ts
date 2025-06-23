import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUserProfile,
  patchUserProfile,
  uploadUserImage,
  User,
  UserProfileUpdate,
} from "@/services/user/userApi";

// 1. 사용자 프로필 조회
export function useUserProfile() {
  return useQuery<User, Error>({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });
}

// 2. 사용자 프로필 수정
export function useUpdateUserProfile(options?: {
  onSuccess?: (data: User) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<User, Error, UserProfileUpdate>({
    mutationFn: patchUserProfile,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 3. 사용자 프로필 이미지 업로드
export function useUploadUserImage(options?: {
  onSuccess?: (data: { url: string }) => void;
  onError?: (error: Error) => void;
}) {
  return useMutation<{ url: string }, Error, File>({
    mutationFn: (imageFile) => uploadUserImage(imageFile),
    ...options,
  });
}
