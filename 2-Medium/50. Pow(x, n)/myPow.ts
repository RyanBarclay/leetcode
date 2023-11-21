// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n === 1) return x;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);
}
