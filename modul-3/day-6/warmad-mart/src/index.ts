import express from "express";
import dotenv from "dotenv";
// import prisma from "./config/db";
// import productRouter from "./routes/product.router";

// TODO 1: Muat environment variables dari file .env menggunakan dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// TODO 2: Tambahkan middleware agar Express dapat membaca request body format JSON
// app.use(...)

// TODO 3: Daftarkan router utama (contoh: prefix '/api/products' menggunakan productRouter)
// app.use(...)

/**
 * Fungsi untuk menguji koneksi ke database sebelum server berjalan
 */
async function testDbConnection() {
  try {
    // TODO 4: Jalankan query sederhana via prisma (misal: prisma.$queryRaw`SELECT 1`) untuk tes koneksi
    // Log pesan sukses jika berhasil terhubung
  } catch (error) {
    // Log error dan hentikan proses (process.exit(1)) jika koneksi gagal
  }
}

/**
 * Fungsi untuk menjalankan server Express dan melakukan verifikasi koneksi DB
 */
async function startServer() {
  // TODO 5: Panggil fungsi testDbConnection() terlebih dahulu
  // TODO 6: Jalankan server Express menggunakan app.listen di port yang ditentukan
}

// TODO 7: Tangani event Graceful Shutdown (process.on('SIGINT', ...))
// Putuskan koneksi Prisma (prisma.$disconnect()) saat server dihentikan (Ctrl + C)

startServer();
