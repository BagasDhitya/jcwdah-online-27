function majorityElement(nums: number[]): number {
  // algoritma: frequency map ( object { nilai : jumlah kemunculan })
  // telusuri array sekali, tambah hitungan tiap nilai, dan berhenti
  // begitu ada nilai yang hitungannya melebihi n/2 (itulah mayoritas)

  const count: Record<number, number> = {};
  // {3: 1, 2: 1, 3: 2} -> untuk hitung jumlah kemunculan

  const half = nums.length / 2;

  for (const n of nums) {
    count[n] = (count[n] ?? 0) + 1; // kalau belum ada, mulai dari 0
    if (count[n] > half) {
      return n; // syarat mayoritas terpenuhi
    }
  }

  return -1; // tidak akan tercapai karena soal menjamin mayoritas ada
  // -1 untuk merepresentasikan output tidak tercapai
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
