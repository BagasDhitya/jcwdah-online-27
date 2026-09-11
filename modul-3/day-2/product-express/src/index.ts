import express, { Application } from "express";
import productRouter from "./routes/product.router.js";

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());

// Mounting router dengan prefix /api

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
