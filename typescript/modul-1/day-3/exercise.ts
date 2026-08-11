// -- setup variabel
const targetNumber: number = 25;
const limitN: number = 5;
const fiboPosition: number = 15;

// 1. Odd or Even check
const isEven: boolean = targetNumber % 2 === 0;
const numberTypeResult: string = isEven ? "even number" : "odd number";

console.log(`[1] ${targetNumber} -> ${numberTypeResult}`);

// 2. Prime number check
let isPrime: boolean = targetNumber > 1;

for (let i: number = 2; i * i <= targetNumber; i++) {
  if (targetNumber % i === 0) {
    isPrime = false;
  }
}

const primeResult: string = isPrime
  ? `${targetNumber} is a prime number`
  : `${targetNumber} is not a prime number`;

console.log(`[2] ${primeResult}`);

// 3. Sum of numbers 1 to N
const totalSum: number = (limitN * (limitN + 1)) / 2;
// (5 * (5 + 1)) / 2 -> 15
// (3 * (3 + 1)) / 2 -> 6
console.log(`[3] Sum 1 to ${limitN} -> ${totalSum}`);

// 4. Factorial of a number
let factorialResult: number = 1;
let target: number = 4;

for (let i: number = 1; i <= target; i++) {
  factorialResult *= i; // factorialResult = factorialResult * i
}

console.log(`[4] ${target}! -> ${factorialResult}`);

// 4. First N Fibonacci Numbers
// -- bilangan fibonacci: 0 1 1 2 3 5 8 13 21 , dst.
// - previousValue -> untuk melacak bilangan di belakangnya
// - currentValue -> untuk melacak bilangan di depannya

// 5 + 5 = 10 -> menghasilkan nilai 10
// let value: number = 10 -> diberikan nilai 10

let previousValue: number = 0;
let currentValue: number = 1;

if (fiboPosition === 0) {
  currentValue = 0;
} else {
  for (let i: number = 2; i <= fiboPosition; i++) {
    const nextValue: number = previousValue + currentValue;
    previousValue = currentValue;
    currentValue = nextValue;
  }
}

console.log(`[5] Fibonacci position ${fiboPosition} -> ${currentValue}`);
