// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

function longestValidParentheses(s: string): number {
  let max = 0;
  let stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }

  return max;
}
