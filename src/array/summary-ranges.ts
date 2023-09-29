/**
 * @link https://leetcode.com/problems/summary-ranges
 */
function summaryRanges(nums: number[]): string[] {
  const n = nums.length;
  if (!n) {
    return [];
  }
  const ranges: string[] = [];
  let start = 0,
    prev = nums[0],
    i = 1;
  for (i; i < n; ++i) {
    if (nums[i] != prev + 1) {
      ranges.push(start == i - 1 ? `${nums[start]}` : `${nums[start]}->${prev}`);
      start = i;
    }
    prev = nums[i];
  }
  ranges.push(start == i - 1 ? `${nums[start]}` : `${nums[start]}->${prev}`);
  return ranges;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
