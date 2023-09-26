function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = getArea(
      { height: height[left], index: left },
      { height: height[right], index: right }
    );
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

type verticalLine = { height: number; index: number };

const getArea = (line1: verticalLine, line2: verticalLine): number => {
  const width = Math.abs(line1.index - line2.index);
  const height = Math.min(line1.height, line2.height);
  return width * height;
};

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
