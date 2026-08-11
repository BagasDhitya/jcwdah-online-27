// --- ARRAY
// -> salah satu tipe data collection
// -> berupa list, yang dibaca menggunakan index (index selalu diawali dari angka 0)

const productPrices: number[] = [15000, 25000, 50000];
const userRoles: string[] = ["admin", "editor", "customer"];
const combinationChar: Array<string | number | undefined> = [
  "john doe",
  1998,
  undefined,
];

console.log("akses index ke 2 dari product prices: ", productPrices[2]);
console.log("akses index ke 0 dari user roles: ", userRoles[0]);
console.log(
  "akses index ke 2 dari combination character: ",
  combinationChar[2],
);

// array with object -> menggunakan interface
// interface -> penulisannya menggunakan PascalCase
interface UserProduct {
  productId: string;
  productName: string;
  price: number;
  isAvailable: boolean;
}

// deklarasi array of objects
const shoppingCartItems: UserProduct[] = [
  {
    productId: "PROD-01",
    productName: "Wireless Mouse",
    price: 150000,
    isAvailable: true,
  },
  {
    productId: "PROD-02",
    productName: "Mechanical Keyboard",
    price: 450000,
    isAvailable: false,
  },
];

console.log("isi keranjang belanja keseluruhan : ", shoppingCartItems);

console.log(" --- ARRAY LOOPING --- ");
// for of -> melakukan looping langsung pada nilai elemen dari sebuah Array, kita tidak perlu mikirin index

// skenario: mengirim email notifikasi ke user
const customerEmail: string[] = [
  "budi@gmail.com",
  "siti@yahoo.com",
  "andi@outlook.com",
];

// ambil nilai email satu per satu
for (const email of customerEmail) {
  console.log(`Sending promotion email to: ${email}`);
}

// skenario: menghitung total belanjaan
const itemPrices: number[] = [15000, 30000, 50000];
let totalAmount: number = 0;

for (const price of itemPrices) {
  totalAmount += price; // totalAmount = totalAmount + price
}

console.log(`Total payment: Rp ${totalAmount}`);

// for each -> method bawaan array yang menerima sebuah callback function
const fruits: string[] = ["Apple", "Orange", "Banana"];

fruits.forEach((fruit, index, arr) => {
  console.log(index + " : " + fruit + " in " + arr);
});

console.log(" --- PERBEDAAN FOR EACH DAN MAP --- ");

// map -> seperti for each, bedaanya hanya digunakan untuk mengubah/transform data
// perbedaan for each dan map:
const originPrices: number[] = [10000, 20000, 30000];

const forEachResult = originPrices.forEach((price) => {
  return price * 2;
});
const mapResult = originPrices.map((price) => {
  return price * 2;
});

console.log("Hasil for each: ", forEachResult); // -> hasil pasti undefined
console.log("Hasil map: ", mapResult); // -> [20000, 40000, 60000]

console.log(" --- PUSH, POP, UNSHIFT, SHIFT --- ");
// push -> menambahkan elemen di belakang
// pop -> menghapus elemen terakhir di belakang
// unshift -> nambah elemen di depan
// shift -> hapus elemen pertama di depan

// skenario: manajemen menu MBG
const mbgMenuItems: string[] = ["Nasi Putih", "Ayam Goreng", "Tempe Orek"];
console.log("Initial Menu: ", mbgMenuItems);

// 1. PUSH, menambahkan "Susu UHT" di ujung akhir elemen
mbgMenuItems.push("Susu UHT");
console.log("After PUSH (Susu UHT): ", mbgMenuItems);

// 2. POP, menghapus menu ujung akhir elemen ("Susu UHT, misalnya kehabisan stok")
mbgMenuItems.pop();
console.log("After POP (Susu UHT): ", mbgMenuItems);

// 3. UNSHIFT, menambahkan "Buah Pisang" di ujung depan elemen
mbgMenuItems.unshift("Buah Pisang");
console.log("After UNSHIFT (Buah Pisang): ", mbgMenuItems);

// 4. SHIFT, menghapus menu ujung depan elemen ("Buah Pisang, misalnya sudah dibagikan")
mbgMenuItems.shift();
console.log("After SHIFT (Buah Pisang): ", mbgMenuItems);

