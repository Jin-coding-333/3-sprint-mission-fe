import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getArticles,
  getArticleById,
  postArticle,
  patchArticle,
  deleteArticle,
  postArticleLike,
  deleteArticleLike,
  Article,
  ArticleListResponse,
  PaginationParams,
} from "@/services/article/articleApi";

// 1. 전체 게시글 목록 조회
export function useArticles(params?: PaginationParams) {
  return useQuery<ArticleListResponse, Error>({
    queryKey: ["articles", params],
    queryFn: () => getArticles(params ?? {}),
  });
}

// 2. 단일 게시글 상세 조회
export function useArticle(articleId: number) {
  return useQuery<Article, Error>({
    queryKey: ["article", articleId],
    queryFn: () => getArticleById(articleId),
    enabled: !!articleId,
  });
}

// 3. 게시글 생성
export function useCreateArticle(options?: {
  onSuccess?: (data: Article) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<
    Article,
    Error,
    Omit<Article, "id" | "createdAt" | "updatedAt" | "writer" | "likeCount">
  >({
    mutationFn: postArticle,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 4. 게시글 수정
export function useUpdateArticle(options?: {
  onSuccess?: (data: Article) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<
    Article,
    Error,
    {
      articleId: number;
      article: Partial<Pick<Article, "title" | "content" | "image">>;
    }
  >({
    mutationFn: ({ articleId, article }) => patchArticle(articleId, article),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({
        queryKey: ["article", variables.articleId],
      });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 5. 게시글 삭제
export function useDeleteArticle(options?: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (articleId) => deleteArticle(articleId),
    onSuccess: (_, articleId) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["article", articleId] });
      options?.onSuccess?.();
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 6. 게시글 좋아요
export function useLikeArticle(options?: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (articleId) => postArticleLike(articleId),
    onSuccess: (_, articleId) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["article", articleId] });
      options?.onSuccess?.();
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 7. 게시글 좋아요 취소
export function useUnlikeArticle(options?: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (articleId) => deleteArticleLike(articleId),
    onSuccess: (_, articleId) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["article", articleId] });
      options?.onSuccess?.();
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}
