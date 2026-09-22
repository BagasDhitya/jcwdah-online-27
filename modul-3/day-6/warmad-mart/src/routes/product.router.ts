import { Router } from "express";
import {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductHandler,
  deleteProductHandler,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/", createProductHandler);
productRouter.get("/", getAllProductsHandler);
productRouter.get("/:id", getProductByIdHandler);
productRouter.put("/:id", updateProductHandler);
productRouter.delete("/:id", deleteProductHandler);

export default productRouter;
