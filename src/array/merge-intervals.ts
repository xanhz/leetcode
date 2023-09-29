/**
 * @link https://leetcode.com/problems/merge-intervals
 */
function merge(intervals: number[][]): number[][] {
  const n = intervals.length;
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals: number[][] = [];
  let interval = intervals[0];
  for (let i = 1; i < n; ++i) {
    if (intervals[i][0] <= interval[1]) {
      interval[0] = Math.min(interval[0], intervals[i][0]);
      interval[1] = Math.max(interval[1], intervals[i][1]);
    } else {
      mergedIntervals.push(interval);
      interval = intervals[i];
    }
  }
  mergedIntervals.push(interval);
  return mergedIntervals;
}

console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
);
