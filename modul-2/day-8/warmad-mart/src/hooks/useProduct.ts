import { useState, useEffect, useMemo } from "react";
import { BASE_URL } from "../config/api";
import { type Product } from "../types/product";

import axios from "axios";

export type CreateProductInput = Omit<
  Product,
  "objectId" | "created" | "updated"
>;

export type UpdateProductInput = Partial<CreateProductInput>;

export type SortOrder = "default" | "lowest" | "highest";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // State untuk Search dan Sort
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  // fitur 1 : mengambil semua product
  async function getProducts() {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<Product[]>(
        `${BASE_URL}/api/data/products`,
      );
      setProducts(response.data);
    } catch (error: any) {
      setError(error.message || "Gagal mengambil data produk.");
    } finally {
      setLoading(false);
    }
  }

  // fitur 2 : menambahkan product
  async function createProduct(newProduct: CreateProductInput) {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<Product>(
        `${BASE_URL}/api/data/products`,
        newProduct,
      );

      setProducts((prev) => [...prev, response.data]);
      return response.data;
    } catch (error: any) {
      setError(error.message || "Gagal menambahkan data produk.");
    } finally {
      setLoading(false);
    }
  }

  // fitur 3 : mengubah produk
  async function updateProduct(
    objectId: string,
    updatedFields: UpdateProductInput,
  ) {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put<Product>(
        `${BASE_URL}/api/data/products/${objectId}`,
        updatedFields,
      );

      setProducts((prev) =>
        prev.map((item) => (item.objectId === objectId ? response.data : item)),
      );
      return response.data;
    } catch (error: any) {
      setError(error.message || "Gagal memperbarui data produk.");
    } finally {
      setLoading(false);
    }
  }

  // fitur 4 : menghapus produk
  async function deleteProduct(objectId: string) {
    setLoading(true);
    setError(null);

    try {
      await axios.delete(`${BASE_URL}/api/data/products/${objectId}`);

      setProducts((prev) => prev.filter((item) => item.objectId !== objectId));
      return true;
    } catch (error: any) {
      setError(error.message || "Gagal menghapus data produk.");
    } finally {
      setLoading(false);
    }
  }

  // Logic Search & Sorting
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter berdasar Search Query (Title atau Description)
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title?.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query),
      );
    }

    // Sort berdasar Harga
    if (sortOrder === "lowest") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highest") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, searchQuery, sortOrder]);

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products: filteredProducts, // Mengembalikan hasil yang sudah di-filter & sort
    rawProducts: products,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
