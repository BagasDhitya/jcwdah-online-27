## 1. Skenario Bisnis & Spesifikasi Tugas

Sebuah minimarket ingin membuat program otomatis untuk memeriksa 5 barang di keranjang belanja pembeli. Program bertugas untuk:

1. Menghitung total belanjaan secara akumulatif.
2. Memeriksa status kelayakan barang (kedaluwarsa atau tidak).
3. Memberikan diskon jika memenuhi syarat minimal pembelanjaan.

### Detail Aturan Bisnis:

- **Pemindaian Barang:** Memproses 5 barang secara berurutan (Item 1 sampai Item 5).
- **Pemeriksaan Kedaluwarsa:** Saat memindai **Item ke-3**, barang dianggap kedaluwarsa (_expired_). Program harus menampilkan pesan peringatan dan melewatinya (`continue`) tanpa menambahkan harganya ke total belanja.
- **Harga Barang Normal:** Setiap barang yang tidak kedaluwarsa memiliki harga **Rp 10.000**.
- **Ketentuan Diskon:**
  - Jika total belanja >= **Rp 30.000**, pembeli mendapatkan diskon **10%**.
  - Jika total belanja < **Rp 30.000**, tidak ada diskon yang diberikan.
