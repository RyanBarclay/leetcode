function myAtoi(s: string): number {
  // regex
  const regex = /^\s*([\+\-]?)(\d+).*/g;
  // match
  const match = regex.exec(s); // O(n)
  // pull out matches
  if (match == null) {
    return 0; // min 32-bit integer -1 to represent error}
  }
  const sign: number = match[1] == "-" ? -1 : +1;
  const num = match ? match[2] : "";
  // convert string to number
  const result = parseInt(num) * sign;
  // check if in range of 32-bit integer
  if (result > 2147483647) {
    return 2147483647;
  } else if (result < -2147483648) {
    return -2147483648;
  } else {
    return result;
  }
}
