import { Request, Response, NextFunction } from "express";
import * as authService from "../services/auth.service.js";

/**
 * Controller: Register Customer
 */
export async function registerHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // TODO 1: Extract email & password dari req.body
    // TODO 2: Validasi input sederhana (pastikan email & password ada)
    // Hint: Return res.status(400) jika ada yang kosong
    // TODO 3: Panggil authService.registerCustomer()
    // TODO 4: Kirim response sukses (201 Created) beserta data user
  } catch (error: any) {
    // TODO 5: Teruskan error ke Global Error Middleware
    next(error);
  }
}

/**
 * Controller: Login User
 */
export async function loginHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // TODO 6: Extract email & password dari req.body
    // TODO 7: Validasi input sederhana
    // TODO 8: Panggil authService.loginUser()
    // TODO 9: Kirim response sukses (200 OK) beserta token & data user
  } catch (error: any) {
    // TODO 10: Teruskan error ke Global Error Middleware
    next(error);
  }
}
