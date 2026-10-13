import { useState, useEffect } from "react";
import { api } from "@/config/axios";
import {
  Product,
  CreateProductPayload,
  UpdateProductPayload,
} from "@/interfaces/product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function getProducts() {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get<{ data: Product[] }>("/api/products/");
      setProducts(response.data.data);
    } catch (error: any) {
      setError(error.response?.data?.messagge || "Gagal fetching produk");
    } finally {
      setLoading(false);
    }
  }

  // 1. Tambahkan parameter imageFile opsional
  async function createProduct(
    payload: CreateProductPayload,
    imageFile?: File,
  ) {
    setLoading(true);
    setError(null);

    try {
      // 2. Gunakan FormData karena mengirim file dan data teks sekaligus
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("category", payload.category);
      if (payload.description)
        formData.append("description", payload.description);
      formData.append("price", String(payload.price));
      formData.append("stock", String(payload.stock));

      // 3. Masukkan file gambar jika ada
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await api.post<Product>("/api/products/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await getProducts();
      return response.data;
    } catch (error: any) {
      setError(error.response?.data?.messagge || "Gagal menambahkan produk");
    } finally {
      setLoading(false);
    }
  }

  // 4. Tambahkan parameter imageFile opsional untuk update
  async function updateProduct(
    payload: UpdateProductPayload,
    id: string,
    imageFile?: File,
  ) {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      if (payload.title) formData.append("title", payload.title);
      if (payload.category) formData.append("category", payload.category);
      if (payload.description)
        formData.append("description", payload.description);
      if (payload.price !== undefined)
        formData.append("price", String(payload.price));
      if (payload.stock !== undefined)
        formData.append("stock", String(payload.stock));

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await api.put<Product>(`/api/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      await getProducts();
      return response.data;
    } catch (error: any) {
      setError(error.response?.data?.messagge || "Gagal mengubah produk");
    } finally {
      setLoading(false);
    }
  }

  async function softDelete(id: string) {
    setLoading(true);
    setError(null);

    try {
      const response = await api.delete(`/api/products/${id}/soft-delete`);
      await getProducts();
      return response.data;
    } catch (error: any) {
      setError(error.response?.data?.messagge || "Gagal menghapus produk");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { products, error, loading, createProduct, updateProduct, softDelete };
}
