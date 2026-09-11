import express, { Request, Response, Application } from "express";
import { readProducts, writeProducts } from "./utils/fileHandler.js";

const app: Application = express();
const PORT: number = 8000;

export interface Product {
  id: number;
  title: string;
  description: string;
  stock: number;
  price: number;
}

app.use(express.json()); // middleware untuk membaca format data JSON

app.get("/api/hello", (req: Request, res: Response) => {
  return res.status(200).send({
    message: "Hello World",
  });
});

// 1. READ ALL - GET /api/products
app.get("/api/products", (req: Request, res: Response) => {
  const products = readProducts();
  return res.status(200).json({
    message: "Success fetch all products",
    data: products,
  });
});

// 2. READ BY ID - GET /api/products/:id
app.get("/api/products/:id", (req: Request, res: Response) => {
  const productId = parseInt(String(req.params.id), 10);
  const products = readProducts();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(200).json({
    message: "Success fetch product detail",
    data: product,
  });
});

// 3. CREATE - POST /api/products
app.post("/api/products", (req: Request, res: Response) => {
  const { title, description, stock, price } = req.body;

  // Validasi input sederhana
  if (!title || !description || stock === undefined || price === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const products = readProducts();

  // Generate ID baru (auto-increment berdasarkan ID terakhir)
  const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  const newProduct: Product = {
    id: newId,
    title,
    description,
    stock,
    price,
  };

  products.push(newProduct);
  writeProducts(products);

  return res.status(201).json({
    message: "Product created successfully",
    data: newProduct,
  });
});

// 4. UPDATE - PUT /api/products/:id
app.put("/api/products/:id", (req: Request, res: Response) => {
  const productId = parseInt(String(req.params.id), 10);
  const { title, description, stock, price } = req.body;

  const products = readProducts();
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Update data produk
  const updatedProduct: Product = {
    id: productId,
    title: title ?? products[productIndex].title,
    description: description ?? products[productIndex].description,
    stock: stock ?? products[productIndex].stock,
    price: price ?? products[productIndex].price,
  };

  products[productIndex] = updatedProduct;
  writeProducts(products);

  return res.status(200).json({
    message: "Product updated successfully",
    data: updatedProduct,
  });
});

// 5. DELETE - DELETE /api/products/:id
app.delete("/api/products/:id", (req: Request, res: Response) => {
  const productId = parseInt(String(req.params.id), 10);
  const products = readProducts();

  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Hapus produk dari array
  products.splice(productIndex, 1);
  writeProducts(products);

  return res.status(200).json({
    message: "Product deleted successfully",
  });
});

// Jalankan server Express
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
