// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits: number[]): number[] {
  let carry = 1; // this acts as the "one" we are adding

  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry === 0) {
      break;
    }

    const sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }
  return carry ? [1, ...digits] : digits;
}
