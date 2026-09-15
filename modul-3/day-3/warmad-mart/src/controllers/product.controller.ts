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

export async function getAllProducts(req: Request, res: Response) {
  try {
    const { search, sort } = req.query;

    const keyword = search ? String(search) : undefined;
    const sortByPrice = sort === "asc" || sort === "desc" ? sort : undefined;

    // TODO: Panggil service untuk ambil semua produk
    const products = await getAllProductsService(keyword, sortByPrice);

    return res.status(200).send({
      message: "Success fetch all products",
      data: products,
      status: res.statusCode,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const productId = parseInt(String(req.params.id));

    // TODO: Panggil service untuk ambil detail produk berdasarkan ID
    const product = await getProductByIdService(productId);

    if (!product) {
      return res.status(404).send({
        message: "Product not found",
      });
    }

    return res.status(200).send({
      message: "Success fetch product detail",
      data: product,
      status: res.statusCode,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const { title, description, stock, price } = req.body;

    if (!title || !description || stock === undefined || price === undefined) {
      return res.status(400).send({ message: "All fields are required" });
    }

    // TODO: Panggil service untuk buat produk baru
    const newProduct = await createProductService({
      title,
      description,
      stock,
      price,
    });

    return res.status(201).send({
      message: "Product created successfully",
      data: newProduct,
      status: res.statusCode,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const productId = parseInt(String(req.params.id));
    const { title, description, stock, price } = req.body;

    // TODO: Panggil service untuk update produk
    const updatedProduct = await updateProductService(productId, {
      title,
      description,
      stock,
      price,
    });

    if (!updatedProduct) {
      return res.status(404).send({ message: "Product not found" });
    }

    return res.status(200).send({
      message: "Product updated successfully",
      data: updatedProduct,
      status: res.statusCode,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const productId = parseInt(String(req.params.id));

    // TODO: Panggil service untuk hapus produk
    const isDeleted = await deleteProductService(productId);

    if (!isDeleted) {
      return res.status(404).send({ message: "Product not found" });
    }

    return res.status(200).send({
      message: "Product deleted successfully",
      status: res.statusCode,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}
