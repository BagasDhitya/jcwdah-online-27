// menggunakan memory storage agar file sementara tidak perlu disimpan ke disk/server lokal
// melainkan langsung diteruskan sebagai Buffer ke Cloudinary

import { Request } from "express";
import multer from "multer";
import path from "path";

// simpan file di memori sementara sebagai Buffer
const storage = multer.memoryStorage();

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png"];
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png"];

// filter file hanya untuk gambar
function fileFilter(
  req: Request,
  file: multer.File,
  cb: multer.FileFilterCallback,
) {
  const ext = path.extname(file.originalname).toLowerCase();

  const isMimeValid = ALLOWED_MIME_TYPES.includes(file.mimetype);
  const isExtValid = ALLOWED_EXTENSIONS.includes(ext);

  if (isMimeValid && isExtValid) {
    cb(null, true);
  } else {
    cb(new Error("Hanya file JPG dan PNG yang diperbolehkan!"));
  }
}

export const uploadSingleImage = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // limit ukuran file max 2MB
  },
}).single("imageUrl"); // nama field di form-data -> "image"

// Tipe Request yang sudah dilengkapi properti multer (req.file, req.files)
// Gunakan ini sebagai tipe `req` di controller yang memakai uploadSingleImage
export type MulterRequest = Request & {
  file?: multer.File;
  files?: multer.File[] | Record<string, multer.File[]>;
};
