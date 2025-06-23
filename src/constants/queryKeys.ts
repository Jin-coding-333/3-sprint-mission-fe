export const queryKeys = {
  // 게시글
  articles: (params?: object) => ["articles", params],
  article: (id: number) => ["article", id],

  // 댓글
  articleComments: (articleId: number, params?: object) => [
    "articleComments",
    articleId,
    params,
  ],
  productComments: (productId: number, params?: object) => [
    "productComments",
    productId,
    params,
  ],

  // 상품
  products: (params?: object) => ["products", params],
  product: (id: number) => ["product", id],

  // 유저
  userProfile: () => ["userProfile"],
};
