import axiosInstance from "@/lib/axiosInstance";

// User 타입 정의
interface User {
  id: number;
  email: string;
  nickname: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

interface UserProfileUpdate {
  nickname?: string;
  image?: string;
}

// User CRUD 함수들
export const getUserProfile = async () => {
  const response = await axiosInstance.get<User>("/user");
  return response.data;
};

export const patchUserProfile = async (userData: UserProfileUpdate) => {
  const response = await axiosInstance.patch<User>("/user", userData);
  return response.data;
};

export const uploadUserImage = async (imageFile: File) => {
  // 파일 타입 검증
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(imageFile.type)) {
    throw new Error("지원되지 않는 파일 형식입니다.");
  }

  // 파일 크기 검증 (예: 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (imageFile.size > maxSize) {
    throw new Error("파일 크기가 너무 큽니다.");
  }

  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await axiosInstance.post<{ url: string }>(
    "/images/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

// 타입 export
export type { User, UserProfileUpdate };
