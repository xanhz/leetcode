/**
 * @link https://leetcode.com/problems/minimum-size-subarray-sum
 */
function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0,
    start = 0,
    n = nums.length,
    result = n + 1;
  for (let i = 0; i < nums.length; ++i) {
    sum += nums[i];
    while (sum >= target && start <= i) {
      result = Math.min(result, i - start + 1);
      sum -= nums[start];
      ++start;
    }
  }
  return result > n ? 0 : result;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
