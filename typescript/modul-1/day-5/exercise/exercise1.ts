// calculator data siswa

interface Student {
  name: string;
  email: string;
  age: number;
  score: number;
}

interface MetricStat {
  highest: number;
  lowest: number;
  average: number;
}

interface StudentCalculationResult {
  score: MetricStat;
  age: MetricStat;
}

/**
 * Calculates highest, lowest, and average metrics for student scores and ages.
 */
function calculateStudentData(students: Student[]): StudentCalculationResult {
  if (students.length === 0) {
    throw new Error("Student array cannot be empty.");
  }

  const scores = students.map((s) => s.score);
  const ages = students.map((s) => s.age);

  const calculateStat = (values: number[]): MetricStat => {
    const total = values.reduce((acc, curr) => acc + curr, 0);
    return {
      highest: Math.max(...values),
      lowest: Math.min(...values),
      average: Number((total / values.length).toFixed(2)),
    };
  };

  return {
    score: calculateStat(scores),
    age: calculateStat(ages),
  };
}

const students: Student[] = [
  { name: "Budi", email: "budi@example.com", age: 20, score: 85 },
  { name: "Siti", email: "siti@example.com", age: 22, score: 92 },
  { name: "Andi", email: "andi@example.com", age: 19, score: 78 },
];

const result = calculateStudentData(students);
console.log(JSON.stringify(result, null, 2));
