import express from "express";
import prisma from "./config/db.js";

import productRouter from "./routes/product.router.js";
import orderRouter from "./routes/order.router.js";

import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

// error middleware HARUS diletakkan di akhir semua router
app.use(errorHandler);

/**
 * Fungsi untuk menguji koneksi ke database sebelum server berjalan
 */
async function testDbConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Koneksi ke database Neon berhasil terhubung!");
  } catch (error) {
    console.error("❌ Gagal terhubung ke database Neon: ", error);
    process.exit(1);
  }
}

/**
 * Fungsi untuk menjalankan server Express dan melakukan verifikasi koneksi DB
 */
async function startServer() {
  await testDbConnection();

  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

startServer();
