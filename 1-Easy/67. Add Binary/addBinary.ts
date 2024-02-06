// Given two binary strings a and b, return their sum as a binary string.

function addBinary(a: string, b: string): string {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    if (i >= 0) {
      carry += parseInt(a[i--]);
    }
    if (j >= 0) {
      carry += parseInt(b[j--]);
    }
    result = (carry % 2) + result;
    carry = Math.floor(carry / 2);
  }
  return result;
}
