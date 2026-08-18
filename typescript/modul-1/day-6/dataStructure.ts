// linked list -> struktur data linier yang terdiri dari rantai elemen terhubung yang disebut Node.

// 1. Treasure Hunt: Berburu Harta Karun
class SinglyNode {
  value: string;
  next: SinglyNode | null = null;

  constructor(value: string) {
    this.value = value;
  }
}

class SinglyLinkedList {
  head: SinglyNode | null = null;

  addAtBeginning(clue: string) {
    const newNode = new SinglyNode(clue);
    newNode.next = this.head;
    this.head = newNode;
  }

  printAllClues() {
    let current = this.head;
    while (current !== null) {
      console.log("Clue: ", current.value);
      current = current.next; // maju ke node berikutnya
    }
  }
}

const treasureHunt = new SinglyLinkedList();
treasureHunt.addAtBeginning("Lihat di bawah meja");
treasureHunt.addAtBeginning("Buka pintu kamar");
// urutan rantai : "Buka pintu kamar" -> "Lihat di bawah meja" -> null

treasureHunt.printAllClues();

// Stack -> struktur data linier dimana elemen terakhir yang masuk (push)
// LIFO (Last in First out)
// adalah elemen pertama yang keluar (pop). Cocok dianalogikan seperti
// tumpukan piring kotor: piring yang ditaruh paling atas, dicuci duluan.

class DishStack {
  private dishes: string[] = []; // array biasa, tanpa generic

  // menaruh piring baru ke PALING ATAS tumpukan
  push(dishName: string): void {
    this.dishes.push(dishName);
    console.log(`Piring "${dishName}" ditaruh di atas tumpukan.`);
  }

  // mengambil & mencuci piring dari PALING ATAS tumpukan
  pop(): string | null {
    if (this.isEmpty()) {
      console.log("Tumpukan kosong, tidak ada piring untuk dicuci.");
      return null;
    }
    const dish = this.dishes.pop() as string;
    console.log(`Mencuci piring "${dish}".`);
    return dish;
  }

  // melihat piring paling atas TANPA mengambilnya
  peek(): string | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.dishes[this.dishes.length - 1] ?? null;
  }

  isEmpty(): boolean {
    return this.dishes.length === 0;
  }

  printStack(): void {
    console.log("Kondisi tumpukan saat ini (atas -> bawah):");
    for (let i = this.dishes.length - 1; i >= 0; i--) {
      console.log(
        `  ${i === this.dishes.length - 1 ? "[ATAS] " : "       "}${this.dishes[i]}`,
      );
    }
  }
}

// ==== simulasi penggunaan ====
const sink = new DishStack();

sink.push("Piring Nasi Goreng");
sink.push("Gelas Kopi");
sink.push("Mangkuk Sup");

sink.printStack();
// [ATAS] Mangkuk Sup
//        Gelas Kopi
//        Piring Nasi Goreng

sink.pop(); // mencuci "Mangkuk Sup" duluan, karena dia yang terakhir ditaruh
sink.pop(); // mencuci "Gelas Kopi"

sink.printStack();
//        Piring Nasi Goreng   <- cuma tersisa 1

sink.pop(); // mencuci "Piring Nasi Goreng"
sink.pop(); // tumpukan sudah kosong

// Queue -> struktur data linier dimana elemen PERTAMA yang masuk (enqueue)
// adalah elemen PERTAMA yang keluar (dequeue). Cocok dianalogikan seperti
// antrian di Mie Gacoan: yang datang duluan, dilayani duluan.

class GacoanQueue {
  private customers: string[] = []; // array biasa, tanpa generic

  // pelanggan baru masuk ke BELAKANG antrian
  enqueue(customerName: string): void {
    // pengganti this.customers.push(customerName)
    this.customers[this.customers.length] = customerName;
    console.log(`"${customerName}" masuk antrian.`);
  }

  // pelanggan PALING DEPAN dipanggil & dilayani, lalu keluar dari antrian
  dequeue(): string | null {
    if (this.isEmpty()) {
      console.log("Antrian kosong, tidak ada yang bisa dilayani.");
      return null;
    }

    const servedCustomer = this.customers[0] ?? null;

    // pengganti this.customers.shift()
    // geser semua elemen 1 langkah ke kiri (index depan dibuang)
    const newCustomers: string[] | any = [];
    for (let i = 1; i < this.customers.length; i++) {
      newCustomers[i - 1] = this.customers[i] ?? null;
    }
    this.customers = newCustomers;

    if (servedCustomer !== null) {
      console.log(`Melayani "${servedCustomer}". Silakan ambil pesanan!`);
    }
    return servedCustomer;
  }

  // melihat siapa yang PALING DEPAN, tanpa mengeluarkannya dari antrian
  peek(): string | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.customers[0] ?? null;
  }

  isEmpty(): boolean {
    return this.customers.length === 0;
  }

  printQueue(): void {
    console.log("Kondisi antrian saat ini (depan -> belakang):");
    for (let i = 0; i < this.customers.length; i++) {
      console.log(`  ${i === 0 ? "[DEPAN] " : "        "}${this.customers[i]}`);
    }
  }
}

// ==== simulasi penggunaan ====
const gacoanQueue = new GacoanQueue();

gacoanQueue.enqueue("Andi");
gacoanQueue.enqueue("Budi");
gacoanQueue.enqueue("Citra");

gacoanQueue.printQueue();
// [DEPAN] Andi
//         Budi
//         Citra

gacoanQueue.dequeue(); // "Andi" dilayani duluan, karena dia yang PERTAMA antri
gacoanQueue.printQueue();
// [DEPAN] Budi
//         Citra

gacoanQueue.dequeue(); // "Budi" dilayani
gacoanQueue.dequeue(); // "Citra" dilayani
gacoanQueue.dequeue(); // antrian sudah kosong

// -- Hash Table
interface UserAcc {
  name: string;
  role: string;
}

// kiri -> key
// kanan -> value
const userDatabase = new Map<string, UserAcc>();

userDatabase.set("userId-123", { name: "Budi", role: "Developer" });
userDatabase.set("userId-124", { name: "Siti", role: "Designer" });

console.log(userDatabase.get("userId-123"));
userDatabase.delete("userId-124");

console.log(userDatabase.has("userId-124"));
