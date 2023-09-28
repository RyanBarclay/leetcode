function romanToInt(s: string): number {
  const roman = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  const helper = (s: string, result: number): number => {
    // the idea is to make a recursive call to the helper function
    // until the string is empty
    if (s.length === 0) return result;
    for (const { value, symbol } of roman) {
      if (s.startsWith(symbol)) {
        return helper(s.slice(symbol.length), result + value);
      }
    }
    return -1; // error case
  };

  return helper(s, 0);
}
