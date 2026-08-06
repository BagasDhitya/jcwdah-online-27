// --- Mencari sudut segitiga
const angleA: number = 80;
const angleB: number = 65;

// Sudut segitiga selalu 180 derajat
const angleC: number = 180 - (angleA + angleB);
// console.log(angleC);

// ------------------------
// --- Konversi Hari ke Tahun, Bulan, dan Sisa hari
const totalDays: number = 366; // bisa diganti dengan 366

// dapatkan jumlah tahun dengan pembagian bulat (1 tahun = 365 hari)
const years: number = Math.floor(totalDays / 365);
const remainingDaysAfterYears: number = totalDays % 365;

// dapatkan jumlah bulan dari sisa hari (1 bulan = 30 hari)
const months: number = Math.floor(remainingDaysAfterYears / 30);

// dapatkan sisa hari terakhir
const days: number = remainingDaysAfterYears % 30;
console.log(
  `${totalDays} days -> ${years} year, ${months} month, ${days} days`,
);

// ------------------------
// --- Selisih tanggal dalam hari
const date1: Date = new Date("2022-01-20");
const date2: Date = new Date("2022-01-22");

// console.log(typeof date1);
// console.log(typeof date2);

// hitung selisih waktu dalam milidetik
const differenceInMiliseconds: number = date2.getTime() - date1.getTime();

// konversi milidetik ke hari (1 hari = 1000ms * 60s * 60m * 24h)
const differenceInDays: number = differenceInMiliseconds / (1000 * 3600 * 24);
console.log(differenceInDays);
