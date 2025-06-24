// 공통 응답 구조
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

// 페이지네이션 공통 타입
export interface PaginationResponse<T> {
  list: T[];
  totalCount: number;
  page?: number;
  pageSize?: number;
  hasMore?: boolean;
}

// 공통 검색/필터 파라미터
export interface BaseSearchParams {
  page?: number;
  pageSize?: number;
  keyword?: string;
}

// 정렬 옵션
export type SortOrder = "recent" | "oldest" | "popular" | "like" | "favorite";

// 파일 업로드 응답
export interface UploadResponse {
  url: string;
  urls?: string[];
}

// 공통 엔티티 필드
export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

// 작성자 정보
export interface Writer {
  id: number;
  nickname: string;
  image?: string;
}
