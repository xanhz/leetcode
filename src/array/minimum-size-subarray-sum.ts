/**
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
  - Input: target = 7, nums = [2,3,1,2,4,3]
  - Output: 2
  - Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
  - Input: target = 4, nums = [1,4,4]
  - Output: 1

Example 3:
  - Input: target = 11, nums = [1,1,1,1,1,1,1,1]
  - Output: 0

Constraints:
  - 1 <= target <= 109
  - 1 <= nums.length <= 105
  - 1 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
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
