// Tipe data : PRIMITIVE & COLLECTION
// Primitive -> string, number, boolean, null, undefined, Symbol
// Collection -> array & object

let textName = "Budi" // string

let userAge = 25 // number
let price = 5.4 // number, koma didalam pemrograman direpresentasikan menjadi dot .

let isOnline = true // boolean, bisa true atau false
let uniqueId = Symbol("id") // identitas unik yang pasti berbeda

let unknownValue // undefined (variabel yang dibuat tetapi belum diberikan nilai)
let emptyData = null // null (variabel yang dibuat tetapi sengaja dikosongkan/dianggap tidak ada)

console.log(" --- PRIMITIVE DATA TYPE --- ")
console.log(textName, typeof textName)
console.log(userAge, typeof userAge)
console.log(price, typeof price)
console.log(isOnline, typeof isOnline)
console.log(uniqueId, typeof uniqueId)
console.log(unknownValue, typeof unknownValue)
console.log(emptyData, typeof emptyData)

// --- TIPE DATA COLLECTION ---

// object
let userProfile = {
    name: "Budi",
    age: 25,
    isDeveloper: true
}
// notes: untuk membaca object cukup panggil dengan dot .

// array
let techStack = ["HTML", "CSS","Javascript", 2026]
// notes: untuk membaca array harus menggunakan index, index diawali dari 0

console.log(userProfile.name)
console.log(techStack[3])