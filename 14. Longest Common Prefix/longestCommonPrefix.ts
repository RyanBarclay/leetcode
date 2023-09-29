function longestCommonPrefix(strs: string[]): string {
  let LongestPrefix = strs[0];
  strs.forEach((str) => {
    // reduce longestPrefix if not in
    let strLength = str.length;
    for (let index = LongestPrefix.length - 1; index >= 0; index--) {
      if (strLength < index + 1) {
        // if the string is smaller than the longestPrefix, cut the longestPrefix to the same size and then set the index to the new size
        LongestPrefix = LongestPrefix.slice(0, strLength);
        index = strLength - 1;
      }

      if (str[index] != LongestPrefix[index]) {
        LongestPrefix = LongestPrefix.slice(0, index);
      }
    }
  });

  return LongestPrefix;
}
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
