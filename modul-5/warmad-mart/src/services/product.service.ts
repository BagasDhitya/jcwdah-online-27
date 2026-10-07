import prisma from "../config/db.js";

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

export async function createProduct(data: CreateProductInput) {
  return await prisma.product.create({
    data: {
      title: data.title,
      category: data.category,
      description: data.description,
      stock: data.stock,
      price: data.price,
    },
  });
}

export async function getAllProducts() {
  return await prisma.product.findMany({
    where: {
      deletedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProductById(id: string) {
  return await prisma.product.findFirst({
    where: {
      id,
      deletedAt: null,
    },
  });
}

export async function updateProduct(id: string, data: UpdateProductInput) {
  return await prisma.product.update({
    where: { id },
    data,
  });
}

export async function softDeleteProduct(id: string) {
  return await prisma.product.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
}

export async function restoreProduct(id: string) {
  return await prisma.product.update({
    where: { id },
    data: {
      deletedAt: null,
    },
  });
}
