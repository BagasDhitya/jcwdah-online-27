function compressString(s: string): string {
  let result = "";
  let count = 1;

  // Loop sampai i === s.length (bukan < s.length).
  // Di iterasi terakhir, s[i] bernilai undefined, sehingga pasti berbeda
  // dengan s[i - 1] dan kelompok karakter terakhir ikut tertulis.
  // Untuk string kosong, loop tidak berjalan dan result tetap "".
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++; // karakter masih sama, lanjut hitung
    } else {
      // Kelompok berakhir: tulis karakter, angka hanya jika lebih dari 1
      result += s[i - 1] + (count > 1 ? count : "");
      count = 1; // reset untuk kelompok berikutnya
    }
  }

  // Kompresi hanya dipakai jika benar-benar lebih pendek
  return result.length < s.length ? result : s;
}

console.log(compressString("aabcccccaaa"));
console.log(compressString("abc"));
console.log(compressString("aabb"));
console.log(compressString(""));
