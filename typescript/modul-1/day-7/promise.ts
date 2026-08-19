// PROMISE
// untuk handle kejadian success/failed

// 1. Sistem Pengecekan Stok & Pembelian Barang (Handling ketika success dan gagal)

interface Product {
  id: string;
  name: string;
  stock: number;
}

function checkStockAndBuy(product: Product, quantity: number) {
  // resolve -> parameter untuk handle kejadian success
  // reject -> parameter untuk handle kejadian gagal

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // logic pengecekan stok
      if (product.stock >= quantity) {
        resolve(`Success purchasing ${quantity} unit(s) of ${product.name}`);
      } else {
        reject(
          `Out of stock! Only ${product.stock} unit(s) left for ${product.name}`,
        );
      }
    }, 1500);
  });
}

const laptop: Product = {
  id: "LA-001",
  name: "Macbook Pro",
  stock: 2,
};

// then -> menangkap pesan dari resolve
// catch -> menangkap pesan dari reject
// finally -> kondisi akhir baik success/failed

// Example 1: Success Case
checkStockAndBuy(laptop, 1)
  .then((message) => console.log("Result Success: ", message))
  .catch((error) => console.log("Result Failed: ", error))
  .finally(() => console.log("Done ..."));

// Example 2: Failed Case
checkStockAndBuy(laptop, 5)
  .then((message) => console.log("Result Success: ", message))
  .catch((error) => console.log("Result Failed: ", error))
  .finally(() => console.log("Done ..."));
