function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let current = "";
  for (let i = 0; i < s.length; i++) {
    const index = current.indexOf(s[i]);
    if (index !== -1) {
      current = current.slice(index + 1);
    }
    current += s[i];
    max = Math.max(max, current.length);
  }
  return max;
}

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
console.log(lengthOfLongestSubstring("abcabcbb"));

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
console.log(lengthOfLongestSubstring("bbbbb"));

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
console.log(lengthOfLongestSubstring("pwwkew"));
