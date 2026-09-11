import { Product } from "../interfaces/product.interface.js";
import { readProducts, writeProducts } from "../utils/fileHandler.js";

/**
 * Explanation for Students:
 *
 * 1. Omit<Product, "id">
 *    - Kegunaan: Membuat type baru dari 'Product', tapi MENGHAPUS properti 'id'.
 *    - Alasan: Saat membuat produk baru (create), ID biasanya digenerate otomatis
 *      oleh system/database, sehingga client tidak perlu mengirimkan ID.
 *
 * 2. Partial<T>
 *    - Kegunaan: Mengubah seluruh properti di dalamnya menjadi OPSIONAL (optional / ?).
 *    - Alasan: Saat update data (PATCH/PUT), client mungkin hanya ingin memperbarui
 *      sebagian field (misal: harganya saja), bukan seluruh data produk.
 */

export function getAllProductsService(): Product[] {
  // TODO: Implementasi logic mengambil semua produk
  return [];
}

export function getProductByIdService(productId: number): Product | undefined {
  // TODO: Implementasi logic mencari produk berdasarkan ID
  return undefined;
}

export function createProductService(data: Omit<Product, "id">): Product {
  // TODO: Implementasi logic generate ID baru, push data, & simpan ke file/database

  // Dummy return agar tidak error TypeScript
  return {} as Product;
}

export function updateProductService(
  productId: number,
  data: Partial<Omit<Product, "id">>,
): Product | null {
  // TODO: Implementasi logic update produk berdasarkan ID
  // Catatan: Kombinasi Partial<Omit<Product, "id">> artinya data update
  // tidak boleh mengubah 'id', dan semua field sisanya bersifat opsional.

  // Dummy return agar tidak error TypeScript
  return null;
}

export function deleteProductService(productId: number): boolean {
  // TODO: Implementasi logic hapus produk berdasarkan ID
  return false;
}
