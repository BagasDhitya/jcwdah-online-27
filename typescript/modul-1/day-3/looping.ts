console.log(" --- FOR LOOP STATEMENT --- ");

// -- LOOPING FOR STATEMENT
// -- for: perulangan untuk bilangan yang sudah diketahui
// jika ada nested looping, akan menghasilkan looping di dalam looping

// skenario: menaiki anak tangga yang jumlahnya ada 10
// step: number = 1 -> BATAS AWAL
// step <= 10 -> BATAS AKHIR
// step++ -> ACTION

for (let step: number = 1; step <= 10; step++) {
  console.log("Naik tangga ke - : ", step);
}

// 0,1, , , , , , ... 10
// , , , , 0, 1, ... 10

// -- nested looping for
for (let x: number = 0; x < 6; x++) {
  console.log("first section : ", x);
  for (let y: number = 0; y < 4; y++) {
    console.log(" --- second section : ", y);
  }
}

console.log(" --- WHILE LOOP STATEMENT --- ");

// -- WHILE STATEMENT
// -- while: perulangan untuk bilangan yang belum diketahui (menggunakan patokan true/false dalam actionnya)

// skenario: mengisi baterai HP dari kondisi saat ini sampai penuh (100%)
let batteryLevel: number = 50;

while (batteryLevel < 100) {
  batteryLevel++;
  console.log("Charging ... Battery level : ", batteryLevel);
}

console.log("Battery fully charged");

// -- nested while
// skenario: membersihkan 2 piring kotor sampai bersih total
let dirtyPlatesLeft: number = 2;

while (dirtyPlatesLeft > 0) {
  console.log("Taking plate number " + dirtyPlatesLeft + " from sink.");

  let scrubCount: number = 0; // jumlah gosokan sabun per piring
  let isClean: boolean = false;

  // gosok piring minimal 3x gosokan sampai bersih
  while (!isClean) {
    scrubCount++;
    console.log(" Scrubbing plate ... (" + scrubCount + " time) ");

    if (scrubCount >= 3) {
      isClean = true;
      console.log(" Plate is clean!");
    }
  }

  --dirtyPlatesLeft; // piring selesai, lanjut ke piring berikutnya
}

console.log("All plates washed successfully!");
