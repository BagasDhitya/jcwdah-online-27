import { Request, Response, NextFunction } from "express";

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const startTime = process.hrtime();
  const requestDate = new Date().toISOString();

  res.on("finish", () => {
    const diff = process.hrtime(startTime);
    const latencyInMs = (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(2);

    console.log(
      `[${requestDate}] ${req.method} ${req.originalUrl} - ${res.statusCode} (${latencyInMs} ms)`,
    );
  });

  next();
}
