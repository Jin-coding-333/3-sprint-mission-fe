import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getArticleComments,
  postArticleComment,
  patchComment,
  deleteComment,
  getProductComments,
  postProductComment,
  Comment,
  CommentListResponse,
  CommentParams,
  CreateCommentData,
} from "@/services/comment/commentApi";

// 1. 게시글 댓글 목록 조회
export function useArticleComments(articleId: number, params?: CommentParams) {
  return useQuery<CommentListResponse, Error>({
    queryKey: ["articleComments", articleId, params],
    queryFn: () => getArticleComments(articleId, params ?? {}),
    enabled: !!articleId,
  });
}

// 2. 게시글 댓글 생성
export function useCreateArticleComment(options?: {
  onSuccess?: (data: Comment) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<
    Comment,
    Error,
    { articleId: number; commentData: CreateCommentData }
  >({
    mutationFn: ({ articleId, commentData }) =>
      postArticleComment(articleId, commentData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["articleComments", variables.articleId],
      });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 3. 댓글 수정
export function useUpdateComment(options?: {
  onSuccess?: (data: Comment) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<
    Comment,
    Error,
    { articleId: number; commentId: number; commentData: CreateCommentData }
  >({
    mutationFn: ({ commentId, commentData }) =>
      patchComment(commentId, commentData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["articleComments", variables.articleId],
      });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 4. 댓글 삭제
export function useDeleteComment(options?: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<void, Error, { articleId: number; commentId: number }>({
    mutationFn: ({ commentId }) => deleteComment(commentId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["articleComments", variables.articleId],
      });
      options?.onSuccess?.();
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 5. 상품 댓글 목록 조회
export function useProductComments(productId: number, params?: CommentParams) {
  return useQuery<CommentListResponse, Error>({
    queryKey: ["productComments", productId, params],
    queryFn: () => getProductComments(productId, params ?? {}),
    enabled: !!productId,
  });
}

// 6. 상품 댓글 생성
export function useCreateProductComment(options?: {
  onSuccess?: (data: Comment) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<
    Comment,
    Error,
    { productId: number; commentData: CreateCommentData }
  >({
    mutationFn: ({ productId, commentData }) =>
      postProductComment(productId, commentData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["productComments", variables.productId],
      });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}
