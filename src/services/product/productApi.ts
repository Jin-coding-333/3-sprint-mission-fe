import axiosInstance from "@/lib/axiosInstance";

// Product 타입 정의
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  favoriteCount: number;
  isFavorite?: boolean;
  createdAt: string;
  updatedAt: string;
  ownerId: number;
}

interface ProductListResponse {
  totalCount: number;
  list: Product[];
}

interface ProductSearchParams {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "favorite";
  keyword?: string;
}

interface CreateProductData {
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
}

// Product CRUD 함수들
export const getProducts = async (params: ProductSearchParams = {}) => {
  const response = await axiosInstance.get<ProductListResponse>("/products", {
    params,
  });
  return response.data;
};

export const getProductById = async (productId: number) => {
  const response = await axiosInstance.get<Product>(`/products/${productId}`);
  return response.data;
};

export const postProduct = async (productData: CreateProductData) => {
  const response = await axiosInstance.post<Product>("/products", productData);
  return response.data;
};

export const patchProduct = async (
  productId: number,
  productData: Partial<CreateProductData>
) => {
  const response = await axiosInstance.patch<Product>(
    `/products/${productId}`,
    productData
  );
  return response.data;
};

export const deleteProduct = async (productId: number) => {
  const response = await axiosInstance.delete(`/products/${productId}`);
  return response.data;
};

export const postProductFavorite = async (productId: number) => {
  const response = await axiosInstance.post(`/products/${productId}/favorite`);
  return response.data;
};

export const deleteProductFavorite = async (productId: number) => {
  const response = await axiosInstance.delete(
    `/products/${productId}/favorite`
  );
  return response.data;
};

export const uploadProductImages = async (imageFiles: File[]) => {
  const formData = new FormData();
  imageFiles.forEach((file, index) => {
    formData.append(`image_${index}`, file);
  });

  const response = await axiosInstance.post<{ urls: string[] }>(
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
export type {
  Product,
  ProductListResponse,
  ProductSearchParams,
  CreateProductData,
};
