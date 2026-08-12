// -- FizzBuzz

function runFizzBuzz(limit: number) {
  const result: string[] = [];

  for (let i: number = 1; i <= limit; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;

    // menetapkan kondisi paling spesifik (kelipatan 15) di awal
    if (isFizz && isBuzz) {
      result.push("FizzBuzz");
    } else if (isFizz) {
      result.push("Fizz");
    } else if (isBuzz) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result.join(", ");
}

console.log(" --- Fizz Buzz Challenge --- ");
console.log(runFizzBuzz(6));
console.log(runFizzBuzz(15));

// -- BMI (Body Mass Index)

function calculateBmi(weightKg: number, heightMeters: number) {
  if (heightMeters <= 0 || weightKg <= 0) {
    throw new Error("Weight and height must be positive"); // untuk ngecut proses langsung ke error
  }

  const bmi = weightKg / (heightMeters * heightMeters);

  if (bmi < 18.5) return "less weight";
  if (bmi <= 24.9) return "ideal";
  if (bmi <= 29.9) return "overweight";
  if (bmi <= 39.9) return "very overweight";

  return "obesity";
}

console.log(" --- BMI Challenge --- ");
console.log(calculateBmi(60, 1.7));
console.log(calculateBmi(50, 2.7));
console.log(calculateBmi(75, 1.2));

console.log(" --- SPREAD OPERATOR --- ");

const arr1: number[] = [1, 1, 1, 2, 3];
const arr2: number[] = [3, 3, 4, 5, 6];
// const result = [...arr1, ...arr2]; // -- spread operator
const result = [...new Set([...arr1, ...arr2])];

console.log(result);
