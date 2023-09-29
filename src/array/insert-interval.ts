/**
 * @link https://leetcode.com/problems/insert-interval
 */
function insert(intervals: number[][], newInterval: number[]): number[][] {
  let i = 0;
  let n = intervals.length;
  let result: number[][] = [];
  while (i < n && intervals[i][0] <= newInterval[1]) {
    if (intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
    } else {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    }
    i++;
  }
  result.push(newInterval);

  while (i < n) {
    result.push(intervals[i]);
    i++;
  }
  return result;
}

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
