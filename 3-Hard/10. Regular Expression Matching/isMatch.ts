function isMatch(s: string, p: string): boolean {
  if (p.length == 0) return s.length == 0;
  let firstMatch = s.length != 0 && (s[0] == p[0] || p[0] == ".");

  if (p.length >= 2 && p[1] == "*") {
    return (
      (firstMatch && isMatch(s.substring(1), p)) || isMatch(s, p.substring(2))
    );
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
}
// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
