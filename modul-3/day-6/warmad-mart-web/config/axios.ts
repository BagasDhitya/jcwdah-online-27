import axios from "axios";

// mengambil Base Url dari file .env
const API_BASE_URL = process.env.NEXT_PUBLIC_WARMAD_DEV_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
