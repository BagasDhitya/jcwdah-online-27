import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// TODO 1: Definisi Interface UserPayload untuk data user di dalam JWT Token
export interface UserPayload {
  id: string;
  email: string;
  role: "CUSTOMER" | "ADMIN";
}

// TODO 2: Declaration Merging untuk menambahkan properti `user` pada Express Request
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

/**
 * Middleware 1: Authentication (Cek & Verifikasi Token)
 */
export function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    // TODO 3: Ambil header 'authorization' & validasi format 'Bearer <token>'
    // Hint: Jika tidak ada, return res.status(401)
    // TODO 4: Ekstrak token dari string 'Bearer <token>'
    // TODO 5: Verifikasi token menggunakan jwt.verify() & secretKey
    // TODO 6: Simpan payload yang di-decode ke req.user, lalu panggil next()
  } catch (error) {
    // TODO 7: Tangani error jika token invalid/expired -> return res.status(401)
  }
}

/**
 * Middleware 2: Authorization / RBAC (Cek Role User)
 */
export function authorizeRoles(...allowedRoles: Array<"CUSTOMER" | "ADMIN">) {
  return (req: Request, res: Response, next: NextFunction) => {
    // TODO 8: Pastikan req.user sudah ada (sudah lolos middleware authenticate)
    // Hint: Jika belum ada, return res.status(401)
    // TODO 9: Cek apakah req.user.role termasuk dalam allowedRoles
    // Hint: Gunakan allowedRoles.includes(req.user.role). Jika tidak cocok, return res.status(403)
    // TODO 10: Jika cocok, panggil next()
  };
}
