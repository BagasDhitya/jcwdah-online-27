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
  return res.status(200).send({
    data: products,
    status: res.statusCode,
  });
});

// 2. CREATE - POST /api/products
app.post("/api/products", (req: Request, res: Response) => {
  const { title, description, stock, price } = req.body;

  // validasi input body request
  if (!title || !description || stock === undefined || price === undefined) {
    return res.status(400).send({ message: "All fields are required" });
  }

  const products: any = readProducts();

  // generate ID baru (auto-increment berdasarkan ID Terakhir)
  const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  const newProduct: Product = {
    id: newId,
    title: title,
    description: description,
    stock: stock,
    price: price,
  };

  products.push(newProduct);
  writeProducts(products);

  return res.status(201).send({
    message: "Product created succefully",
    status: res.statusCode,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
