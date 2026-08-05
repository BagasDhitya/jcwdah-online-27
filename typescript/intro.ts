// Typescript punya fitur pengecekan tipe data

let word: string = "Hello Typescript!";
// word = 20 Type 'number' is not assignable to type 'string'.ts(2322)

let count: number = 15;
let isActive: boolean = true;
let vehicle: { brand: string; year: number } = {
  brand: "Toyota",
  year: 2021,
};
let devices: [string, string, string] = ["Apple", "Samsung", "Oppo"];
let years: number[] = [1999, 1998, 1997, 2001, 2005];

// [string, string, string] => hanya boleh diisi 3 string
// number[] => boleh dinamis, tapi harus diisi number

// -- STRING BUILT IN METHOD
// slice -> untuk mengambil sebagian teks atau isi array tanpa mengubah data aslinya
// trim -> untuk menghapus spasi yang tidak dibutuhkan baik di awal atau akhiran teks
// concat -> untuk menggabungkan dua atau lebih teks/array menjadi satu

let fullTitle: string = "Fullstack Developer";
let category: string = fullTitle.slice(0, 9);
console.log("SLICE : ", category);

let dirtyEmail: string = "  user@gmail.com  ";
let cleanEmail: string = dirtyEmail.trim();
console.log("TRIM (Sebelum):", dirtyEmail);
console.log("TRIM (Sesudah):", cleanEmail);

let firstName: string = "Ahmad";
let lastName: string = "Fauzi";

let fullName: string = firstName.concat(" ", lastName);
console.log("CONCAT : ", fullName);

// tipe data bisa diisi lebih dari satu jenis
let uniqueData: string | number = "2005"; // bisa diisi dua tipe data

// -- NUMBER BUILT IN METHOD
let uniqueNumber: number = 8.5;
console.log(parseInt(uniqueNumber.toFixed(0)));

// -- BASIC OPERATOR
let numA: number = 10;
let numB: number = 3;

let sum: number = numA + numB; // penjumlahan
let multiplication: number = numA * numB; // perkalian
let division: number = numA / numB; // pembagian
let modulo: number = numA % numB; // mencari sisa hasil bagi
let exponent: number = numA ** numB; // perpangkatan

// console.log(sum);
// console.log(multiplication);
// console.log(division);
// console.log(modulo);
// console.log(exponent);

// -- INCREMENT & DECREMENT
// increment -> ditambahkan 1
// decrement -> dikurangin 1
let specialNumber: number = 5;
specialNumber++;
console.log(specialNumber);
specialNumber--;
console.log(specialNumber);

// POSTFIX -> cetak nilai x dulu (10), baru x bertambah jadi 11 di memori
let x: number = 10;
console.log("Postfix (x++) : ", x++);
console.log("Nilai x sekarang : ", x);

let y: number = 10;
// PREFIX -> tambahkan y dulu jadi 11, baru cetak nilai barunya (11)
console.log("Prefix (++y) : ", ++y);
console.log("Nilai y sekarang : ", y);
