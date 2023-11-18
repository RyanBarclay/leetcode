// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
function groupAnagrams(strs: string[]): string[][] {
  const map: { [key: string]: string[] } = {};
  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (map[sortedStr]) {
      map[sortedStr].push(str);
    } else {
      map[sortedStr] = [str];
    }
  }
  return Object.values(map);
}
