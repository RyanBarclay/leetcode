function longestPalindrome(s: string): string {}

const isPalindrome = (s: string): boolean => {
  // reverse string
  let s_rev: string = "";
  for (let index = s.length - 1; index >= 0; index--) {
    s_rev = s_rev + s[index];
  }

  if (s_rev == s) {
    return true;
  } else {
    return false;
  }
};
