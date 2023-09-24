/**
 * @link https://leetcode.com/problems/single-number
 */
function singleNumber(nums: number[]): number {
  // A ^ A = 0 => B ^ A ^ A = B
  let num = 0;
  for (let i = 0; i < nums.length; ++i) {
    num ^= nums[i];
  }
  return num;
}
