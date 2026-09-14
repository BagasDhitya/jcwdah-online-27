import { Router } from "express";
import {
  getHello,
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { loggerMiddleware } from "../middlewares/logger.middleware.js";

const router = Router();

router.use(loggerMiddleware);

router.get("/hello", getHello);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
