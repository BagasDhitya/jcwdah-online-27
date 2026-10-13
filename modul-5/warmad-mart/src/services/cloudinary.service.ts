import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

// gagal cepat kalau env belum terisi
if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  throw new Error("Konfigurasi Cloudinary di .env belum lengkap");
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME.trim(),
  api_key: CLOUDINARY_API_KEY.trim(),
  api_secret: CLOUDINARY_API_SECRET.trim(),
  secure: true,
});

// upload file buffer dari Multer ke Cloudinary
export async function uploadToCloudinary(
  fileBuffer: Buffer,
  folder: string = "warmad-products",
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
      },
      (error, result) => {
        if (error || !result) {
          return reject(error || new Error("Cloudinary upload failed"));
        }
        resolve(result);
      },
    );

    uploadStream.end(fileBuffer);
  });
}

// hapus file dari cloudinary menggunakan Public ID
export async function deleteFromCloudinary(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId);
}
