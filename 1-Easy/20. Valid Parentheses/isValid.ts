// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
function isValid(s: string): boolean {
  let stack: string[] = [];
  const openBrackets = ["(", "{", "["];
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      // check if the last element in the stack is the corresponding open bracket
      if (bracketMap[stack[stack.length - 1]] === s[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
