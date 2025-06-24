import axiosInstance from "@/lib/axiosInstance";

// Comment 타입 정의
interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image?: string;
  };
}

interface CommentListResponse {
  totalCount: number;
  list: Comment[];
}

interface CommentParams {
  page?: number;
  pageSize?: number;
}

interface CreateCommentData {
  content: string;
}

// Comment CRUD 함수들
export const getArticleComments = async (
  articleId: number,
  params: CommentParams = {}
) => {
  const response = await axiosInstance.get<CommentListResponse>(
    `/articles/${articleId}/comments`,
    { params }
  );
  return response.data;
};

export const postArticleComment = async (
  articleId: number,
  commentData: CreateCommentData
) => {
  const response = await axiosInstance.post<Comment>(
    `/articles/${articleId}/comments`,
    commentData
  );
  return response.data;
};

export const patchComment = async (
  commentId: number,
  commentData: CreateCommentData
) => {
  const response = await axiosInstance.patch<Comment>(
    `/comments/${commentId}`,
    commentData
  );
  return response.data;
};

export const deleteComment = async (commentId: number): Promise<void> => {
  const response = await axiosInstance.delete(`/comments/${commentId}`);
  return response.data;
};

// Product 댓글 관련 함수들
export const getProductComments = async (
  productId: number,
  params: CommentParams = {}
) => {
  const response = await axiosInstance.get<CommentListResponse>(
    `/products/${productId}/comments`,
    { params }
  );
  return response.data;
};

export const postProductComment = async (
  productId: number,
  commentData: CreateCommentData
) => {
  const response = await axiosInstance.post<Comment>(
    `/products/${productId}/comments`,
    commentData
  );
  return response.data;
};

// 타입 export
export type { Comment, CommentListResponse, CommentParams, CreateCommentData };
