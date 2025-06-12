import axiosInstance from "@/lib/axiosInstance";

interface Article {
  image: string;
  content: string;
  title: string;
}

export const postArticle = async (article: Article) => {
  const response = await axiosInstance.post("/articles", article);
  return response.data;
};

export const getArticle = async () => {
  const response = await axiosInstance.get("/articles");
  return response.data;
};

export const getArticleById = async (articleId: number) => {
  const response = await axiosInstance.get(`/articles/${articleId}`);
  return response.data;
};

export const patchArticle = async (articleId: number, article: Article) => {
  const response = await axiosInstance.patch(`/articles/${articleId}`, article);
  return response.data;
};

export const deleteArticle = async (articleId: number) => {
  const response = await axiosInstance.delete(`/articles/${articleId}`);
  return response.data;
};

export const postArticleLike = async (articleId: number) => {
  const response = await axiosInstance.post(`/articles/${articleId}/like`);
  return response.data;
};

export const deleteArticleLike = async (articleId: number) => {
  const response = await axiosInstance.delete(`/articles/${articleId}/like`);
  return response.data;
};
