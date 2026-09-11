import { Request, Response } from "express";
import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
} from "../services/product.service.js";

export function getHello(req: Request, res: Response) {
  try {
    // TODO: Kirim response "Hello World"
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export function getAllProducts(req: Request, res: Response) {
  try {
    // TODO: Panggil service getAllProductsService dan kirim hasilnya ke response
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export function getProductById(req: Request, res: Response) {
  try {
    // TODO: Ambil ID dari req.params, panggil service getProductByIdService, handle jika produk tidak ada, lalu kirim response
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export function createProduct(req: Request, res: Response) {
  try {
    // TODO: Ambil data dari req.body, validasi data, panggil service createProductService, lalu kirim response (201)
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export function updateProduct(req: Request, res: Response) {
  try {
    // TODO: Ambil ID dari req.params dan data dari req.body, panggil service updateProductService, handle jika tidak ditemukan, lalu kirim response
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export function deleteProduct(req: Request, res: Response) {
  try {
    // TODO: Ambil ID dari req.params, panggil service deleteProductService, handle jika gagal/tidak ada, lalu kirim response
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}
