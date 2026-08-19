// CALLBACK
// sebuah fungsi yang dimasukkan sebagai parameter/argumen ke dalam fungsi lain
// contoh instruksi: "Tolong jalankan fungsi ini nanti kalau prosesmu sudah selesai"

// 1. Pemanggangan Kue
function bakeCake(cakeType: string, callback: (status: string) => void) {
  console.log("Prepare cake ...");
  setTimeout(() => {
    callback(`${cakeType} cake is ready!`);
  }, 10000);
}

// bakeCake(cakeType: string, callback: (status:string) => void)
// parameter cakeType -> tipe datanya string (untuk argumen string)
// parameter callback -> tipe datanya void (untuk argumen function)

// bakeCake("Chocolate", function (result) {
//   console.log("Result: ", result);
// }); // menggunakan function biasa

// 2. Pemesanan Ojek Online
function findDriver(
  passengerName: string,
  callback: (driverName: string) => void,
) {
  console.log("Finding driver nearby ...");
  setTimeout(() => {
    console.log(`${passengerName} searching driver`);
    callback("Budi");
  }, 3000);
}

// findDriver("Siti", (driver) => {
//   console.log(`Driver found: ${driver}`);
// });

// Callback Hell: kondisi dimana callback terjadi secara nesting terus menerus
function searchDriver(passenger: string, next: (driver: string) => void) {
  setTimeout(() => next("Driver Budi"), 1000);
}

function pickUpPassengers(driver: string, next: (status: string) => void) {
  setTimeout(() => next(`Picked up by ${driver}`), 1000);
}

function driveToDestination(
  destination: string,
  next: (status: string) => void,
) {
  setTimeout(() => next(`Arrived at ${destination}`), 1000);
}

function processPayment(amount: number, next: (status: string) => void) {
  setTimeout(() => next(`Rp ${amount} successfully`), 1000);
}

searchDriver("Siti", (driver) => {
  pickUpPassengers(driver, (pickupStatus) => {
    driveToDestination("Grand Indonesia", (tripStatus) => {
      processPayment(25000, (paymentStatus) => {
        console.log("Trip Completed");
      });
    });
  });
});
