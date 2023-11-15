// he count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":
// "23321511"

// Given a positive integer n, return the nth term of the count-and-say sequence.

function countAndSay(n: number): string {
  if (n === 1) return "1";
  let prev = countAndSay(n - 1);
  let result = "";
  let count = 1;
  let current = prev[0];
  for (let i = 1; i < prev.length; i++) {
    if (prev[i] === current) {
      count++;
    } else {
      result += count + current;
      current = prev[i];
      count = 1;
    }
  }
  result += count + current;
  return result;
}
