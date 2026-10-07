import axios from "axios";

// Memilih URL berdasarkan environment aktif
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_WARMAD_PROD_URL
    : process.env.NEXT_PUBLIC_WARMAD_DEV_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