console.log(" --- FUNCTIONAL STATEMENT --- ");

// function -> mengumpulkan potongan kode ke dalam satu wadah yang terstruktur
// function -> terdiri dari parameter dan argumen
// skenario: menghitung harga discount

// totalPrice dan discountPercentage adalah parameter dari calculcateDiscountPrice
function calculateDiscountPrice(
  totalPrice: number,
  discountPercentage: number,
) {
  const discountAmount: number = (totalPrice * discountPercentage) / 100;
  const finalPrice: number = totalPrice - discountAmount;

  return finalPrice; // -> mengembalikan hasil perhitungan ke luar function
}

// buat dulu argumennya
const itemPrice: number = 200000;
const promoDiscount: number = 15; // diskon 15%

// memanggil fungsi dan menyimpan hasilnya ke dalam variabel
const finalAmountToPay: number = calculateDiscountPrice(
  itemPrice,
  promoDiscount,
);

console.log(`Total yang harus dibayar: Rp ${finalAmountToPay}`);

// bedanya pake console.log dan return
// function sumCountOne(x: number, y: number) {
//   return x + y;
// }

// function sumCountTwo(x: number, y: number) {
//   console.log(x + y);
// }

// console.log(
//   "hasil sumCount dengan return ditambah 10: ",
//   sumCountOne(5, 5) + 10,
// );
// console.log(
//   "hasil sumCount dengan console.log ditambah 10: ",
//   sumCountTwo(5, 5) + 10,
// );

console.log(" --- DEFAULT PARAMETER --- ");

// -- default parameter -> kita bisa memberikan nilai awal ke parameter
function multiply(a: number, b: number = 2) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 7)); // kalo kita ganti 7, 2 akan direplace

console.log(" --- REST PARAMETER --- ");

// -- rest parameter -> satu parameter bisa digunakan untuk banyak argumen
// skenario: menampung semua harga barang

function calculateCashierReceipt(
  customerName: string,
  ...itemPrices: number[]
) {
  let totalBill: number = 0;

  // itemPrices harus dilooping untuk mencari total
  for (const price of itemPrices) {
    totalBill += price;
  }

  console.log(`Receipt generate for ${customerName}`);
  return totalBill;
}

// output 1: pembeli budi cuma beli 2 barang
const totalBudi: number = calculateCashierReceipt("Budi", 5000, 12000);
console.log(`Total Budi: Rp ${totalBudi}`);

// output 2: pembeli siti beli 7 barang
const totalSiti: number = calculateCashierReceipt(
  "Budi",
  5000,
  12000,
  7500,
  6500,
  3000,
  4000,
  5000,
);
console.log(`Total Siti: Rp ${totalSiti}`);

console.log(" --- CLOSURE FUNCTION --- ");

// closure -> mengembalikan sebuah function lain dengan cara mengingatnya di dalam variabel
function greeting(name: string) {
  const defaultMessage: string = "Hello";

  return function () {
    return defaultMessage + " " + name;
  };
}

const greetingBudi = greeting("Budi");
const greetingSiti = greeting("Siti");

console.log(greetingBudi());
console.log(greetingSiti());

console.log(" --- CURRYING FUNCTION --- ");

// currying -> teknik mengubah fungsi yang tadinya menerima banyak parameter sekaligus f(a,b,c)
// dipecah menjadi fungsi berantai yang masing" menerima satu parameter secara bertahap

function multiplier(factor: number) {
  return function (number: number) {
    return number * factor;
  };
}

console.log(multiplier(5)(3));
console.log(multiplier(10)(3));

const mul3 = multiplier(3);
const mul5 = multiplier(5);

console.log(mul3(5));
console.log(mul5(5));

console.log(" --- RECURSIVE FUNCTION --- ");
// recursive: teknik function yang memanggil dirinya sendiri sampai base case terpenuhi

function startCountDown(secondsLeft: number) {
  // Base Case: kondisi berhenti
  if (secondsLeft <= 0) {
    console.log("Promo Flash Sale Dimulai!");
    return;
  }

  console.log(`Promo dimulai dalam ${secondsLeft} detik...`);

  // recursive step: memanggil diri sendiri dengan data yang mengecil
  startCountDown(secondsLeft - 1);
}

startCountDown(3);
