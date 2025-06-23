import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProducts,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct,
  postProductFavorite,
  deleteProductFavorite,
  uploadProductImages,
  Product,
  ProductListResponse,
  ProductSearchParams,
  CreateProductData,
} from "@/services/product/productApi";

// 1. 전체 상품 목록 조회
export function useProducts(params?: ProductSearchParams) {
  return useQuery<ProductListResponse, Error>({
    queryKey: ["products", params],
    queryFn: () => getProducts(params ?? {}),
  });
}

// 2. 단일 상품 상세 조회
export function useProduct(productId: number) {
  return useQuery<Product, Error>({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
  });
}

// 3. 상품 생성
export function useCreateProduct(options?: {
  onSuccess?: (data: Product) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<Product, Error, CreateProductData>({
    mutationFn: postProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 4. 상품 수정
export function useUpdateProduct(options?: {
  onSuccess?: (data: Product) => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<
    Product,
    Error,
    { productId: number; productData: Partial<CreateProductData> }
  >({
    mutationFn: ({ productId, productData }) =>
      patchProduct(productId, productData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({
        queryKey: ["product", variables.productId],
      });
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 5. 상품 삭제
export function useDeleteProduct(options?: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (productId) => deleteProduct(productId),
    onSuccess: (_, productId) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      options?.onSuccess?.();
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 6. 상품 좋아요
export function useFavoriteProduct(options?: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (productId) => postProductFavorite(productId),
    onSuccess: (_, productId) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      options?.onSuccess?.();
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 7. 상품 좋아요 취소
export function useUnfavoriteProduct(options?: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (productId) => deleteProductFavorite(productId),
    onSuccess: (_, productId) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
      options?.onSuccess?.();
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
}

// 8. 상품 이미지 업로드
export function useUploadProductImages(options?: {
  onSuccess?: (data: { urls: string[] }) => void;
  onError?: (error: Error) => void;
}) {
  return useMutation<{ urls: string[] }, Error, File[]>({
    mutationFn: (imageFiles) => uploadProductImages(imageFiles),
    ...options,
  });
}
