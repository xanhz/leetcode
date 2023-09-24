/**
 * @link https://leetcode.com/problems/two-sum
 */
function twoSum(nums: number[], target: number): number[] {
  const numberToIndex = new Map<number, number>();
  for (let i = 0; i < nums.length; ++i) {
    const j = numberToIndex.get(target - nums[i]);
    if (j != null) {
      return [i, j];
    }
    numberToIndex.set(nums[i], i);
  }
  return [-1, -1];
}
