import { useState, useEffect } from "react";
import { api } from "@/config/axios";
import {
  Product,
  CreateProductPayload,
  UpdateProductPayload,
} from "@/interfaces/product";

export function useProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function getProducts() {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get<Product[]>("/api/products/");
      setProducts(response.data);
    } catch (error: any) {
      setError(error.response?.data?.messagge || "Gagal fetching produk");
    } finally {
      setLoading(false);
    }
  }

  async function createProduct(payload: CreateProductPayload) {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post<Product>("/api/products/", payload);
      return response.data;
    } catch (error: any) {
      setError(error.response?.data?.messagge || "Gagal menambahkan produk");
    } finally {
      setLoading(false);
    }
  }

  async function updateProduct(payload: UpdateProductPayload, id: string) {
    setLoading(true);
    setError(null);

    try {
      const response = await api.put<Product>(`/api/products/${id}`, payload);
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
