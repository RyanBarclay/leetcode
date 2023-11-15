function reverse(x: number): number {
  // convert number to string
  const str = x.toString();
  // reverse string
  const reversed = str.split("").reverse().join("");
  // convert string to number
  const result = parseInt(reversed);
  // check if in range of 32-bit integer
  if (result > 2 ** 31 - 1 || result < -1 * 2 ** 31) {
    return 0;
  } else {
    return x < 0 ? result * -1 : result;
  }
}

// Local test
// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
