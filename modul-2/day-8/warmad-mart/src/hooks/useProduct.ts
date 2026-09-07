import { useState, useEffect } from "react";
import { BASE_URL } from "../config/api";
import { type Product } from "../types/product";

import axios from "axios";

// Omit -> digunakan untuk membuat tipe data baru berdasarkan tipe data yang sudah ada (Type), tetapi menghapus/mengabaikan field tertentu
export type CreateProductInput = Omit<
  Product,
  "objectId" | "created" | "updated"
>; // tipe data untuk pembuatan produk baru

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

      // update state lokal agar UI langsung merespons
      setProducts((prev) => [...prev, response.data]);
      return response.data;
    } catch (error: any) {
      setError(error.message || "Gagal menambahkan data produk.");
    } finally {
      setLoading(false);
    }
  }

  async function updateProduct() {}
  async function deleteProduct() {}

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading, error, createProduct };
}
