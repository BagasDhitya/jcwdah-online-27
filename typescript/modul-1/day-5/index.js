// -- Untuk simulasi added & delete property
const myLaptop = {
  brand: "Macbook Pro",
  ramGb: 16,
  isTurnedOn: false,
  turnOn() {
    this.isTurnedOn = true; // this -> untuk menunjuk properti milik object itu sendiri
    console.log("Laptop is booting up ...");
    return true;
  }, // method -> fungsi yang ada di dalam object/class
};

myLaptop.storageGb = 256
console.log("after added storageGb in myLaptop: ",myLaptop)

delete myLaptop.isTurnedOn
console.log("after delete isTurnedOn in myLaptop: ", myLaptop)

// -- Contoh Optional Chaining
const myPhone = {
  brand: "Samsung",
  storageGb: 256,
  color: "Black",
};

// kita mencoba mencari properties yang tidak ada di myPhone
// ini khusus untuk objek bersarang, objek paling ujung tidak bisa di chaining
const cameraRes = myPhone.specs?.cameraMegaPixels;
console.log(cameraRes)

// optional chaining mencegah terjadinya crash pada nilai undefined

// contoh 2:
const myProfile = {
    name: 'John Doe',
    address: {
        street: 'Orchard Rd',
        zipCode: 112233,
        region: 'SG'
    }
}

console.log(myProfile.address?.street)
console.log(myProfile.address?.zipCode)
console.log(myProfile.address?.region)
