import express, { Request, Response, Application } from "express";
import products from "./data/products.json" with { type: "json" };

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
