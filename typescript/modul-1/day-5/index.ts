// --- OBJECT ORIENTED PROGRAMMING (OOP) ---

const myLaptop = {
  brand: "Macbook Pro",
  ramGb: 16,
  isTurnedOn: false, // -> property
  turnOn() {
    this.isTurnedOn = true; // this -> untuk menunjuk properti milik object itu sendiri
    console.log("Laptop is booting up ...");
    return true;
  }, // method -> fungsi yang ada di dalam object/class
};

const myPhone = {
  brand: "Samsung",
  storageGb: 256,
  color: "Black",
};

// -- Accessing Value (mengakses nilai: dot & bracket)
// dot notation
console.log("brand of my laptop: ", myLaptop.brand);
console.log("turn on my laptop: ", myLaptop.turnOn());

// bracket notation
const targetKey = "storageGb";
console.log("storage of my phone: ", myPhone[targetKey]);

// -- Add & Delete Property
// menambahkan property baru, notes: di ts itu harus didefinisikan dulu tipe datanya
// untuk contoh add & delete property di index.js

// myLaptop.storageGb = 512;
// console.log("after added property on myLaptop: ", myLaptop);

// -- Optional Chaining (?.)
// memeriksa properti tanpa risiko app crash jika nilainya undefined
// untuk contoh optional chaining di index.js
// const cameraRes = myPhone.specs?.cameraMegaPixels;

// -- Accessing Keys (mengambil daftar kunci dari Objek)
// mengambil semua nama properti menggunakan method built in Object.keys

const phoneKeys = Object.keys(myPhone);
const laptopKeys = Object.keys(myLaptop);
console.log(phoneKeys);
console.log(laptopKeys);

console.log(" ---- MUTABLE & IMMUTABLE ---- ");
// immutable -> tipe variabel yang tidak bisa dirubah
// mutable -> tipe variabel yang bisa dirubah

// -- Immutable (Primitive)
let userScore: number = 100;
let savedScore: number = userScore; // mengopi nilai dari userScore secara independen

userScore = 150; // membuat nilai baru 150 di memori

console.log(userScore);
console.log(savedScore);

// -- Mutable (Non-Primitive)
const shoppingCart: string[] = ["Apple", "Milk"];
const sharedCart: string[] = shoppingCart; // mengopi alamat memori dari shoppingCart

// tambahkan bread untuk mutate/ubah isi array
shoppingCart.push("Bread");

console.log(shoppingCart);
console.log(sharedCart);

console.log(" ---- LOOPING IN OBJECT ---- ");

const laptopProduct = {
  brand: "Asus ROG",
  processor: "Intel i9",
  isAvailable: true,
};

for (const key in laptopProduct) {
  const value = laptopProduct[key as keyof typeof laptopProduct];
  console.log(`Property "${key}" : ${value}`);
}

console.log(" ---- DESTRUCTURING ASSIGNMENT ---- ");
// langsung mengambil properti di objek/array
// batasan: ketika ada dua objek dengan nama sama tapi isi beda, maka destructuring tidak berlaku

const userProfile = {
  username: "john_dev",
  email: "john.dev@example.com",
  age: 26,
  city: "Jakarta",
  paymentAccount: {
    bank: "BCA",
    account: 123456,
  },
};

const { username, email, age, city, paymentAccount } = userProfile;
console.log(username);
console.log(email);
console.log(age);
console.log(city);
console.log(paymentAccount.account);
console.log(paymentAccount.bank);

console.log(" --- SPREAD OPERATOR --- ");
// untuk menduplikat value dari satu object/array ke object/array lain

const updatedProfile = {
  ...userProfile, // salin copyan disini
  hobbies: ["coding", "gaming"],
};

console.log("after copying userProfile: ", updatedProfile);

console.log(" --- INTERFACE/TYPES --- ");

// secara harfiah sebenernya sama, penggunaannya yang beda
// interface -> dikhususkan untuk object utuh
// types -> dikhususkan untuk variasi tipe data

type AuthorizationUser = "DEFAULT" | "ADMIN";

interface BaseUser {
  id: string;
  email: string;
  role: AuthorizationUser;
}

interface AdvancedUser extends BaseUser {
  permission: string[];
}

const userDefault: AdvancedUser = {
  id: "DEF-01",
  email: "default@example.com",
  role: "DEFAULT",
  permission: [""],
};

const userAdmin: AdvancedUser = {
  id: "ADMIN-01",
  email: "admin@example.com",
  role: "ADMIN",
  permission: [""],
};

console.log(" --- CLASS --- ");
// class -> sebuah struktur untuk membangun sekumpulan properti maupun method

class Vehicle {
  brand: string = "Honda Vario";
  transmission: string = "AT";
  turnedOn() {
    console.log("Vehicle starting ...");
  }
}

// cara memanggil class adalah dengan membuat instance/turunan
// instance/turunan itu bisa dibuat berkali kali
const bike = new Vehicle();

// update data "bike"
bike.brand = "Yamaha Jupiter";
bike.transmission = "MT";

console.log(typeof bike);
console.log(bike.brand);
console.log(bike.transmission);
bike.turnedOn();

console.log(" --- CONSTRUCTOR, ENCAPSULATION --- ");
// constructor -> bertindak seperti penampung parameter di function
// encapsulation -> proses untuk mengamankan data/method sensitive (public, private)

class UserProfile {
  public username: string = "";
  public email: string = "";
  private password: string = "";

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  private savePassword() {
    console.log("Password was hashing ...");
  }

  public getInformation() {
    this.savePassword(); // kalau mau akses method private, harus dilewatkan public dulu
    console.log(`Username: ${this.username}, and email: ${email}`);
  }
}

const userJohn = new UserProfile("John Doe", "john.doe@example.com", "john123");
const userBob = new UserProfile("Bob", "bob@example.com", "bob123");

userJohn.getInformation();
userBob.getInformation();

// console.log(userJohn.email);
// console.log(userBob.email);

// -- dengan private, user tidak bisa direct ubah password
// userJohn.password = 'blablabla'

// console.log(userJohn.password); // tidak bisa diakses di luar class UserProfile
// console.log(userBob.password);

// userJohn.savePassword() Property 'savePassword' is private and only accessible within class 'UserProfile'.ts(2341)

console.log(" --- INHERITANCE/PEWARISAN --- ");
// punya konsep parents and children
// satu parents bisa punya banyak children
// untuk mengambil sifat dari parents (properties), gunakan "super"

class Character {
  public name: string = "";
  public element: string = "";
  public hp: number = 0;

  constructor(name: string, element: string, hp: number) {
    this.name = name;
    this.element = element;
    this.hp = hp;
  }
}

class Marksman extends Character {
  constructor(name: string, element: string, hp: number) {
    super(name, element, hp); // super -> untuk menghubungkan properties di parent ke children
    this.name = name;
    this.element = element;
    this.hp = hp;
  }

  public getStatistics() {
    console.log(
      `Name: ${this.name}, Element: ${this.element}, Health: ${this.hp}`,
    );
  }
}

// bisa ditambahkan sesuai kebutuhan karakter di game tsb
class Mage extends Character {}
class Assault extends Character {}

const characterA = new Marksman("Character A", "Fire", 85);
characterA.getStatistics();
