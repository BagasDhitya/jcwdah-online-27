import { useState, useEffect } from "react";
import { BASE_URL } from "../config/api";
import { type Product } from "../types/product";

import axios from "axios";

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

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading, error };
}
