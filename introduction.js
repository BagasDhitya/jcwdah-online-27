console.log("Hello World!")
// console.log("Welcome to Javascript") -> comment code, untuk menghentikan perintah kode

// variable -> tempat untuk menyimpan/daur ulang informasi
let message
let count
message = "This is a variable"
count = 20
// console.log(message)
// console.log(count)

// var -> global variable
// let -> dynamic variable
// const -> constant variable
// {} -> untuk membatasi perintah kode

// camelCase -> gaya penulisan untuk variable

// var -> bisa diubah, diganti, dihapus dimana aja tanpa mengenal batasan
var globalVariable = "I can bleed outside the block"
var globalVariable = "I can changed"
// console.log(globalVariable)

// let -> bisa diubah, diganti, tidak bisa dideklarasi lagi dengan nama variable yang sama
let score = 10
score = 25 // jika dideklarasi lagi menggunakan let, maka akan error
console.log(score)

// const -> tidak bisa diubah, maupun diganti
const maxAttempts = 3
// const maxAttempts = 5 Cannot redeclare block-scoped variable 'maxAttempts'.ts(2451)
// maxAttempts = 10 TypeError: Assignment to constant variable.
console.log(maxAttempts)