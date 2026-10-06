interface TimeRange {
  start: string; // "HH:mm", 24 jam
  end: string; // "HH:mm"
}

// "09:30" -> 570. Dalam menit, waktu bisa dibandingkan sebagai angka.
// Membandingkan string langsung bisa salah, misalnya "9:00" > "10:00".
const toMinutes = (time: string): number => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

// 570 -> "09:30"
const toTime = (minutes: number): string => {
  const h = String(Math.floor(minutes / 60)).padStart(2, "0");
  const m = String(minutes % 60).padStart(2, "0");
  return `${h}:${m}`;
};

function mergeBusyTimes(meetings: TimeRange[]): TimeRange[] {
  // 1. Konversi ke menit, lalu urutkan berdasarkan waktu mulai.
  //    Setelah terurut, meeting yang overlap pasti berurutan.
  //    map membuat array baru, jadi input tidak berubah saat di-sort.
  const sorted = meetings
    .map((m) => ({ start: toMinutes(m.start), end: toMinutes(m.end) }))
    .sort((a, b) => a.start - b.start);

  const merged: { start: number; end: number }[] = [];

  // 2. Bandingkan setiap meeting dengan blok terakhir yang sudah digabung
  for (const current of sorted) {
    const last = merged[merged.length - 1];

    if (last && current.start <= last.end) {
      // Overlap atau bersentuhan: perpanjang blok terakhir.
      // Pakai Math.max karena meeting bisa berada di dalam meeting lain
      // (09:00-12:00 dan 10:00-11:00 harus tetap berakhir 12:00).
      last.end = Math.max(last.end, current.end);
    } else {
      // Tidak overlap: mulai blok baru (salin agar objek sorted tidak dimutasi)
      merged.push({ ...current });
    }
  }

  // 3. Kembalikan ke format "HH:mm"
  return merged.map((b) => ({ start: toTime(b.start), end: toTime(b.end) }));
}

function findFreeSlots(
  meetings: TimeRange[],
  workStart: string,
  workEnd: string,
): TimeRange[] {
  // Slot kosong = celah di antara blok sibuk yang sudah digabung
  const busy = mergeBusyTimes(meetings);
  const endOfWork = toMinutes(workEnd);
  const free: TimeRange[] = [];

  // cursor = titik awal pencarian celah berikutnya
  let cursor = toMinutes(workStart);

  for (const block of busy) {
    const blockStart = toMinutes(block.start);
    const blockEnd = toMinutes(block.end);

    // Celah berakhir saat blok sibuk mulai, tapi tidak boleh melewati jam kerja
    const gapEnd = Math.min(blockStart, endOfWork);
    if (cursor < gapEnd) {
      free.push({ start: toTime(cursor), end: toTime(gapEnd) });
    }

    // Math.max menangani meeting yang mulai sebelum jam kerja
    // (cursor tidak boleh mundur ke belakang workStart)
    cursor = Math.max(cursor, blockEnd);
  }

  // Sisa waktu setelah blok sibuk terakhir sampai jam kerja berakhir
  if (cursor < endOfWork) {
    free.push({ start: toTime(cursor), end: toTime(endOfWork) });
  }

  return free;
}

const meetings: TimeRange[] = [
  { start: "13:00", end: "14:00" },
  { start: "09:00", end: "10:30" },
  { start: "09:30", end: "10:15" },
  { start: "10:00", end: "11:00" },
  { start: "14:00", end: "15:00" },
];

console.log(mergeBusyTimes(meetings));
// [
