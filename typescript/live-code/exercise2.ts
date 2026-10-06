interface RawUser {
  id: number;
  name?: string | null;
  email?: string | null;
  tags?: string | string[];
  address?: { city?: string | null } | null;
}

interface User {
  id: number;
  name: string;
  email: string | null;
  tags: string[];
  city: string;
}

// Helper: ubah tags (string atau array) menjadi string[] yang bersih
function normalizeTags(tags: RawUser["tags"]): string[] {
  if (tags === undefined) return [];

  // Type narrowing: string dipecah dengan koma, array dipakai langsung
  const list = Array.isArray(tags) ? tags : tags.split(",");

  // map membuat array baru, jadi array di data mentah tidak ikut berubah
  return list.map((t) => t.trim()).filter((t) => t !== "");
}

function normalizeUsers(raw: RawUser[]): User[] {
  // map menghasilkan objek baru untuk setiap user, input tidak dimutasi
  return raw.map((u) => {
    // Optional chaining (?.) mencegah crash saat address bernilai null
    // `||` dipakai (bukan `??`) agar string kosong juga jatuh ke default
    const name = u.name?.trim() || "Anonymous";
    const email = u.email?.trim().toLowerCase() || null;
    const city = u.address?.city?.trim() || "Unknown";

    return { id: u.id, name, email, tags: normalizeTags(u.tags), city };
  });
}

const rawUsers: RawUser[] = [
  {
    id: 1,
    name: " Budi ",
    email: "BUDI@Mail.com",
    tags: "js, ts",
    address: { city: "Depok" },
  },
  { id: 2, name: null, email: null, tags: ["react"], address: null },
  { id: 3 },
];

console.log(normalizeUsers(rawUsers));
