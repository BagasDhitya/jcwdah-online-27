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
    const { search, sort } = req.query;

    const keyword = search ? String(search) : undefined;
    const sortByPrice = sort === "asc" || sort === "desc" ? sort : undefined;

    const products = getAllProductsService(keyword, sortByPrice);

    return res.status(200).send({
      message: "Success fetch all products",
      data: products,
      status: res.statusCode,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export function getProductById(req: Request, res: Response) {
  try {
    const productId = parseInt(String(req.params.id));
    const product = getProductByIdService(productId);

    // validasi ketika product tidak ditemukan
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

export function createProduct(req: Request, res: Response) {
  try {
    const { title, description, stock, price } = req.body;

    // validasi body request supaya data tidak cacat
    if (!title || !description || stock === undefined || price === undefined) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const newProduct = createProductService({
      title,
      description,
      stock,
      price,
    });

    return res.status(201).send({
      message: "Product created successfully",
      status: res.statusCode,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export function updateProduct(req: Request, res: Response) {
  try {
    const productId = parseInt(String(req.params.id));
    const { title, description, stock, price } = req.body;

    const updatedProduct = updateProductService(productId, {
      title,
      description,
      stock,
      price,
    });

    if (!updateProduct) {
      return res.status(404).send({ message: "Product not found" });
    }

    return res.status(200).send({
      message: "Product updated successfully",
      status: res.statusCode,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
}

export function deleteProduct(req: Request, res: Response) {
  try {
    const productId = parseInt(String(req.params.id));
    const isDeleted = deleteProductService(productId);

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
