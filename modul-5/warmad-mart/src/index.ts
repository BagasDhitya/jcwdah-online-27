import express, { Request, Response } from "express";
import prisma from "./config/db.js";
import cors from "cors";

// ambil httpserverhandler yang didukung cloudflare
import { httpServerHandler } from "cloudflare:node";

// ambil config prisma yang udah dimodif
import { withPrisma } from "./config/db.js";
import productRouter from "./routes/product.router.js";
import orderRouter from "./routes/order.router.js";
import authRouter from "./routes/auth.router.js";

import { errorHandler } from "./middlewares/error.middleware.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import { initStockChecker } from "./utils/cron/stockChecker.js";
import { handleStockNotification } from "./utils/workers/stockWorker.js";

import { initSocket } from "./config/socket.js";

const app = express();
const PORT = 8000;

// CORS -> Cross Origin Resource Sharing
// tugasnya untuk membatasi akses ke API (whitelist untuk beberapa address tertentu aja)
// bisa multiple address

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  }),
);

app.use(express.json());

// supaya konteks request dari settingan cloudflare tidak hilang
app.use((_req, _res, next) => withPrisma(() => next()));

// buat http server untuk konfigurasi socket

// CLOUDFLARE : tidak bisa pakai http native
// const server = http.createServer(app);

// CLOUDFLARE : sementara socket io dimatikan
// inisialisasi socket.IO di atas HTTP Server
// initSocket(server);

// logger haruus dipasang paling atas untuk merecord semua aktivitas di app
app.use(loggerMiddleware);

app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
// app.use("/api/ai", aiRouter);

app.use("/api/test", (req: Request, res: Response) => {
  res.status(200).send({
    message: "ok",
  });
});

app.use("/api/queues/stock-notification", handleStockNotification);

// initStockChecker();

// error middleware HARUS diletakkan di akhir semua router
app.use(errorHandler);

// CLOUDFLARE: untuk sementara disesuaikan dengan setup yang diminta cloudflare
app.listen(PORT);
export default httpServerHandler({
  port: PORT,
});
