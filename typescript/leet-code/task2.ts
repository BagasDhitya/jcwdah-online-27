function intersect(nums1: number[], nums2: number[]): number[] {
  // frequency map -> untuk menghitung jumlah kemunculan buat mendeteksi irisan
  // 1. hitung kemunculan tiap nilai di nums1
  // 2. telusuri nums2: jika nilai masih punya sisa hitungan, masukkan ke
  // hasil lalu kurangi hitungannya, sehingga duplikat tidak terhitung
  // lebih banyak dari yang ada di nums1

  const freq: Record<number, number> = {};
  for (const n of nums1) {
    freq[n] = (freq[n] ?? 0) + 1;
  }

  const result: number[] = [];
  for (const n of nums2) {
    if ((freq[n] ?? 0) > 0) {
      // masih ada "jatah" untuk nilai ini
      result.push(n);
      freq[n]--; // jatah dipakai satu
    }
  }

  return result;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
