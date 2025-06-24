import axiosInstance from "@/lib/axiosInstance";

// Article 타입 정의 개선
interface Article {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image?: string;
  };
  likeCount: number;
  isLiked?: boolean;
}

// API 응답 타입 정의
interface ArticleListResponse {
  totalCount: number;
  list: Article[];
}

interface PaginationParams {
  page?: number;
  pageSize?: number;
  keyword?: string;
  orderBy?: "recent" | "like";
}

// Article CRUD 함수들
export const postArticle = async (
  article: Omit<
    Article,
    "id" | "createdAt" | "updatedAt" | "writer" | "likeCount"
  >
) => {
  const response = await axiosInstance.post<Article>("/articles", article);
  return response.data;
};

export const getArticles = async (params: PaginationParams = {}) => {
  const response = await axiosInstance.get<ArticleListResponse>("/articles", {
    params,
  });
  return response.data;
};

export const getArticleById = async (articleId: number) => {
  const response = await axiosInstance.get<Article>(`/articles/${articleId}`);
  return response.data;
};

export const patchArticle = async (
  articleId: number,
  article: Partial<Pick<Article, "title" | "content" | "image">>
): Promise<Article> => {
  const response = await axiosInstance.patch<Article>(
    `/articles/${articleId}`,
    article
  );
  return response.data;
};

export const deleteArticle = async (articleId: number): Promise<void> => {
  const response = await axiosInstance.delete(`/articles/${articleId}`);
  return response.data;
};

export const postArticleLike = async (articleId: number): Promise<void> => {
  const response = await axiosInstance.post(`/articles/${articleId}/like`);
  return response.data;
};

export const deleteArticleLike = async (articleId: number): Promise<void> => {
  const response = await axiosInstance.delete(`/articles/${articleId}/like`);
  return response.data;
};

// 타입 export
export type { Article, ArticleListResponse, PaginationParams };
