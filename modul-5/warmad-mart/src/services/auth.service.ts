// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import prisma from "../config/db.js";

export interface RegisterInput {
  email: string;
  password: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

/**
 * Service: Registrasi Customer
 */
export async function registerCustomer(data: RegisterInput) {
  // TODO 2: Cek apakah email sudah terdaftar di database
  // Hint: Gunakan prisma.user.findUnique()
  // TODO 3: Hash password user menggunakan bcrypt
  // Hint: Gunakan bcrypt.hash(password, saltRounds)
  // TODO 4: Simpan user baru ke DB dengan role 'CUSTOMER' & return data tanpa password
  // Hint: Gunakan prisma.user.create() dengan properti 'select'
}

/**
 * Service: Login User
 */
export async function loginUser(data: LoginInput) {
  // TODO 5: Cari user berdasarkan email
  // Hint: Jika user tidak ditemukan, throw error 401 (Email atau password salah)
  // TODO 6: Verifikasi password menggunakan bcrypt.compare()
  // Hint: Jika invalid, throw error 401
  // TODO 7: Generate JWT Access Token dan return data user (tanpa password)
  // Hint: Gunakan jwt.sign(payload, secretKey, { expiresIn: '1d' })
}
