console.log(" ---- IF STATEMENT ---- ");

// -- IF STATEMENT

// -- Single If
// skenario : membuat identity card
let age: number = 20;
if (age >= 17) {
  console.log("Now you can create identity card");
}

// skenario: memberikan pesan selamat datang untuk member VIP
let isVIPMember: boolean = false;
if (isVIPMember) {
  console.log("Welcome back, VIP Guest!");
}

// -- Nested If
// skenario: menentukan kelayakan menonton film rating >= 17 dan promo tiketnya
const userAge: number = 17;
const hasStudentCard: boolean = true;

// kondisi utama: cek umur minimum
if (userAge >= 17) {
  console.log("Access granted: You are allowed to watch this movie.");

  // kondisi bersarang: untuk cek promo tambahan khusus pengunjung yang lolos batasan umur
  if (hasStudentCard) {
    console.log("Student discount applied: You get a 20% discount!");
  }
}

console.log(" ---- IF ELSE STATEMENT ---- ");

// -- IF ELSE STATEMENT

// -- Single If Else
// skenario: cek kecukupan saldo untuk beli kopi
const accountBalance: number = 25000;
const coffePrice: number = 30000;

if (accountBalance >= coffePrice) {
  console.log("Transaction successful! Enjoy your coffe.");
} else {
  console.log("Transaction failed: Insufficient balance");
}

// -- Nested If Else
// skenario: login ke sebuah sistem
const username: string = "budi";
const accountType: string = "GUEST";

const registeredUsername: string = username;
const registeredAccountType: string = accountType;

if (username === registeredUsername) {
  if (accountType === registeredAccountType) {
    console.log("Access Granted: Welcome back John Doe!");
  }
} else {
  console.log("Invalid username");
}

console.log(" ---- ELSE IF STATEMENT ---- ");

// -- ELSE IF STATEMENT

// skenario: penentuan kategori harga tiket berdasarkan umur
const visitorAge: number = 12;

if (visitorAge < 5) {
  console.log("Ticket Price: Free");
} else if (visitorAge <= 17) {
  console.log("Ticket Price: Child Rate ($5)");
} else if (visitorAge <= 60) {
  console.log("Ticket Price: Adult Rate ($10");
} else {
  console.log("Ticket Price: Senior Citizen Rate ($6)");
}

console.log(" ---- SWITCH CASE STATEMENT ---- ");

// -- SWITCH CASE STATEMENT
// -- perbedaan dengan else if: switch case butuh break untuk berhenti

// skenario: menentukan aksi pengemudi berdasarkan warna lampu lalu lintas
const trafficLightColor: string = "yellow";

switch (trafficLightColor) {
  case "red":
    console.log("Stop! The light is red");
    break;
  case "yellow":
    console.log("Caution! Prepare to stop or clear the intersection");
    break;
  case "green":
    console.log("Go! The light is green.");
    break;
  default:
    console.log("Invalid traffic light color! Proceed with extreme caution");
    break;
}

// skenario: cek apakah user sudah mengisi nama profil
const usernamePerson: string = ""; // string kosong -> falsy value, kalau diisi nama -> truthy value

if (usernamePerson) {
  console.log("Welcome, " + usernamePerson);
} else {
  console.log("Please enter your username");
}

console.log(" ---- LOGICAL OPERATOR ---- ");

// --- LOGICAL OPERATOR
// AND (&&) -> wajib kedua statement bernilai TRUE
// OR (||) -> jika salah satu bernilai true
// NOT (!) -> negasi, lawan dari nilai yang sudah ditetapkan

// skenario: naik wahana roller coaster
const userHeightCm: number = 160;
const hasHeartCondition: boolean = false;

// kondisi: tinggi >= 145 AND NOT punya penyakit jantung (!hasHeartCondition artinya TIDAK punya penyakit jantung)
if (userHeightCm >= 145 && !hasHeartCondition) {
  console.log("Permission granted: You can ride the roller coaster!");
} else {
  console.log("Permission denied: Safety requirements not met.");
}

// skenario: statement combination
const statementA: boolean = true;
const statementB: boolean = false;
const statementX: boolean = !statementA;
const statementY: boolean = !statementX;

if (!statementY || statementA) {
  console.log("Correct");
} else {
  console.log("Invalid");
}

// skenario: validasi batasan user ingin login
const inputPassword = "johndoe123";
const inputAttempt = 8;
const maxAttempt = 5;

if (inputPassword === "johndoe123" && inputAttempt <= maxAttempt) {
  console.log("Access Granted");
} else {
  console.log("Access Denied or Max Attempt reached!");
}

console.log(" ---- TERNARY OPERATOR ---- ");

// -- cara if statement biasa
// const examScore: number = 80;
// let examResult: string;

// if (examScore >= 75) {
//   examResult = "PASSED";
// } else {
//   examResult = "FAILED";
// }

// -- cara ternary operator
const examScore: number = 80;
const examResult: string = examScore >= 75 ? "PASSED" : "FAILED";
console.log(examResult);
