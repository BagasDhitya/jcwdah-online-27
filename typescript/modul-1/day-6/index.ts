// Time Complexity -> mengukur seberapa banyak langkah komputasi yang harus dijalankan seiring bertambahnya input
// Space Complexity -> mengukur seberapa banyak memori tambahan yang dikonsumsi seiring bertambahnya input

// -- Constant Time O(1)
// -> kebutuhan waktu atau memori selalu tetap

// 1. Cek Elemen Pertama Antrian
function getFirstCustomer(queueList: string[]) {
  return queueList[0]; // hanya melakukan 1 langkah komputasi langsung ke index 0
}

const queue: string[] = ["Alice", "Bob", "Charlie", "David"];
const nextCustomer: string | undefined = getFirstCustomer(queue);

console.log(
  "[1.] Cek Elemen Pertama Antrian (Time Complexity - O(1)): ",
  nextCustomer,
);

// 2. Membuat Laporan Ringkasan Status Penjualan
function createStoreStatusReport(totalSales: number) {
  // mengalokasikan 1 memori objek bernama report
  const report = {
    status: totalSales > 100 ? "Target Achieved" : "Needs Improvement",
    total: totalSales,
  };

  return report;
}

const currentReport = createStoreStatusReport(150);

console.log(
  "[2.] Membuat Laporan Ringkasan Status Penjualan (Space Complexity - O(1)): ",
  currentReport,
);

// -- Linear Search
// -> metode pencarian paling dasar yang bekerja dengan cara periksa setiap elemen data satu per satu secara berurutan
function findGuestSeat(guestList: string[], targetName: string) {
  for (let i: number = 0; i < guestList.length; i++) {
    if (guestList[i] === targetName) {
      return i; // ditemukan pada nomer meja (index)
    }
  }

  return -1; // tamu tidak ditemukan di dalam daftar
}

// 3. Menemukan Kursi Pengunjung
const reservations: string[] = ["Budi", "Siti", "Dewi", "Eko", "Rian"];

// best case O(1) - "Budi" ada di urutan pertama
const seatBudi = findGuestSeat(reservations, "Budi");

// worst case O(n) - "Rian" ada di paling akhir atau "Zaki" tidak ditemukan
const seatRian = findGuestSeat(reservations, "Rian");
const seatZaki = findGuestSeat(reservations, "Zaki");

console.log("[3.] Linear Search: ");
console.log(" ------ [A] Seat Budi: ", seatBudi);
console.log(" ------ [B] Seat Rian: ", seatRian);
console.log(" ------ [C] Seat Zaki: ", seatZaki);

// --- Binary Search
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let iteration = 0;

  console.log(`Array: [${arr.join(", ")}]`);
  console.log(`Target: ${target}\n`);

  while (left <= right) {
    iteration++;
    const mid = Math.floor((left + right) / 2);

    const currentVal = arr[mid];
    if (currentVal === undefined) {
      break;
    }

    if (currentVal === target) {
      console.log(`  ✅ Ditemukan! target ada di index ${mid}\n`);
      return mid;
    } else if (currentVal < target) {
      console.log(`  ➡️ arr[mid] < target, geser left ke ${mid + 1}\n`);
      left = mid + 1;
    } else {
      console.log(`  ⬅️ arr[mid] > target, geser right ke ${mid - 1}\n`);
      right = mid - 1;
    }
  }

  console.log("❌ Target tidak ditemukan dalam array.");
  return -1;
}

// contoh pemakaian
const data = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
console.log("[4.] Binary Search: ");
binarySearch(data, 23);
