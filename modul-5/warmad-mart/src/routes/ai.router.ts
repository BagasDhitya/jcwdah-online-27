import { Router } from "express";
import { getAllProducts } from "../services/product.service.js"; // Import service getAllProducts

const aiRouter = Router();

aiRouter.post("/chat", async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Pesan tidak boleh kosong" });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return res
        .status(500)
        .json({ message: "OPENROUTER_API_KEY belum dikonfigurasi" });
    }

    // 1. Ambil seluruh data produk aktif dari database
    const products = await getAllProducts();

    // 2. Format daftar produk agar ringkas & mudah dipahami AI
    const productListString =
      products.length > 0
        ? products
            .map(
              (p) =>
                `- ${p.title} (Kategori: ${p.category}, Harga: Rp${p.price.toLocaleString("id-ID")}, Stok: ${p.stock}${p.description ? `, Ket: ${p.description}` : ""})`,
            )
            .join("\n")
        : "Saat ini belum ada produk yang terdaftar di database.";

    // 3. Susun system prompt dengan melampirkan konteks produk
    const systemPrompt = `Kamu adalah AI Assistant resmi untuk Warmad Mart, sebuah toko kelontong yang menyediakan kebutuhan sehari-hari seperti sembako, perkakas, dan lain-lain.

Berikut adalah daftar katalog produk yang saat ini tersedia di Warmad Mart:
${productListString}

Aturan ketat:
1. Jawab pertanyaan pengguna dengan ramah dan membantu terkait Warmad Mart dan produk kebutuhan sehari-hari/sembako/perkakas.
2. Gunakan daftar katalog produk di atas untuk merekomendasikan produk, mengecek ketersediaan stok, atau menginformasikan harga kepada pelanggan.
3. Jika produk yang dicari tidak ada dalam daftar di atas atau stoknya 0, sampaikan secara sopan bahwa produk sedang tidak tersedia/habis.
4. Jika pengguna menanyakan hal di luar topik Warmad Mart, toko kelontong, atau produk kebutuhan sehari-hari, kamu HARUS merespons tepat dengan kalimat: "saya tidak dirancang untuk menjawab pertanyaan tersebut" tanpa penjelasan tambahan.`;

    // 4. Kirim request ke OpenRouter
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "nvidia/nemotron-3-ultra-550b-a55b:free",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message },
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenRouter API Error: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    return res.json({ reply });
  } catch (error) {
    next(error);
  }
});

export default aiRouter;
