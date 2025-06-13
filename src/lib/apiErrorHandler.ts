import { AxiosError } from "axios";

// API 에러 타입 정의
export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  details?: any;
}

// Axios 에러를 일관된 형태로 변환
export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;
    const code = error.response?.data?.code;
    const details = error.response?.data?.details;

    return {
      message,
      status,
      code,
      details,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: "알 수 없는 오류가 발생했습니다.",
  };
};

// 에러 메시지 한국어 매핑
export const getErrorMessage = (error: ApiError): string => {
  switch (error.status) {
    case 400:
      return error.message || "잘못된 요청입니다.";
    case 401:
      return "로그인이 필요합니다.";
    case 403:
      return "접근 권한이 없습니다.";
    case 404:
      return "요청한 데이터를 찾을 수 없습니다.";
    case 409:
      return error.message || "이미 존재하는 데이터입니다.";
    case 422:
      return error.message || "입력한 정보를 확인해주세요.";
    case 500:
      return "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
    default:
      return error.message || "오류가 발생했습니다.";
  }
};
