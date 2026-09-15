import express, { Application } from "express";
import productRouter from "./routes/product.router.js";
// import pool from "./config/db.js"; // Un-comment file koneksi PostgreSQL kamu

const app: Application = express();
const PORT: number = 8000;

app.use(express.json());

// Mounting router dengan prefix /api
app.use("/api", productRouter);

// Function untuk memastikan koneksi DB aman sebelum server jalan
async function startServer() {
  try {
    // TODO: Cek koneksi ke PostgreSQL (misal: await pool.query("SELECT NOW()"))
    // console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

startServer();
