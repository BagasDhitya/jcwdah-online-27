// 1. Inisialisasi variabel akumulator dengan tipe eksplisit
let totalBelanja: number = 0;
const hargaBarang: number = 10000;

console.log("=== PROSES SCAN BARANG ===");

// 2. Looping untuk memproses 5 barang
for (let itemKe: number = 1; itemKe <= 5; itemKe++) {
  // 3. Pengecekan kedaluwarsa (khusus item ke-3)
  if (itemKe === 3) {
    console.log(
      `Item ke-${itemKe}: KEDALUWARSA! Barang dilewati, tidak dihitung.`,
    );
    continue; // lompat ke iterasi berikutnya, skip kode di bawah ini
  }

  // 4. Akumulasi total (hanya dijalankan jika TIDAK expired)
  totalBelanja += hargaBarang;
  console.log(
    `Item ke-${itemKe}: Rp${hargaBarang.toLocaleString("id-ID")} ditambahkan. Subtotal: Rp${totalBelanja.toLocaleString("id-ID")}`,
  );
}

console.log("\n=== PERHITUNGAN AKHIR ===");
console.log(
  `Total belanja sebelum diskon: Rp${totalBelanja.toLocaleString("id-ID")}`,
);

// 5. Logika diskon, dijalankan SETELAH loop selesai
let totalAkhir: number;

if (totalBelanja >= 30000) {
  const diskon: number = totalBelanja * 0.1;
  totalAkhir = totalBelanja - diskon;
  console.log(
    `Selamat! Anda mendapat diskon 10% = Rp${diskon.toLocaleString("id-ID")}`,
  );
} else {
  totalAkhir = totalBelanja;
  console.log("Belum memenuhi syarat diskon (minimal Rp30.000).");
}

console.log(
  `TOTAL YANG HARUS DIBAYAR: Rp${totalAkhir.toLocaleString("id-ID")}`,
);
