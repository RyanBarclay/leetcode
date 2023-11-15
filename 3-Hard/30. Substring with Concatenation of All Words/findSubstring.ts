// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

//  * For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.

// Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

function findSubstring(s: string, words: string[]): number[] {
  const wordLength = words[0].length;
  const totalLength = words.length * wordLength;
  const result: number[] = [];

  for (let i = 0; i < s.length - totalLength + 1; i++) {
    const subString = s.substring(i, i + totalLength);
    const wordsCopy = [...words];

    for (let j = 0; j < subString.length; j += wordLength) {
      const word = subString.substring(j, j + wordLength);
      const index = wordsCopy.indexOf(word);

      if (index === -1) {
        break;
      } else {
        wordsCopy.splice(index, 1);
      }
    }

    if (wordsCopy.length === 0) {
      result.push(i);
    }
  }

  return result;
}
