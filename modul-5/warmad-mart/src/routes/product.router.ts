import { Router } from "express";
import {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductHandler,
  deleteProductHandler,
  restoreProductHandler,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.post("/", createProductHandler);
productRouter.get("/", getAllProductsHandler);
productRouter.get("/:id", getProductByIdHandler);
productRouter.put("/:id", updateProductHandler);
productRouter.delete("/:id/soft-delete", deleteProductHandler);
productRouter.put("/:id/restore", restoreProductHandler);

export default productRouter;
