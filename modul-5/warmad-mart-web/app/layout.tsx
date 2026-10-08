import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_WARMAD_PROD_URL;

export const metadata: Metadata = {
  title: {
    default: "Warmad Mart | Solusi Kebutuhan Rumah Tangga Anda",
    template: "%s | Warmad Mart", // template otomatis untuk sub-halaman (misal: "Katalog Produk | Warmad Mart ")
  },
  description:
    "Belanja kebutuhan rumah tangga, sembako, dan produk harian lengkap, murah, dan cepat di Warmad Mart. Dapatkan promo menarik setiap hari!",
  keywords: [
    "Warmad Mart",
    "toko kelontong online",
    "kebutuhan rumah tangga",
    "sembako murah",
    "belanja online",
    "minimarket online",
    "toko kelontong online terdekat",
  ],
  openGraph: {
    title: "Warmad Mart | Solusi Kebutuhan Rumah Tangga Anda",
    description:
      "Belanja kebutuhan rumah tangga, sembako, dan produk harian lengkap, murah, dan cepat di Warmad Mart.",
    url: baseUrl,
    siteName: "Warmad Mart",
    locale: "id-ID",
    type: "website",
    images: [
      {
        url: "/comp_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Warmad Mart - Solusi Kebutuhan Rumah Tangga Anda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warmad Mart | Solusi Kebutuhan Rumah Tangga Anda",
    description:
      "Belanja kebutuhan rumah tangga, sembako, dan produk harian lengkap, murah, dan cepat di Warmad Mart.",
    images: ["/comp_logo.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
