function letterCombinations(digits: string): string[] {
  // Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
  // A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

  // 2: a, b, c
  // 3: d, e, f
  // 4: g, h, i
  // 5: j, k, l
  // 6: m, n, o
  // 7: p, q, r, s
  // 8: t, u, v
  // 9: w, x, y, z

  // Example 1:
  // Input: digits = "23"
  // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

  // Example 2:
  // Input: digits = ""
  // Output: []

  // Example 3:
  // Input: digits = "2"
  // Output: ["a","b","c"]

  // Constraints:
  // 0 <= digits.length <= 4
  // digits[i] is a digit in the range ['2', '9'].

  // Solution:
  // Create a 2D array of all the letters for each digit
  // Create a result array to hold all the combinations
  // Create a recursive function that takes in the current index and the current string
  // If the current string length is equal to the input string length
  // Push the current string into the result array
  // Otherwise
  // For each letter in the current digit
  // Recursively call the function with the next index and the current string + the current letter
  if (digits.length === 0) return [];

  const letters = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];

  const result: string[] = [];

  const recurse = (index: number, str: string) => {
    if (str.length === digits.length) {
      result.push(str);
    } else {
      for (const letter of letters[parseInt(digits[index])]) {
        recurse(index + 1, str + letter);
      }
    }
  };

  recurse(0, "");

  return result;
}
