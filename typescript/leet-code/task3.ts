function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // Algoritma: simpan indeks TERAKHIR tiap nilai di object.
  // Saat ketemu nilai yang pernah muncul, cukup cek jaraknya dari
  // indeks terakhir tadi (i - prev <= k). Indeks terakhir sudah yang
  // terdekat, jadi tidak perlu membandingkan dengan indeks yang lebih lama.
  // Waktu O(n), memori O(n).
  const lastIndex: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const prev = lastIndex[nums[i]];

    console.log("iterasi prev: ", prev);

    if (prev !== undefined && i - prev <= k) return true; // duplikat dekat
    lastIndex[nums[i]] = i; // perbarui ke indeks terbaru

    console.log("last index: ", lastIndex[nums[i]]);
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
