// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  const num1Arr = num1.split("");
  const num2Arr = num2.split("");
  const res = Array(num1Arr.length + num2Arr.length).fill(0);

  for (let i = num1Arr.length - 1; i >= 0; i--) {
    for (let j = num2Arr.length - 1; j >= 0; j--) {
      const mult = Number(num1Arr[i]) * Number(num2Arr[j]);
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mult + res[p2];

      res[p1] += Math.floor(sum / 10);
      res[p2] = sum % 10;
    }
  }

  return res.join("").replace(/^0+/, "");
}
