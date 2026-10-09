import { Router } from "express";
import {
  registerHandler,
  loginHandler,
} from "../controllers/auth.controller.js";

const authRouter = Router();

// Endpoint Registrasi khusus Customer
authRouter.post("/register", registerHandler);

// Endpoint Login
authRouter.post("/login", loginHandler);

export default authRouter;
