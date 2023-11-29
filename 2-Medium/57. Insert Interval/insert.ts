// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let result: number[][] = [];
  let i = 0;

  // Add all intervals that start before newInterval
  while (i < intervals.length && intervals[i][0] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // If newInterval overlaps with the last interval merged
  if (result.length && newInterval[0] <= result[result.length - 1][1]) {
    result[result.length - 1][1] = Math.max(
      result[result.length - 1][1],
      newInterval[1]
    );
  } else {
    result.push(newInterval);
  }

  // Add all intervals that start after newInterval
  while (i < intervals.length) {
    const [start, end] = intervals[i];
    if (start <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        end
      );
    } else {
      result.push(intervals[i]);
    }
    i++;
  }

  return result;
}
