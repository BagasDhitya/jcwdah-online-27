// kode sinkronus -> berjalan dari atas ke bawah berurutan
// kalau ada satu step yang tidak dikerjakan, maka tidak bisa dilanjutkan

console.log("[Sync] Step 1: Start application");
console.log("[Sync] Step 2: Processing fast task");
console.log("[Sync] Step 3: End application");

// kode asinkronus -> melempar proses ke background (processing time)
// eksekusi berdasarkan processing time, bukan urutan

console.log("[Async] Step 1: Start long fetching data process");

setTimeout(() => {
  console.log("[Async] Step 3: Data fetched successfully after 2 seconds");
}, 2000); // 2000 ms = 2s

console.log(
  "[Async] Step 2: Main thread is NOT blocked, running other task immediately",
);

// bukti kalau asynchronous tidak memblokir thread utama
// dilempar ke background process saat dieksekusi oleh setTimeout

console.log("[Proof] Step 1: Requesting resource ...");

setTimeout(() => {
  console.log("[Proof] Step 3: Heavy operation finished in background");
}, 0);

console.log(
  "[Proof] Step 2: Application stays responsive and finishes rendering UI!",
);
