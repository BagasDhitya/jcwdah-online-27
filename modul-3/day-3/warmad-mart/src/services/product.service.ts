import { Product } from "../interfaces/product.interface.js";
import { query } from "../config/db.js";

export async function getAllProductsService(
  keyword?: string,
  sortedByPrice?: "asc" | "desc",
): Promise<Product[]> {
  const params: any[] = []; // untuk menampung parameter pencarian dinamis ($1, $2)

  let sql = `
  SELECT * FROM warmad_products.product WHERE deleted_at IS NULL
`;

  // filter berdasarkan keyword pada judul
  if (keyword) {
    params.push(`%${keyword}%`);
    sql += ` AND title ILIKE $${params.length}`;
  }

  // pengurutan berdasarkan sorted price
  if (sortedByPrice) {
    const order = sortedByPrice.toUpperCase() === "DESC" ? "DESC" : "ASC";
    sql += ` ORDER BY price ${order}`;
  } else {
    // pengurutan default
    sql += ` ORDER BY id ASC`;
  }

  const result = await query(sql, params);
  return result.rows;
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
