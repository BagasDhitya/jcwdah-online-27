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

export function getAllProductsService(
  keyword?: string,
  sortedByPrice?: "asc" | "desc",
): Product[] {
  let products = readProducts();

  // 1. Fitur Search (mencari berdasarkan title atau description)
  if (keyword) {
    const searchKeyword = keyword.toLowerCase();
    products = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchKeyword) ||
        product.description.toLowerCase().includes(searchKeyword),
    );
  }

  // 2. Fitur Sort (berdasarkan harga termurah/termahal)
  if (sortedByPrice) {
    products.sort((a, b) => {
      if (sortedByPrice === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  return products;
}

export function getProductByIdService(productId: number): Product | undefined {
  const products = readProducts();
  return products.find((p) => p.id === productId);
}

export function createProductService(data: Omit<Product, "id">): Product {
  const products = readProducts();
  const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  const newProduct: Product = {
    id: newId,
    ...data,
  };

  products.push(newProduct);
  writeProducts(products);

  return newProduct;
}

export function updateProductService(
  productId: number,
  data: Partial<Omit<Product, "id">>,
): Product | null {
  const products = readProducts();
  const productIndex = products.findIndex((p) => p.id === productId);

  // findIndex akan mereturn -1 jika product yang mau diubah tidak ada
  if (productIndex === -1) {
    return null;
  }

  const updatedProduct: Product = {
    id: productId,
    title: data.title ?? products[productIndex].title,
    description: data.description ?? products[productIndex].description,
    stock: data.stock ?? products[productIndex].stock,
    price: data.price ?? products[productIndex].price,
  };

  products[productIndex] = updatedProduct;
  writeProducts(products);

  return updatedProduct;
}

export function deleteProductService(productId: number): boolean {
  const products = readProducts();
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return null;
  }

  products.splice(productIndex, 1);
  writeProducts(products);

  return true;
}
