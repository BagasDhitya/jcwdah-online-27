import { Product } from "../interfaces/product.interface.js";
// import db from "../config/db.js"; // Un-comment dan sesuaikan dengan instance DB kamu

export async function getAllProductsService(
  keyword?: string,
  sortedByPrice?: "asc" | "desc",
): Promise<Product[]> {
  // TODO: Tampilkan SELECT * FROM products dengan logic Search (WHERE) & Sort (ORDER BY)
  return [];
}

export async function getProductByIdService(
  productId: number,
): Promise<Product | null> {
  // TODO: Tampilkan SELECT * FROM products WHERE id = $1
  return null;
}

export async function createProductService(
  data: Omit<Product, "id">,
): Promise<Product> {
  // TODO: Tampilkan INSERT INTO products (...) VALUES (...) RETURNING *
  return {} as Product;
}

export async function updateProductService(
  productId: number,
  data: Partial<Omit<Product, "id">>,
): Promise<Product | null> {
  // TODO: Tampilkan UPDATE products SET ... WHERE id = $1 RETURNING *
  return null;
}

export async function deleteProductService(
  productId: number,
): Promise<boolean> {
  // TODO: Tampilkan DELETE FROM products WHERE id = $1
  return false;
}
