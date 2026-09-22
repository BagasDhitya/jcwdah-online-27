// import prisma from "../config/db";

/**
 * Interface untuk data input pembuatan produk baru
 */
export interface CreateProductInput {
  title: string;
  category: string;
  description?: string;
  stock: number;
  price: number;
}

/**
 * Interface untuk data input pembaharuan produk (semua field bersifat opsional)
 */
export interface UpdateProductInput {
  title?: string;
  category?: string;
  description?: string;
  stock?: number;
  price?: number;
}

/**
 * 1. Menambahkan produk baru ke database
 */
export async function createProduct(data: CreateProductInput) {
  // TODO: Gunakan prisma.product.create() untuk menyimpan data produk baru

  return null as any; // Temporary return agar controller tidak error
}

/**
 * 2. Mengambil semua produk yang belum dihapus (deletedAt is null)
 */
export async function getAllProducts() {
  // TODO: Gunakan prisma.product.findMany()
  // Filter hanya produk yang `deletedAt` bernilai null, dan urutkan berdasarkan `createdAt` secara descending

  return []; // Temporary return agar controller tidak error
}

/**
 * 3. Mengambil detail satu produk berdasarkan ID
 */
export async function getProductById(id: string) {
  // TODO: Gunakan prisma.product.findFirst() atau findUnique()
  // Cari produk berdasarkan ID dan pastikan `deletedAt` masih null

  return null; // Temporary return agar controller tidak error
}

/**
 * 4. Memperbarui data produk berdasarkan ID
 */
export async function updateProduct(id: string, data: UpdateProductInput) {
  // TODO: Gunakan prisma.product.update() untuk mengubah data produk berdasarkan id

  return null as any; // Temporary return agar controller tidak error
}

/**
 * 5. Menerapkan Soft Delete pada produk (mengisi deletedAt dengan tanggal saat ini)
 */
export async function softDeleteProduct(id: string) {
  // TODO: Gunakan prisma.product.update() untuk memperbarui field `deletedAt` menjadi new Date()

  return null as any; // Temporary return agar controller tidak error
}
