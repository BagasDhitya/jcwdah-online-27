import { Request, Response, NextFunction } from "express";
import * as productService from "../services/product.service.js";
import prisma from "../config/db.js";

// catatan: validasi dimatikan untuk uji error handler

export async function createProductHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { title, category, description, stock, price } = req.body;

    // if (!title || !category || stock === undefined || price === undefined) {
    //   return res
    //     .status(400)
    //     .json({ message: "Title, category, stock, dan price wajib diisi." });
    // }

    const product = await productService.createProduct({
      title,
      category,
      description,
      stock: Number(stock),
      price: Number(price),
    });

    return res
      .status(201)
      .json({ message: "Produk berhasil dibuat", data: product });
  } catch (error: any) {
    next(error);
  }
}

export async function getAllProductsHandler(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const products = await productService.getAllProducts();
    return res.status(200).json({ data: products });
  } catch (error: any) {
    next(error);
  }
}

export async function getProductByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(String(id));

    if (!product) {
      return res.status(404).json({ message: "Produk tidak ditemukan." });
    }

    return res.status(200).json({ data: product });
  } catch (error: any) {
    next(error);
  }
}

export async function updateProductHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const existingProduct = await productService.getProductById(String(id));

    if (!existingProduct) {
      return res.status(404).json({ message: "Produk tidak ditemukan." });
    }

    const updatedProduct = await productService.updateProduct(
      String(id),
      req.body,
    );
    return res
      .status(200)
      .json({ message: "Produk berhasil diperbarui", data: updatedProduct });
  } catch (error: any) {
    next(error);
  }
}

export async function deleteProductHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;
    const existingProduct = await productService.getProductById(String(id));

    // if (!existingProduct) {
    //   return res.status(404).json({ message: "Produk tidak ditemukan." });
    // }

    await productService.softDeleteProduct(String(id));
    return res.status(200).json({ message: "Produk berhasil dihapus." });
  } catch (error: any) {
    next(error);
  }
}

export async function restoreProductHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = req.params;

    // pengecekan barang yang mau direstore
    // better disimpan di layer SERVICE - ini hanya contoh logic
    const existingProduct = await prisma.product.findFirst({
      where: {
        id: String(id),
      },
    });

    if (!existingProduct) {
      return res.status(404).json({ message: "Produk tidak ditemukan." });
    }

    await productService.restoreProduct(String(id));
    return res.status(200).json({ message: "Produk berhasil dikembalikan." });
  } catch (error: any) {
    next(error);
  }
}
