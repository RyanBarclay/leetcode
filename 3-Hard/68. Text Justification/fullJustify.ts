// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// * A word is defined as a character sequence consisting of non-space characters only.
// * Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// * The input array words contains at least one word.

type testCase = {
  words: string[];
  maxWidth: number;
  result: string[];
};

const testCases: testCase[] = [
  {
    words: ["This", "is", "an", "example", "of", "text", "justification."],
    maxWidth: 16,
    result: ["This    is    an", "example  of text", "justification.  "],
  },
  {
    words: ["What", "must", "be", "acknowledgment", "shall", "be"],
    maxWidth: 16,
    result: ["What   must   be", "acknowledgment  ", "shall be        "],
  },
  {
    words: [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    maxWidth: 20,
    result: [
      "Science  is  what we",
      "understand      well",
      "enough to explain to",
      "a  computer.  Art is",
      "everything  else  we",
      "do                  ",
    ],
  },
];

function fullJustify(words: string[], maxWidth: number): string[] {
  const justifyLine = (
    line: string[],
    maxWidth: number,
    lineLength: number
  ): string => {
    const spaces = maxWidth - lineLength;
    const words = line.length;
    if (words === 1) {
      return line[0] + " ".repeat(spaces);
    }
    const spaceBetweenWords = Math.floor(spaces / (words - 1));
    const extraSpaces = spaces % (words - 1);
    let result = "";
    for (let i = 0; i < line.length; i++) {
      result += line[i];
      if (i < line.length - 1) {
        result += " ".repeat(spaceBetweenWords);
        if (i < extraSpaces) {
          result += " ";
        }
      }
    }
    return result;
  };

  const justifyLastLine = (line: string[], maxWidth: number): string => {
    let result = line.join(" ");
    result += " ".repeat(maxWidth - result.length);
    return result;
  };

  const result: string[] = [];
  let currentLine: string[] = [];
  let currentLineLength = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (currentLineLength + currentLine.length + word.length > maxWidth) {
      result.push(justifyLine(currentLine, maxWidth, currentLineLength));
      currentLine = [];
      currentLineLength = 0;
    }
    currentLine.push(word);
    currentLineLength += word.length;
  }
  result.push(justifyLastLine(currentLine, maxWidth));
  return result;
}

let testCounter = 0;
testCases.forEach((testCase) => {
  const { words, maxWidth, result } = testCase;
  console.log({ testCounter: ++testCounter });
  console.time("fullJustify");
  const output = fullJustify(words, maxWidth);
  console.timeEnd("fullJustify");
  if (JSON.stringify(output) === JSON.stringify(result)) {
    console.log("✅ Test Passed!");
  } else {
    console.log("🔴 Test Failed!");
  }
});
