function longestPalindrome(s: string): string {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let j = i;
    let k = i;

    while (j >= 0 && k < s.length && s[j] === s[k]) {
      j--;
      k++;
    }

    if (k - j - 1 > result.length) {
      result = s.substring(j + 1, k);
    }

    j = i;
    k = i + 1;

    while (j >= 0 && k < s.length && s[j] === s[k]) {
      j--;
      k++;
    }

    if (k - j - 1 > result.length) {
      result = s.substring(j + 1, k);
    }
  }

  return result;
}
