import { z as zod } from "zod";

// Skema untuk aturan registrasi customer
export const registerSchema = zod.object({
  body: zod.object({
    email: zod.email("Format email tidak valid").min(1, "Email wajib diisi"),
    password: zod.string().min(6, "Password minimal 6 karakter"),
  }),
});

// Skema untuk aturan login
export const loginSchema = zod.object({
  body: zod.object({
    email: zod.email("Format email tidak valid").min(1, "Email wajib diisi"),
    password: zod.string().min(1, "Password wajib diisi"),
  }),
});

// Type inference untuk TypeScript
export type RegisterInput = zod.infer<typeof registerSchema>["body"];
export type LoginInput = zod.infer<typeof loginSchema>["body"];
