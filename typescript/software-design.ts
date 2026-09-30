// DRY (Dont Repeat Yourself)
// -> satu logika cukup ditulis di satu tempat

// Contoh Bad:
function priceTshirt(price: number) {
  return price - price * 0.1;
}
function priceShoes(price: number) {
  return price - price * 0.1;
}
function priceBag(price: number) {
  return price - price * 0.1;
}

// Refactor:
const DISCOUNT = 0.1;
function applyDiscount(price: number) {
  return price - price * DISCOUNT;
}

// KISS (Keep It Simple, Stupid)
// -> pilih solusi paling sederhana yang bisa dibaca orang lain

// Contoh Bad:
// function isEven(n: number) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Refactor:
const isEven = (n: number) => (n % 2 === 0 ? true : false);

// YAGNI (You Aren't Gonna Need It)
// -> jangan membuat fitur hanya karena "siapa tahu nanti dibutuhkan"

// Contoh Bad:
// class User {
//   login(email: string, password: string) {}
//   loginWithFingerprint() {}
//   loginWithFacebook() {}
//   exportToPDF() {}
// }

// Refactor:
class User {
  login(email: string, password: string) {}
}

// S: Single Responsibility (Principle)
// -> satu class hanya punya satu alasan untuk berubah
// -> satu class tidak boleh mengurus banyak hal

// Contoh Bad:
// class Order {
//   items: any;
//   constructor(items: any) {
//     this.items = items;
//   }

//   calculateTotal() {
//     return this.items.reduce((s, i) => s + i.price, 0);
//   }

//   saveToDatabase() {
//     console.log("Menyimpan ke DB ...");
//   }

//   sendEmail() {
//     console.log("Mengirim struk belanja ke email ...");
//   }
// }

// Refactor:
class Order {
  items: any;
  constructor(items: any) {
    this.items = items;
  }

  calculateTotal() {
    return this.items.reduce((s: number, i: any) => s + i.price, 0);
  }
}

class OrderRepository {
  save(order: any) {
    console.log("Menyimpan ke DB ...");
  }
}

class EmailService {
  send(order: any) {
    console.log("Mengirim struk belanja ke email ...");
  }
}

// const order = new Order();
// const orderRepository = new OrderRepository();
// const emailService = new EmailService();

// masing masing punya tanggung jawab sendiri sendiri
// kalo ada satu error, tidak mengganggu keseluruhan

// emailService.send()

// O: Open/Closed Principle
// -> kode bisa ditambahkan, tapi tidak boleh untuk diubah
// -> menambah fitur baru tidak perlu mengutak atik kode lama yang sudah jalan (dan sudah dites)

// Contoh Bad:
// function getPrice(price: number, type: "student" | "member") {
//   if (type === "student") return price * 0.8;
//   if (type === "member") return price * 0.9;
//   return price;
// }

// Refactor:
interface Discount {
  apply(price: number): number;
}

class StudentDiscount {
  apply(price: number) {
    return price * 0.8;
  }
}

class MemberDiscount {
  apply(price: number) {
    return price * 0.9;
  }
}

class NoDiscount {
  apply(price: number) {
    return price;
  }
}

const getPrice = (price: number, discount: Discount) => discount.apply(price);

console.log(getPrice(100000, new StudentDiscount()));
console.log(getPrice(100000, new MemberDiscount()));

// Diskon baru: tambah class tanpa mengubah getPrice
class SeniorDiscount {
  apply(price: number) {
    return price * 0.7;
  }
}

console.log(getPrice(100000, new SeniorDiscount()));

// Liskov Substitution Principle
// -> class turunan harus bisa menggantikan class induknya tanpa merusak program

// Contoh Bad (penguin tidak bisa terbang, tapi "dipaksa"):
// class Bird {
//   fly() {
//     console.log("Terbang!");
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error("Penguin tidak bisa terbang");
//   }
// }

// function makeBirdFly(bird: any) {
//   bird.fly();
// }

// makeBirdFly(new Penguin());

// Refactor:
class Bird {
  eat() {
    console.log("Makan");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("Terbang");
  }
}

class Penguin extends Bird {}
class Sparrow extends FlyingBird {}

function makeBirdFly(bird: any) {
  bird.fly();
}

makeBirdFly(new Sparrow());
